"use client";

import React, { useState, useEffect } from "react";
import { X, ShieldCheck, Home, ArrowRight, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface HomeValueModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (msg: string) => void;
}

export function HomeValueModal({ isOpen, onClose, onSuccess }: HomeValueModalProps) {
  const [propertyAddress, setPropertyAddress] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [timeframe, setTimeframe] = useState("Exploring options (3-6 months)");
  const [gotcha, setGotcha] = useState(""); // Honeypot field
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Prevent background body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);
    setLoading(true);

    try {
      const response = await fetch("/api/home-value", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-jonathan-client": "secure-jonathan-nj-v1", // Client secret token
        },
        body: JSON.stringify({
          propertyAddress,
          name,
          email,
          phone,
          timeframe,
          _gotcha: gotcha, // honeypot
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Unable to submit request.");
      }

      // Success
      setPropertyAddress("");
      setName("");
      setEmail("");
      setPhone("");
      onClose();
      onSuccess(
        result.message ||
          "Your home valuation request has been submitted. Jonathan will review current market comps and contact you shortly."
      );
    } catch (err: any) {
      setErrorMsg(err.message || "An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#161515]/80 backdrop-blur-sm transition-opacity"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="relative w-full max-w-xl bg-[#F6F3ED] rounded-2xl shadow-2xl border border-[#D8D3CB] overflow-hidden z-10"
            role="dialog"
            aria-modal="true"
            aria-labelledby="valuation-modal-title"
          >
            {/* Header banner */}
            <div className="bg-[#481F25] text-[#F6F3ED] px-6 py-5 flex items-start justify-between">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#D8D3CB] font-semibold block mb-1">
                  Personalized Seller Analysis
                </span>
                <h3
                  id="valuation-modal-title"
                  className="font-serif-nj text-2xl text-[#FFFFFF] font-normal"
                >
                  Request a New Jersey Home Valuation
                </h3>
              </div>
              <button
                onClick={onClose}
                className="text-[#D8D3CB] hover:text-[#FFFFFF] transition-colors p-1.5 rounded-lg hover:bg-white/10"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Form content */}
            <div className="p-6 md:p-8">
              <p className="text-[#57524C] text-sm leading-relaxed mb-6">
                Online algorithmic estimates fail to capture upgrades, layout flow, and street-level demand. 
                Jonathan performs a thorough manual Comparative Market Analysis (CMA) tailored specifically to your home.
              </p>

              {errorMsg && (
                <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-700 text-sm rounded-lg">
                  {errorMsg}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Honeypot field (hidden from real users) */}
                <input
                  type="text"
                  name="_gotcha"
                  value={gotcha}
                  onChange={(e) => setGotcha(e.target.value)}
                  style={{ display: "none" }}
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                />

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#161515] mb-1.5">
                    Property Address <span className="text-[#481F25]">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      required
                      placeholder="e.g. 142 Montrose Ave, Rutherford, NJ 07070"
                      value={propertyAddress}
                      onChange={(e) => setPropertyAddress(e.target.value)}
                      className="w-full px-4 py-3 bg-white border border-[#D8D3CB] rounded-lg text-sm text-[#161515] placeholder-[#857F76] focus:border-[#481F25] focus:ring-1 focus:ring-[#481F25] outline-none transition-all"
                    />
                    <Home className="w-4 h-4 text-[#857F76] absolute right-3.5 top-3.5 pointer-events-none" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#161515] mb-1.5">
                      Your Name <span className="text-[#481F25]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="First & Last Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-3 bg-white border border-[#D8D3CB] rounded-lg text-sm text-[#161515] placeholder-[#857F76] focus:border-[#481F25] focus:ring-1 focus:ring-[#481F25] outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#161515] mb-1.5">
                      Phone Number <span className="text-[#481F25]">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="(201) 555-0123"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-4 py-3 bg-white border border-[#D8D3CB] rounded-lg text-sm text-[#161515] placeholder-[#857F76] focus:border-[#481F25] focus:ring-1 focus:ring-[#481F25] outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#161515] mb-1.5">
                    Email Address <span className="text-[#481F25]">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 bg-white border border-[#D8D3CB] rounded-lg text-sm text-[#161515] placeholder-[#857F76] focus:border-[#481F25] focus:ring-1 focus:ring-[#481F25] outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#161515] mb-1.5">
                    Estimated Selling Timeline
                  </label>
                  <select
                    value={timeframe}
                    onChange={(e) => setTimeframe(e.target.value)}
                    className="w-full px-4 py-3 bg-white border border-[#D8D3CB] rounded-lg text-sm text-[#161515] focus:border-[#481F25] focus:ring-1 focus:ring-[#481F25] outline-none transition-all"
                  >
                    <option value="Ready to sell immediately (0-30 days)">Ready to sell immediately (0-30 days)</option>
                    <option value="Planning for next 1-3 months">Planning for next 1-3 months</option>
                    <option value="Exploring options (3-6 months)">Exploring options (3-6 months)</option>
                    <option value="Just curious about market value">Just curious about market value</option>
                  </select>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 px-6 bg-[#481F25] hover:bg-[#35161A] text-white font-medium text-sm tracking-wider uppercase rounded-lg shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Preparing Request...
                      </>
                    ) : (
                      <>
                        Get My Home Value
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>

                <div className="flex items-center justify-center gap-2 text-xs text-[#857F76] pt-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#9B6B52]" />
                  <span>No obligation. No pressure. Strict privacy protection.</span>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
