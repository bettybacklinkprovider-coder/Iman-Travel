import React from 'react';
import { ShieldCheck, Clock, Award, HeartHandshake, Headphones, Sparkles, CheckCircle2, Phone } from 'lucide-react';
import { COMPANY_STATS } from '../data/travelData';

interface CommitmentProps {
  onOpenTripPlanner: () => void;
}

export const Commitment: React.FC<CommitmentProps> = ({ onOpenTripPlanner }) => {
  const commitments = [
    {
      icon: <ShieldCheck className="w-8 h-8 text-[#D4AF37]" />,
      title: 'Trusted & Transparent Bookings',
      description: 'Zero hidden taxes or surprise surge fees. What we quote is what you pay, with full ATOL protection for your financial security.'
    },
    {
      icon: <Headphones className="w-8 h-8 text-[#D4AF37]" />,
      title: '24/7 Dedicated Support',
      description: 'From pre-flight visa checks to emergency hotel assistance while abroad, our London team is just a call or WhatsApp away.'
    },
    {
      icon: <HeartHandshake className="w-8 h-8 text-[#D4AF37]" />,
      title: 'Tailor-Made Comfort',
      description: 'Whether you are traveling solo for business or taking your extended family for Umrah, we customize every detail to match your budget.'
    },
    {
      icon: <Award className="w-8 h-8 text-[#D4AF37]" />,
      title: 'Exclusive Partner Tariffs',
      description: 'Benefit from discounted bulk airline fares, hotel upgrades, and fast-track airport lounge access.'
    }
  ];

  return (
    <section id="commitment" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      
      {/* Background patterns */}
      <div className="absolute -bottom-10 -right-10 w-80 h-80 bg-[#D4AF37]/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-800 border border-[#D4AF37]/40 text-[#D4AF37] text-xs font-bold uppercase tracking-widest">
            Why Choose Iman Travel
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-serif-heading text-white tracking-tight">
            Your Journey, Our Commitment
          </h2>

          <p className="text-slate-300 text-base sm:text-lg font-light leading-relaxed">
            We believe travel should be enriching, stress-free, and accessible. Here is why thousands of travelers and families trust Iman Travel year after year.
          </p>
        </div>

        {/* Top Feature Visual Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          
          {/* Left Grid Images Showcase */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4 relative">
            
            {/* Main Image: Modern Airport */}
            <div className="rounded-3xl overflow-hidden shadow-2xl border border-slate-800 h-64 sm:h-72">
              <img 
                src="https://images.unsplash.com/photo-1530521954074-e64f6810b32d?auto=format&fit=crop&w=800&q=80" 
                alt="Modern International Airport" 
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Second Image: Family Vacation */}
            <div className="rounded-3xl overflow-hidden shadow-2xl border border-slate-800 h-64 sm:h-72 mt-8">
              <img 
                src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80" 
                alt="Family enjoying vacation" 
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Third Image: Business Traveler */}
            <div className="rounded-3xl overflow-hidden shadow-2xl border border-slate-800 h-52 sm:h-60 -mt-6">
              <img 
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80" 
                alt="Business traveler at airport" 
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Fourth Image: Luxury Hotel */}
            <div className="rounded-3xl overflow-hidden shadow-2xl border border-slate-800 h-52 sm:h-60 mt-2">
              <img 
                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80" 
                alt="Luxury Hotel Destination" 
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Floating Trust Badge */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-950/95 border-2 border-[#D4AF37] p-4 rounded-2xl shadow-2xl backdrop-blur-md text-center max-w-[200px]">
              <Sparkles className="w-8 h-8 text-[#D4AF37] mx-auto mb-1" />
              <p className="text-xs font-bold text-white uppercase tracking-wider">Premium Quality</p>
              <p className="text-[11px] text-slate-300">Guaranteed Satisfaction</p>
            </div>

          </div>

          {/* Right Content */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-2xl sm:text-3xl font-extrabold font-serif-heading text-white">
              Crafting Memorable Journeys with Perfection & Care
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed font-light">
              At Iman Travel, we recognize that every trip is unique — whether it is a spiritual Umrah journey, a sun-soaked family vacation in Malaysia, or a business summit in Dubai. We handle all logistics so you can focus on creating lifelong memories.
            </p>

            <div className="space-y-4 pt-2">
              {[
                'Instant booking confirmations & e-tickets',
                'Handpicked hotels verified for comfort, safety & cleanliness',
                'Customized Umrah packages with Haramain bullet train & Ziyarat',
                'Dedicated 24/7 UK helpline: 07300506803'
              ].map((point, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#D4AF37] shrink-0" />
                  <span className="text-sm font-semibold text-slate-200">{point}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 flex items-center gap-4">
              <button
                onClick={onOpenTripPlanner}
                className="px-6 py-3.5 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#B48811] text-slate-950 font-bold text-sm shadow-lg hover:scale-105 transition-transform cursor-pointer"
              >
                Plan Your Custom Trip
              </button>

              <a
                href="tel:07300506803"
                className="px-6 py-3.5 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-100 font-bold text-sm border border-slate-700 flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#D4AF37]" />
                <span>07300506803</span>
              </a>
            </div>
          </div>

        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {commitments.map((c, idx) => (
            <div 
              key={idx}
              className="bg-slate-950 border border-slate-800 hover:border-[#D4AF37]/50 p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="mb-4 p-3 rounded-xl bg-slate-900 border border-slate-800 w-fit">
                {c.icon}
              </div>
              <h4 className="text-lg font-bold text-white mb-2">{c.title}</h4>
              <p className="text-xs text-slate-300 font-light leading-relaxed">{c.description}</p>
            </div>
          ))}
        </div>

        {/* Company Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-slate-950 border border-[#D4AF37]/30 rounded-3xl p-8 text-center">
          {COMPANY_STATS.map((stat, idx) => (
            <div key={idx} className="space-y-1">
              <div className="text-3xl sm:text-4xl font-extrabold font-serif-heading text-[#D4AF37]">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-slate-300 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
