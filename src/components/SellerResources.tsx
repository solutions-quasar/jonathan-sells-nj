"use client";

import React, { useState } from "react";
import { BookOpen, Clock, ArrowRight, X, CheckCircle } from "lucide-react";
import { SELLER_RESOURCES, SellerResource } from "@/data/njContent";
import { motion, AnimatePresence } from "framer-motion";

interface SellerResourcesProps {
  onOpenHomeValue: () => void;
  onOpenContact: () => void;
}

export function SellerResources({ onOpenHomeValue, onOpenContact }: SellerResourcesProps) {
  const [selectedArticle, setSelectedArticle] = useState<SellerResource | null>(null);

  return (
    <section className="py-14 sm:py-20 lg:py-28 bg-[#161515] text-[#F6F3ED] border-y border-[#481F25]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#9B6B52] block mb-3">
            Seller Resources
          </span>
          <h2 className="section-title font-serif-nj text-white font-normal leading-tight mb-4">
            Before You List, <br />
            <span className="italic text-[#D8D3CB]">Know Your Options.</span>
          </h2>
          <p className="text-sm sm:text-base text-[#D8D3CB]/90 leading-relaxed font-light">
            Empowering New Jersey homeowners with candid, practical market guidance. Avoid costly mistakes and understand how the local selling process works.
          </p>
        </div>

        {/* 6 High-Value Educational Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {SELLER_RESOURCES.map((resource) => (
            <div
              key={resource.id}
              onClick={() => setSelectedArticle(resource)}
              className="group bg-[#201E1E] rounded-2xl p-6 sm:p-7 border border-white/10 hover:border-[#481F25] transition-all duration-300 shadow-lg flex flex-col justify-between cursor-pointer"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-[#9B6B52] mb-4">
                  <div className="flex items-center gap-1.5">
                    <BookOpen className="w-4 h-4" />
                    <span className="font-semibold uppercase tracking-wider text-[11px]">Seller Guide</span>
                  </div>
                  <div className="flex items-center gap-1 text-[#857F76]">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{resource.readTime}</span>
                  </div>
                </div>

                <h3 className="font-serif-nj text-xl text-white group-hover:text-[#D8D3CB] transition-colors leading-snug mb-2">
                  {resource.title}
                </h3>
                <p className="text-xs text-[#9B6B52] mb-3 font-medium">
                  {resource.subtitle}
                </p>
                <p className="text-xs text-[#D8D3CB]/80 leading-relaxed line-clamp-3 font-light">
                  {resource.summary}
                </p>
              </div>

              <div className="pt-5 mt-5 border-t border-white/10 flex items-center justify-between text-xs font-semibold text-white group-hover:text-[#9B6B52] transition-colors">
                <span>Read Full Analysis</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Article Modal (App-native, no browser alerts) */}
        <AnimatePresence>
          {selectedArticle && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedArticle(null)}
                className="fixed inset-0 bg-black/80 backdrop-blur-sm"
              />

              {/* Modal Container */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="relative w-full max-w-2xl bg-[#F6F3ED] text-[#161515] rounded-2xl shadow-2xl border border-[#D8D3CB] overflow-hidden z-10 my-8"
              >
                <div className="bg-[#481F25] text-white p-6 flex items-start justify-between">
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-[#D8D3CB]">
                      New Jersey Seller Advisory
                    </span>
                    <h3 className="font-serif-nj text-2xl text-white mt-1">
                      {selectedArticle.title}
                    </h3>
                  </div>
                  <button
                    onClick={() => setSelectedArticle(null)}
                    className="p-1 rounded-md text-[#D8D3CB] hover:text-white hover:bg-white/10 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="p-6 sm:p-8 space-y-6 max-h-[70vh] overflow-y-auto">
                  <div className="p-4 rounded-xl bg-white border border-[#D8D3CB] text-sm text-[#57524C] leading-relaxed">
                    <strong className="text-[#161515] block mb-1">Executive Summary:</strong>
                    {selectedArticle.summary}
                  </div>

                  <div>
                    <h4 className="font-serif-nj text-lg text-[#161515] mb-3">
                      Key New Jersey Considerations:
                    </h4>
                    <div className="space-y-2.5">
                      {selectedArticle.keyPoints.map((point, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-xs text-[#57524C]">
                          <CheckCircle className="w-4 h-4 text-[#481F25] shrink-0 mt-0.5" />
                          <span>{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[#D8D3CB] flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-xs text-[#857F76]">
                      Want tailored guidance on your specific home?
                    </p>
                    <div className="flex items-center gap-3 w-full sm:w-auto">
                      <button
                        onClick={() => {
                          setSelectedArticle(null);
                          onOpenHomeValue();
                        }}
                        className="flex-1 sm:flex-initial px-4 py-2 bg-[#481F25] text-white text-xs uppercase tracking-wider font-semibold rounded-md hover:bg-[#35161A] transition-colors"
                      >
                        Request Home Value
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
