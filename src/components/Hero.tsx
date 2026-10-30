"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, ShieldCheck, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import jonathanExecutive from "../../public/images/jonathan_executive.jpg";
import jonathanHeadshot from "../../public/images/jonathan_headshot.jpg";

interface HeroProps {
  onOpenHomeValue: () => void;
  onOpenContact: () => void;
}

export function Hero({ onOpenHomeValue, onOpenContact }: HeroProps) {
  return (
    <section className="relative min-h-[82svh] md:min-h-[88vh] lg:min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#161515]">
      {/* Background: Authentic New Jersey Northeast Colonial / Suburban Home */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=2000&q=85"
          alt="Authentic New Jersey residential architecture"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center scale-105 transform motion-safe:transition-transform motion-safe:duration-1000"
        />
        {/* Deep Burgundy & Near-Black Gradient Overlay per specification */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#161515]/95 via-[#161515]/85 to-[#481F25]/75 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#161515] via-transparent to-[#161515]/70" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#481F25]/40 via-transparent to-transparent" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 pb-12 sm:pb-16 md:py-28 lg:py-32 flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left / Primary Content Column (approx 7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="lg:col-span-7 xl:col-span-7 text-white"
          >
            {/* Mobile Author Pill Badge (clean, non-intrusive) */}
            <div className="flex items-center gap-2 mb-3.5 sm:mb-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-[#F6F3ED] text-[11px] sm:text-xs font-semibold tracking-[0.18em] uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-[#9B6B52]" />
                New Jersey Real Estate
              </div>

              <div className="lg:hidden inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-[11px] text-[#D8D3CB]">
                <div className="relative w-4 h-4 rounded-full overflow-hidden shrink-0">
                  <Image
                    src={jonathanHeadshot}
                    alt="Jonathan"
                    fill
                    className="object-cover"
                  />
                </div>
                <span>Jonathan Velasquez</span>
              </div>
            </div>

            {/* Main Heading - Responsive scale to avoid overcrowding */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif-nj text-white font-normal leading-[1.12] mb-3.5 sm:mb-5 max-w-2xl text-balance">
              Sell Your Home <br className="hidden sm:inline" />
              <span className="italic font-normal text-[#E5DFD4]">With Confidence.</span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-xs sm:text-base text-[#D8D3CB] font-light leading-relaxed max-w-xl mb-6 sm:mb-8 text-pretty">
              A clear strategy, professional marketing and straightforward guidance from preparation to closing.
            </p>

            {/* Call To Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-4 mb-5 sm:mb-8">
              {/* Primary CTA */}
              <button
                onClick={onOpenHomeValue}
                className="px-6 py-3.5 sm:py-4 bg-[#481F25] hover:bg-[#5E2A32] text-white text-xs sm:text-sm uppercase tracking-widest font-semibold rounded-md border border-[#9B6B52]/50 shadow-xl transition-all flex items-center justify-center gap-2 cursor-pointer group"
              >
                <span>What&apos;s My Home Worth?</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Secondary CTA */}
              <a
                href="#sell-strategy"
                className="px-5 py-3 sm:py-4 bg-white/10 hover:bg-white/15 text-white text-xs sm:text-sm uppercase tracking-widest font-semibold rounded-md border border-white/20 transition-all flex items-center justify-center gap-2"
              >
                <span>Selling a Home</span>
                <span className="text-[#9B6B52]">→</span>
              </a>
            </div>

            {/* Micro-credibility row */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[11px] sm:text-xs text-[#D8D3CB]/85">
              <a
                href="#featured-listings"
                className="hover:text-white transition-colors flex items-center gap-1 font-medium tracking-wider uppercase"
              >
                Browse Listings <span className="text-[#9B6B52]">→</span>
              </a>
              <span className="text-white/30">•</span>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#9B6B52]" />
                <span>Personalized manual CMA</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Editorial Portrait (Displayed on Desktop/Tablet, clean and uncrowded) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            className="hidden lg:flex lg:col-span-5 xl:col-span-5 justify-end"
          >
            {/* Elegant Editorial Card Frame */}
            <div className="relative w-full max-w-[340px] sm:max-w-[380px] group">
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-[#481F25] to-[#9B6B52] rounded-2xl opacity-40 blur-lg group-hover:opacity-60 transition duration-700" />

              <div className="relative rounded-2xl bg-[#161515] p-2.5 border border-white/15 shadow-2xl overflow-hidden">
                <div className="relative aspect-[4/5] w-full rounded-xl overflow-hidden bg-[#242021]">
                  <Image
                    src={jonathanExecutive}
                    alt="Jonathan Velasquez - New Jersey Real Estate Specialist"
                    fill
                    sizes="(max-width: 768px) 340px, 400px"
                    className="object-cover object-top transition duration-500 group-hover:scale-102"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#161515] via-transparent to-transparent opacity-80" />

                  {/* Card Overlay Badge */}
                  <div className="absolute bottom-3 left-3 right-3 p-3 rounded-lg bg-[#161515]/90 backdrop-blur-md border border-white/10 text-white">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-serif-nj text-base sm:text-lg text-white font-medium leading-tight">
                          Jonathan Velasquez
                        </p>
                        <p className="text-[11px] text-[#D8D3CB] tracking-wider uppercase mt-0.5">
                          Keller Williams Park Views
                        </p>
                      </div>
                      <div className="text-right">
                        <span className="inline-flex items-center gap-1 text-[11px] text-[#9B6B52] font-semibold tracking-wider uppercase">
                          <MapPin className="w-3 h-3" />
                          Rutherford, NJ
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
