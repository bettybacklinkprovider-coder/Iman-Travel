import React, { useState } from 'react';
import { X, CheckCircle2, Phone, MessageSquare, Send, Plane } from 'lucide-react';
import { TravelService } from '../types';

interface ServiceModalProps {
  service: TravelService | null;
  onClose: () => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({ service, onClose }) => {
  if (!service) return null;

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [details, setDetails] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto animate-fadeIn">
      <div 
        className="relative w-full max-w-xl bg-slate-900 border border-[#D4AF37]/50 rounded-3xl overflow-hidden shadow-2xl my-auto text-white p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-slate-800 text-slate-300 hover:text-white"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4AF37]/20 text-[#D4AF37] text-xs font-bold w-fit mb-3">
              <Plane className="w-3.5 h-3.5" /> Service Request
            </div>

            <h2 className="text-2xl font-bold font-serif-heading text-white mb-1">
              {service.title}
            </h2>
            <p className="text-xs text-slate-300 mb-6 font-light">
              {service.description}
            </p>

            <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 mb-6">
              <h4 className="text-xs font-bold text-[#D4AF37] uppercase tracking-wider mb-2">Key Service Features</h4>
              <ul className="grid grid-cols-2 gap-2">
                {service.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-1.5 text-xs text-slate-200">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Your Name *</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Hassan Raza"
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#D4AF37]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Phone / WhatsApp Number *</label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="e.g. 07300506803"
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#D4AF37]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Specific Requirements</label>
                <textarea
                  rows={3}
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                  placeholder={`Tell us details regarding your ${service.title.toLowerCase()} request...`}
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#D4AF37]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#B48811] text-slate-950 font-black text-sm uppercase tracking-wider shadow-lg flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Submit Service Inquiry</span>
              </button>
            </form>
          </div>
        ) : (
          <div className="text-center py-8 space-y-4">
            <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
            <h3 className="text-xl font-bold font-serif-heading text-white">Inquiry Received!</h3>
            <p className="text-xs text-slate-300">
              Our travel specialists will reach out to you shortly regarding <span className="text-[#D4AF37] font-bold">{service.title}</span>.
            </p>
            <div className="pt-2">
              <a
                href="tel:07300506803"
                className="px-6 py-2.5 rounded-xl bg-[#D4AF37] text-slate-950 font-bold text-xs inline-flex items-center gap-2"
              >
                <Phone className="w-4 h-4" /> Call 07300506803
              </a>
            </div>
            <button onClick={onClose} className="text-xs text-slate-400 block mx-auto pt-2">
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
