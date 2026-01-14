
import React from 'react';
import { Phone, FileText } from 'lucide-react';

const MobileActionBar: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-white/95 backdrop-blur-md border-t border-slate-200 p-4 md:hidden z-[60] flex gap-3 shadow-[0_-10px_30px_rgba(0,0,0,0.05)]">
      <a 
        href="tel:3213490006" 
        className="flex-1 bg-white border border-slate-200 text-slate-900 font-bold py-4 rounded-xl flex items-center justify-center gap-3 active:scale-95 transition-transform shadow-sm"
      >
        <Phone className="w-5 h-5 text-blue-800" /> 
        Call Us
      </a>
      <a 
        href="#contact" 
        className="flex-1 bg-blue-800 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-3 active:scale-95 transition-transform shadow-lg shadow-blue-900/20"
      >
        <FileText className="w-5 h-5" /> 
        Free Quote
      </a>
    </div>
  );
};

export default MobileActionBar;
