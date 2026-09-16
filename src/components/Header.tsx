import React, { useState, useEffect } from 'react';
import { Phone, MessageSquare, Menu, X, Globe, Calendar, Compass } from 'lucide-react';
import { Logo } from './Logo';

interface HeaderProps {
  onOpenTripPlanner: () => void;
  onNavigateSection: (sectionId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenTripPlanner, onNavigateSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    onNavigateSection(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-slate-900/95 backdrop-blur-md text-white shadow-xl border-b border-[#D4AF37]/30 py-3' 
        : 'bg-gradient-to-b from-slate-950/90 via-slate-950/60 to-transparent text-white py-4'
    }`}>
      {/* Top Banner Bar with Phone & WhatsApp */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <a href="#" onClick={(e) => { e.preventDefault(); handleNavClick('hero'); }} className="cursor-pointer">
            <Logo variant="light" size="md" />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-8 text-sm font-medium">
            <button 
              onClick={() => handleNavClick('services')}
              className="text-slate-200 hover:text-[#D4AF37] transition-colors py-1 cursor-pointer"
            >
              Services
            </button>
            <button 
              onClick={() => handleNavClick('destinations')}
              className="text-slate-200 hover:text-[#D4AF37] transition-colors py-1 cursor-pointer"
            >
              Destinations
            </button>
            <button 
              onClick={() => handleNavClick('commitment')}
              className="text-slate-200 hover:text-[#D4AF37] transition-colors py-1 cursor-pointer"
            >
              About Us
            </button>
            <button 
              onClick={() => handleNavClick('gallery')}
              className="text-slate-200 hover:text-[#D4AF37] transition-colors py-1 cursor-pointer"
            >
              Gallery
            </button>
            <button 
              onClick={() => handleNavClick('contact')}
              className="text-slate-200 hover:text-[#D4AF37] transition-colors py-1 cursor-pointer"
            >
              Contact Us
            </button>
          </nav>

          {/* Contact & CTA Buttons */}
          <div className="hidden sm:flex items-center space-x-4">
            {/* Phone Quick Click */}
            <a 
              href="tel:07300506803" 
              className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800/80 hover:bg-slate-700 border border-[#D4AF37]/40 text-slate-100 hover:text-[#D4AF37] text-xs md:text-sm font-semibold transition-all shadow-sm"
            >
              <Phone className="w-3.5 h-3.5 text-[#D4AF37] animate-pulse" />
              <span>07300506803</span>
            </a>

            {/* WhatsApp Quick Chat */}
            <a 
              href="https://wa.me/447300506803?text=Hello%20Iman%20Travel!%20I%20would%20like%20to%20inquire%20about%20a%20trip." 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="WhatsApp Us"
              className="p-2 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-md transition-all hover:scale-105"
              title="Chat on WhatsApp"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
            </a>

            {/* Plan Your Trip Button */}
            <button
              onClick={onOpenTripPlanner}
              className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#B48811] hover:from-[#E5BF47] hover:to-[#C59921] text-slate-950 font-bold text-xs md:text-sm shadow-md transition-all hover:scale-105 active:scale-95 cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>Plan Your Trip</span>
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex sm:hidden items-center space-x-2">
            <a 
              href="tel:07300506803" 
              className="flex items-center gap-1 px-2.5 py-1.5 rounded-full bg-[#D4AF37] text-slate-950 font-bold text-xs"
            >
              <Phone className="w-3 h-3" />
              <span>Call</span>
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-800 text-slate-200 hover:text-white"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-900/98 border-b border-[#D4AF37]/30 px-4 pt-3 pb-6 space-y-3 mt-2 animate-fadeIn">
          <button 
            onClick={() => handleNavClick('services')}
            className="block w-full text-left py-2 px-3 text-slate-200 hover:bg-slate-800 hover:text-[#D4AF37] rounded-md font-medium"
          >
            Services
          </button>
          <button 
            onClick={() => handleNavClick('destinations')}
            className="block w-full text-left py-2 px-3 text-slate-200 hover:bg-slate-800 hover:text-[#D4AF37] rounded-md font-medium"
          >
            Destinations
          </button>
          <button 
            onClick={() => handleNavClick('commitment')}
            className="block w-full text-left py-2 px-3 text-slate-200 hover:bg-slate-800 hover:text-[#D4AF37] rounded-md font-medium"
          >
            About Us & Commitment
          </button>
          <button 
            onClick={() => handleNavClick('gallery')}
            className="block w-full text-left py-2 px-3 text-slate-200 hover:bg-slate-800 hover:text-[#D4AF37] rounded-md font-medium"
          >
            Photo Gallery
          </button>
          <button 
            onClick={() => handleNavClick('contact')}
            className="block w-full text-left py-2 px-3 text-slate-200 hover:bg-slate-800 hover:text-[#D4AF37] rounded-md font-medium"
          >
            Contact Details
          </button>

          <div className="pt-3 border-t border-slate-800 space-y-2">
            <div className="flex items-center justify-between text-slate-300 text-sm">
              <span className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#D4AF37]" /> Direct Call:
              </span>
              <a href="tel:07300506803" className="font-bold text-[#D4AF37]">07300506803</a>
            </div>
            
            <div className="grid grid-cols-2 gap-2 pt-2">
              <a 
                href="https://wa.me/447300506803?text=Hello%20Iman%20Travel!%20I%20would%20like%20to%20inquire%20about%20a%20trip." 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-emerald-600 text-white font-semibold text-xs"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                <span>WhatsApp</span>
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenTripPlanner();
                }}
                className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#B48811] text-slate-950 font-bold text-xs"
              >
                <Compass className="w-4 h-4" />
                <span>Plan Trip</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
