
import React from 'react';
import { ShieldCheck, Award, MapPin } from 'lucide-react';

const TrustBanner: React.FC = () => {
  return (
    <section className="border-y border-slate-200 bg-white/70 backdrop-blur-md relative z-20">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-10">
          <div className="flex flex-col items-center lg:items-start gap-1">
            <span className="text-[10px] font-bold text-blue-800 tracking-widest uppercase mb-1">Service Radius</span>
            <div className="flex items-center gap-2 text-slate-800 font-bold">
              <MapPin className="w-5 h-5 text-blue-800" />
              <p className="text-base">BREVARD, ORANGE, SEMINOLE & VOLUSIA</p>
            </div>
          </div>

          <div className="h-px w-full max-w-[100px] bg-slate-200 lg:h-12 lg:w-px"></div>

          <div className="grid grid-cols-2 gap-8 md:gap-16">
            <div className="flex flex-col items-center gap-2 group">
              <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center transition-transform group-hover:scale-110">
                <ShieldCheck className="w-6 h-6 text-blue-800" />
              </div>
              <span className="font-bold text-slate-900 text-sm">Licensed & Insured</span>
            </div>
            <div className="flex flex-col items-center gap-2 group">
              <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center transition-transform group-hover:scale-110">
                <Award className="w-6 h-6 text-orange-500" />
              </div>
              <span className="font-bold text-slate-900 text-sm">Master Electrician</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustBanner;
