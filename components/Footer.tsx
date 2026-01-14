
import React from 'react';
import { Zap, MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-100 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-blue-900 rounded-lg flex items-center justify-center text-white">
                <Zap className="w-5 h-5 fill-current" />
              </div>
              <span className="text-xl font-black text-slate-900 tracking-tight">SPI Electrical</span>
            </div>
            <p className="text-slate-500 text-sm font-medium leading-relaxed mb-8">
              Licensed Master Electrician specializing in complex residential and commercial specialty installations across Cocoa and Central Florida.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-blue-900 hover:border-blue-900 transition-all"><Instagram className="w-4 h-4" /></a>
              <a href="#" className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-blue-900 hover:border-blue-900 transition-all"><Facebook className="w-4 h-4" /></a>
            </div>
          </div>

          <div>
            <h5 className="text-xs font-black text-slate-900 uppercase tracking-widest mb-8">Quick Links</h5>
            <ul className="space-y-4 text-sm font-bold text-slate-500">
              <li><a href="#services" className="hover:text-blue-900 transition-colors">Services</a></li>
              <li><a href="#why-us" className="hover:text-blue-900 transition-colors">Why SPI?</a></li>
              <li><a href="#service-area" className="hover:text-blue-900 transition-colors">Area Map</a></li>
              <li><a href="#contact" className="hover:text-blue-900 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-xs font-black text-slate-900 uppercase tracking-widest mb-8">Legal & Certs</h5>
            <ul className="space-y-4 text-sm font-bold text-slate-500">
              <li>Lic # ER13016147</li>
              <li>Fully Insured & Bonded</li>
              <li>Master Electrician Status</li>
              <li>Privacy Policy</li>
            </ul>
          </div>

          <div>
            <h5 className="text-xs font-black text-slate-900 uppercase tracking-widest mb-8">Service Hub</h5>
            <ul className="space-y-4 text-sm font-bold text-slate-500">
              <li className="flex gap-3">
                <MapPin className="w-4 h-4 text-blue-900 shrink-0" />
                <span>Cocoa, Florida 32926</span>
              </li>
              <li className="flex gap-3">
                <Phone className="w-4 h-4 text-blue-900 shrink-0" />
                <span>(321) 349-0006</span>
              </li>
              <li className="flex gap-3">
                <Mail className="w-4 h-4 text-blue-900 shrink-0" />
                <span className="break-all">nick@spi-electrical.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">© 2024 Specialty Product Installers. All Rights Reserved.</p>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            <span className="text-[10px] font-black text-slate-700 uppercase tracking-widest">Active & Dispatched Today</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
