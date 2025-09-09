"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, AlertCircle, CheckCircle } from "lucide-react"
import { useState } from "react"
import { EMAIL_CONFIG } from "@/lib/email-config"

interface QuoteFormProps {
  insuranceType?: string
  title?: string
}

interface FormErrors {
  firstName?: string
  lastName?: string
  email?: string
  phone?: string
  insuranceType?: string
  message?: string
}

export function QuoteForm({ insuranceType = "", title = "Request a Quote" }: QuoteFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState("")
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | ''>("")
  const [errors, setErrors] = useState<FormErrors>({})
  const [touched, setTouched] = useState<Record<string, boolean>>({})
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    insuranceType: insuranceType,
    message: ""
  })

  // Validation functions
  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    return emailRegex.test(email.trim())
  }

  const validatePhone = (phone: string): boolean => {
    // Remove all non-digit characters
    const digitsOnly = phone.replace(/\D/g, '')
    // Must be 10-15 digits
    return digitsOnly.length >= 10 && digitsOnly.length <= 15
  }

  const formatPhoneNumber = (value: string): string => {
    // Remove all non-digit characters
    const digitsOnly = value.replace(/\D/g, '')
    
    // Format as (XXX) XXX-XXXX for US numbers
    if (digitsOnly.length <= 3) {
      return digitsOnly
    } else if (digitsOnly.length <= 6) {
      return `(${digitsOnly.slice(0, 3)}) ${digitsOnly.slice(3)}`
    } else if (digitsOnly.length <= 10) {
      return `(${digitsOnly.slice(0, 3)}) ${digitsOnly.slice(3, 6)}-${digitsOnly.slice(6)}`
    } else {
      // For numbers longer than 10 digits, include country code
      return `+${digitsOnly.slice(0, digitsOnly.length - 10)} (${digitsOnly.slice(-10, -7)}) ${digitsOnly.slice(-7, -4)}-${digitsOnly.slice(-4)}`
    }
  }

  const validateField = (name: string, value: string): string => {
    switch (name) {
      case 'firstName':
        if (!value.trim()) return 'First name is required'
        if (value.trim().length < 2) return 'First name must be at least 2 characters long'
        if (!/^[a-zA-Z\s'-]+$/.test(value.trim())) return 'First name can only contain letters, spaces, hyphens, and apostrophes'
        return ''
      case 'lastName':
        if (!value.trim()) return 'Last name is required'
        if (value.trim().length < 2) return 'Last name must be at least 2 characters long'
        if (!/^[a-zA-Z\s'-]+$/.test(value.trim())) return 'Last name can only contain letters, spaces, hyphens, and apostrophes'
        return ''
      case 'email':
        if (!value.trim()) return 'Email address is required'
        if (!validateEmail(value)) return 'Please enter a valid email address (e.g., example@email.com)'
        return ''
      case 'phone':
        if (!value.trim()) return 'Phone number is required'
        const digitsOnly = value.replace(/\D/g, '')
        if (digitsOnly.length < 10) return 'Phone number must be at least 10 digits'
        if (digitsOnly.length > 15) return 'Phone number cannot exceed 15 digits'
        if (!validatePhone(value)) return 'Please enter a valid phone number'
        return ''
      case 'insuranceType':
        if (!value) return 'Please select an insurance type from the dropdown'
        return ''
      default:
        return ''
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    
    let processedValue = value

    // Special handling for phone number - only allow digits and format automatically
    if (name === 'phone') {
      // Only allow digits, spaces, parentheses, and hyphens during typing
      if (!/^[\d\s\(\)\-\+]*$/.test(value)) {
        return // Don't update if invalid characters
      }
      processedValue = formatPhoneNumber(value)
    }

    // Special handling for names - only allow letters, spaces, hyphens, and apostrophes
    if (name === 'firstName' || name === 'lastName') {
      if (value && !/^[a-zA-Z\s'-]*$/.test(value)) {
        return // Don't update if invalid characters
      }
    }

    setFormData(prev => ({
      ...prev,
      [name]: processedValue
    }))

    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }

    // Clear submit message when user makes changes
    if (submitMessage) {
      setSubmitMessage("")
      setSubmitStatus("")
    }
  }

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setTouched(prev => ({ ...prev, [name]: true }))
    
    const error = validateField(name, value)
    setErrors(prev => ({
      ...prev,
      [name]: error
    }))
  }

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}
    let isValid = true
    const missingFields: string[] = []

    // Check for missing required fields first
    if (!formData.firstName.trim()) {
      missingFields.push('First Name')
      newErrors.firstName = 'First name is required'
      isValid = false
    }
    
    if (!formData.lastName.trim()) {
      missingFields.push('Last Name')
      newErrors.lastName = 'Last name is required'
      isValid = false
    }
    
    if (!formData.email.trim()) {
      missingFields.push('Email Address')
      newErrors.email = 'Email address is required'
      isValid = false
    }
    
    if (!formData.phone.trim()) {
      missingFields.push('Phone Number')
      newErrors.phone = 'Phone number is required'
      isValid = false
    }
    
    if (!formData.insuranceType) {
      missingFields.push('Insurance Type')
      newErrors.insuranceType = 'Please select an insurance type'
      isValid = false
    }

    // If fields are missing, show a summary error
    if (missingFields.length > 0) {
      const missingFieldsText = missingFields.length === 1 
        ? `${missingFields[0]} is required` 
        : `The following fields are required: ${missingFields.join(', ')}`
      
      setSubmitMessage(`Please complete all required fields. ${missingFieldsText}.`)
      setSubmitStatus("error")
    } else {
      // Validate field formats if all fields are present
      Object.keys(formData).forEach(key => {
        if (key !== 'message') { // message is optional
          const error = validateField(key, formData[key as keyof typeof formData])
          if (error) {
            newErrors[key as keyof FormErrors] = error
            isValid = false
          }
        }
      })

      // If there are format errors, show format-specific message
      if (!isValid) {
        setSubmitMessage("Please fix the errors highlighted in red below.")
        setSubmitStatus("error")
      }
    }

    setErrors(newErrors)
    setTouched({
      firstName: true,
      lastName: true,
      email: true,
      phone: true,
      insuranceType: true,
      message: true
    })
    
    return isValid
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Validate form before submission
    if (!validateForm()) {
      setSubmitMessage("Please fix the errors above before submitting.")
      setSubmitStatus("error")
      return
    }

    setIsSubmitting(true)
    setSubmitMessage("")
    setSubmitStatus("")

    try {
      // Using FormSubmit.co AJAX endpoint to avoid CORS issues
      const submitData = new FormData()
      submitData.append('name', `${formData.firstName} ${formData.lastName}`)
      submitData.append('email', formData.email)
      submitData.append('phone', formData.phone)
      submitData.append('insurance_type', formData.insuranceType)
      submitData.append('message', formData.message || 'No additional message provided.')
      submitData.append('_subject', EMAIL_CONFIG.subject)
      submitData.append('_captcha', EMAIL_CONFIG.formSubmit.captcha.toString())
      submitData.append('_template', EMAIL_CONFIG.formSubmit.template)

      const response = await fetch(`https://formsubmit.co/ajax/${EMAIL_CONFIG.recipient}`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json'
        },
        body: submitData
      })

      const result = await response.json()

      if (response.ok && result.success) {
        setSubmitMessage("Thank you! Your quote request has been sent successfully. We'll get back to you within 24 hours!")
        setSubmitStatus("success")
        // Reset form
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          insuranceType: insuranceType,
          message: ""
        })
        setErrors({})
        setTouched({})
      } else {
        setSubmitMessage("Sorry, there was an error sending your request. Please try again or call us directly at (832) 476-9999.")
        setSubmitStatus("error")
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitMessage("Sorry, there was an error sending your request. Please check your internet connection and try again.")
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Card id="quote-form" className="shadow-lg sm:shadow-2xl xl:shadow-3xl border-0 bg-gradient-to-br from-white to-[#f98125]/5">
      <CardHeader className="pb-6 sm:pb-8 xl:pb-10">
        <CardTitle className="text-xl sm:text-2xl xl:text-3xl 2xl:text-4xl text-[#11224d] flex items-center">
          <Phone className="h-5 w-5 sm:h-6 sm:w-6 xl:h-8 xl:w-8 mr-2 sm:mr-3 xl:mr-4 text-[#218eec]" />
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6 xl:space-y-8" noValidate>
          {submitMessage && (
            <div className={`p-4 rounded-lg flex items-center gap-3 ${
              submitStatus === 'success' 
                ? 'bg-green-50 border border-green-200 text-green-800' 
                : 'bg-red-50 border border-red-200 text-red-800'
            }`}>
              {submitStatus === 'success' ? (
                <CheckCircle className="h-5 w-5 flex-shrink-0" />
              ) : (
                <AlertCircle className="h-5 w-5 flex-shrink-0" />
              )}
              <span className="text-sm font-medium">{submitMessage}</span>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 xl:gap-6">
            <div className="space-y-1">
              <Input 
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                onBlur={handleBlur}
                placeholder="First Name *" 
                className={`h-10 sm:h-12 xl:h-14 2xl:h-16 text-sm sm:text-base xl:text-lg px-3 xl:px-4 2xl:px-5 rounded-lg xl:rounded-xl transition-colors ${
                  errors.firstName 
                    ? 'border-red-300 focus:border-red-500 focus:ring-red-500' 
                    : touched.firstName && !errors.firstName
                    ? 'border-green-300 focus:border-green-500 focus:ring-green-500'
                    : 'border-[#5b84c4]/30 focus:border-[#f98125] focus:ring-[#f98125]'
                }`}
              />
              {errors.firstName && (
                <div className="flex items-center gap-1 text-red-600 text-xs">
                  <AlertCircle className="h-3 w-3" />
                  <span>{errors.firstName}</span>
                </div>
              )}
            </div>

            <div className="space-y-1">
              <Input 
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                onBlur={handleBlur}
                placeholder="Last Name *" 
                className={`h-10 sm:h-12 xl:h-14 2xl:h-16 text-sm sm:text-base xl:text-lg px-3 xl:px-4 2xl:px-5 rounded-lg xl:rounded-xl transition-colors ${
                  errors.lastName 
                    ? 'border-red-300 focus:border-red-500 focus:ring-red-500' 
                    : touched.lastName && !errors.lastName
                    ? 'border-green-300 focus:border-green-500 focus:ring-green-500'
                    : 'border-[#5b84c4]/30 focus:border-[#f98125] focus:ring-[#f98125]'
                }`}
              />
              {errors.lastName && (
                <div className="flex items-center gap-1 text-red-600 text-xs">
                  <AlertCircle className="h-3 w-3" />
                  <span>{errors.lastName}</span>
                </div>
              )}
            </div>
          </div>

          <div className="space-y-1">
            <Input 
              name="email"
              type="email" 
              value={formData.email}
              onChange={handleInputChange}
              onBlur={handleBlur}
              placeholder="Email Address * (e.g., john@example.com)" 
              autoComplete="email"
              className={`h-10 sm:h-12 xl:h-14 2xl:h-16 text-sm sm:text-base xl:text-lg px-3 xl:px-4 2xl:px-5 rounded-lg xl:rounded-xl transition-colors ${
                errors.email 
                  ? 'border-red-300 focus:border-red-500 focus:ring-red-500' 
                  : touched.email && !errors.email && formData.email
                  ? 'border-green-300 focus:border-green-500 focus:ring-green-500'
                  : 'border-[#5b84c4]/30 focus:border-[#f98125] focus:ring-[#f98125]'
              }`}
            />
            {errors.email && (
              <div className="flex items-center gap-1 text-red-600 text-xs">
                <AlertCircle className="h-3 w-3" />
                <span>{errors.email}</span>
              </div>
            )}
            {touched.email && !errors.email && formData.email && (
              <div className="flex items-center gap-1 text-green-600 text-xs">
                <CheckCircle className="h-3 w-3" />
                <span>Valid email address</span>
              </div>
            )}
          </div>

          <div className="space-y-1">
            <Input 
              name="phone"
              type="tel" 
              value={formData.phone}
              onChange={handleInputChange}
              onBlur={handleBlur}
              placeholder="Phone Number * (e.g., 832-476-9999)" 
              maxLength={18} // Formatted phone number max length
              inputMode="numeric"
              autoComplete="tel"
              className={`h-10 sm:h-12 xl:h-14 2xl:h-16 text-sm sm:text-base xl:text-lg px-3 xl:px-4 2xl:px-5 rounded-lg xl:rounded-xl transition-colors ${
                errors.phone 
                  ? 'border-red-300 focus:border-red-500 focus:ring-red-500' 
                  : touched.phone && !errors.phone
                  ? 'border-green-300 focus:border-green-500 focus:ring-green-500'
                  : 'border-[#5b84c4]/30 focus:border-[#f98125] focus:ring-[#f98125]'
              }`}
            />
            {errors.phone && (
              <div className="flex items-center gap-1 text-red-600 text-xs">
                <AlertCircle className="h-3 w-3" />
                <span>{errors.phone}</span>
              </div>
            )}
            {touched.phone && !errors.phone && formData.phone && (
              <div className="flex items-center gap-1 text-green-600 text-xs">
                <CheckCircle className="h-3 w-3" />
                <span>Valid phone number</span>
              </div>
            )}
          </div>

          <div className="space-y-1">
            <select 
              name="insuranceType"
              value={formData.insuranceType}
              onChange={handleInputChange}
              onBlur={handleBlur}
              className={`w-full h-10 sm:h-12 xl:h-14 2xl:h-16 px-3 sm:px-4 xl:px-5 py-2.5 sm:py-3 xl:py-4 bg-white rounded-lg xl:rounded-xl focus:ring-2 focus:ring-opacity-20 transition-all text-sm sm:text-base xl:text-lg ${
                errors.insuranceType 
                  ? 'border border-red-300 focus:border-red-500 focus:ring-red-500' 
                  : touched.insuranceType && !errors.insuranceType
                  ? 'border border-green-300 focus:border-green-500 focus:ring-green-500'
                  : 'border border-[#5b84c4]/30 focus:border-[#f98125] focus:ring-[#f98125]'
              }`}
            >
              <option value="">Select Insurance Type *</option>
              <option value="auto">Auto Insurance</option>
              <option value="home">Homeowners Insurance</option>
              <option value="business">Business Insurance</option>
              <option value="commercial">Commercial Auto Insurance</option>
              <option value="trucking">Trucking Insurance</option>
              <option value="life">Life Insurance</option>
              <option value="renters">Renters Insurance</option>
              <option value="health">Health Insurance</option>
            </select>
            {errors.insuranceType && (
              <div className="flex items-center gap-1 text-red-600 text-xs">
                <AlertCircle className="h-3 w-3" />
                <span>{errors.insuranceType}</span>
              </div>
            )}
          </div>

          <div className="space-y-1">
            <Textarea 
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              onBlur={handleBlur}
              placeholder="Tell us about your coverage needs, current insurance, or any specific questions you have..." 
              rows={4} 
              className="min-h-[100px] xl:min-h-[120px] 2xl:min-h-[140px] text-sm sm:text-base xl:text-lg px-3 xl:px-4 2xl:px-5 py-3 xl:py-4 border-[#5b84c4]/30 focus:border-[#f98125] focus:ring-[#f98125] resize-none rounded-lg xl:rounded-xl transition-colors" 
            />
            <p className="text-xs text-gray-500">Optional - but helps us provide a more accurate quote</p>
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full h-12 sm:h-14 xl:h-16 2xl:h-18 text-base sm:text-lg xl:text-xl 2xl:text-2xl py-3 sm:py-4 xl:py-5 bg-gradient-to-r from-[#f98125] to-[#f19953] hover:from-[#f19953] hover:to-[#e08843] text-white shadow-lg hover:shadow-xl xl:hover:shadow-2xl transition-all duration-300 transform hover:scale-105 rounded-lg xl:rounded-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
          >
            {isSubmitting ? (
              <div className="flex items-center justify-center gap-2">
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                <span>Sending Quote Request...</span>
              </div>
            ) : (
              "Get My Free Quote Now"
            )}
          </Button>

          <p className="text-xs text-center text-gray-500">
            * Required fields. We respect your privacy and will never share your information.
          </p>
        </form>
      </CardContent>
    </Card>
  )
}
