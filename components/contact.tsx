"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Clock, AlertCircle, CheckCircle } from "lucide-react"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { EMAIL_CONFIG } from "@/lib/email-config"
import { BusinessHoursDisplay } from "@/components/business-hours-display"

interface FormErrors {
  firstName?: string
  lastName?: string
  email?: string
  phone?: string
  insuranceType?: string
  message?: string
}

export function Contact() {
  const router = useRouter()
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
    insuranceType: "",
    message: ""
  })

  // Mapping service names to their routes
  const serviceRoutes: { [key: string]: string } = {
    "Auto Insurance": "/services/auto",
    "Homeowners Insurance": "/services/home",
    "Business Insurance": "/services/commercial",
    "Commercial Auto": "/services/commercial",
    "Life Insurance": "/services/life",
    "Renters Insurance": "/services/renters"
  }

  const handleServiceClick = (serviceType: string) => {
    const route = serviceRoutes[serviceType]
    if (route) {
      router.push(route)
    }
  }

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

    // Handle phone number formatting and restrictions
    if (name === 'phone') {
      processedValue = formatPhoneNumber(value)
    }

    // Restrict first name and last name to letters, spaces, hyphens, and apostrophes
    if (name === 'firstName' || name === 'lastName') {
      // Only allow letters, spaces, hyphens, and apostrophes
      processedValue = value.replace(/[^a-zA-Z\s'-]/g, '')
    }

    setFormData(prev => ({
      ...prev,
      [name]: processedValue
    }))

    // Mark field as touched
    setTouched(prev => ({
      ...prev,
      [name]: true
    }))

    // Validate field and update errors
    const error = validateField(name, processedValue)
    setErrors(prev => ({
      ...prev,
      [name]: error
    }))

    // Clear submit messages when user starts typing
    if (submitMessage) {
      setSubmitMessage("")
      setSubmitStatus("")
    }
  }

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    
    // Mark field as touched
    setTouched(prev => ({
      ...prev,
      [name]: true
    }))

    // Validate field
    const error = validateField(name, value)
    setErrors(prev => ({
      ...prev,
      [name]: error
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage("")
    setSubmitStatus("")

    // Mark all fields as touched for validation display
    const allFields = ['firstName', 'lastName', 'email', 'phone', 'insuranceType']
    const touchedFields = allFields.reduce((acc, field) => ({
      ...acc,
      [field]: true
    }), {})
    setTouched(touchedFields)

    // Validate all fields
    const validationErrors: FormErrors = {}
    allFields.forEach(field => {
      const error = validateField(field, formData[field as keyof typeof formData])
      if (error) {
        validationErrors[field as keyof FormErrors] = error
      }
    })

    // Check if there are any validation errors
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      setSubmitMessage("Please fix the errors above before submitting")
      setSubmitStatus("error")
      setIsSubmitting(false)
      return
    }

    // Clear any previous errors
    setErrors({})

    try {
      // Using FormSubmit.co AJAX endpoint to avoid CORS issues
      const submitData = new FormData()
      submitData.append('name', `${formData.firstName} ${formData.lastName}`)
      submitData.append('email', formData.email)
      submitData.append('phone', formData.phone)
      submitData.append('insurance_type', formData.insuranceType)
      submitData.append('message', formData.message)
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
        setSubmitMessage("Thank you! Your quote request has been sent successfully. We'll get back to you soon!")
        setSubmitStatus("success")
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          insuranceType: "",
          message: ""
        })
        setTouched({})
        setErrors({})
      } else {
        setSubmitMessage("Sorry, there was an error sending your request. Please try again or call us directly.")
        setSubmitStatus("error")
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitMessage("Sorry, there was an error sending your request. Please try again or call us directly.")
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-white to-[#edf7f6]/30">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20 xl:mb-24 2xl:mb-28">
          <div className="inline-flex items-center px-3 sm:px-4 xl:px-5 py-1.5 sm:py-2 xl:py-2.5 bg-[#f98125]/10 rounded-full text-xs sm:text-sm xl:text-base font-medium text-[#f98125] mb-4 sm:mb-6 xl:mb-8">
            <Phone className="h-3 w-3 sm:h-4 sm:w-4 xl:h-5 xl:w-5 mr-1.5 sm:mr-2 xl:mr-2.5" />
            Get In Touch
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-[#11224d] mb-4 sm:mb-6 xl:mb-8">Ready to Get Protected?</h2>
          <p className="text-lg sm:text-xl xl:text-2xl 2xl:text-3xl text-[#193a6f] max-w-2xl xl:max-w-4xl 2xl:max-w-5xl mx-auto px-4 leading-relaxed">Contact us today for a personalized quote. We'll help you find the perfect coverage at the right price.</p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-5 gap-8 sm:gap-12 xl:gap-16 2xl:gap-20">
          <Card className="xl:col-span-2 order-2 lg:order-1 shadow-lg sm:shadow-2xl xl:shadow-3xl border-0 bg-white/90 backdrop-blur-sm">
            <CardHeader className="pb-6 sm:pb-8 xl:pb-10">
              <CardTitle className="text-xl sm:text-2xl xl:text-3xl 2xl:text-4xl text-[#11224d] flex items-center">
                <MapPin className="h-5 w-5 sm:h-6 sm:w-6 xl:h-8 xl:w-8 mr-2 sm:mr-3 xl:mr-4 text-[#f98125]" />
                Contact Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 sm:space-y-8 xl:space-y-10">
              <div className="flex items-center p-3 sm:p-4 xl:p-6 bg-[#218eec]/5 rounded-xl xl:rounded-2xl hover:bg-[#218eec]/10 transition-colors">
                <div className="p-2 sm:p-3 xl:p-4 bg-[#f98125]/10 rounded-full flex-shrink-0">
                  <Phone className="h-5 w-5 sm:h-6 sm:w-6 xl:h-7 xl:w-7 2xl:h-8 2xl:w-8 text-[#f98125]" />
                </div>
                <div className="ml-3 sm:ml-4 xl:ml-6">
                  <p className="font-semibold text-sm sm:text-base xl:text-lg 2xl:text-xl text-[#11224d]">Phone</p>
                  <a href="tel:8324769999" className="text-[#193a6f] hover:text-[#f98125] transition-colors text-base sm:text-lg xl:text-xl 2xl:text-2xl">
                    (832) 476-9999
                  </a>
                </div>
              </div>

              <div className="flex items-center p-3 sm:p-4 xl:p-6 bg-[#218eec]/5 rounded-xl xl:rounded-2xl hover:bg-[#218eec]/10 transition-colors">
                <div className="p-2 sm:p-3 xl:p-4 bg-[#218eec]/10 rounded-full flex-shrink-0">
                  <Mail className="h-5 w-5 sm:h-6 sm:w-6 xl:h-7 xl:w-7 2xl:h-8 2xl:w-8 text-[#218eec]" />
                </div>
                <div className="ml-3 sm:ml-4 xl:ml-6">
                  <p className="font-semibold text-sm sm:text-base xl:text-lg 2xl:text-xl text-[#11224d]">Email</p>
                  <a
                    href="mailto:info@minarcoins.com"
                    className="text-[#193a6f] hover:text-[#218eec] transition-colors text-sm sm:text-base xl:text-lg break-all"
                  >
                    info@minarcoins.com
                  </a>
                </div>
              </div>

              <div className="flex items-start p-3 sm:p-4 xl:p-6 bg-[#f19953]/5 rounded-xl xl:rounded-2xl hover:bg-[#f19953]/10 transition-colors">
                <div className="p-2 sm:p-3 xl:p-4 bg-[#f19953]/10 rounded-full flex-shrink-0">
                  <MapPin className="h-5 w-5 sm:h-6 sm:w-6 xl:h-7 xl:w-7 2xl:h-8 2xl:w-8 text-[#f19953]" />
                </div>
                <div className="ml-3 sm:ml-4 xl:ml-6">
                  <p className="font-semibold text-sm sm:text-base xl:text-lg 2xl:text-xl text-[#11224d]">Address</p>
                  <p className="text-[#193a6f] text-sm sm:text-base xl:text-lg">
                    16365 Park Ten Pl Ste 350
                    <br />
                    Houston, TX 77084
                  </p>
                </div>
              </div>

              <div className="flex items-start p-3 sm:p-4 xl:p-6 bg-[#5b84c4]/5 rounded-xl xl:rounded-2xl hover:bg-[#5b84c4]/10 transition-colors">
                <div className="p-2 sm:p-3 xl:p-4 bg-[#5b84c4]/10 rounded-full flex-shrink-0">
                  <Clock className="h-5 w-5 sm:h-6 sm:w-6 xl:h-7 xl:w-7 2xl:h-8 2xl:w-8 text-[#5b84c4]" />
                </div>
                <BusinessHoursDisplay 
                  className="ml-3 sm:ml-4 xl:ml-6"
                  showIcon={false}
                  textSize="text-sm sm:text-base xl:text-lg 2xl:text-xl"
                />
              </div>
            </CardContent>
          </Card>

          <Card id="quote-form" className="xl:col-span-3 order-1 lg:order-2 shadow-lg sm:shadow-2xl xl:shadow-3xl border-0 bg-gradient-to-br from-white to-[#f98125]/5">
            <CardHeader className="pb-6 sm:pb-8 xl:pb-10">
              <CardTitle className="text-xl sm:text-2xl xl:text-3xl 2xl:text-4xl text-[#11224d] flex items-center">
                <Phone className="h-5 w-5 sm:h-6 sm:w-6 xl:h-8 xl:w-8 mr-2 sm:mr-3 xl:mr-4 text-[#218eec]" />
                Request a Quote
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6 xl:space-y-8">
                {submitMessage && (
                  <div className={`p-4 rounded-lg flex items-center gap-2 ${
                    submitStatus === 'success' 
                      ? 'bg-green-50 text-green-800 border border-green-200' 
                      : 'bg-red-50 text-red-800 border border-red-200'
                  }`}>
                    {submitStatus === 'success' ? (
                      <CheckCircle className="h-5 w-5 text-green-600" />
                    ) : (
                      <AlertCircle className="h-5 w-5 text-red-600" />
                    )}
                    {submitMessage}
                  </div>
                )}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 xl:gap-6">
                  <div>
                    <Input 
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      placeholder="First Name" 
                      required
                      className={`h-10 sm:h-12 xl:h-14 2xl:h-16 text-sm sm:text-base xl:text-lg px-3 xl:px-4 2xl:px-5 border-[#5b84c4]/30 focus:border-[#f98125] focus:ring-[#f98125] rounded-lg xl:rounded-xl ${
                        touched.firstName && errors.firstName ? 'border-red-500 focus:border-red-500 focus:ring-red-200' : ''
                      }`}
                    />
                    {touched.firstName && errors.firstName && (
                      <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                        <AlertCircle className="h-4 w-4" />
                        {errors.firstName}
                      </p>
                    )}
                  </div>
                  <div>
                    <Input 
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      placeholder="Last Name" 
                      required
                      className={`h-10 sm:h-12 xl:h-14 2xl:h-16 text-sm sm:text-base xl:text-lg px-3 xl:px-4 2xl:px-5 border-[#5b84c4]/30 focus:border-[#f98125] focus:ring-[#f98125] rounded-lg xl:rounded-xl ${
                        touched.lastName && errors.lastName ? 'border-red-500 focus:border-red-500 focus:ring-red-200' : ''
                      }`}
                    />
                    {touched.lastName && errors.lastName && (
                      <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                        <AlertCircle className="h-4 w-4" />
                        {errors.lastName}
                      </p>
                    )}
                  </div>
                </div>
                <div>
                  <Input 
                    name="email"
                    type="email" 
                    value={formData.email}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    placeholder="Email Address" 
                    required
                    className={`h-10 sm:h-12 xl:h-14 2xl:h-16 text-sm sm:text-base xl:text-lg px-3 xl:px-4 2xl:px-5 border-[#5b84c4]/30 focus:border-[#f98125] focus:ring-[#f98125] rounded-lg xl:rounded-xl ${
                      touched.email && errors.email ? 'border-red-500 focus:border-red-500 focus:ring-red-200' : ''
                    }`}
                  />
                  {touched.email && errors.email && (
                    <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                      <AlertCircle className="h-4 w-4" />
                      {errors.email}
                    </p>
                  )}
                </div>
                <div>
                  <Input 
                    name="phone"
                    type="tel" 
                    value={formData.phone}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    placeholder="Phone Number" 
                    required
                    className={`h-10 sm:h-12 xl:h-14 2xl:h-16 text-sm sm:text-base xl:text-lg px-3 xl:px-4 2xl:px-5 border-[#5b84c4]/30 focus:border-[#f98125] focus:ring-[#f98125] rounded-lg xl:rounded-xl ${
                      touched.phone && errors.phone ? 'border-red-500 focus:border-red-500 focus:ring-red-200' : ''
                    }`}
                  />
                  {touched.phone && errors.phone && (
                    <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                      <AlertCircle className="h-4 w-4" />
                      {errors.phone}
                    </p>
                  )}
                </div>
                <div>
                  <select 
                    name="insuranceType"
                    value={formData.insuranceType}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    className={`w-full h-10 sm:h-12 xl:h-14 2xl:h-16 px-3 sm:px-4 xl:px-5 py-2.5 sm:py-3 xl:py-4 border border-[#5b84c4]/30 bg-white rounded-lg xl:rounded-xl focus:border-[#f98125] focus:ring-2 focus:ring-[#f98125]/20 transition-all text-sm sm:text-base xl:text-lg ${
                      touched.insuranceType && errors.insuranceType ? 'border-red-500 focus:border-red-500 focus:ring-red-200' : ''
                    }`}
                  >
                    <option value="">Select Insurance Type</option>
                    <option value="auto">Auto Insurance</option>
                    <option value="home">Homeowners Insurance</option>
                    <option value="business">Business Insurance</option>
                    <option value="commercial">Commercial Auto Insurance</option>
                    <option value="life">Life Insurance</option>
                    <option value="renters">Renters Insurance</option>
                  </select>
                  {touched.insuranceType && errors.insuranceType && (
                    <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                      <AlertCircle className="h-4 w-4" />
                      {errors.insuranceType}
                    </p>
                  )}
                </div>
                <Textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us about your coverage needs and we'll provide a customized quote..." 
                  rows={4} 
                  className="min-h-[100px] xl:min-h-[120px] 2xl:min-h-[140px] text-sm sm:text-base xl:text-lg px-3 xl:px-4 2xl:px-5 py-3 xl:py-4 border-[#5b84c4]/30 focus:border-[#f98125] focus:ring-[#f98125] resize-none rounded-lg xl:rounded-xl" 
                />
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-12 sm:h-14 xl:h-16 2xl:h-18 text-base sm:text-lg xl:text-xl 2xl:text-2xl py-3 sm:py-4 xl:py-5 bg-gradient-to-r from-[#f98125] to-[#f19953] hover:from-[#e08843] hover:to-[#d97a3c] text-white shadow-lg hover:shadow-xl xl:hover:shadow-2xl transition-all duration-300 rounded-lg xl:rounded-xl disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Get My Quote Now"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 sm:mt-16 lg:mt-20 xl:mt-24 2xl:mt-28 text-center">
          <h3 className="text-2xl sm:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-[#11224d] mb-8 sm:mb-12 xl:mb-16">Find the Right Coverage for You</h3>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 xl:gap-6">
            {["Auto Insurance", "Homeowners Insurance", "Business Insurance", "Commercial Auto", "Life Insurance", "Renters Insurance"].map((type) => (
              <Button
                key={type}
                variant="outline"
                onClick={() => handleServiceClick(type)}
                className="px-3 sm:px-6 xl:px-8 py-2 sm:py-3 xl:py-4 text-xs sm:text-base xl:text-lg bg-white border-2 border-[#218eec] text-[#218eec] hover:bg-[#218eec] hover:text-white hover:border-[#1a7bc4] transition-all duration-300 shadow-md hover:shadow-lg xl:hover:shadow-xl rounded-lg xl:rounded-xl cursor-pointer"
              >
                {type}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
