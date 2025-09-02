export function Footer() {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Minarco Insurance</h3>
            <p className="text-background/80 mb-4">Insurance you understand. Coverage you can trust.</p>
            <p className="text-background/80">Licensed & certified with verified 5-star reviews.</p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-background/80">
              <li>Auto Insurance</li>
              <li>Home Insurance</li>
              <li>Business Insurance</li>
              <li>Trucking Insurance</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-background/80">
              <p>Phone: (832) 406-8064</p>
              <p>Email: info@minarcoins.com</p>
              <p>16365 Park Ten PI Ste 359</p>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 pt-8 text-center text-background/60">
          <p>&copy; 2024 Minarco Insurance. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
