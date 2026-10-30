"use client";

import React from "react";
import { Phone, Home, MessageSquare } from "lucide-react";

interface MobileContactBarProps {
  onOpenHomeValue: () => void;
  onOpenContact: () => void;
}

export function MobileContactBar({ onOpenHomeValue, onOpenContact }: MobileContactBarProps) {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-40 bg-[#161515]/95 backdrop-blur-md border-t border-[#481F25]/40 md:hidden px-3 py-2 pb-[max(0.5rem,env(safe-area-inset-bottom))]"
      style={{ minHeight: "60px" }}
    >
      <div className="grid grid-cols-3 gap-2 items-center max-w-md mx-auto h-full">
        {/* CALL Action */}
        <a
          href="tel:2015550198"
          className="flex flex-col items-center justify-center py-1.5 px-2 rounded-lg bg-white/5 hover:bg-white/10 text-white transition-colors text-center"
        >
          <Phone className="w-4 h-4 text-[#D8D3CB] mb-0.5" />
          <span className="text-[10px] font-bold uppercase tracking-wider text-[#D8D3CB]">
            Call
          </span>
        </a>

        {/* HOME VALUE Action - Visually Strongest */}
        <button
          onClick={onOpenHomeValue}
          className="flex flex-col items-center justify-center py-2 px-2 rounded-lg bg-[#481F25] hover:bg-[#5E2A32] text-white shadow-lg border border-[#9B6B52]/50 transition-all text-center cursor-pointer scale-102"
        >
          <Home className="w-4 h-4 text-[#F6F3ED] mb-0.5" />
          <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#F6F3ED]">
            Home Value
          </span>
        </button>

        {/* CONTACT Action */}
        <button
          onClick={onOpenContact}
          className="flex flex-col items-center justify-center py-1.5 px-2 rounded-lg bg-white/5 hover:bg-white/10 text-white transition-colors text-center cursor-pointer"
        >
          <MessageSquare className="w-4 h-4 text-[#D8D3CB] mb-0.5" />
          <span className="text-[10px] font-bold uppercase tracking-wider text-[#D8D3CB]">
            Contact
          </span>
        </button>
      </div>
    </div>
  );
}
