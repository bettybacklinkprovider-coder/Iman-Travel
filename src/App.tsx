import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Destinations } from './components/Destinations';
import { Commitment } from './components/Commitment';
import { Gallery } from './components/Gallery';
import { Testimonials } from './components/Testimonials';
import { ContactSection } from './components/ContactSection';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { DestinationModal } from './components/DestinationModal';
import { TripPlannerModal } from './components/TripPlannerModal';
import { ServiceModal } from './components/ServiceModal';
import { Destination, TravelService } from './types';

export default function App() {
  const [isTripPlannerOpen, setIsTripPlannerOpen] = useState(false);
  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null);
  const [selectedService, setSelectedService] = useState<TravelService | null>(null);
  const [plannerPrefillDest, setPlannerPrefillDest] = useState('');
  const [plannerPrefillCategory, setPlannerPrefillCategory] = useState('holiday');

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenTripPlannerWithPrefill = (destName: string = '', cat: string = 'holiday') => {
    setPlannerPrefillDest(destName);
    setPlannerPrefillCategory(cat);
    setIsTripPlannerOpen(true);
  };

  const handleQuickSearch = (destination: string, type: string) => {
    const destMap: Record<string, string> = {
      dubai: 'Dubai, UAE',
      turkey: 'Turkey (Istanbul & Cappadocia)',
      saudi: 'Saudi Arabia (Makkah & Madinah Umrah)',
      malaysia: 'Malaysia (Kuala Lumpur & Langkawi)',
      uk: 'United Kingdom (London)',
      maldives: 'Maldives Luxury Island',
      custom: 'Custom International Destination'
    };
    handleOpenTripPlannerWithPrefill(destMap[destination] || destination, type);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-[#D4AF37] selection:text-slate-950">
      
      {/* Sticky Top Header */}
      <Header
        onOpenTripPlanner={() => handleOpenTripPlannerWithPrefill()}
        onNavigateSection={scrollToSection}
      />

      {/* Main Content Flow */}
      <main className="flex-1">
        
        {/* 1. Hero Section */}
        <Hero
          onOpenTripPlanner={() => handleOpenTripPlannerWithPrefill()}
          onNavigateContact={() => scrollToSection('contact')}
          onQuickSearch={handleQuickSearch}
        />

        {/* 2. Services Section: Everything You Need for Your Journey */}
        <Services
          onSelectService={(service) => setSelectedService(service)}
        />

        {/* 3. Destinations Section: Discover Amazing Destinations */}
        <Destinations
          onSelectDestination={(dest) => setSelectedDestination(dest)}
          onOpenTripPlanner={() => handleOpenTripPlannerWithPrefill()}
        />

        {/* 4. Commitment & Experience Section: Your Journey, Our Commitment */}
        <Commitment
          onOpenTripPlanner={() => handleOpenTripPlannerWithPrefill()}
        />

        {/* 5. Realistic Travel Photo Gallery */}
        <Gallery />

        {/* 6. Testimonials */}
        <Testimonials />

        {/* 7. Contact Details & Direct Form */}
        <ContactSection />

        {/* 8. Final CTA Section */}
        <FinalCTA
          onOpenTripPlanner={() => handleOpenTripPlannerWithPrefill()}
        />

      </main>

      {/* Footer */}
      <Footer
        onNavigateSection={scrollToSection}
        onOpenTripPlanner={() => handleOpenTripPlannerWithPrefill()}
      />

      {/* Modals & Dialogs */}
      <DestinationModal
        destination={selectedDestination}
        onClose={() => setSelectedDestination(null)}
        onBookNow={(destTitle) => handleOpenTripPlannerWithPrefill(destTitle)}
      />

      <TripPlannerModal
        isOpen={isTripPlannerOpen}
        onClose={() => setIsTripPlannerOpen(false)}
        initialDestination={plannerPrefillDest}
        initialCategory={plannerPrefillCategory}
      />

      <ServiceModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
      />

    </div>
  );
}
