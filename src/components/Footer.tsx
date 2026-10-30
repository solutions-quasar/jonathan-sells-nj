"use client";

import React from "react";
import { ArrowUp, ShieldCheck } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#161515] text-[#D8D3CB] border-t border-[#481F25]/40 pt-16 pb-24 md:pb-16 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10 pb-12 border-b border-white/10">
          {/* Brand info (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <div>
              <span className="font-serif-nj text-2xl text-white font-normal block leading-tight">
                JONATHAN SELLS NJ
              </span>
              <span className="text-[10px] tracking-[0.25em] text-[#9B6B52] uppercase font-semibold">
                New Jersey Real Estate Specialist
              </span>
            </div>

            <p className="text-xs text-[#BCB6AC] leading-relaxed max-w-sm">
              Helping New Jersey homeowners sell with confidence through straightforward guidance, localized pricing strategy, and high-impact digital marketing.
            </p>

            <div className="text-xs text-white space-y-1">
              <p><strong>Affiliated Office:</strong> Keller Williams Park Views</p>
              <p>301 NJ-17, Rutherford, NJ 07070</p>
              <p>Direct: (201) 555-0198 • Office: (201) 939-0050</p>
              <p>Email: Jonathanvelasquez@kw.com</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.16em] text-white mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a href="#sell-strategy" className="hover:text-white transition-colors">
                  Seller Strategy
                </a>
              </li>
              <li>
                <a href="#home-value" className="hover:text-white transition-colors">
                  Home Valuation (CMA)
                </a>
              </li>
              <li>
                <a href="#featured-listings" className="hover:text-white transition-colors">
                  Featured NJ Listings
                </a>
              </li>
              <li>
                <a href="#nj-communities" className="hover:text-white transition-colors">
                  NJ Communities
                </a>
              </li>
              <li>
                <a href="#about-jonathan" className="hover:text-white transition-colors">
                  About Jonathan
                </a>
              </li>
              <li>
                <a href="#contact-section" className="hover:text-white transition-colors">
                  Contact Office
                </a>
              </li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.16em] text-white mb-4">
              Markets Served
            </h4>
            <ul className="space-y-2 text-[#BCB6AC]">
              <li>Rutherford & South Bergen</li>
              <li>Montclair & Glen Ridge</li>
              <li>Ridgewood & North Bergen</li>
              <li>Maplewood & South Orange</li>
              <li>Clifton & Passaic County</li>
              <li>Hoboken & Hudson County</li>
            </ul>
          </div>

          {/* Disclosures & Regulatory */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.16em] text-white mb-4">
              Compliance
            </h4>
            <div className="space-y-2 text-[#BCB6AC] leading-relaxed">
              <div className="flex items-center gap-1.5 text-white">
                <ShieldCheck className="w-3.5 h-3.5 text-[#9B6B52]" />
                <span className="font-semibold">Equal Housing Opportunity</span>
              </div>
              <p>
                Each Keller Williams brokerage office is independently owned and operated.
              </p>
              <p>
                New Jersey Real Estate Commission Licensed Salesperson • [VERIFIED NJ LICENSE # NEEDED]
              </p>
            </div>
          </div>
        </div>

        {/* Legal & Disclaimers */}
        <div className="pt-8 space-y-4 text-[11px] text-[#857F76] leading-relaxed">
          <p>
            <strong>New Jersey Real Estate Advertising Disclosures:</strong> Information presented is deemed reliable but not guaranteed and should be independently verified. Properties subject to prior sale, change, or withdrawal. Neither Jonathan Velasquez nor Keller Williams Park Views shall be responsible for any typographical errors, misinformation, or misprints and shall be held totally harmless.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/5">
            <p>© {new Date().getFullYear()} Jonathan Sells NJ • Jonathan Velasquez. All Rights Reserved.</p>
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-white transition-colors">Fair Housing</a>
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <button
                onClick={scrollToTop}
                className="flex items-center gap-1 text-[#9B6B52] hover:text-white transition-colors cursor-pointer"
                aria-label="Back to top"
              >
                <span>Top</span>
                <ArrowUp className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
