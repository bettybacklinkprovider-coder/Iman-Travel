import React, { useState, useEffect } from 'react';
import { Plane, Calendar, Users, MapPin, Search, ArrowRight, ShieldCheck, Phone, ChevronLeft, ChevronRight, Award, Sparkles } from 'lucide-react';
import { HERO_SLIDES } from '../data/travelData';

interface HeroProps {
  onOpenTripPlanner: () => void;
  onNavigateContact: () => void;
  onQuickSearch: (destination: string, type: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ 
  onOpenTripPlanner, 
  onNavigateContact,
  onQuickSearch 
}) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [selectedDest, setSelectedDest] = useState('dubai');
  const [travelType, setTravelType] = useState('holiday');
  const [travelers, setTravelers] = useState(2);

  // Auto carousel rotation
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlideIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const currentSlide = HERO_SLIDES[currentSlideIndex];

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onQuickSearch(selectedDest, travelType);
  };

  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 bg-slate-950 text-white overflow-hidden">
      
      {/* Dynamic Background Image Carousel */}
      {HERO_SLIDES.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlideIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover object-center filter brightness-65 transition-transform duration-10000 ease-linear transform scale-105"
          />
          {/* Dark Navy Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-900/50" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/50 to-transparent" />
        </div>
      ))}

      {/* Decorative Gold Grid & Radial Light */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(212,175,55,0.15),transparent_60%)] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Tag Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-[#D4AF37]/50 text-[#D4AF37] text-xs md:text-sm font-semibold shadow-lg backdrop-blur-md animate-fadeIn">
              <Sparkles className="w-4 h-4 text-[#D4AF37]" />
              <span>{currentSlide.badge}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-ping" />
            </div>

            {/* Main Hero Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white font-serif-heading leading-[1.15]">
              Explore the World with <br />
              <span className="gold-gradient-text">Iman Travel</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-slate-200 font-light max-w-2xl leading-relaxed italic border-l-2 border-[#D4AF37] pl-4">
              “Your trusted travel partner for easy bookings, exciting destinations and unforgettable journeys.”
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onOpenTripPlanner}
                className="flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#F59E0B] to-[#B48811] hover:from-[#E5BF47] hover:to-[#C59921] text-slate-950 font-extrabold text-base md:text-lg shadow-xl shadow-[#D4AF37]/20 transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <Plane className="w-5 h-5 fill-slate-950" />
                <span>Plan Your Trip</span>
              </button>

              <button
                onClick={onNavigateContact}
                className="flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-slate-900/80 hover:bg-slate-800 text-white font-bold text-base border border-[#D4AF37]/50 hover:border-[#D4AF37] backdrop-blur-md shadow-lg transition-all transform hover:-translate-y-0.5 cursor-pointer"
              >
                <Phone className="w-5 h-5 text-[#D4AF37]" />
                <span>Contact Us</span>
              </button>
            </div>

            {/* Quick Phone Callout */}
            <div className="pt-2 flex items-center gap-4 text-xs sm:text-sm text-slate-300">
              <div className="flex items-center gap-2 bg-slate-900/80 px-4 py-2 rounded-xl border border-slate-800">
                <span className="text-slate-400">Direct Hotline:</span>
                <a href="tel:07300506803" className="font-bold text-[#D4AF37] hover:underline flex items-center gap-1">
                  📞 07300506803
                </a>
              </div>
              <div className="hidden sm:flex items-center gap-2 text-slate-400">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>ATOL Protected & Verified Partner</span>
              </div>
            </div>

            {/* Slide Navigation Controls */}
            <div className="flex items-center gap-3 pt-4">
              <button 
                onClick={() => setCurrentSlideIndex((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length)}
                className="p-2 rounded-full bg-slate-900/80 hover:bg-slate-800 border border-slate-700 text-slate-300 hover:text-white transition-colors"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              
              <div className="flex gap-2">
                {HERO_SLIDES.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentSlideIndex(i)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === currentSlideIndex ? 'w-8 bg-[#D4AF37]' : 'w-2 bg-slate-700 hover:bg-slate-500'
                    }`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>

              <button 
                onClick={() => setCurrentSlideIndex((prev) => (prev + 1) % HERO_SLIDES.length)}
                className="p-2 rounded-full bg-slate-900/80 hover:bg-slate-800 border border-slate-700 text-slate-300 hover:text-white transition-colors"
                aria-label="Next slide"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

          </div>

          {/* Search & Trip Inquiry Widget */}
          <div className="lg:col-span-5">
            <div className="bg-slate-900/90 backdrop-blur-xl border border-[#D4AF37]/40 rounded-3xl p-6 md:p-8 shadow-2xl relative group">
              
              {/* Gold Top Accent */}
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#B48811] text-slate-950 text-xs font-black uppercase tracking-wider shadow-md">
                Quick Travel Inquiry
              </div>

              <div className="text-center mb-6 pt-2">
                <h3 className="text-xl font-bold text-white font-serif-heading">Find Your Dream Journey</h3>
                <p className="text-xs text-slate-400 mt-1">Get custom quotes for flights, hotels & packages instantly</p>
              </div>

              <form onSubmit={handleSearchSubmit} className="space-y-4">
                
                {/* Travel Type Pills */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">Travel Category</label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { id: 'holiday', label: '🏖️ Holiday' },
                      { id: 'umrah', label: '🕌 Umrah' },
                      { id: 'flight', label: '✈️ Flights' }
                    ].map((type) => (
                      <button
                        key={type.id}
                        type="button"
                        onClick={() => setTravelType(type.id)}
                        className={`py-2 px-3 rounded-xl text-xs font-bold transition-all ${
                          travelType === type.id
                            ? 'bg-[#D4AF37] text-slate-950 shadow-md'
                            : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                        }`}
                      >
                        {type.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Destination Selector */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" /> Preferred Destination
                  </label>
                  <select
                    value={selectedDest}
                    onChange={(e) => setSelectedDest(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-slate-100 text-sm focus:outline-none focus:border-[#D4AF37]"
                  >
                    <option value="dubai">Dubai, UAE (Skyline & Desert)</option>
                    <option value="turkey">Turkey (Istanbul & Cappadocia)</option>
                    <option value="saudi">Saudi Arabia (Makkah & Madinah Umrah)</option>
                    <option value="malaysia">Malaysia (Kuala Lumpur & Langkawi)</option>
                    <option value="uk">United Kingdom (London & Heritage)</option>
                    <option value="maldives">Maldives Luxury Resorts</option>
                    <option value="custom">Other International Destination</option>
                  </select>
                </div>

                {/* Travelers & Date */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5 flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5 text-[#D4AF37]" /> Travelers
                    </label>
                    <select
                      value={travelers}
                      onChange={(e) => setTravelers(Number(e.target.value))}
                      className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2.5 text-slate-100 text-sm focus:outline-none focus:border-[#D4AF37]"
                    >
                      <option value={1}>1 Adult (Solo)</option>
                      <option value={2}>2 Adults (Couple)</option>
                      <option value={3}>3 Adults / Family</option>
                      <option value={4}>4+ Family / Group</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5 flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#D4AF37]" /> Target Month
                    </label>
                    <select
                      className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2.5 text-slate-100 text-sm focus:outline-none focus:border-[#D4AF37]"
                    >
                      <option>Next 30 Days</option>
                      <option>Next 3 Months</option>
                      <option>Holiday Season</option>
                      <option>Flexible Dates</option>
                    </select>
                  </div>
                </div>

                {/* Submit Action */}
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#B48811] hover:from-[#E5BF47] hover:to-[#C59921] text-slate-950 font-black text-sm uppercase tracking-wider shadow-lg flex items-center justify-center gap-2 transition-transform transform active:scale-98 cursor-pointer"
                >
                  <Search className="w-4 h-4" />
                  <span>Search Best Rates</span>
                </button>

                <p className="text-[11px] text-center text-slate-400">
                  Prefer direct call? Call <a href="tel:07300506803" className="text-[#D4AF37] font-bold">07300506803</a> for instant phone quotes.
                </p>

              </form>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
};
