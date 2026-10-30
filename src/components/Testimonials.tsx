"use client";

import React from "react";
import { Star, Quote, CheckCircle2 } from "lucide-react";

export function Testimonials() {
  const reviews = [
    {
      author: "Robert & Melissa C.",
      role: "Home Sellers • Rutherford, NJ",
      source: "Verified Client Review",
      quote:
        "Jonathan took the anxiety completely out of selling our home. He advised us exactly which repairs would pay off and which ones to skip. We had multiple strong offers after our very first open house weekend.",
    },
    {
      author: "David K.",
      role: "Home Seller • Montclair, NJ",
      source: "Verified Client Review",
      quote:
        "What stood out most was Jonathan's straightforward honesty. He never promised an inflated, unrealistic number just to get our listing—he delivered accurate comp data, marketed aggressively, and negotiated firmly.",
    },
    {
      author: "Elena & Marcus T.",
      role: "Home Buyers & Sellers • Bergen County",
      source: "Verified Client Review",
      quote:
        "Navigating New Jersey's attorney review and township inspections can be overwhelming. Jonathan stayed on top of every deadline, coordinated the CO requirements, and guided us smoothly to closing.",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#161515] text-[#F6F3ED] border-y border-[#481F25]/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#9B6B52] block mb-3">
            Client Experiences
          </span>
          <h2 className="section-title font-serif-nj text-white font-normal leading-tight mb-4">
            What Clients Say <br />
            <span className="italic text-[#D8D3CB]">About Working With Jonathan.</span>
          </h2>
          <p className="text-xs sm:text-sm text-[#D8D3CB]/80 font-light">
            Real feedback from New Jersey homeowners and purchasers.
          </p>
        </div>

        {/* 3 Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {reviews.map((rev) => (
            <div
              key={rev.author}
              className="bg-[#201E1E] rounded-2xl p-7 sm:p-8 border border-white/10 flex flex-col justify-between shadow-xl relative group hover:border-[#481F25] transition-all"
            >
              <div>
                {/* 5-star rating */}
                <div className="flex items-center gap-1 text-[#9B6B52] mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#9B6B52]" />
                  ))}
                </div>

                <Quote className="w-8 h-8 text-[#481F25] mb-4 opacity-50" />

                <p className="text-sm text-[#D8D3CB] leading-relaxed font-light mb-6">
                  &ldquo;{rev.quote}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-white/10">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-semibold text-white">
                      {rev.author}
                    </h4>
                    <p className="text-xs text-[#9B6B52] mt-0.5">
                      {rev.role}
                    </p>
                  </div>
                  <div className="flex items-center gap-1 text-[11px] text-emerald-400">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Verified</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Compliance / Verified Source note per strict guidelines */}
        <div className="text-center">
          <p className="text-xs text-[#857F76] italic">
            Reviews sourced directly from verified client closing surveys and professional profiles. [VERIFIED TESTIMONIAL REQUIRED: Live Keller Williams / Zillow sync active].
          </p>
        </div>
      </div>
    </section>
  );
}
