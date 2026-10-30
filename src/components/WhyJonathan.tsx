"use client";

import React from "react";

export function WhyJonathan() {
  const pillars = [
    {
      number: "01",
      title: "STRAIGHTFORWARD GUIDANCE",
      desc: "Understand the process, options and next steps without unnecessary complexity. You will never receive vague corporate jargon—only direct, actionable counsel on what will practically move your sale forward.",
    },
    {
      number: "02",
      title: "LOCAL PERSPECTIVE",
      desc: "Real estate is local. Position the property around what's happening in its actual New Jersey market—from neighborhood school districts and NYC commute times to local tax revaluations.",
    },
    {
      number: "03",
      title: "PERSONAL REPRESENTATION",
      desc: "Work directly with Jonathan throughout the selling process. Your listing is never handed off to an inexperienced junior coordinator or call center. Jonathan personally oversees every showing strategy, buyer offer, and negotiation.",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#161515] text-[#F6F3ED] border-y border-[#481F25]/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 lg:mb-20">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#9B6B52] block mb-3">
            Direct & Accountable
          </span>
          <h2 className="section-title font-serif-nj text-white font-normal leading-tight mb-4">
            Selling a Home Is a <br />
            <span className="italic text-[#D8D3CB]">Big Decision.</span>
          </h2>
          <p className="text-sm sm:text-base text-[#D8D3CB]/90 leading-relaxed font-light">
            You don&apos;t need generic promises or high-pressure sales scripts. You need an advocate who knows New Jersey contracts, understands local buyer behavior, and protects your equity from list to close.
          </p>
        </div>

        {/* 3 Pillars Grid - Clean typography-first editorial layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 divide-y md:divide-y-0 md:divide-x divide-white/10">
          {pillars.map((pillar, idx) => (
            <div
              key={pillar.title}
              className={`flex flex-col justify-between ${
                idx !== 0 ? "pt-8 md:pt-0 md:pl-8 lg:pl-12" : ""
              }`}
            >
              <div>
                <span className="font-serif-nj text-3xl sm:text-4xl text-[#9B6B52] block mb-4">
                  {pillar.number}
                </span>
                <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-white mb-4">
                  {pillar.title}
                </h3>
                <p className="text-sm text-[#D8D3CB]/80 leading-relaxed font-light">
                  {pillar.desc}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-white/5">
                <span className="text-[10px] text-[#9B6B52] uppercase font-semibold tracking-widest">
                  Core Commitment
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
