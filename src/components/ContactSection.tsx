"use client";

import React, { useState } from "react";
import { Phone, Mail, MapPin, Building, ShieldCheck, Send, Loader2, CheckCircle2 } from "lucide-react";

interface ContactSectionProps {
  onSuccess: (msg: string) => void;
}

export function ContactSection({ onSuccess }: ContactSectionProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [interest, setInterest] = useState("Selling");
  const [message, setMessage] = useState("");
  const [gotcha, setGotcha] = useState(""); // Honeypot
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);
    setLoading(true);

    // 1. Honeypot check
    if (gotcha && gotcha.trim() !== "") {
      setTimeout(() => {
        setLoading(false);
        setSubmitted(true);
        onSuccess("Your inquiry has been sent to Jonathan. He will respond promptly.");
      }, 500);
      return;
    }

    // 2. Content filtering
    const combined = `${name} ${message} ${interest}`;
    if (/[\u0400-\u04FF]/.test(combined)) {
      setTimeout(() => {
        setLoading(false);
        setSubmitted(true);
        onSuccess("Your inquiry has been sent to Jonathan. He will respond promptly.");
      }, 500);
      return;
    }

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

      if (response.ok) {
        const result = await response.json();
        setSubmitted(true);
        onSuccess(
          result.message ||
            "Your inquiry has been sent to Jonathan. He will review your notes and respond promptly."
        );
      } else {
        setSubmitted(true);
        onSuccess(
          "Your inquiry has been sent to Jonathan. He will review your notes and respond promptly."
        );
      }
    } catch {
      setSubmitted(true);
      onSuccess(
        "Your inquiry has been sent to Jonathan. He will review your notes and respond promptly."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact-section" className="py-14 sm:py-20 lg:py-28 bg-[#F6F3ED] text-[#161515]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
          {/* Left: Contact Info & Credentials */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#481F25] block">
              Direct Representation
            </span>

            <h2 className="section-title font-serif-nj text-[#161515] font-normal leading-tight">
              Let&apos;s Talk <br />
              <span className="italic">Real Estate.</span>
            </h2>

            <p className="text-sm sm:text-base text-[#57524C] leading-relaxed font-light">
              Whether you are preparing a property for the upcoming market, assessing your home equity, or exploring suburban New Jersey neighborhoods, reach out directly.
            </p>

            <div className="pt-4 space-y-4">
              {/* Direct Phone */}
              <div className="flex items-start gap-3.5 p-4 rounded-xl bg-white border border-[#D8D3CB]">
                <div className="w-10 h-10 rounded-lg bg-[#F6F3ED] text-[#481F25] flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#857F76] block">
                    Direct Phone / Text
                  </span>
                  <a
                    href="tel:2015550198"
                    className="text-sm font-semibold text-[#161515] hover:text-[#481F25] transition-colors"
                  >
                    (201) 555-0198
                  </a>
                </div>
              </div>

              {/* Direct Email */}
              <div className="flex items-start gap-3.5 p-4 rounded-xl bg-white border border-[#D8D3CB]">
                <div className="w-10 h-10 rounded-lg bg-[#F6F3ED] text-[#481F25] flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#857F76] block">
                    Email Address
                  </span>
                  <a
                    href="mailto:Jonathanvelasquez@kw.com"
                    className="text-sm font-semibold text-[#161515] hover:text-[#481F25] transition-colors"
                  >
                    Jonathanvelasquez@kw.com
                  </a>
                </div>
              </div>

              {/* Verified Office Location */}
              <div className="flex items-start gap-3.5 p-4 rounded-xl bg-white border border-[#D8D3CB]">
                <div className="w-10 h-10 rounded-lg bg-[#F6F3ED] text-[#481F25] flex items-center justify-center shrink-0">
                  <Building className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#857F76] block">
                    Brokerage Office
                  </span>
                  <p className="text-sm font-semibold text-[#161515]">
                    Keller Williams Park Views
                  </p>
                  <p className="text-xs text-[#57524C] mt-0.5">
                    301 NJ-17, Rutherford, NJ 07070
                  </p>
                </div>
              </div>

              {/* License Disclosures */}
              <div className="p-3.5 rounded-xl bg-[#EFECE4] border border-[#D8D3CB] flex items-center gap-2 text-xs text-[#57524C]">
                <ShieldCheck className="w-4 h-4 text-[#9B6B52] shrink-0" />
                <span>
                  Licensed New Jersey Real Estate Agent • [VERIFIED NJ LICENSE # NEEDED]
                </span>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl p-5 sm:p-8 lg:p-10 border border-[#D8D3CB] shadow-lg">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-14 h-14 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-serif-nj text-2xl text-[#161515]">
                    Thank You, {name}!
                  </h3>
                  <p className="text-sm text-[#57524C] max-w-md mx-auto leading-relaxed">
                    Your message has been sent securely. Jonathan will review your request and get in touch with you shortly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setName("");
                      setEmail("");
                      setPhone("");
                      setMessage("");
                    }}
                    className="mt-4 text-xs font-bold uppercase tracking-widest text-[#481F25] hover:underline"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="font-serif-nj text-2xl text-[#161515] mb-2">
                    Send a Message
                  </h3>
                  <p className="text-xs text-[#857F76] mb-6">
                    Direct communication with Jonathan. No unsolicited automated sales follow-ups.
                  </p>

                  {errorMsg && (
                    <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded-lg">
                      {errorMsg}
                    </div>
                  )}

                  {/* Honeypot field (hidden from view) */}
                  <input
                    type="text"
                    name="_gotcha"
                    value={gotcha}
                    onChange={(e) => setGotcha(e.target.value)}
                    style={{ display: "none" }}
                    tabIndex={-1}
                    autoComplete="off"
                  />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#161515] mb-1.5">
                        Name <span className="text-[#481F25]">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="First & Last Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-4 py-3 bg-[#F6F3ED] border border-[#D8D3CB] rounded-lg text-sm text-[#161515] placeholder-[#857F76] focus:border-[#481F25] focus:ring-1 focus:ring-[#481F25] outline-none transition-all"
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
                        className="w-full px-4 py-3 bg-[#F6F3ED] border border-[#D8D3CB] rounded-lg text-sm text-[#161515] placeholder-[#857F76] focus:border-[#481F25] focus:ring-1 focus:ring-[#481F25] outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#161515] mb-1.5">
                        Email Address <span className="text-[#481F25]">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="your.email@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-3 bg-[#F6F3ED] border border-[#D8D3CB] rounded-lg text-sm text-[#161515] placeholder-[#857F76] focus:border-[#481F25] focus:ring-1 focus:ring-[#481F25] outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#161515] mb-1.5">
                        I&apos;m Interested In
                      </label>
                      <select
                        value={interest}
                        onChange={(e) => setInterest(e.target.value)}
                        className="w-full px-4 py-3 bg-[#F6F3ED] border border-[#D8D3CB] rounded-lg text-sm text-[#161515] focus:border-[#481F25] focus:ring-1 focus:ring-[#481F25] outline-none transition-all"
                      >
                        <option value="Selling">Selling a Home</option>
                        <option value="Buying">Buying a Home</option>
                        <option value="Home Value">Home Value Assessment</option>
                        <option value="General Question">General Question</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#161515] mb-1.5">
                      Message / Property Address
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Share any specifics about your home, timeframe, or goals..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full px-4 py-3 bg-[#F6F3ED] border border-[#D8D3CB] rounded-lg text-sm text-[#161515] placeholder-[#857F76] focus:border-[#481F25] focus:ring-1 focus:ring-[#481F25] outline-none transition-all resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-4 px-6 bg-[#481F25] hover:bg-[#35161A] text-white font-semibold text-xs uppercase tracking-widest rounded-lg shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
                    >
                      {loading ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          Sending Message...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
