"use client";

import React from "react";
import Image from "next/image";
import { Camera, Globe, Share2, Users, Layers, Sparkles, ArrowRight } from "lucide-react";

interface MarketingStrategyProps {
  onOpenContact: () => void;
}

export function MarketingStrategy({ onOpenContact }: MarketingStrategyProps) {
  const marketingPillars = [
    {
      title: "PROFESSIONAL PHOTOGRAPHY",
      subtitle: "High-Resolution Architectural & Twilight Imagery",
      desc: "First impressions are made on screens. Professional wide-angle HDR photography and twilight exterior captures bring out the authentic architectural charm of your home.",
      icon: Camera,
      tag: "Standard Service",
    },
    {
      title: "MLS & SYNDICATION EXPOSURE",
      subtitle: "Full Garden State MLS & NJMLS Reach",
      desc: "Instant distribution across major regional MLS platforms, Zillow, Realtor.com, Redfin, and thousands of broker reciprocity websites across New York and New Jersey.",
      icon: Globe,
      tag: "Standard Service",
    },
    {
      title: "PROPERTY PRESENTATION",
      subtitle: "Tailored Floorplans & Feature Highlights",
      desc: "Clear visual assets, dimensioned floorplans, and property spec sheets that help prospective buyers visualize living in the space before booking a private tour.",
      icon: Layers,
      tag: "Standard Service",
    },
    {
      title: "TARGETED SOCIAL MEDIA",
      subtitle: "Geotargeted Campaigns to Active Buyers",
      desc: "Targeted digital campaigns pinpointing qualified NYC and local NJ buyers searching for suburban homes with direct rail and highway transit corridors.",
      icon: Share2,
      tag: "Standard Service",
    },
    {
      title: "DIRECT BUYER & AGENT OUTREACH",
      subtitle: "Keller Williams Network Collaboration",
      desc: "Direct networking with high-producing buyer agents across Bergen, Essex, and Hudson County brokerage networks with pre-approved buyers waiting for inventory.",
      icon: Users,
      tag: "Standard Service",
    },
    {
      title: "STRATEGIC OPEN HOUSE EVENTS",
      subtitle: "Weekend Launch Exposure",
      desc: "Carefully timed launch open houses orchestrated to concentrate buyer foot-traffic, create urgency, and cultivate competitive multi-party interest.",
      icon: Sparkles,
      tag: "Standard Service",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#F6F3ED] text-[#161515]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#481F25] block mb-2">
              Your Home Deserves More Than a Listing
            </span>
            <h2 className="section-title font-serif-nj text-[#161515] font-normal leading-tight">
              Marketing Designed <br />
              <span className="italic">to Get Attention.</span>
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#57524C] max-w-md leading-relaxed">
            In a competitive New Jersey market, proper marketing separates properties that sit from properties that command multiple serious offers.
          </p>
        </div>

        {/* Visual Showcase Card with Real Architectural Mockup */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          <div className="lg:col-span-7 relative rounded-2xl overflow-hidden shadow-2xl border border-[#D8D3CB] aspect-[16/10] bg-[#161515]">
            <Image
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85"
              alt="Professional real estate photography showcase"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#161515]/90 via-[#161515]/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <span className="px-3 py-1 rounded bg-[#481F25] text-[10px] font-bold uppercase tracking-widest text-[#F6F3ED] inline-block mb-2">
                Active Marketing Showcase
              </span>
              <h3 className="font-serif-nj text-xl sm:text-2xl font-normal">
                Curated Visual Presentation Drives Higher Buyer Perceived Value
              </h3>
              <p className="text-xs text-[#D8D3CB] mt-1 font-light max-w-lg">
                High-end photography, drone perspectives, and dimensioned floorplans give qualified buyers complete confidence before the first showing.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-4">
            <div className="bg-white p-6 rounded-2xl border border-[#D8D3CB] shadow-sm">
              <h4 className="font-serif-nj text-lg text-[#161515] mb-2">
                Digital Presentation Standards
              </h4>
              <p className="text-xs text-[#57524C] leading-relaxed mb-4">
                Over 95% of homebuyers view properties online before scheduling a private showing. Low-quality phone photos cost sellers real equity.
              </p>
              <div className="space-y-2.5 text-xs text-[#161515]">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#481F25]" />
                  <span>High-resolution interior & exterior architectural shoots</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#481F25]" />
                  <span>Verified MLS syndication with crisp typography & highlights</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#481F25]" />
                  <span>Dedicated video walk-through tours [CONFIRM SERVICE]</span>
                </div>
              </div>
            </div>

            <div className="bg-[#481F25] text-white p-6 rounded-2xl shadow-sm">
              <h4 className="font-serif-nj text-lg text-white mb-2">
                Localized Micro-Campaigns
              </h4>
              <p className="text-xs text-[#D8D3CB] leading-relaxed">
                We specifically target buyers looking in your exact school district, commuter zone, and price bracket—converting digital impressions into packed open houses.
              </p>
            </div>
          </div>
        </div>

        {/* 6 Marketing Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {marketingPillars.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="bg-white p-6 sm:p-7 rounded-2xl border border-[#D8D3CB] hover:border-[#481F25] transition-all hover:shadow-md flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#F6F3ED] text-[#481F25] flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-1 rounded bg-[#F6F3ED] text-[#857F76]">
                      {item.tag}
                    </span>
                  </div>
                  <h3 className="text-xs font-bold uppercase tracking-[0.16em] text-[#161515] mb-1">
                    {item.title}
                  </h3>
                  <h4 className="font-serif-nj text-base text-[#481F25] font-normal mb-2.5">
                    {item.subtitle}
                  </h4>
                  <p className="text-xs text-[#57524C] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Section Action */}
        <div className="text-center">
          <button
            onClick={onOpenContact}
            className="inline-flex items-center gap-2.5 px-8 py-3.5 bg-[#481F25] hover:bg-[#35161A] text-white text-xs uppercase tracking-widest font-semibold rounded-md shadow-md transition-all cursor-pointer"
          >
            <span>See the Selling Strategy</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
