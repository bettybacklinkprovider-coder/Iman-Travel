import React from 'react';
import { Phone, Mail, MapPin, Globe, ShieldCheck, Heart } from 'lucide-react';
import { Logo } from './Logo';

interface FooterProps {
  onNavigateSection: (sectionId: string) => void;
  onOpenTripPlanner: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigateSection, onOpenTripPlanner }) => {
  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-900 pt-16 pb-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          
          {/* Brand & About */}
          <div className="lg:col-span-2 space-y-4">
            <Logo variant="light" size="lg" />
            <p className="text-xs sm:text-sm text-slate-400 font-light leading-relaxed max-w-sm">
              Your trusted travel partner for easy bookings, exciting destinations and unforgettable journeys. ATOL verified & dedicated 24/7 service.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <div className="p-3 bg-slate-900 border border-[#D4AF37]/30 rounded-2xl flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#D4AF37]" />
                <div>
                  <span className="text-[10px] text-slate-400 block font-semibold uppercase">Customer Hotline</span>
                  <a href="tel:07300506803" className="text-base font-bold text-[#D4AF37] hover:underline">
                    07300506803
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-[#D4AF37] pl-2">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button onClick={() => onNavigateSection('hero')} className="hover:text-[#D4AF37] transition-colors cursor-pointer">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection('services')} className="hover:text-[#D4AF37] transition-colors cursor-pointer">
                  Everything You Need
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection('destinations')} className="hover:text-[#D4AF37] transition-colors cursor-pointer">
                  Discover Destinations
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection('commitment')} className="hover:text-[#D4AF37] transition-colors cursor-pointer">
                  Our Commitment
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection('gallery')} className="hover:text-[#D4AF37] transition-colors cursor-pointer">
                  Travel Gallery
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection('contact')} className="hover:text-[#D4AF37] transition-colors cursor-pointer">
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Destinations */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-[#D4AF37] pl-2">
              Popular Destinations
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li><span className="text-[#D4AF37]">🇦🇪</span> Dubai Skyline & Desert</li>
              <li><span className="text-[#D4AF37]">🇹🇷</span> Turkey & Cappadocia</li>
              <li><span className="text-[#D4AF37]">🇸🇦</span> Saudi Arabia & Umrah</li>
              <li><span className="text-[#D4AF37]">🇲🇾</span> Malaysia & Langkawi</li>
              <li><span className="text-[#D4AF37]">🇬🇧</span> UK & London Landmarks</li>
              <li><span className="text-[#D4AF37]">🏝️</span> Maldives Luxury Overwater</li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-[#D4AF37] pl-2">
              Get in Touch
            </h4>
            <ul className="space-y-3 text-xs text-slate-300">
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <span>Call: <a href="tel:07300506803" className="font-bold text-[#D4AF37]">07300506803</a></span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <span>info@imantravel.co.uk</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <span>London, United Kingdom</span>
              </li>
              <li className="pt-2">
                <button
                  onClick={onOpenTripPlanner}
                  className="w-full py-2.5 rounded-xl bg-[#D4AF37] text-slate-950 font-bold text-xs hover:bg-[#E5BF47] transition-colors cursor-pointer"
                >
                  Plan Your Trip
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© {new Date().getFullYear()} Iman Travel Agency. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>ATOL Protected Travel Agency • 24/7 Helpline: 07300506803</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
