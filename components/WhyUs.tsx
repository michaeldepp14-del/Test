
import React from 'react';
import { Shield, Sparkles, UserCheck } from 'lucide-react';

const WhyUs: React.FC = () => {
  return (
    <section id="why-us" className="py-24 md:py-32 bg-[#F5F2EB]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6">A Different Kind of Contractor.</h2>
          <p className="text-xl text-slate-500 max-w-2xl font-medium">
            Most big companies send a "technician" you've never met. When you call SPI, you're working with the owner.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="flex flex-col items-center text-center group">
            <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-orange-600 mb-8 shadow-md border border-slate-100 group-hover:scale-110 transition-transform">
              <UserCheck className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold mb-4">The Personal Touch</h3>
            <p className="text-slate-600 font-medium leading-relaxed">
              I answer my own phone and I'm on every job site. You get accountability that a "big box" company just can't offer.
            </p>
          </div>

          <div className="flex flex-col items-center text-center group">
            <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-blue-800 mb-8 shadow-md border border-slate-100 group-hover:scale-110 transition-transform">
              <Shield className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold mb-4">No Cutting Corners</h3>
            <p className="text-slate-600 font-medium leading-relaxed">
              As a Master Electrician, my license is my life. I pull the permits and follow the codes because your safety is my reputation.
            </p>
          </div>

          <div className="flex flex-col items-center text-center group">
            <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-clay mb-8 shadow-md border border-slate-100 group-hover:scale-110 transition-transform">
              <Sparkles className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Leave it Cleaner</h3>
            <p className="text-slate-600 font-medium leading-relaxed">
              I know I'm a guest in your home. We wear boot covers and always sweep up. You'll never know we were there—except that your lights work!
            </p>
          </div>
        </div>
        
        <div className="mt-20 flex justify-center">
           <div className="bg-white p-8 rounded-2xl border-2 border-dashed border-slate-200 max-w-xl">
              <p className="font-script text-3xl text-slate-700 text-center">
                "I'm not happy until you feel safe turning the lights on."
              </p>
              <div className="mt-4 flex flex-col items-center">
                <div className="h-px w-24 bg-slate-200 mb-4"></div>
                <p className="font-bold text-slate-900">— Nick, Owner & Master Electrician</p>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
