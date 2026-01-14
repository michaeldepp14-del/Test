
import React, { useState, useEffect } from 'react';
import { Zap, Phone, Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md border-b border-slate-100 py-4 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 bg-slate-900 rounded-full flex items-center justify-center text-white overflow-hidden group-hover:bg-orange-600 transition-all">
            <Zap className="w-5 h-5 fill-current" />
          </div>
          <div className="flex flex-col">
            <span className="text-slate-900 text-xl font-black tracking-tighter leading-none">SPI ELECTRICAL</span>
            <span className="font-script text-clay text-lg -mt-1">By Nick</span>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-10">
          <a href="#services" className="text-[11px] font-black text-slate-900 uppercase tracking-widest hover:text-orange-600 transition-colors">Services</a>
          <a href="#why-us" className="text-[11px] font-black text-slate-900 uppercase tracking-widest hover:text-orange-600 transition-colors">The SPI Way</a>
          <a href="#contact" className="text-[11px] font-black text-slate-900 uppercase tracking-widest hover:text-orange-600 transition-colors">Contact</a>
        </nav>

        <div className="flex items-center gap-6">
          <a href="tel:3213490006" className="hidden lg:flex items-center gap-2 text-slate-900 text-sm font-black group">
            <span className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-orange-100 transition-colors">
              <Phone className="w-3.5 h-3.5" />
            </span>
            (321) 349-0006
          </a>
          <a href="#contact" className="hidden sm:block bg-orange-600 text-white text-[11px] font-black uppercase tracking-widest px-6 py-3.5 rounded-full hover:bg-orange-700 transition-all">
            Free Estimate
          </a>
          
          <button className="md:hidden p-2 text-slate-900" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
