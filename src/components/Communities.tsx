"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Train, Building2, MapPin } from "lucide-react";
import { NJ_COMMUNITIES } from "@/data/njContent";

interface CommunitiesProps {
  onOpenContact: () => void;
}

export function Communities({ onOpenContact }: CommunitiesProps) {
  return (
    <section id="nj-communities" className="py-14 sm:py-20 lg:py-28 bg-[#F6F3ED] text-[#161515]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#481F25] block mb-2">
              Local Expertise
            </span>
            <h2 className="section-title font-serif-nj text-[#161515] font-normal leading-tight">
              Explore New Jersey <br />
              <span className="italic">Communities.</span>
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#57524C] max-w-md leading-relaxed font-light">
            Real estate dynamics differ town by town, school district by school district. Discover the micro-markets Jonathan actively serves.
          </p>
        </div>

        {/* 4 Rich Community Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {NJ_COMMUNITIES.map((community) => (
            <div
              key={community.id}
              className="group bg-white rounded-2xl overflow-hidden border border-[#D8D3CB] hover:border-[#481F25] transition-all duration-300 shadow-sm hover:shadow-xl flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#161515]">
                  <Image
                    src={community.imageUrl}
                    alt={`${community.name}, ${community.county}`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#161515] via-transparent to-transparent opacity-75" />

                  <div className="absolute top-3 left-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#481F25] text-white">
                      {community.county}
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <h3 className="font-serif-nj text-lg font-medium leading-snug">
                      {community.name}
                    </h3>
                  </div>
                </div>

                <div className="p-5 space-y-3">
                  <p className="text-xs font-semibold text-[#481F25]">
                    {community.tagline}
                  </p>
                  <p className="text-xs text-[#57524C] leading-relaxed line-clamp-3">
                    {community.vibe}
                  </p>

                  <div className="pt-3 border-t border-[#E5DFD4] space-y-1.5 text-[11px] text-[#857F76]">
                    <div className="flex items-center gap-1.5">
                      <Train className="w-3.5 h-3.5 text-[#9B6B52] shrink-0" />
                      <span className="truncate">{community.transitSummary}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-5 pt-0">
                <button
                  onClick={onOpenContact}
                  className="w-full py-2.5 px-3 rounded-lg bg-[#F6F3ED] group-hover:bg-[#481F25] group-hover:text-white text-[#161515] text-xs font-bold tracking-wider uppercase transition-colors flex items-center justify-between cursor-pointer"
                >
                  <span>Explore Guide</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Local SEO / Service Area Callout */}
        <div className="bg-[#EFECE4] rounded-2xl p-6 border border-[#D8D3CB] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#57524C]">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-[#481F25] shrink-0" />
            <span>
              <strong>Primary NJ Service Areas:</strong> Bergen County, Essex County, Passaic County, Hudson County, and surrounding North Jersey commuter corridors.
            </span>
          </div>
          <button
            onClick={onOpenContact}
            className="text-[#481F25] font-bold uppercase tracking-wider hover:underline whitespace-nowrap cursor-pointer"
          >
            Ask About Your Town →
          </button>
        </div>
      </div>
    </section>
  );
}
