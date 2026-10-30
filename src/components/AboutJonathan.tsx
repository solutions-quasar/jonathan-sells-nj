"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, MapPin, Building, ShieldCheck, Mail, Phone } from "lucide-react";

interface AboutJonathanProps {
  onOpenContact: () => void;
  onOpenHomeValue: () => void;
}

export function AboutJonathan({ onOpenContact, onOpenHomeValue }: AboutJonathanProps) {
  return (
    <section id="about-jonathan" className="py-14 sm:py-20 lg:py-28 bg-[#F6F3ED] text-[#161515]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Portrait Column (approx 45% on desktop -> 5 cols) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Decorative editorial backdrop */}
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-[#481F25]/20 rounded-2xl pointer-events-none hidden sm:block" />
              
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-[#161515] border border-[#D8D3CB]">
                <div className="relative aspect-[4/5] w-full">
                  <Image
                    src="/images/jonathan_headshot.jpg"
                    alt="Jonathan Velasquez Ramirez - New Jersey Real Estate Professional"
                    fill
                    sizes="(max-width: 1024px) 100vw, 450px"
                    className="object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#161515]/85 via-transparent to-transparent" />
                </div>

                {/* Identity caption card */}
                <div className="p-5 bg-[#161515] text-[#F6F3ED]">
                  <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-3">
                    <div>
                      <h4 className="font-serif-nj text-lg text-white font-medium">
                        Jonathan Velasquez Ramirez
                      </h4>
                      <p className="text-xs text-[#9B6B52] font-semibold tracking-wider uppercase mt-0.5">
                        Keller Williams Park Views
                      </p>
                    </div>
                    <span className="text-[10px] text-[#D8D3CB] bg-white/10 px-2.5 py-1 rounded">
                      Rutherford, NJ
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-xs text-[#D8D3CB]">
                    <div className="flex items-center gap-1.5">
                      <Building className="w-3.5 h-3.5 text-[#9B6B52] shrink-0" />
                      <span className="truncate">KW Park Views</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#9B6B52] shrink-0" />
                      <span className="text-[11px] text-[#BCB6AC]">[VERIFIED LICENSE #]</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Column (approx 55% on desktop -> 7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase text-[#481F25]">
              <span className="w-2 h-2 rounded-full bg-[#481F25]" />
              Meet Jonathan
            </div>

            <h2 className="section-title font-serif-nj text-[#161515] font-normal leading-tight">
              Local Guidance. <br />
              <span className="italic">Personal Service.</span>
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-[#57524C] leading-relaxed font-light">
              <p>
                Based out of Rutherford, New Jersey, Jonathan Velasquez represents homeowners across Northern and Central New Jersey. His approach is built on clear communication, thorough pricing analysis, and aggressive marketing designed to showcase each property&apos;s distinct value.
              </p>
              <p>
                Affiliated with Keller Williams Park Views, Jonathan pairs the localized market knowledge of an active neighborhood specialist with the broad syndication network of one of the country&apos;s premier real estate franchises.
              </p>
              <p>
                Whether helping a longtime homeowner downsize, assisting families moving up to a larger suburban property, or guiding an estate sale through New Jersey&apos;s municipal requirements, Jonathan works directly with every client from initial evaluation through final closing.
              </p>
            </div>

            {/* Verified Credentials Block */}
            <div className="p-4 rounded-xl bg-white border border-[#D8D3CB] space-y-2 text-xs">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#E5DFD4] pb-2">
                <span className="text-[#857F76] font-semibold uppercase tracking-wider">
                  Brokerage Office
                </span>
                <span className="text-[#161515] font-medium">
                  Keller Williams Park Views • 301 NJ-17, Rutherford, NJ 07070
                </span>
              </div>
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#E5DFD4] pb-2">
                <span className="text-[#857F76] font-semibold uppercase tracking-wider">
                  Service Footprint
                </span>
                <span className="text-[#161515] font-medium">
                  Bergen, Essex, Passaic, Hudson & Morris Counties
                </span>
              </div>
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-[#857F76] font-semibold uppercase tracking-wider">
                  Professional Record
                </span>
                <span className="text-[#857F76] italic">
                  [VERIFIED STAT NEEDED: Official NJREC License & MLS Career Record]
                </span>
              </div>
            </div>

            {/* Actions */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onOpenContact}
                className="px-6 py-3.5 bg-[#481F25] hover:bg-[#35161A] text-white text-xs uppercase tracking-widest font-semibold rounded-md shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Contact Jonathan</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={onOpenHomeValue}
                className="px-6 py-3.5 bg-white hover:bg-[#F6F3ED] text-[#161515] text-xs uppercase tracking-widest font-semibold rounded-md border border-[#D8D3CB] transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Request Home Valuation</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
