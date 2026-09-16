import React, { useState } from 'react';
import { Star, Clock, MapPin, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { DESTINATIONS } from '../data/travelData';
import { Destination, TravelCategory } from '../types';

interface DestinationsProps {
  onSelectDestination: (destination: Destination) => void;
  onOpenTripPlanner: () => void;
}

export const Destinations: React.FC<DestinationsProps> = ({ 
  onSelectDestination,
  onOpenTripPlanner 
}) => {
  const [activeTab, setActiveTab] = useState<TravelCategory>('all');

  const categories: { id: TravelCategory; label: string }[] = [
    { id: 'all', label: 'All Destinations' },
    { id: 'dubai', label: '🇦🇪 Dubai' },
    { id: 'turkey', label: '🇹🇷 Turkey' },
    { id: 'saudi', label: '🇸🇦 Saudi (Umrah)' },
    { id: 'malaysia', label: '🇲🇾 Malaysia' },
    { id: 'uk', label: '🇬🇧 UK & London' },
    { id: 'luxury', label: '🏝️ Luxury & Honeymoon' }
  ];

  const filteredDestinations = activeTab === 'all' 
    ? DESTINATIONS 
    : DESTINATIONS.filter(d => d.category === activeTab);

  return (
    <section id="destinations" className="py-20 bg-slate-950 text-white relative">
      
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#D4AF37]/5 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 border border-[#D4AF37]/40 text-[#D4AF37] text-xs font-bold uppercase tracking-widest">
            Handpicked Holiday Packages
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-serif-heading text-white tracking-tight">
            Discover Amazing Destinations
          </h2>

          <p className="text-slate-300 text-base sm:text-lg font-light leading-relaxed">
            Explore world-renowned skylines, rich cultural wonders, tropical paradise islands, and holy pilgrimages with our customized travel packages.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-6 scrollbar-none mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs md:text-sm font-bold transition-all whitespace-nowrap cursor-pointer ${
                activeTab === cat.id
                  ? 'bg-gradient-to-r from-[#D4AF37] to-[#B48811] text-slate-950 shadow-lg scale-105'
                  : 'bg-slate-900 text-slate-300 hover:bg-slate-800 hover:text-white border border-slate-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDestinations.map((dest) => (
            <div
              key={dest.id}
              className="bg-slate-900 border border-slate-800 hover:border-[#D4AF37]/60 rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-2 shadow-xl hover:shadow-2xl hover:shadow-[#D4AF37]/10 flex flex-col group cursor-pointer"
              onClick={() => onSelectDestination(dest)}
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={dest.image}
                  alt={dest.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

                {/* Badge */}
                {dest.badge && (
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-slate-950/90 backdrop-blur-md text-[#D4AF37] text-xs font-bold border border-[#D4AF37]/50 flex items-center gap-1 shadow-md">
                    <Sparkles className="w-3 h-3" />
                    <span>{dest.badge}</span>
                  </div>
                )}

                {/* Price Tag */}
                <div className="absolute bottom-4 right-4 px-3.5 py-1.5 rounded-2xl bg-[#D4AF37] text-slate-950 font-black text-base shadow-lg">
                  From {dest.price}
                </div>

                {/* Duration */}
                <div className="absolute bottom-4 left-4 flex items-center gap-1.5 text-xs text-slate-200 font-semibold bg-slate-900/80 px-3 py-1 rounded-full backdrop-blur-sm">
                  <Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>{dest.duration}</span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                    <span className="flex items-center gap-1 text-[#D4AF37] font-semibold">
                      <MapPin className="w-3.5 h-3.5" /> {dest.country}
                    </span>
                    <span className="flex items-center gap-1 text-amber-400 font-bold">
                      <Star className="w-3.5 h-3.5 fill-current" /> {dest.rating} ({dest.reviewsCount})
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 font-serif-heading group-hover:text-[#D4AF37] transition-colors leading-snug">
                    {dest.title}
                  </h3>

                  <p className="text-slate-300 text-xs line-clamp-2 leading-relaxed mb-4 font-light">
                    {dest.description}
                  </p>

                  {/* Highlights list */}
                  <div className="space-y-1.5 mb-6">
                    {dest.highlights.slice(0, 3).map((hl, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                        <span className="truncate">{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Footer */}
                <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-400">View Full Itinerary</span>
                  <div className="p-2 rounded-full bg-slate-800 text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-slate-950 transition-all">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Tailored Trip Banner */}
        <div className="mt-16 text-center bg-slate-900 border border-slate-800 rounded-3xl p-8 sm:p-12">
          <h3 className="text-2xl sm:text-3xl font-bold font-serif-heading text-white mb-3">
            Don't see your desired destination listed?
          </h3>
          <p className="text-slate-300 text-sm max-w-2xl mx-auto mb-6">
            We offer bespoke flight and hotel bookings for any city worldwide including Europe, USA, Canada, Far East & Africa.
          </p>
          <button
            onClick={onOpenTripPlanner}
            className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#B48811] text-slate-950 font-bold text-sm shadow-xl hover:scale-105 transition-transform cursor-pointer"
          >
            Create Custom Itinerary
          </button>
        </div>

      </div>
    </section>
  );
};
