"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Bed, Bath, Maximize2, MapPin, ArrowUpRight, ArrowRight } from "lucide-react";
import { FEATURED_LISTINGS, PropertyListing } from "@/data/njContent";

interface FeaturedListingsProps {
  onSelectProperty: (property: PropertyListing) => void;
  onOpenContact: () => void;
}

export function FeaturedListings({ onSelectProperty, onOpenContact }: FeaturedListingsProps) {
  const [filterCounty, setFilterCounty] = useState<string>("All");

  const filteredProperties = filterCounty === "All"
    ? FEATURED_LISTINGS
    : FEATURED_LISTINGS.filter((p) => p.county.includes(filterCounty));

  return (
    <section id="featured-listings" className="py-14 sm:py-20 lg:py-28 bg-[#161515] text-[#F6F3ED]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#9B6B52] block mb-2">
              New Jersey Real Estate
            </span>
            <h2 className="section-title font-serif-nj text-white font-normal leading-tight">
              Featured Properties
            </h2>
            <p className="text-sm sm:text-base text-[#D8D3CB] mt-2 font-light">
              Homes currently available across New Jersey.
            </p>
          </div>

          {/* Micro filters */}
          <div className="flex flex-wrap items-center gap-2">
            {["All", "Bergen", "Essex"].map((county) => (
              <button
                key={county}
                onClick={() => setFilterCounty(county)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase transition-all ${
                  filterCounty === county
                    ? "bg-[#481F25] text-white border border-[#9B6B52]/50 shadow-sm"
                    : "bg-white/5 text-[#D8D3CB] hover:bg-white/10 border border-white/10"
                }`}
              >
                {county === "All" ? "All Counties" : `${county} County`}
              </button>
            ))}
          </div>
        </div>

        {/* Listings Grid: 3 columns desktop, responsive stacked/swipe mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredProperties.slice(0, 3).map((property) => (
            <div
              key={property.id}
              className="group bg-[#201E1E] rounded-2xl overflow-hidden border border-white/10 hover:border-[#481F25] transition-all duration-300 shadow-xl flex flex-col justify-between"
            >
              <div>
                {/* Property Image Container */}
                <div className="relative aspect-[16/11] w-full overflow-hidden bg-[#242021]">
                  <Image
                    src={property.imageUrl}
                    alt={`${property.address}, ${property.city}, NJ`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#161515] via-transparent to-transparent opacity-60" />

                  {/* Status Badge */}
                  <div className="absolute top-3 left-3">
                    <span
                      className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md shadow-md backdrop-blur-md ${
                        property.status === "Just Listed"
                          ? "bg-[#481F25] text-white"
                          : property.status === "Under Contract"
                          ? "bg-amber-900/90 text-amber-200"
                          : "bg-[#161515]/85 text-white border border-white/15"
                      }`}
                    >
                      {property.status}
                    </span>
                  </div>

                  {/* Property Type Badge */}
                  <div className="absolute top-3 right-3">
                    <span className="text-[10px] font-medium tracking-wider px-2 py-0.5 rounded bg-black/60 text-[#D8D3CB] backdrop-blur-sm">
                      {property.propertyType}
                    </span>
                  </div>

                  {/* Price */}
                  <div className="absolute bottom-3 left-3">
                    <span className="font-serif-nj text-2xl text-white font-medium drop-shadow-md">
                      {property.price}
                    </span>
                  </div>
                </div>

                {/* Details Body */}
                <div className="p-5 sm:p-6 space-y-3">
                  <div>
                    <h3 className="font-serif-nj text-lg text-white group-hover:text-[#D8D3CB] transition-colors leading-snug">
                      {property.address}
                    </h3>
                    <p className="text-xs text-[#D8D3CB] flex items-center gap-1 mt-1">
                      <MapPin className="w-3.5 h-3.5 text-[#9B6B52] shrink-0" />
                      {property.city}, {property.state} • {property.county}
                    </p>
                  </div>

                  <p className="text-xs text-[#D8D3CB]/80 line-clamp-2 leading-relaxed">
                    {property.description}
                  </p>

                  {/* Spec Row: Beds, Baths, Sqft */}
                  <div className="pt-3 border-t border-white/10 grid grid-cols-3 gap-2 text-xs text-[#D8D3CB]">
                    <div className="flex items-center gap-1.5">
                      <Bed className="w-4 h-4 text-[#9B6B52]" />
                      <span>{property.beds} Beds</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Bath className="w-4 h-4 text-[#9B6B52]" />
                      <span>{property.baths} Baths</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Maximize2 className="w-4 h-4 text-[#9B6B52]" />
                      <span>{property.sqft} Sq Ft</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Action */}
              <div className="p-5 sm:p-6 pt-0">
                <button
                  onClick={() => onSelectProperty(property)}
                  className="w-full py-2.5 px-4 rounded-lg bg-white/5 hover:bg-white/10 text-white text-xs uppercase tracking-widest font-semibold border border-white/10 transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Inquire About Property</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* IDX / MLS Disclaimer & Action */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 border-t border-white/10 gap-4 text-xs text-[#857F76]">
          <p>
            Listing data sourced via New Jersey MLS & Garden State MLS reciprocity feeds. Information deemed reliable but not guaranteed.
          </p>
          <button
            onClick={onOpenContact}
            className="inline-flex items-center gap-2 text-white hover:text-[#9B6B52] transition-colors font-semibold uppercase tracking-wider text-xs whitespace-nowrap cursor-pointer"
          >
            <span>View All Listings</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
