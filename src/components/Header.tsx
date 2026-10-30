"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface HeaderProps {
  onOpenHomeValue: () => void;
  onOpenContact: () => void;
}

export function Header({ onOpenHomeValue, onOpenContact }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "SELL", href: "#sell-strategy" },
    { label: "HOME VALUE", href: "#home-value" },
    { label: "LISTINGS", href: "#featured-listings" },
    { label: "COMMUNITIES", href: "#nj-communities" },
    { label: "ABOUT", href: "#about-jonathan" },
    { label: "CONTACT", href: "#contact-section" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-[#161515]/95 backdrop-blur-md py-3.5 shadow-lg border-b border-[#481F25]/30 text-white"
          : "bg-gradient-to-b from-[#161515]/90 via-[#161515]/60 to-transparent py-5 text-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand Name */}
          <a href="#" className="flex flex-col group">
            <span className="font-serif-nj text-xl sm:text-2xl tracking-wide text-white group-hover:text-[#D8D3CB] transition-colors leading-tight">
              JONATHAN SELLS NJ
            </span>
            <span className="text-[10px] tracking-[0.25em] text-[#D8D3CB] uppercase font-medium">
              New Jersey Real Estate
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs uppercase tracking-[0.16em] font-medium text-[#E5DFD4] hover:text-white transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#9B6B52] hover:after:w-full after:transition-all after:duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Primary CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <button
              onClick={onOpenHomeValue}
              className="px-5 py-2.5 bg-[#481F25] hover:bg-[#5E2A32] text-white text-xs uppercase tracking-widest font-semibold rounded-md border border-[#9B6B52]/40 transition-all shadow-sm hover:shadow-md flex items-center gap-1.5 cursor-pointer"
            >
              Get My Home Value
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex lg:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-white hover:text-[#D8D3CB] focus:outline-none"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-[#161515] border-b border-[#481F25]/40 px-6 py-6"
          >
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm uppercase tracking-widest text-[#E5DFD4] hover:text-white py-1 border-b border-white/5"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-4 flex flex-col gap-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenHomeValue();
                  }}
                  className="w-full py-3 bg-[#481F25] text-white text-xs uppercase tracking-widest font-semibold rounded-md text-center cursor-pointer"
                >
                  Get My Home Value
                </button>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenContact();
                  }}
                  className="w-full py-3 bg-white/10 hover:bg-white/15 text-white text-xs uppercase tracking-widest font-semibold rounded-md text-center cursor-pointer"
                >
                  Contact Jonathan
                </button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
