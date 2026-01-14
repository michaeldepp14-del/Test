
import React from 'react';
import { ArrowRight, Phone, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-36 pb-20 lg:pt-52 lg:pb-40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="text-orange-600 font-script text-2xl">From Nick's Workshop to Your Home</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-[1.05] mb-8 text-slate-900">
              Honest Work for <br />
              <span className="relative">
                Cocoa Families.
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 15C50 5 150 5 295 15" stroke="#D4A373" strokeWidth="4" strokeLinecap="round"/>
                </svg>
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 mb-12 font-medium max-w-lg leading-relaxed">
              Flickering lights or a full house rewire—no job is too small for a neighbor. I'm Nick, your local Master Electrician, and I treat your home like my own.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5">
              <a 
                href="tel:3213490006" 
                className="flex items-center justify-center gap-3 bg-[#1A2238] text-white px-10 py-5 rounded-2xl font-bold hover:bg-slate-800 transition-all shadow-xl shadow-slate-900/20 text-lg group"
              >
                <Phone className="w-5 h-5 fill-current text-orange-400" />
                Call Nick: (321) 349-0006
              </a>
              <div className="flex flex-col justify-center">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Local & Reliable</p>
                <p className="text-sm font-script text-slate-600 text-lg">"I'll be there on time, every time."</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, rotate: 2 }}
            animate={{ opacity: 1, rotate: -2 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 p-4 bg-white shadow-2xl rounded-sm transform rotate-1">
              <div className="overflow-hidden rounded-sm grayscale-[0.2] contrast-[1.1]">
                <img 
                  src="https://images.unsplash.com/photo-1621905251918-48416bd8575a?q=80&w=1200&auto=format&fit=crop" 
                  alt="Authentic Electrician Work" 
                  className="w-full aspect-[4/5] object-cover"
                />
              </div>
              <div className="pt-4 pb-2 text-center">
                <p className="font-script text-2xl text-slate-700">Family owned. Family operated.</p>
              </div>
            </div>
            
            {/* "Post-it" Note CTA */}
            <motion.div 
              whileHover={{ scale: 1.05, rotate: 0 }}
              className="absolute -bottom-10 -right-6 md:right-10 z-20 w-48 h-48 bg-yellow-100 p-6 shadow-xl transform rotate-6 border-b-4 border-yellow-200"
            >
              <Heart className="w-6 h-6 text-red-400 mb-2 fill-current" />
              <p className="font-script text-xl leading-tight text-slate-800">
                10% Off for our Military & Seniors! <br/><br/>
                <span className="text-sm font-sans font-bold uppercase tracking-tighter">— Just mention this note</span>
              </p>
            </motion.div>
            {/* Correctly closing the column's motion.div */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
