
import React from 'react';
import { Star } from 'lucide-react';
import { Review } from '../types';

const reviews: Review[] = [
  {
    id: '1',
    name: 'Michael R.',
    location: 'Cocoa, FL',
    text: "Fantastic service. They upgraded our panel and installed an EV charger. The work was incredibly clean and they handled all the permitting smoothly.",
    rating: 5
  },
  {
    id: '2',
    name: 'Sarah J.',
    location: 'Rockledge, FL',
    text: "Very affordable compared to other quotes, but the quality didn't suffer. Nick was professional, fast, and treated my home with great respect.",
    rating: 5
  },
  {
    id: '3',
    name: 'David T.',
    location: 'Titusville, FL',
    text: "Needed code corrections for an insurance inspection. They came out quickly, identified the issues, and fixed them perfectly on the first visit.",
    rating: 5
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-32 bg-[#F8F8F8]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-slate-900 tracking-tight mb-20">What Your Neighbors Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div 
              key={review.id}
              className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 flex flex-col transition-all hover:shadow-xl hover:shadow-blue-900/5"
            >
              <div className="flex gap-1 text-orange-500 mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <p className="text-slate-600 font-normal italic mb-8 text-lg leading-relaxed flex-grow">
                "{review.text}"
              </p>
              <div className="border-t border-slate-50 pt-6">
                <p className="font-bold text-slate-900 text-base">{review.name}</p>
                <p className="text-xs text-blue-800 font-bold uppercase tracking-widest mt-1">{review.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
