import React from 'react';
import { Plane, Hotel, MoonStar, FileCheck, Compass, Car, CheckCircle2, ArrowRight } from 'lucide-react';
import { SERVICES } from '../data/travelData';
import { TravelService } from '../types';

interface ServicesProps {
  onSelectService: (service: TravelService) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Plane': return <Plane className="w-7 h-7 text-[#D4AF37]" />;
      case 'Hotel': return <Hotel className="w-7 h-7 text-[#D4AF37]" />;
      case 'MoonStar': return <MoonStar className="w-7 h-7 text-[#D4AF37]" />;
      case 'FileCheck': return <FileCheck className="w-7 h-7 text-[#D4AF37]" />;
      case 'Compass': return <Compass className="w-7 h-7 text-[#D4AF37]" />;
      case 'Car': return <Car className="w-7 h-7 text-[#D4AF37]" />;
      default: return <Plane className="w-7 h-7 text-[#D4AF37]" />;
    }
  };

  return (
    <section id="services" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      
      {/* Background Decorative Accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-900/10 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-800 border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-bold uppercase tracking-widest">
            Complete Travel Solutions
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-serif-heading text-white tracking-tight">
            Everything You Need for Your Journey
          </h2>

          <p className="text-slate-300 text-base sm:text-lg font-light leading-relaxed">
            From seamless flight tickets and 5-star hotel accommodations to fast visa issuance and sacred pilgrimages — Iman Travel manages every detail with dedicated care.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="bg-slate-950/80 border border-slate-800 hover:border-[#D4AF37]/60 rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1.5 shadow-xl hover:shadow-2xl hover:shadow-[#D4AF37]/10 flex flex-col justify-between group"
            >
              <div>
                {/* Icon & Badge Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3.5 rounded-2xl bg-slate-900 border border-[#D4AF37]/30 group-hover:bg-[#D4AF37]/10 transition-colors">
                    {getIcon(service.iconName)}
                  </div>

                  {service.badge && (
                    <span className="px-3 py-1 rounded-full bg-[#D4AF37]/15 text-[#D4AF37] text-xs font-semibold border border-[#D4AF37]/30">
                      {service.badge}
                    </span>
                  )}
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#D4AF37] transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-6 font-light">
                  {service.description}
                </p>

                {/* Feature Bullet points */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <button
                onClick={() => onSelectService(service)}
                className="w-full pt-4 border-t border-slate-800 group-hover:border-[#D4AF37]/30 flex items-center justify-between text-xs font-bold text-[#D4AF37] hover:text-white transition-colors cursor-pointer"
              >
                <span>Request Service & Pricing</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>

        {/* Call to Assistance */}
        <div className="mt-16 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border border-[#D4AF37]/30 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-[#D4AF37] text-slate-950 rounded-full font-bold text-xl">
              📞
            </div>
            <div>
              <h4 className="text-lg font-bold text-white">Need Customized Advice for Your Trip?</h4>
              <p className="text-xs sm:text-sm text-slate-300">Speak directly to our senior travel specialists today.</p>
            </div>
          </div>

          <a
            href="tel:07300506803"
            className="px-6 py-3 rounded-full bg-[#D4AF37] hover:bg-[#E5BF47] text-slate-950 font-bold text-sm whitespace-nowrap shadow-md transition-all hover:scale-105"
          >
            Call 07300506803
          </a>
        </div>

      </div>
    </section>
  );
};
