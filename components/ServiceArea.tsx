
import React from 'react';
import { MapPin, Globe } from 'lucide-react';

const ServiceArea: React.FC = () => {
  const areas = [
    'Cocoa & Rockledge',
    'Titusville & Mims',
    'Orlando & Bithlo',
    'Palm Bay & Melbourne',
    'Viera & Merritt Island',
    'Edgewater & New Smyrna'
  ];

  return (
    <section id="service-area" className="py-32 bg-white border-y border-slate-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-4xl font-bold text-slate-900 tracking-tight mb-8">Serving All of Central Florida.</h2>
            <p className="text-xl text-slate-500 mb-10 font-normal leading-relaxed">
              Based in Cocoa, we are proud to provide expert electrical services to homeowners and commercial clients across four major counties.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-5 gap-x-10">
              {areas.map((area) => (
                <div key={area} className="flex items-center gap-4 text-slate-800 group">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center group-hover:bg-blue-800 transition-colors duration-300">
                    <MapPin className="w-4 h-4 text-blue-800 group-hover:text-white" />
                  </div>
                  <span className="font-bold text-sm tracking-tight">{area}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-12 p-6 bg-slate-50 rounded-2xl border border-slate-100 flex items-center gap-4">
               <Globe className="w-6 h-6 text-blue-800" />
               <p className="text-sm text-slate-600 font-medium">Counties: Brevard, Orange, Seminole, Volusia</p>
            </div>
          </div>

          <div className="bg-slate-900 rounded-[40px] p-2 border-4 border-slate-800 shadow-2xl relative">
            <div className="bg-slate-800 w-full h-[450px] rounded-[36px] relative overflow-hidden flex flex-col items-center justify-center">
              {/* Grid pattern overlay */}
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]"></div>
              
              <div className="relative text-center">
                 <div className="w-24 h-24 bg-blue-600/20 rounded-full flex items-center justify-center animate-pulse">
                    <MapPin className="w-12 h-12 text-blue-400" />
                 </div>
                 <h4 className="text-white font-bold mt-6 text-xl">Operational Radius</h4>
                 <p className="text-slate-400 mt-2 text-sm">Central Florida Electrical Coverage</p>
              </div>

              {/* Pingers for multiple areas */}
              {[...Array(4)].map((_, i) => (
                <div 
                  key={i} 
                  className={`absolute w-3 h-3 bg-blue-500 rounded-full`}
                  style={{
                    top: `${20 + i * 15}%`,
                    left: `${30 + (i % 2) * 30}%`
                  }}
                >
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceArea;
