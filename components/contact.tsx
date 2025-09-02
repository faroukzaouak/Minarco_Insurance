import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Get Started Favorite Insurance</h2>
          <p className="text-xl text-muted-foreground">Ready to get started? Contact us for a fast, honest quote.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-[oklch(var(--orange-accent))] mr-3" />
                <div>
                  <p className="font-semibold">Phone</p>
                  <a href="tel:8324769999" className="text-muted-foreground hover:text-[oklch(var(--orange-accent))]">
                    (832) 476-9999
                  </a>
                </div>
              </div>

              <div className="flex items-center">
                <Mail className="h-5 w-5 text-[oklch(var(--orange-accent))] mr-3" />
                <div>
                  <p className="font-semibold">Email</p>
                  <a
                    href="mailto:contact@minarcoinsurance.com"
                    className="text-muted-foreground hover:text-[oklch(var(--orange-accent))]"
                  >
                    contact@minarcoinsurance.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-[oklch(var(--orange-accent))] mr-3 mt-1" />
                <div>
                  <p className="font-semibold">Address</p>
                  <p className="text-muted-foreground">
                    11959 Katy Fwy Ste 500
                    <br />
                    Houston, TX 77079
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <Clock className="h-5 w-5 text-[oklch(var(--orange-accent))] mr-3 mt-1" />
                <div>
                  <p className="font-semibold">Business Hours</p>
                  <p className="text-muted-foreground">
                    Monday - Friday: 8 AM - 9 PM
                    <br />
                    Saturday: 8 AM - 12 PM
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Request a Quote</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <Input placeholder="First Name" />
                  <Input placeholder="Last Name" />
                </div>
                <Input type="email" placeholder="Email Address" />
                <Input type="tel" placeholder="Phone Number" />
                <select className="w-full px-3 py-2 border border-input bg-background rounded-md">
                  <option value="">Select Insurance Type</option>
                  <option value="auto">Auto Insurance</option>
                  <option value="home">Home Insurance</option>
                  <option value="business">Business Insurance</option>
                  <option value="commercial">Commercial Auto</option>
                  <option value="life">Life Insurance</option>
                  <option value="renters">Renters Insurance</option>
                </select>
                <Textarea placeholder="Tell us about your insurance needs..." rows={4} />
                <Button
                  type="submit"
                  className="w-full bg-[oklch(var(--orange-accent))] hover:bg-[oklch(var(--orange-accent))]/90 text-white"
                >
                  Get My Quote
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-8">Choose Your Insurance Type</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              variant="outline"
              className="bg-[oklch(var(--orange-accent))] text-white hover:bg-[oklch(var(--orange-accent))]/90 border-[oklch(var(--orange-accent))]"
            >
              Auto Insurance
            </Button>
            <Button
              variant="outline"
              className="bg-[oklch(var(--orange-accent))] text-white hover:bg-[oklch(var(--orange-accent))]/90 border-[oklch(var(--orange-accent))]"
            >
              Home Insurance
            </Button>
            <Button
              variant="outline"
              className="bg-[oklch(var(--orange-accent))] text-white hover:bg-[oklch(var(--orange-accent))]/90 border-[oklch(var(--orange-accent))]"
            >
              Business Insurance
            </Button>
            <Button
              variant="outline"
              className="bg-[oklch(var(--orange-accent))] text-white hover:bg-[oklch(var(--orange-accent))]/90 border-[oklch(var(--orange-accent))]"
            >
              Commercial Auto
            </Button>
            <Button
              variant="outline"
              className="bg-[oklch(var(--orange-accent))] text-white hover:bg-[oklch(var(--orange-accent))]/90 border-[oklch(var(--orange-accent))]"
            >
              Life Insurance
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
