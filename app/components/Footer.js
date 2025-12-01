import Image from 'next/image';
import { FaWhatsapp, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-8 border-t border-slate-900">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">
          
          {/* Column 1: Brand, Description, Socials (Takes up 50% on desktop) */}
          <div className="md:col-span-6 lg:col-span-5 space-y-6">
            <div className="relative">
              {/* Responsive Logo Size: w-48 on mobile, w-56 on desktop */}
<Image
  src="/logo2.png"
  alt="Logo"
  width={250}
  height={250}
  className="object-contain w-48 md:w-56 h-auto filter invert saturate-0 brightness-200"
 />


            </div>
            
            <p className="max-w-sm text-slate-400 leading-relaxed text-sm md:text-base">
              The modern operating system for solar installation. We connect homeowners with verified installers through a transparent, data-driven platform.
            </p>

            {/* Social Icons - Aligned and Consistent */}
            <div className="flex gap-3">
              {[
                { Icon: FaWhatsapp, bg: 'bg-green-600', hover: 'hover:bg-green-500' },
                { Icon: FaFacebook, bg: 'bg-blue-600', hover: 'hover:bg-blue-500' },
                { Icon: FaInstagram, bg: 'bg-pink-600', hover: 'hover:bg-pink-500' },
                { Icon: FaTwitter, bg: 'bg-sky-500', hover: 'hover:bg-sky-400' },
              ].map(({ Icon, bg, hover }, index) => (
                <div 
                  key={index} 
                  className={`w-10 h-10 ${bg} ${hover} rounded-full text-white flex items-center justify-center transition-all duration-300 hover:-translate-y-1 cursor-pointer shadow-lg shadow-black/20`}
                >
                  <Icon className="text-lg" />
                </div>
              ))}
            </div>
          </div>

          {/* Spacer for Desktop Layout */}
          <div className="hidden lg:block lg:col-span-3"></div>

          {/* Links Section - Uses grid-cols-2 on mobile to save space */}
          <div className="md:col-span-6 lg:col-span-4 grid grid-cols-2 gap-8">
            
            {/* Platform Links */}
            <div>
              <h4 className="font-bold text-white mb-6 text-lg">Platform</h4>
              <ul className="space-y-4 text-sm text-slate-400">
                {['How it Works', 'Pricing', 'Installers', 'Success Stories'].map((item) => (
                  <li key={item}>
                    <a href="#" className="hover:text-sky-400 transition-colors block">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Links */}
            <div>
              <h4 className="font-bold text-white mb-6 text-lg">Legal</h4>
              <ul className="space-y-4 text-sm text-slate-400">
                {['Privacy Policy', 'Terms of Service', 'Escrow Agreement'].map((item) => (
                  <li key={item}>
                    <a href="#" className="hover:text-sky-400 transition-colors block">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>&copy; 2025 Rezillion Energy. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="hover:text-slate-300 cursor-pointer transition-colors">Made with Solar Power</span>
          </div>
        </div>
      </div>
    </footer>
  );
}