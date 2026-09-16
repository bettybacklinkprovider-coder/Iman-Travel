import React from 'react';
import { Star, Quote, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS } from '../data/travelData';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-slate-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-800 border border-[#D4AF37]/40 text-[#D4AF37] text-xs font-bold uppercase tracking-widest">
            Verified Reviews
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold font-serif-heading text-white">
            What Our Travelers Say
          </h2>

          <p className="text-slate-300 text-sm sm:text-base font-light">
            Real stories from families, couples, and business executives who booked their unforgettable journeys with Iman Travel.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((test) => (
            <div
              key={test.id}
              className="bg-slate-950 border border-slate-800 hover:border-[#D4AF37]/50 rounded-3xl p-8 flex flex-col justify-between relative shadow-xl hover:-translate-y-1.5 transition-all duration-300 group"
            >
              <Quote className="w-10 h-10 text-[#D4AF37]/20 absolute top-6 right-6" />

              <div>
                {/* Rating Stars */}
                <div className="flex items-center gap-1 text-amber-400 mb-4">
                  {[...Array(test.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current text-[#D4AF37]" />
                  ))}
                </div>

                {/* Comment */}
                <p className="text-slate-300 text-sm italic leading-relaxed mb-6 font-light">
                  "{test.comment}"
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-slate-800 flex items-center gap-4">
                <img
                  src={test.avatar}
                  alt={test.name}
                  className="w-12 h-12 rounded-full object-cover border border-[#D4AF37]"
                />
                <div>
                  <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
                    {test.name}
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  </h4>
                  <p className="text-xs text-slate-400">{test.location} • <span className="text-[#D4AF37]">{test.tripType}</span></p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
