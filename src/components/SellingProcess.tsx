"use client";

import React from "react";
import { ArrowRight, CheckCircle } from "lucide-react";

interface SellingProcessProps {
  onOpenContact: () => void;
}

export function SellingProcess({ onOpenContact }: SellingProcessProps) {
  const steps = [
    {
      num: "01",
      title: "PREPARE",
      subtitle: "Strategic Property Preparation",
      desc: "Understand what should — and shouldn't — be done before listing. Identify cost-effective cosmetic improvements, staging enhancements, and pre-inspection items to protect value.",
    },
    {
      num: "02",
      title: "POSITION",
      subtitle: "Micro-Market Pricing",
      desc: "Determine pricing and positioning based on the property and current market. Analyze neighborhood buyer demand brackets to ignite maximum interest during the critical first 14 days.",
    },
    {
      num: "03",
      title: "MARKET",
      subtitle: "High-Impact Exposure",
      desc: "Present the property professionally across the channels buyers actually use. Architectural photography, curated MLS syndication, targeted digital reach, and agent networking.",
    },
    {
      num: "04",
      title: "NEGOTIATE & CLOSE",
      subtitle: "Offer Terms & Attorney Review",
      desc: "Evaluate offers, negotiate terms and move confidently toward closing. Direct guidance through New Jersey's 3-day Attorney Review, municipal CO inspections, and title finalization.",
    },
  ];

  return (
    <section id="sell-strategy" className="py-14 sm:py-20 lg:py-28 bg-[#161515] text-[#F6F3ED] relative overflow-hidden">
      {/* Subtle background luxury texture */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#481F25]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase text-[#9B6B52] mb-3">
            <span className="w-2 h-2 rounded-full bg-[#9B6B52]" />
            The Selling Process
          </div>
          <h2 className="section-title font-serif-nj text-white font-normal leading-tight mb-4">
            A Clear Plan From <br />
            <span className="italic text-[#D8D3CB]">Listed to Sold.</span>
          </h2>
          <p className="text-sm sm:text-base text-[#D8D3CB]/90 leading-relaxed max-w-xl mx-auto">
            Selling a home involves dozens of critical decisions. Here is how Jonathan structures the process for a transparent, well-managed sale.
          </p>
        </div>

        {/* Timeline Grid: Desktop horizontal, Mobile vertical */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 relative mb-14">
          {/* Subtle connecting line for desktop */}
          <div className="hidden lg:block absolute top-12 left-12 right-12 h-[1px] bg-gradient-to-r from-white/10 via-[#9B6B52]/40 to-white/10 z-0" />

          {steps.map((step, index) => (
            <div
              key={step.num}
              className="relative z-10 bg-[#201E1E] rounded-2xl p-5 sm:p-7 border border-white/10 hover:border-[#481F25] transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Step badge */}
                <div className="flex items-center justify-between mb-6">
                  <span className="font-serif-nj text-3xl sm:text-4xl text-[#9B6B52] group-hover:text-white transition-colors">
                    {step.num}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-[#481F25]/70 border border-[#9B6B52]/40 flex items-center justify-center text-white text-xs font-bold">
                    ✓
                  </div>
                </div>

                <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#D8D3CB] mb-1">
                  {step.title}
                </h3>
                <h4 className="font-serif-nj text-lg text-white font-normal mb-3">
                  {step.subtitle}
                </h4>
                <p className="text-xs sm:text-sm text-[#D8D3CB]/80 leading-relaxed font-light">
                  {step.desc}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-white/5 flex items-center text-[11px] text-[#9B6B52] font-semibold tracking-wider uppercase">
                <span>Phase {index + 1} of 4</span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <button
            onClick={onOpenContact}
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#481F25] hover:bg-[#5E2A32] text-white text-xs uppercase tracking-widest font-semibold rounded-md border border-[#9B6B52]/50 shadow-xl transition-all cursor-pointer group"
          >
            <span>Let&apos;s Talk About Selling</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
