import { Button } from "@/components/ui/button"
import { Shield, Clock, Users } from "lucide-react"

export function Hero() {
  return (
    <section className="bg-gradient-to-br from-[#5b84c4]/10 to-[#2c599d]/10 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl lg:text-6xl font-bold text-[#11224d] mb-6 text-balance">
              We're a Trusted and Professional Insurance Company
            </h1>
            <p className="text-xl text-[#193a6f] mb-8 text-pretty">
              At Minarco Insurance Agency, our mission is to provide peace of mind and financial security to individuals
              and families through personalized and reliable insurance solutions. We help you build and grow your
              business with comprehensive coverage that fits your unique needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button size="lg" className="text-lg px-8 bg-[#f98125] hover:bg-[#f19953] text-white">
                Get Your Quote Today
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 bg-transparent border-[#f19953] text-[#f19953] hover:bg-[#218eec] hover:text-white hover:border-[#218eec]"
              >
                Call (832) 476-9999
              </Button>
            </div>
            <div className="flex flex-wrap gap-6 text-sm text-[#2c599d]">
              <div className="flex items-center">
                <Shield className="h-5 w-5 mr-2 text-[#f98125]" />
                2+ Years Experience
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 mr-2 text-[#f98125]" />
                Fast & Easy Process
              </div>
              <div className="flex items-center">
                <Users className="h-5 w-5 mr-2 text-[#f98125]" />
                68+ Satisfied Customers
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src="/happy-family-insurance.png"
              alt="Happy family protected by insurance"
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
