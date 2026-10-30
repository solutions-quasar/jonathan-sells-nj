"use client";

import React, { useState, useEffect } from "react";
import { X, Send, ShieldCheck, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (msg: string) => void;
  initialInterest?: string;
}

export function ContactModal({
  isOpen,
  onClose,
  onSuccess,
  initialInterest = "Selling",
}: ContactModalProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [interest, setInterest] = useState(initialInterest);
  const [message, setMessage] = useState("");
  const [gotcha, setGotcha] = useState(""); // Honeypot
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  useEffect(() => {
    if (initialInterest) {
      setInterest(initialInterest);
    }
  }, [initialInterest]);

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

  // Lock background scroll
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
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-jonathan-client": "secure-jonathan-nj-v1",
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          interest,
          message,
          _gotcha: gotcha,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Unable to send message.");
      }

      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
      onClose();
      onSuccess(
        result.message ||
          "Message sent successfully! Jonathan will follow up with you promptly."
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

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="relative w-full max-w-xl bg-[#F6F3ED] rounded-2xl shadow-2xl border border-[#D8D3CB] overflow-hidden z-10"
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-modal-title"
          >
            {/* Header */}
            <div className="bg-[#161515] border-b border-[#481F25] text-[#F6F3ED] px-6 py-5 flex items-start justify-between">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#9B6B52] font-semibold block mb-1">
                  Direct Representation
                </span>
                <h3
                  id="contact-modal-title"
                  className="font-serif-nj text-2xl text-[#FFFFFF] font-normal"
                >
                  Connect With Jonathan
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

            {/* Form */}
            <div className="p-6 md:p-8">
              <p className="text-[#57524C] text-sm leading-relaxed mb-6">
                Whether you are evaluating a future home sale or need clear answers on current market conditions in your New Jersey neighborhood, reach out directly.
              </p>

              {errorMsg && (
                <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-700 text-sm rounded-lg">
                  {errorMsg}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Honeypot field */}
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

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#161515] mb-1.5">
                      Name <span className="text-[#481F25]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Your full name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-3 bg-white border border-[#D8D3CB] rounded-lg text-sm text-[#161515] placeholder-[#857F76] focus:border-[#481F25] focus:ring-1 focus:ring-[#481F25] outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#161515] mb-1.5">
                      Phone <span className="text-[#481F25]">*</span>
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
                    Email <span className="text-[#481F25]">*</span>
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
                    I&apos;m Interested In
                  </label>
                  <select
                    value={interest}
                    onChange={(e) => setInterest(e.target.value)}
                    className="w-full px-4 py-3 bg-white border border-[#D8D3CB] rounded-lg text-sm text-[#161515] focus:border-[#481F25] focus:ring-1 focus:ring-[#481F25] outline-none transition-all"
                  >
                    <option value="Selling a Home in NJ">Selling a Home in NJ</option>
                    <option value="Home Valuation (CMA)">Home Valuation (CMA)</option>
                    <option value="Buying a Home in NJ">Buying a Home in NJ</option>
                    <option value="General Real Estate Question">General Real Estate Question</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#161515] mb-1.5">
                    Message / Property Details
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Tell Jonathan about your property, goals, or timing..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-4 py-3 bg-white border border-[#D8D3CB] rounded-lg text-sm text-[#161515] placeholder-[#857F76] focus:border-[#481F25] focus:ring-1 focus:ring-[#481F25] outline-none transition-all resize-none"
                  />
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
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>

                <div className="flex items-center justify-center gap-2 text-xs text-[#857F76] pt-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#9B6B52]" />
                  <span>Confidential real estate representation. No spam guarantee.</span>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
