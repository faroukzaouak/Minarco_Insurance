import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { About } from "@/components/about"
import { Testimonials } from "@/components/testimonials"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import MainContentTransition from "@/components/main-content-transition"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <MainContentTransition>
        <Hero />
        <Services />
        <About />
        <Testimonials />
        <Contact />
      </MainContentTransition>
      <Footer />
    </div>
  )
}
