
import React from 'react';
import { Phone, Mail, Globe, Send } from 'lucide-react';

const ContactForm: React.FC = () => {
  return (
    <section id="contact" className="py-32 bg-slate-900 relative overflow-hidden">
      {/* Visual background elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-blue-900/40 blur-[150px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-800/20 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="bg-white rounded-[40px] p-8 md:p-16 shadow-2xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 tracking-tight mb-4">Request Your Free Quote</h2>
            <p className="text-lg text-slate-500 max-w-xl mx-auto">Tell us about your project and our Master Electrician will get back to you with a professional estimate.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            <div className="lg:col-span-3">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-bold text-slate-900 mb-2 uppercase tracking-widest">Full Name</label>
                    <input type="text" id="name" className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-100 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all" placeholder="John Doe" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-bold text-slate-900 mb-2 uppercase tracking-widest">Phone Number</label>
                    <input type="tel" id="phone" className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-100 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all" placeholder="(321) 555-0123" />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-slate-900 mb-2 uppercase tracking-widest">Email Address</label>
                  <input type="email" id="email" className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-100 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all" placeholder="john@example.com" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-slate-900 mb-2 uppercase tracking-widest">Project Details</label>
                  <textarea id="message" rows={4} className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-100 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all resize-none" placeholder="Explain your needs (e.g., panel upgrade, EV charger)..."></textarea>
                </div>
                <button type="button" className="w-full bg-blue-800 text-white font-bold py-5 rounded-xl hover:bg-blue-900 transition-all shadow-xl shadow-blue-900/30 flex items-center justify-center gap-3 active:scale-[0.98]">
                  <Send className="w-5 h-5" />
                  Send Request
                </button>
              </form>
            </div>

            <div className="lg:col-span-2 flex flex-col justify-center space-y-10 border-t lg:border-t-0 lg:border-l border-slate-100 pt-12 lg:pt-0 lg:pl-16">
              <div className="flex gap-5 items-start">
                <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center shrink-0 border border-blue-100 shadow-sm">
                  <Phone className="w-6 h-6 text-blue-800" />
                </div>
                <div>
                  <p className="text-xs font-bold text-blue-800 uppercase tracking-[0.2em] mb-1">Call Us Now</p>
                  <a href="tel:3213490006" className="text-2xl font-bold text-slate-900 hover:text-blue-800 transition-colors">(321) 349-0006</a>
                  <p className="text-sm text-slate-400 mt-1 font-medium">Mon-Fri: 8:00 AM – 5:00 PM</p>
                </div>
              </div>

              <div className="flex gap-5 items-start">
                <div className="w-14 h-14 rounded-2xl bg-orange-50 flex items-center justify-center shrink-0 border border-orange-100 shadow-sm">
                  <Mail className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <p className="text-xs font-bold text-orange-600 uppercase tracking-[0.2em] mb-1">Send Email</p>
                  <a href="mailto:nick@spi-electrical.com" className="text-lg font-bold text-slate-700 hover:text-blue-800 transition-colors break-all">nick@spi-electrical.com</a>
                </div>
              </div>

              <div className="flex gap-5 items-start">
                <div className="w-14 h-14 rounded-2xl bg-slate-100 flex items-center justify-center shrink-0 border border-slate-200 shadow-sm">
                  <Globe className="w-6 h-6 text-slate-700" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-700 uppercase tracking-[0.2em] mb-1">Visit Online</p>
                  <a href="https://www.specialtyproductinstallers.com" target="_blank" rel="noopener noreferrer" className="text-base font-bold text-slate-600 hover:text-blue-800 transition-colors break-all">spi-electrical.com</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
