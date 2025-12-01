import { useState } from 'react';
import Image from 'next/image';
import { ArrowRight, Menu, X } from 'lucide-react';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/60 bg-white/80 backdrop-blur-md supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto max-w-7xl px-4 md:px-6 h-20 flex items-center justify-between">

        {/* LOGO - Added negative margin (-ml-4 and md:-ml-8) here */}
        <div className="flex items-center gap-2 group cursor-pointer select-none -ml-8 md:-ml-16">
          <div className="relative transition-transform duration-300 group-hover:scale-105">
            <Image
              src="/logo2.png"
              alt="Logo"
              width={300}
              height={300}
              // REMOVED 'invert' - Now shows original color
              className="object-contain mt-7" 
            />
          </div>
        </div>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-2">
          {["Workflow", "Calculator"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="px-4 py-2 text-sm font-semibold text-slate-600 rounded-full hover:text-sky-600 hover:bg-sky-50 transition-all duration-300"
            >
              {item}
            </a>
          ))}
          <button className="px-4 py-2 text-sm font-semibold text-slate-600 rounded-full hover:text-sky-600 hover:bg-sky-50 transition-all duration-300">
            About Us
          </button>
        </nav>

        {/* ACTIONS */}
        <div className="flex items-center gap-4">
          <button className="group hidden md:flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-sky-600 to-blue-600 text-white text-sm font-bold shadow-lg shadow-sky-500/20 hover:shadow-sky-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300">
            Get Started
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-full transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div 
        className={`md:hidden absolute left-0 w-full bg-white/95 backdrop-blur-xl border-b border-slate-100 shadow-xl transition-all duration-300 ease-in-out overflow-hidden ${
          mobileOpen ? "max-h-[400px] opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-2"
        }`}
      >
        <div className="px-6 py-8 flex flex-col gap-6 text-center">
          {["Workflow", "Calculator"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setMobileOpen(false)}
              className="text-lg font-semibold text-slate-600 hover:text-sky-600 transition-colors"
            >
              {item}
            </a>
          ))}
          <button 
            onClick={() => setMobileOpen(false)}
            className="text-lg font-semibold text-slate-600 hover:text-sky-600 transition-colors"
          >
            About Us
          </button>
          
          <hr className="border-slate-100" />
          
          <button className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-sky-600 text-white font-bold active:bg-sky-700 transition-colors">
            Get Started <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </header>
  );
}