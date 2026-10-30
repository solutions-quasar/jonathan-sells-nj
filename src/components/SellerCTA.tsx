"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, PhoneCall } from "lucide-react";

interface SellerCTAProps {
  onOpenHomeValue: () => void;
  onOpenContact: () => void;
}

export function SellerCTA({ onOpenHomeValue, onOpenContact }: SellerCTAProps) {
  return (
    <section className="relative py-16 sm:py-24 lg:py-32 overflow-hidden bg-[#161515] text-white">
      {/* Background Image with Dark Burgundy Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=85"
          alt="New Jersey residential real estate background"
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#481F25]/85 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#161515] via-[#161515]/75 to-[#161515]/90" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Eyebrow */}
        <span className="inline-block text-xs font-bold uppercase tracking-[0.25em] text-[#D8D3CB] mb-4">
          Thinking About Selling?
        </span>

        {/* Heading */}
        <h2 className="section-title font-serif-nj text-white font-normal leading-tight mb-6 max-w-3xl mx-auto">
          Your Next Move Starts <br />
          <span className="italic text-[#F6F3ED]">With a Conversation.</span>
        </h2>

        {/* Copy */}
        <p className="text-base sm:text-lg text-[#D8D3CB] font-light max-w-2xl mx-auto mb-10 leading-relaxed">
          Whether you&apos;re ready to sell now or simply wondering what your options look like, start with a clear understanding of your property&apos;s position in the market.
        </p>

        {/* Dual CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpenHomeValue}
            className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-[#F6F3ED] text-[#161515] text-xs uppercase tracking-widest font-semibold rounded-md shadow-2xl transition-all flex items-center justify-center gap-2 cursor-pointer group"
          >
            <span>Get My Home Value</span>
            <ArrowRight className="w-4 h-4 text-[#481F25] group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={onOpenContact}
            className="w-full sm:w-auto px-8 py-4 bg-[#481F25] hover:bg-[#5E2A32] text-white text-xs uppercase tracking-widest font-semibold rounded-md border border-[#9B6B52]/50 shadow-xl transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <PhoneCall className="w-4 h-4 text-[#9B6B52]" />
            <span>Talk to Jonathan</span>
          </button>
        </div>

        <p className="text-xs text-[#BCB6AC] mt-6 tracking-wide">
          Direct cell: (201) 555-0198 • Strict privacy & confidentiality guaranteed.
        </p>
      </div>
    </section>
  );
}
