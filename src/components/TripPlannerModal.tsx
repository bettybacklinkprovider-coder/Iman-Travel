import React, { useState, useEffect } from 'react';
import { X, Calendar, Users, MapPin, Plane, Send, CheckCircle2, Phone, MessageSquare } from 'lucide-react';

interface TripPlannerModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialDestination?: string;
  initialCategory?: string;
}

export const TripPlannerModal: React.FC<TripPlannerModalProps> = ({
  isOpen,
  onClose,
  initialDestination = '',
  initialCategory = 'holiday'
}) => {
  if (!isOpen) return null;

  const [destination, setDestination] = useState(initialDestination || 'Dubai, UAE');
  const [travelType, setTravelType] = useState(initialCategory || 'holiday');
  const [departureCity, setDepartureCity] = useState('London (LHR/LGW)');
  const [travelDate, setTravelDate] = useState('');
  const [passengers, setPassengers] = useState(2);
  const [budgetRange, setBudgetRange] = useState('Standard (£500 - £1000/person)');
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [specialNotes, setSpecialNotes] = useState('');
  
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialDestination) {
      setDestination(initialDestination);
    }
  }, [initialDestination]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto animate-fadeIn">
      <div 
        className="relative w-full max-w-2xl bg-slate-900 border border-[#D4AF37]/50 rounded-3xl overflow-hidden shadow-2xl my-auto text-white p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            {/* Header */}
            <div className="mb-6 text-center sm:text-left">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#D4AF37]/20 text-[#D4AF37] text-xs font-bold uppercase mb-2">
                <Plane className="w-3.5 h-3.5 fill-current" /> Plan Your Trip
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-serif-heading text-white">
                Customize Your Dream Itinerary
              </h2>
              <p className="text-slate-300 text-xs sm:text-sm mt-1">
                Tell us your travel details and our Iman Travel consultants will find the best fares & hotel deals for you.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Category Pills */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">Trip Type</label>
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                  {[
                    { id: 'holiday', label: '🏖️ Holiday' },
                    { id: 'umrah', label: '🕌 Umrah/Hajj' },
                    { id: 'business', label: '💼 Business' },
                    { id: 'visa', label: '📄 Visa Only' }
                  ].map((t) => (
                    <button
                      key={t.id}
                      type="button"
                      onClick={() => setTravelType(t.id)}
                      className={`py-2 px-2.5 rounded-xl text-xs font-bold transition-all ${
                        travelType === t.id
                          ? 'bg-[#D4AF37] text-slate-950 shadow-md'
                          : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                      }`}
                    >
                      {t.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Destination & Departure City */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" /> Destination City / Country
                  </label>
                  <input
                    type="text"
                    required
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    placeholder="e.g. Dubai, Turkey, Makkah Umrah, London"
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1 flex items-center gap-1">
                    <Plane className="w-3.5 h-3.5 text-[#D4AF37]" /> Departure Airport / City
                  </label>
                  <input
                    type="text"
                    required
                    value={departureCity}
                    onChange={(e) => setDepartureCity(e.target.value)}
                    placeholder="e.g. London Heathrow, Manchester, Birmingham"
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>
              </div>

              {/* Dates & Passengers & Budget */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-[#D4AF37]" /> Travel Date / Month
                  </label>
                  <input
                    type="date"
                    value={travelDate}
                    onChange={(e) => setTravelDate(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-sm text-white focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1 flex items-center gap-1">
                    <Users className="w-3.5 h-3.5 text-[#D4AF37]" /> Travelers
                  </label>
                  <select
                    value={passengers}
                    onChange={(e) => setPassengers(Number(e.target.value))}
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-sm text-white focus:outline-none focus:border-[#D4AF37]"
                  >
                    <option value={1}>1 Traveler (Solo)</option>
                    <option value={2}>2 Travelers (Couple)</option>
                    <option value={3}>3 Travelers</option>
                    <option value={4}>4-6 Family Group</option>
                    <option value={7}>7+ Large Group</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Budget Preference</label>
                  <select
                    value={budgetRange}
                    onChange={(e) => setBudgetRange(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-sm text-white focus:outline-none focus:border-[#D4AF37]"
                  >
                    <option>Economy Best Fares</option>
                    <option>Standard (£500 - £1000)</option>
                    <option>VIP / 5★ Luxury</option>
                  </select>
                </div>
              </div>

              {/* Contact Info */}
              <div className="pt-2 border-t border-slate-800 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Your Full Name *</label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Tariq Ahmad"
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Phone Number (WhatsApp) *</label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. 07300506803"
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Email Address</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your.email@example.com"
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#D4AF37]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Special Requests or Preferences</label>
                <textarea
                  rows={2}
                  value={specialNotes}
                  onChange={(e) => setSpecialNotes(e.target.value)}
                  placeholder="e.g. Need hotel near Haramain, extra legroom seats, family rooms, etc."
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-2 text-sm text-white focus:outline-none focus:border-[#D4AF37]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#F59E0B] to-[#B48811] hover:from-[#E5BF47] hover:to-[#C59921] text-slate-950 font-black text-sm uppercase tracking-wider shadow-lg flex items-center justify-center gap-2 cursor-pointer transition-all hover:scale-102"
              >
                <Send className="w-4 h-4 fill-slate-950" />
                <span>Submit Trip Plan Request</span>
              </button>

            </form>
          </div>
        ) : (
          /* Confirmation Screen */
          <div className="text-center py-8 space-y-6">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/50 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl font-bold font-serif-heading text-white">
                Trip Inquiry Received!
              </h3>
              <p className="text-sm text-slate-300 max-w-md mx-auto">
                Thank you, <span className="text-[#D4AF37] font-bold">{fullName || 'Valued Traveler'}</span>! Our Iman Travel specialist will review your request for <span className="text-white font-bold">{destination}</span> and contact you shortly with custom package quotes.
              </p>
            </div>

            <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-3 max-w-md mx-auto text-left text-xs text-slate-300">
              <div className="flex justify-between">
                <span className="text-slate-400">Destination:</span>
                <span className="font-bold text-white">{destination}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Travelers:</span>
                <span className="font-bold text-white">{passengers} Person(s)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Departure:</span>
                <span className="font-bold text-white">{departureCity}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <a
                href="tel:07300506803"
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#D4AF37] text-slate-950 font-bold text-xs flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>Call 07300506803 Now</span>
              </a>

              <a
                href={`https://wa.me/447300506803?text=Hello%20Iman%20Travel!%20I%20just%20submitted%20a%20trip%20request%20for%20${encodeURIComponent(destination)}.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-emerald-600 text-white font-bold text-xs flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                <span>WhatsApp Instant Connect</span>
              </a>
            </div>

            <button
              onClick={handleReset}
              className="text-xs text-slate-400 hover:text-white underline pt-4"
            >
              Close Window
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
