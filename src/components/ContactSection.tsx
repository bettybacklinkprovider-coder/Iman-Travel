import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, MessageSquare, Send, CheckCircle2 } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="py-20 bg-slate-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Contact Information & Phone */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-800 border border-[#D4AF37]/40 text-[#D4AF37] text-xs font-bold uppercase tracking-widest">
                Contact Iman Travel
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold font-serif-heading text-white">
                We Are Here to Help Plan Your Next Journey
              </h2>

              <p className="text-slate-300 text-sm sm:text-base font-light leading-relaxed">
                Have questions regarding flight ticket prices, visa requirements, hotel upgrades, or Umrah packages? Reach out to our friendly team today.
              </p>
            </div>

            {/* Direct Phone Highlight Box */}
            <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border-2 border-[#D4AF37] rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4AF37]/10 rounded-full filter blur-xl" />
              
              <div className="flex items-center gap-4 mb-4">
                <div className="p-4 rounded-2xl bg-[#D4AF37] text-slate-950 font-black shadow-lg animate-bounce">
                  <Phone className="w-8 h-8" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-slate-400 font-bold block">Direct Telephone Hotline</span>
                  <a href="tel:07300506803" className="text-2xl sm:text-3xl font-extrabold font-serif-heading text-[#D4AF37] hover:underline">
                    07300506803
                  </a>
                </div>
              </div>

              <p className="text-xs text-slate-300 mb-4">
                Available 24/7 for travel bookings, flight updates, and emergency support.
              </p>

              <div className="flex items-center gap-3">
                <a
                  href="tel:07300506803"
                  className="flex-1 py-3 rounded-xl bg-[#D4AF37] hover:bg-[#E5BF47] text-slate-950 font-extrabold text-xs text-center transition-transform hover:scale-102"
                >
                  Call Now
                </a>

                <a
                  href="https://wa.me/447300506803?text=Hello%20Iman%20Travel!%20I%20would%20like%20to%20inquire%20about%20a%20travel%20booking."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs text-center flex items-center justify-center gap-1.5 transition-transform hover:scale-102"
                >
                  <MessageSquare className="w-4 h-4 fill-current" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Office Details */}
            <div className="space-y-4 text-xs sm:text-sm text-slate-300">
              <div className="flex items-start gap-3 bg-slate-950 p-4 rounded-2xl border border-slate-800">
                <MapPin className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-white mb-0.5">Agency Location</h4>
                  <p>Iman Travel Consultancy, High Street, London, United Kingdom</p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-slate-950 p-4 rounded-2xl border border-slate-800">
                <Mail className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-white mb-0.5">Email Inquiries</h4>
                  <p className="text-[#D4AF37] font-semibold">info@imantravel.co.uk</p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-slate-950 p-4 rounded-2xl border border-slate-800">
                <Clock className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-white mb-0.5">Opening Hours</h4>
                  <p>Mon - Sat: 9:00 AM - 7:00 PM | Sun: 10:00 AM - 4:00 PM (Emergency 24/7)</p>
                </div>
              </div>
            </div>

          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7 bg-slate-950 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl">
            {!sent ? (
              <form onSubmit={handleContactSubmit} className="space-y-5">
                <div className="mb-2">
                  <h3 className="text-2xl font-bold font-serif-heading text-white">Send Us a Direct Message</h3>
                  <p className="text-xs text-slate-400 mt-1">Fill out the form below and we will respond within 15 minutes.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Abdullah Khan"
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Phone / Mobile Number *</label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="e.g. 07300506803"
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#D4AF37]"
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
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Message or Travel Requirement</label>
                  <textarea
                    rows={4}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Please specify destination, dates, number of passengers, or any questions..."
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#F59E0B] to-[#B48811] hover:from-[#E5BF47] hover:to-[#C59921] text-slate-950 font-black text-sm uppercase tracking-wider shadow-xl flex items-center justify-center gap-2 cursor-pointer transition-transform active:scale-98"
                >
                  <Send className="w-4 h-4 fill-slate-950" />
                  <span>Send Message to Iman Travel</span>
                </button>
              </form>
            ) : (
              <div className="text-center py-12 space-y-6">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/50 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold font-serif-heading text-white">Message Sent Successfully!</h3>
                <p className="text-sm text-slate-300 max-w-sm mx-auto">
                  Thank you <span className="text-[#D4AF37] font-bold">{name}</span>. Our team will contact you at <span className="text-white font-bold">{phone}</span> shortly.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="px-6 py-2.5 rounded-full bg-slate-800 text-xs text-slate-300 hover:text-white"
                >
                  Send Another Message
                </button>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
