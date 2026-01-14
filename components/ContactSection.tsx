
import React from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle2 } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-900 opacity-5 pointer-events-none hidden lg:block"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <span className="text-blue-800 text-xs font-black uppercase tracking-[0.3em] mb-4 block">Get In Touch</span>
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight leading-none mb-8">
              Let's Secure Your <br />Home's Power.
            </h2>
            <p className="text-lg text-slate-500 font-medium mb-12 max-w-md">
              Fill out the form for a no-obligation estimate or call us directly for emergency service or quick questions.
            </p>

            <div className="space-y-8">
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm text-blue-900 shrink-0 border border-slate-100">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Call Now</p>
                  <a href="tel:3213490006" className="text-2xl font-black text-slate-900 hover:text-blue-800 transition-colors">(321) 349-0006</a>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm text-blue-900 shrink-0 border border-slate-100">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Email Us</p>
                  <a href="mailto:nick@spi-electrical.com" className="text-xl font-bold text-slate-900 hover:text-blue-800 transition-colors">nick@spi-electrical.com</a>
                </div>
              </div>
            </div>

            <div className="mt-16 p-8 bg-blue-900 rounded-3xl text-white shadow-2xl shadow-blue-900/20">
              <h4 className="text-xl font-black mb-4">Why Contact Us?</h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-sm font-medium text-blue-100">
                  <CheckCircle2 className="w-4 h-4 text-orange-400" /> Free On-Site Estimates
                </li>
                <li className="flex items-center gap-3 text-sm font-medium text-blue-100">
                  <CheckCircle2 className="w-4 h-4 text-orange-400" /> Expert Permitting Support
                </li>
                <li className="flex items-center gap-3 text-sm font-medium text-blue-100">
                  <CheckCircle2 className="w-4 h-4 text-orange-400" /> Upfront, Transparent Pricing
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white p-10 md:p-12 rounded-[2.5rem] shadow-2xl shadow-blue-900/5 border border-slate-100">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-black text-slate-900 uppercase tracking-widest mb-2">Name</label>
                  <input type="text" className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-blue-900 outline-none transition-all font-medium" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-xs font-black text-slate-900 uppercase tracking-widest mb-2">Phone</label>
                  <input type="tel" className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-blue-900 outline-none transition-all font-medium" placeholder="(321) 000-0000" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-black text-slate-900 uppercase tracking-widest mb-2">Email</label>
                <input type="email" className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-blue-900 outline-none transition-all font-medium" placeholder="john@example.com" />
              </div>
              <div>
                <label className="block text-xs font-black text-slate-900 uppercase tracking-widest mb-2">Service Needed</label>
                <select className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-blue-900 outline-none transition-all font-medium appearance-none">
                  <option>Panel Upgrade</option>
                  <option>EV Charger Installation</option>
                  <option>Remodel Wiring</option>
                  <option>Other / Question</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-black text-slate-900 uppercase tracking-widest mb-2">Message</label>
                <textarea rows={4} className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-blue-900 outline-none transition-all font-medium resize-none" placeholder="How can we help?"></textarea>
              </div>
              <button className="w-full bg-blue-900 text-white font-black py-5 rounded-xl hover:bg-blue-800 transition-all flex items-center justify-center gap-3 group shadow-xl shadow-blue-900/10">
                Send Request <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
