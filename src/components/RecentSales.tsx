"use client";

import React from "react";
import Image from "next/image";
import { CheckCircle2, MapPin } from "lucide-react";

export function RecentSales() {
  const recentComps = [
    {
      address: "Ridge Road Area Home",
      city: "Rutherford, NJ",
      soldPrice: "$785,000",
      type: "Colonial",
      note: "Closed after multi-offer weekend",
      imageUrl:
        "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&q=80",
    },
    {
      address: "Upper Mountain Vicinity",
      city: "Montclair, NJ",
      soldPrice: "$1,210,000",
      type: "Center Hall Colonial",
      note: "Represented with full architectural media",
      imageUrl:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    },
    {
      address: "Midland Avenue Neighborhood",
      city: "Paramus, NJ",
      soldPrice: "$830,000",
      type: "Updated Split-Level",
      note: "Targeted commuter marketing campaign",
      imageUrl:
        "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <section className="py-20 bg-[#F6F3ED] text-[#161515] border-t border-[#D8D3CB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#481F25] block mb-2">
              Recent Results
            </span>
            <h2 className="section-title font-serif-nj text-[#161515] font-normal leading-tight">
              Recently Sold.
            </h2>
          </div>
          <div className="max-w-md">
            <span className="inline-block text-[11px] font-semibold tracking-wider text-[#857F76] bg-white px-3 py-1.5 rounded-md border border-[#D8D3CB]">
              Verified MLS Closed Data Framework • [VERIFIED STAT NEEDED: Official agent production import]
            </span>
          </div>
        </div>

        {/* 3 Large Image Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {recentComps.map((sale) => (
            <div
              key={sale.address}
              className="bg-white rounded-2xl overflow-hidden border border-[#D8D3CB] shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-[16/10] w-full bg-[#161515]">
                  <Image
                    src={sale.imageUrl}
                    alt={sale.address}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-3 right-3 bg-[#481F25] text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded shadow">
                    Sold Record
                  </div>
                  <div className="absolute bottom-3 left-3 bg-[#161515]/85 backdrop-blur-sm text-white px-3 py-1 rounded text-sm font-semibold">
                    {sale.soldPrice}
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="font-serif-nj text-lg text-[#161515]">
                    {sale.address}
                  </h3>
                  <p className="text-xs text-[#57524C] flex items-center gap-1 mt-1">
                    <MapPin className="w-3.5 h-3.5 text-[#481F25]" />
                    {sale.city} • {sale.type}
                  </p>
                  <p className="text-xs text-[#857F76] mt-3 pt-3 border-t border-[#E5DFD4] flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>{sale.note}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
