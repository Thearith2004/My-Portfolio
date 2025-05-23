function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="text-lg font-bold">
              <span className="text-emerald-400">My</span>
              <span className="text-white">Portfolio</span>
            </div>
          </div>

          <div className="text-slate-400 text-sm">&copy; {currentYear} Yun Moun Sothearith. All rights reserved.</div>

          <div className="mt-4 md:mt-0">
            <a href="#home" className="text-slate-400 hover:text-emerald-400 transition-colors">
              Back to Top
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
