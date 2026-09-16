import React, { useState } from 'react';
import { Camera, X, ZoomIn, MapPin } from 'lucide-react';
import { GALLERY_PHOTOS } from '../data/travelData';

export const Gallery: React.FC = () => {
  const [activePhoto, setActivePhoto] = useState<{ url: string; title: string; caption: string } | null>(null);

  return (
    <section id="gallery" className="py-20 bg-slate-950 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 border border-[#D4AF37]/40 text-[#D4AF37] text-xs font-bold uppercase tracking-widest">
            <Camera className="w-3.5 h-3.5" /> Inspiring Travel Moments
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold font-serif-heading text-white">
            World Destinations Through Our Lens
          </h2>

          <p className="text-slate-300 text-sm sm:text-base font-light">
            Real travel moments from international airports, luxury resorts, historical sights, and family vacations curated by Iman Travel.
          </p>
        </div>

        {/* Masonry / Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {GALLERY_PHOTOS.map((photo, index) => (
            <div
              key={index}
              onClick={() => setActivePhoto(photo)}
              className="group relative h-72 rounded-3xl overflow-hidden border border-slate-800 hover:border-[#D4AF37] cursor-pointer shadow-xl transition-all duration-300 hover:-translate-y-1.5"
            >
              <img
                src={photo.url}
                alt={photo.title}
                className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

              <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-bold text-[#D4AF37] flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" /> Destination Snapshot
                  </span>
                  <div className="p-1.5 rounded-full bg-slate-900/80 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <ZoomIn className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="text-lg font-bold font-serif-heading text-white mb-1">
                  {photo.title}
                </h3>
                <p className="text-xs text-slate-300 font-light opacity-90 line-clamp-2">
                  {photo.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {activePhoto && (
        <div 
          className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setActivePhoto(null)}
        >
          <div 
            className="relative max-w-4xl w-full bg-slate-900 border border-[#D4AF37]/50 rounded-3xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActivePhoto(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-slate-950/80 text-white hover:text-[#D4AF37] z-10 transition-colors"
              aria-label="Close Preview"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="h-[60vh] sm:h-[70vh] w-full relative">
              <img
                src={activePhoto.url}
                alt={activePhoto.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-6 bg-slate-900 border-t border-slate-800">
              <h3 className="text-xl font-bold font-serif-heading text-white mb-1">
                {activePhoto.title}
              </h3>
              <p className="text-sm text-slate-300">
                {activePhoto.caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
