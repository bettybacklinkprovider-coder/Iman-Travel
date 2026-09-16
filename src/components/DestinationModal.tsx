import React, { useState } from 'react';
import { X, MapPin, Clock, Star, CheckCircle2, Phone, MessageSquare, Calendar, Plane, ShieldCheck } from 'lucide-react';
import { Destination } from '../types';

interface DestinationModalProps {
  destination: Destination | null;
  onClose: () => void;
  onBookNow: (destTitle: string) => void;
}

export const DestinationModal: React.FC<DestinationModalProps> = ({ 
  destination, 
  onClose,
  onBookNow 
}) => {
  if (!destination) return null;

  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const images = destination.gallery && destination.gallery.length > 0 
    ? destination.gallery 
    : [destination.image];

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto animate-fadeIn">
      <div 
        className="relative w-full max-w-4xl bg-slate-900 border border-[#D4AF37]/50 rounded-3xl overflow-hidden shadow-2xl my-auto text-white"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-slate-950/80 hover:bg-slate-800 text-white hover:text-[#D4AF37] transition-colors border border-slate-700"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero Image Showcase */}
        <div className="relative h-72 sm:h-96 w-full">
          <img
            src={images[activeImageIndex]}
            alt={destination.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />

          {/* Overlay Tag Details */}
          <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 text-xs text-[#D4AF37] font-bold mb-1">
                <MapPin className="w-4 h-4" /> {destination.country}
                <span className="text-slate-400">•</span>
                <span className="flex items-center gap-1 text-amber-400">
                  <Star className="w-3.5 h-3.5 fill-current" /> {destination.rating} ({destination.reviewsCount} reviews)
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-serif-heading text-white">
                {destination.title}
              </h2>
            </div>

            <div className="bg-[#D4AF37] text-slate-950 px-4 py-2 rounded-2xl font-black text-xl shadow-lg text-center sm:text-right shrink-0">
              {destination.price} <span className="text-xs font-semibold block sm:inline">/ person</span>
            </div>
          </div>
        </div>

        {/* Thumbnail Gallery Row if multiple images */}
        {images.length > 1 && (
          <div className="flex gap-2 p-4 bg-slate-950 overflow-x-auto border-b border-slate-800">
            {images.map((imgUrl, i) => (
              <button
                key={i}
                onClick={() => setActiveImageIndex(i)}
                className={`h-16 w-24 rounded-xl overflow-hidden border-2 transition-all shrink-0 ${
                  activeImageIndex === i ? 'border-[#D4AF37] scale-105' : 'border-slate-800 opacity-60 hover:opacity-100'
                }`}
              >
                <img src={imgUrl} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        )}

        {/* Modal Body Content */}
        <div className="p-6 sm:p-8 space-y-8 max-h-[50vh] overflow-y-auto">
          
          {/* Package Description */}
          <div>
            <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
              <Plane className="w-5 h-5 text-[#D4AF37]" /> Package Overview
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed font-light">
              {destination.description}
            </p>
          </div>

          {/* Key Highlights & Inclusions Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Highlights */}
            <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800">
              <h4 className="text-sm font-bold text-[#D4AF37] mb-3 uppercase tracking-wider">
                🌟 Tour Highlights
              </h4>
              <ul className="space-y-2">
                {destination.highlights.map((hl, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                    <span>{hl}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Inclusions */}
            <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800">
              <h4 className="text-sm font-bold text-emerald-400 mb-3 uppercase tracking-wider">
                ✅ Included Services
              </h4>
              <ul className="space-y-2">
                {destination.includedServices.map((inc, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-slate-200">
                    <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{inc}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Itinerary Timeline */}
          {destination.itinerarySummary && destination.itinerarySummary.length > 0 && (
            <div>
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-[#D4AF37]" /> Itinerary Outline ({destination.duration})
              </h3>
              <div className="space-y-3">
                {destination.itinerarySummary.map((step, idx) => (
                  <div key={idx} className="flex items-start gap-3 bg-slate-950 p-3.5 rounded-xl border border-slate-800 text-xs">
                    <span className="px-2.5 py-1 rounded-lg bg-[#D4AF37]/20 text-[#D4AF37] font-bold shrink-0">
                      Step {idx + 1}
                    </span>
                    <span className="text-slate-200 pt-0.5">{step}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer Actions */}
        <div className="p-6 bg-slate-950 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <p className="text-xs text-slate-400">Need personal customization or family discounts?</p>
            <p className="text-sm font-bold text-[#D4AF37]">Call Us Direct: 07300506803</p>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <a
              href={`https://wa.me/447300506803?text=Hello%20Iman%20Travel!%20I%20am%20interested%20in%20booking%20the%20${encodeURIComponent(destination.title)}%20package.`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition-colors"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              <span>WhatsApp Inquiry</span>
            </a>

            <button
              onClick={() => {
                onClose();
                onBookNow(destination.title);
              }}
              className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#B48811] text-slate-950 font-extrabold text-xs shadow-lg hover:scale-105 transition-transform cursor-pointer"
            >
              <Plane className="w-4 h-4 fill-slate-950" />
              <span>Book / Request Quote</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
