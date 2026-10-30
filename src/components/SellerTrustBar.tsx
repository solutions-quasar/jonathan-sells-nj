"use client";

import React from "react";
import { Compass, Camera, MapPinned, Award } from "lucide-react";

export function SellerTrustBar() {
  const pillars = [
    {
      title: "SELLER STRATEGY",
      desc: "Targeted positioning & pricing",
      icon: Compass,
    },
    {
      title: "PROFESSIONAL MARKETING",
      desc: "Editorial photo & MLS reach",
      icon: Camera,
    },
    {
      title: "LOCAL NJ KNOWLEDGE",
      desc: "Bergen, Essex & Passaic insight",
      icon: MapPinned,
    },
    {
      title: "NEGOTIATION & CLOSING",
      desc: "Hands-on attorney review navigation",
      icon: Award,
    },
  ];

  return (
    <section className="bg-[#161515] text-[#F6F3ED] border-y border-[#481F25]/40 py-5 sm:py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {pillars.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className={`flex items-center gap-3.5 p-3 sm:p-0 rounded-xl sm:rounded-none bg-white/[0.03] sm:bg-transparent border border-white/5 sm:border-0 ${
                  index !== 0 ? "sm:border-l sm:border-white/10 sm:pl-6" : ""
                }`}
              >
                <div className="w-9 h-9 rounded-full bg-[#481F25]/60 border border-[#9B6B52]/30 flex items-center justify-center shrink-0 text-[#9B6B52]">
                  <Icon className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold tracking-[0.16em] uppercase text-white font-sans">
                    {item.title}
                  </h4>
                  <p className="text-[11px] text-[#D8D3CB] tracking-wide mt-0.5">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
