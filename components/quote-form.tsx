import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone } from "lucide-react"

interface QuoteFormProps {
  insuranceType?: string
  title?: string
}

export function QuoteForm({ insuranceType = "", title = "Request a Quote" }: QuoteFormProps) {
  return (
    <Card id="quote-form" className="shadow-lg sm:shadow-2xl xl:shadow-3xl border-0 bg-gradient-to-br from-white to-[#f98125]/5">
      <CardHeader className="pb-6 sm:pb-8 xl:pb-10">
        <CardTitle className="text-xl sm:text-2xl xl:text-3xl 2xl:text-4xl text-[#11224d] flex items-center">
          <Phone className="h-5 w-5 sm:h-6 sm:w-6 xl:h-8 xl:w-8 mr-2 sm:mr-3 xl:mr-4 text-[#218eec]" />
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form className="space-y-4 sm:space-y-6 xl:space-y-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 xl:gap-6">
            <Input 
              placeholder="First Name" 
              className="h-10 sm:h-12 xl:h-14 2xl:h-16 text-sm sm:text-base xl:text-lg px-3 xl:px-4 2xl:px-5 border-[#5b84c4]/30 focus:border-[#f98125] focus:ring-[#f98125] rounded-lg xl:rounded-xl" 
            />
            <Input 
              placeholder="Last Name" 
              className="h-10 sm:h-12 xl:h-14 2xl:h-16 text-sm sm:text-base xl:text-lg px-3 xl:px-4 2xl:px-5 border-[#5b84c4]/30 focus:border-[#f98125] focus:ring-[#f98125] rounded-lg xl:rounded-xl" 
            />
          </div>
          <Input 
            type="email" 
            placeholder="Email Address" 
            className="h-10 sm:h-12 xl:h-14 2xl:h-16 text-sm sm:text-base xl:text-lg px-3 xl:px-4 2xl:px-5 border-[#5b84c4]/30 focus:border-[#f98125] focus:ring-[#f98125] rounded-lg xl:rounded-xl" 
          />
          <Input 
            type="tel" 
            placeholder="Phone Number" 
            className="h-10 sm:h-12 xl:h-14 2xl:h-16 text-sm sm:text-base xl:text-lg px-3 xl:px-4 2xl:px-5 border-[#5b84c4]/30 focus:border-[#f98125] focus:ring-[#f98125] rounded-lg xl:rounded-xl" 
          />
          <select 
            className="w-full h-10 sm:h-12 xl:h-14 2xl:h-16 px-3 sm:px-4 xl:px-5 py-2.5 sm:py-3 xl:py-4 border border-[#5b84c4]/30 bg-white rounded-lg xl:rounded-xl focus:border-[#f98125] focus:ring-2 focus:ring-[#f98125]/20 transition-all text-sm sm:text-base xl:text-lg"
            defaultValue={insuranceType}
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
            placeholder="Tell us about your coverage needs and we'll provide a customized quote..." 
            rows={4} 
            className="min-h-[100px] xl:min-h-[120px] 2xl:min-h-[140px] text-sm sm:text-base xl:text-lg px-3 xl:px-4 2xl:px-5 py-3 xl:py-4 border-[#5b84c4]/30 focus:border-[#f98125] focus:ring-[#f98125] resize-none rounded-lg xl:rounded-xl" 
          />
          <Button
            type="submit"
            className="w-full h-12 sm:h-14 xl:h-16 2xl:h-18 text-base sm:text-lg xl:text-xl 2xl:text-2xl py-3 sm:py-4 xl:py-5 bg-gradient-to-r from-[#f98125] to-[#f19953] hover:from-[#f19953] hover:to-[#e08843] text-white shadow-lg hover:shadow-xl xl:hover:shadow-2xl transition-all duration-300 transform hover:scale-105 rounded-lg xl:rounded-xl"
          >
            Get My Quote Now
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
