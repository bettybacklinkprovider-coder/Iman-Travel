import React from 'react';
import { Phone, Plane, MessageSquare, Calendar } from 'lucide-react';

interface FinalCTAProps {
  onOpenTripPlanner: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenTripPlanner }) => {
  return (
    <section className="py-20 bg-slate-950 text-white relative overflow-hidden border-t border-b border-[#D4AF37]/30">
      
      {/* Background Hero Layer */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=2000&q=80"
          alt="Airplane flying over clouds"
          className="w-full h-full object-cover filter brightness-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/80" />
      </div>

      {/* Gold Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#D4AF37]/10 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-[#D4AF37] text-[#D4AF37] text-xs font-bold uppercase tracking-widest shadow-xl">
          <Plane className="w-4 h-4 text-[#D4AF37]" /> Start Your Journey Today
        </div>

        {/* Final CTA Heading */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-serif-heading text-white tracking-tight">
          Ready to Explore the World?
        </h2>

        {/* Final CTA Subtitle */}
        <p className="text-xl sm:text-2xl text-slate-200 font-light max-w-3xl mx-auto leading-relaxed italic border-l-4 border-r-4 border-[#D4AF37] px-6 py-2">
          “Let Iman Travel help you turn your travel plans into unforgettable memories.”
        </p>

        {/* Direct Phone Highlight */}
        <div className="pt-2">
          <a
            href="tel:07300506803"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-3xl bg-slate-900/90 border-2 border-[#D4AF37] text-white hover:text-[#D4AF37] shadow-2xl transition-transform hover:scale-105"
          >
            <Phone className="w-7 h-7 text-[#D4AF37] animate-bounce" />
            <div className="text-left">
              <span className="text-xs uppercase text-slate-400 block font-semibold">Call Our Travel Specialist</span>
              <span className="text-2xl sm:text-3xl font-extrabold font-serif-heading text-[#D4AF37]">07300506803</span>
            </div>
          </a>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <button
            onClick={onOpenTripPlanner}
            className="flex items-center gap-2.5 px-8 py-4 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#F59E0B] to-[#B48811] hover:from-[#E5BF47] hover:to-[#C59921] text-slate-950 font-extrabold text-base md:text-lg shadow-xl transition-all hover:scale-105 active:scale-95 cursor-pointer"
          >
            <Calendar className="w-5 h-5 fill-slate-950" />
            <span>Plan Your Trip Now</span>
          </button>

          <a
            href="https://wa.me/447300506803?text=Hello%20Iman%20Travel!%20I%20am%20ready%20to%20plan%20my%20trip."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 px-8 py-4 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-base md:text-lg shadow-xl transition-all hover:scale-105"
          >
            <MessageSquare className="w-5 h-5 fill-current" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>

      </div>

    </section>
  );
};
