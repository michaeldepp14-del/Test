
import React, { useState } from 'react';
import { X, Heart } from 'lucide-react';

const PromoBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="sticky top-0 z-[60] bg-[#1A2238] text-white py-3 px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-center relative">
        <div className="flex items-center gap-3 text-xs md:text-sm font-bold tracking-tight uppercase">
          <Heart className="w-4 h-4 text-orange-400 fill-current" />
          <span>Proudly Serving our Veterans & Local Seniors with 10% Off All Labor</span>
        </div>
        <button 
          onClick={() => setIsVisible(false)}
          className="absolute right-0 p-1 opacity-50 hover:opacity-100 transition-all"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default PromoBanner;
