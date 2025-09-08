"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone } from "lucide-react"
import { useState } from "react"
import { EMAIL_CONFIG } from "@/lib/email-config"

interface QuoteFormProps {
  insuranceType?: string
  title?: string
}

export function QuoteForm({ insuranceType = "", title = "Request a Quote" }: QuoteFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState("")
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    insuranceType: insuranceType,
    message: ""
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage("")

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
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          insuranceType: insuranceType,
          message: ""
        })
      } else {
        setSubmitMessage("Sorry, there was an error sending your request. Please try again or call us directly.")
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitMessage("Sorry, there was an error sending your request. Please try again or call us directly.")
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
        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6 xl:space-y-8">
          {submitMessage && (
            <div className={`p-4 rounded-lg ${submitMessage.includes('Thank you') ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
              {submitMessage}
            </div>
          )}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 xl:gap-6">
            <Input 
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              placeholder="First Name" 
              required
              className="h-10 sm:h-12 xl:h-14 2xl:h-16 text-sm sm:text-base xl:text-lg px-3 xl:px-4 2xl:px-5 border-[#5b84c4]/30 focus:border-[#f98125] focus:ring-[#f98125] rounded-lg xl:rounded-xl" 
            />
            <Input 
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              placeholder="Last Name" 
              required
              className="h-10 sm:h-12 xl:h-14 2xl:h-16 text-sm sm:text-base xl:text-lg px-3 xl:px-4 2xl:px-5 border-[#5b84c4]/30 focus:border-[#f98125] focus:ring-[#f98125] rounded-lg xl:rounded-xl" 
            />
          </div>
          <Input 
            name="email"
            type="email" 
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Email Address" 
            required
            className="h-10 sm:h-12 xl:h-14 2xl:h-16 text-sm sm:text-base xl:text-lg px-3 xl:px-4 2xl:px-5 border-[#5b84c4]/30 focus:border-[#f98125] focus:ring-[#f98125] rounded-lg xl:rounded-xl" 
          />
          <Input 
            name="phone"
            type="tel" 
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="Phone Number" 
            required
            className="h-10 sm:h-12 xl:h-14 2xl:h-16 text-sm sm:text-base xl:text-lg px-3 xl:px-4 2xl:px-5 border-[#5b84c4]/30 focus:border-[#f98125] focus:ring-[#f98125] rounded-lg xl:rounded-xl" 
          />
          <select 
            name="insuranceType"
            value={formData.insuranceType}
            onChange={handleInputChange}
            className="w-full h-10 sm:h-12 xl:h-14 2xl:h-16 px-3 sm:px-4 xl:px-5 py-2.5 sm:py-3 xl:py-4 border border-[#5b84c4]/30 bg-white rounded-lg xl:rounded-xl focus:border-[#f98125] focus:ring-2 focus:ring-[#f98125]/20 transition-all text-sm sm:text-base xl:text-lg"
          >
            <option value="">Select Insurance Type</option>
            <option value="auto">Auto Insurance</option>
            <option value="home">Homeowners Insurance</option>
            <option value="business">Business Insurance</option>
            <option value="commercial">Commercial Auto Insurance</option>
            <option value="life">Life Insurance</option>
            <option value="renters">Renters Insurance</option>
            <option value="health">Health Insurance</option>
          </select>
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
            className="w-full h-12 sm:h-14 xl:h-16 2xl:h-18 text-base sm:text-lg xl:text-xl 2xl:text-2xl py-3 sm:py-4 xl:py-5 bg-gradient-to-r from-[#f98125] to-[#f19953] hover:from-[#f19953] hover:to-[#e08843] text-white shadow-lg hover:shadow-xl xl:hover:shadow-2xl transition-all duration-300 transform hover:scale-105 rounded-lg xl:rounded-xl disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Sending..." : "Get My Quote Now"}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
