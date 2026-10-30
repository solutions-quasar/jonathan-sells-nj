"use client";

import React from "react";
import { Search, Compass } from "lucide-react";

interface BuyerPathProps {
  onOpenContact: () => void;
}

export function BuyerPath({ onOpenContact }: BuyerPathProps) {
  return (
    <section className="py-12 bg-[#EFECE4] text-[#161515] border-y border-[#D8D3CB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#D8D3CB] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-xl text-center md:text-left">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#857F76] block mb-1">
              Looking to Buy?
            </span>
            <h3 className="font-serif-nj text-2xl text-[#161515] font-normal leading-tight">
              Find Your Next New Jersey Home.
            </h3>
            <p className="text-xs text-[#57524C] mt-2 font-light leading-relaxed">
              Whether you are relocating from NYC or moving within North Jersey, Jonathan provides localized buyer representation, off-market opportunities, and contract negotiation.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto shrink-0">
            <a
              href="#featured-listings"
              className="w-full sm:w-auto px-5 py-3 bg-[#161515] hover:bg-[#201E1E] text-white text-xs uppercase tracking-widest font-semibold rounded-md transition-colors flex items-center justify-center gap-2"
            >
              <Search className="w-3.5 h-3.5 text-[#9B6B52]" />
              <span>Search Homes</span>
            </a>

            <button
              onClick={onOpenContact}
              className="w-full sm:w-auto px-5 py-3 bg-white hover:bg-[#F6F3ED] text-[#161515] text-xs uppercase tracking-widest font-semibold rounded-md border border-[#D8D3CB] transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <Compass className="w-3.5 h-3.5 text-[#481F25]" />
              <span>Work With Jonathan</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
