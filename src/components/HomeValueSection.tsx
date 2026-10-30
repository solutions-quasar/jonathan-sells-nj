"use client";

import React, { useState } from "react";
import { ArrowRight, Home, Shield, CheckCircle2, Loader2, Sparkles } from "lucide-react";

interface HomeValueSectionProps {
  onSuccess: (msg: string) => void;
}

export function HomeValueSection({ onSuccess }: HomeValueSectionProps) {
  const [propertyAddress, setPropertyAddress] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [timeframe, setTimeframe] = useState("Exploring options (3-6 months)");
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
        onSuccess("Thank you! Jonathan will prepare your custom market analysis.");
      }, 500);
      return;
    }

    // 2. Content filtering
    const combined = `${propertyAddress} ${name} ${timeframe}`;
    if (/[\u0400-\u04FF]/.test(combined)) {
      setTimeout(() => {
        setLoading(false);
        setSubmitted(true);
        onSuccess("Thank you! Jonathan will prepare your custom market analysis.");
      }, 500);
      return;
    }

    try {
      const response = await fetch("/api/home-value", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-jonathan-client": "secure-jonathan-nj-v1",
        },
        body: JSON.stringify({
          propertyAddress,
          name,
          email,
          phone,
          timeframe,
          _gotcha: gotcha,
        }),
      });

      if (response.ok) {
        const result = await response.json();
        setSubmitted(true);
        onSuccess(
          result.message ||
            "Thank you! Jonathan will review recent neighborhood comps and prepare your custom market analysis."
        );
      } else {
        setSubmitted(true);
        onSuccess(
          "Thank you! Jonathan will review recent neighborhood comps and prepare your custom market analysis."
        );
      }
    } catch {
      setSubmitted(true);
      onSuccess(
        "Thank you! Jonathan will review recent neighborhood comps and prepare your custom market analysis."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="home-value" className="py-14 sm:py-20 lg:py-28 bg-[#F6F3ED] text-[#161515] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-5 sm:p-10 lg:p-14 shadow-xl border border-[#D8D3CB]/80">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content column */}
            <div className="lg:col-span-6 space-y-4 sm:space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase text-[#481F25]">
                <span className="w-2 h-2 rounded-full bg-[#481F25]" />
                Start Here
              </div>

              <h2 className="section-title font-serif-nj text-[#161515] font-normal leading-tight">
                What Could Your <br />
                <span className="italic">Home Sell For?</span>
              </h2>

              <div className="space-y-4 text-[#57524C] leading-relaxed text-base sm:text-lg">
                <p>
                  Online estimates can only tell part of the story. Automated formulas rely on historical county tax records and can&apos;t evaluate interior renovations, lot elevation, or school district boundaries.
                </p>
                <p className="text-sm text-[#857F76]">
                  Get a personalized look at your home&apos;s potential value based on the actual property condition, micro-neighborhood comps, and current buyer demand across New Jersey.
                </p>
              </div>

              {/* Differentiators */}
              <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-[#E5DFD4]">
                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-full bg-[#F6F3ED] flex items-center justify-center shrink-0 text-[#481F25] mt-0.5 font-semibold text-xs">
                    01
                  </div>
                  <div>
                    <h5 className="text-xs font-bold uppercase tracking-wider text-[#161515]">
                      Manual CMA
                    </h5>
                    <p className="text-xs text-[#857F76] mt-0.5">
                      Evaluated personally by Jonathan, not an algorithm.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-full bg-[#F6F3ED] flex items-center justify-center shrink-0 text-[#481F25] mt-0.5 font-semibold text-xs">
                    02
                  </div>
                  <div>
                    <h5 className="text-xs font-bold uppercase tracking-wider text-[#161515]">
                      Zero Obligation
                    </h5>
                    <p className="text-xs text-[#857F76] mt-0.5">
                      Straightforward facts to help plan your timeline.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Form Card */}
            <div className="lg:col-span-6">
              <div className="bg-[#F6F3ED] rounded-2xl p-4 sm:p-7 border border-[#D8D3CB] shadow-sm">
                {submitted ? (
                  <div className="py-10 text-center space-y-4">
                    <div className="w-14 h-14 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="font-serif-nj text-2xl text-[#161515]">
                      Valuation Request Received
                    </h3>
                    <p className="text-sm text-[#57524C] max-w-md mx-auto leading-relaxed">
                      Thank you, {name || "homeowner"}! Jonathan is researching recent comparable sales and local market trends for{" "}
                      <span className="font-semibold text-[#161515]">{propertyAddress}</span>. Expect a detailed Comparative Market Analysis (CMA) delivered to your inbox shortly.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-4 text-xs font-bold uppercase tracking-widest text-[#481F25] hover:underline"
                    >
                      Submit Another Address
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="border-b border-[#D8D3CB] pb-4 mb-4">
                      <h3 className="font-serif-nj text-xl text-[#161515]">
                        Request Your Comprehensive Market Analysis
                      </h3>
                      <p className="text-xs text-[#857F76] mt-1">
                        Tailored specifically to your property&apos;s condition and local market.
                      </p>
                    </div>

                    {errorMsg && (
                      <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded-lg">
                        {errorMsg}
                      </div>
                    )}

                    {/* Honeypot */}
                    <input
                      type="text"
                      name="_gotcha"
                      value={gotcha}
                      onChange={(e) => setGotcha(e.target.value)}
                      style={{ display: "none" }}
                      tabIndex={-1}
                      autoComplete="off"
                    />

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#161515] mb-1">
                        Property Address <span className="text-[#481F25]">*</span>
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          required
                          placeholder="Street, City, NJ, Zip"
                          value={propertyAddress}
                          onChange={(e) => setPropertyAddress(e.target.value)}
                          className="w-full px-4 py-3 bg-white border border-[#D8D3CB] rounded-lg text-sm text-[#161515] placeholder-[#857F76] focus:border-[#481F25] focus:ring-1 focus:ring-[#481F25] outline-none transition-all"
                        />
                        <Home className="w-4 h-4 text-[#857F76] absolute right-3.5 top-3.5 pointer-events-none" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-[#161515] mb-1">
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
                        <label className="block text-xs font-bold uppercase tracking-wider text-[#161515] mb-1">
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
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#161515] mb-1">
                        Email Address <span className="text-[#481F25]">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="your.email@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-3 bg-white border border-[#D8D3CB] rounded-lg text-sm text-[#161515] placeholder-[#857F76] focus:border-[#481F25] focus:ring-1 focus:ring-[#481F25] outline-none transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#161515] mb-1">
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
                        className="w-full py-4 px-6 bg-[#481F25] hover:bg-[#35161A] text-white font-semibold text-xs uppercase tracking-widest rounded-lg shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
                      >
                        {loading ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin" />
                            Analyzing Market Comps...
                          </>
                        ) : (
                          <>
                            Get My Home Value
                            <ArrowRight className="w-4 h-4" />
                          </>
                        )}
                      </button>
                    </div>

                    <p className="text-center text-xs text-[#857F76] pt-1">
                      No obligation. No pressure. Manual Comparative Market Analysis (CMA) prepared by Jonathan.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
