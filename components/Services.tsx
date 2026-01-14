
import React from 'react';
import { Settings2, Zap, Home, Hammer, HardHat, FileCheck, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    title: 'Old Panel Upgrades',
    desc: 'If your breakers are constantly tripping, it might be time for a refresh. I make the upgrade simple and safe.',
    icon: Settings2,
    tag: 'Safety First'
  },
  {
    title: 'EV Charging at Home',
    desc: 'Ready for that Tesla or Rivian? I install heavy-duty chargers that charge fast and don’t overload your house.',
    icon: Zap,
    tag: 'Modern Living'
  },
  {
    title: 'Mobile Home Help',
    desc: 'Specialized wiring for manufactured homes in Brevard County. I know the unique quirks of these structures.',
    icon: Home,
    tag: 'Our Specialty'
  },
  {
    title: 'Remodels & Fix-Ups',
    desc: 'New kitchen? Bathroom update? I’ll work with your contractor to make sure the wiring is tucked away perfectly.',
    icon: Hammer,
    tag: 'Home Design'
  },
  {
    title: 'Code Correction',
    desc: 'Buying a house or getting an inspection? I fix violations fast so you can pass with flying colors.',
    icon: FileCheck,
    tag: 'Compliance'
  },
  {
    title: 'Commercial Work',
    desc: 'Supporting our local Cocoa businesses with lighting updates, conduit work, and reliable power.',
    icon: HardHat,
    tag: 'Local Business'
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl mb-20">
          <span className="font-script text-2xl text-clay block mb-4">How I Can Help Your Home</span>
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight leading-none mb-6">
            Services We <br />Actually Care About.
          </h2>
          <p className="text-lg text-slate-500 font-medium">
            I don’t just "install." I listen to what’s wrong and find the safest, most affordable way to fix it. Here is what I do best:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div 
              key={service.title}
              whileHover={{ scale: 1.02 }}
              className="paper-card p-10 rounded-2xl flex flex-col transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center text-slate-900 mb-6 group-hover:bg-slate-900 group-hover:text-white transition-colors duration-300">
                <service.icon className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-bold text-orange-600 uppercase tracking-widest mb-2 block">{service.tag}</span>
              <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">{service.title}</h3>
              <p className="text-slate-600 text-base leading-relaxed mb-8 font-medium">
                {service.desc}
              </p>
              <div className="mt-auto">
                <a href="#contact" className="inline-flex items-center gap-2 text-xs font-black text-slate-900 border-b-2 border-clay pb-1 hover:border-slate-900 transition-all">
                  TEXT NICK FOR A QUOTE
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
