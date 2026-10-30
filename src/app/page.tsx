"use client";

import React, { useState } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { SellerTrustBar } from "@/components/SellerTrustBar";
import { HomeValueSection } from "@/components/HomeValueSection";
import { SellingProcess } from "@/components/SellingProcess";
import { MarketingStrategy } from "@/components/MarketingStrategy";
import { WhyJonathan } from "@/components/WhyJonathan";
import { AboutJonathan } from "@/components/AboutJonathan";
import { FeaturedListings } from "@/components/FeaturedListings";
import { RecentSales } from "@/components/RecentSales";
import { Testimonials } from "@/components/Testimonials";
import { Communities } from "@/components/Communities";
import { SellerResources } from "@/components/SellerResources";
import { SellerCTA } from "@/components/SellerCTA";
import { BuyerPath } from "@/components/BuyerPath";
import { ContactSection } from "@/components/ContactSection";
import { MobileContactBar } from "@/components/MobileContactBar";
import { Footer } from "@/components/Footer";
import { HomeValueModal } from "@/components/HomeValueModal";
import { ContactModal } from "@/components/ContactModal";
import { NotificationToast, ToastState } from "@/components/NotificationToast";
import { PropertyListing } from "@/data/njContent";

export default function HomePage() {
  const [isHomeValueModalOpen, setIsHomeValueModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [contactInterest, setContactInterest] = useState("Selling");

  const [toast, setToast] = useState<ToastState>({
    show: false,
    type: "success",
    message: "",
  });

  const showToast = (message: string, type: "success" | "error" = "success") => {
    setToast({
      show: true,
      type,
      message,
    });
    setTimeout(() => {
      setToast((prev) => ({ ...prev, show: false }));
    }, 6000);
  };

  const handleSelectProperty = (property: PropertyListing) => {
    setContactInterest(`Inquiry on ${property.address}, ${property.city} ($${property.numericPrice.toLocaleString()})`);
    setIsContactModalOpen(true);
  };

  const handleOpenContactWithTopic = (topic: string) => {
    setContactInterest(topic);
    setIsContactModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F6F3ED] text-[#161515] relative selection:bg-[#481F25] selection:text-white">
      {/* 1. Header */}
      <Header
        onOpenHomeValue={() => setIsHomeValueModalOpen(true)}
        onOpenContact={() => handleOpenContactWithTopic("General Selling Question")}
      />

      <main className="flex-1">
        {/* 2. Hero */}
        <Hero
          onOpenHomeValue={() => setIsHomeValueModalOpen(true)}
          onOpenContact={() => handleOpenContactWithTopic("Selling a Home")}
        />

        {/* 3. Seller Trust Bar */}
        <SellerTrustBar />

        {/* 4. Flagship Home Value Conversion */}
        <HomeValueSection
          onSuccess={(msg) => showToast(msg, "success")}
        />

        {/* 5. Selling Process */}
        <SellingProcess
          onOpenContact={() => handleOpenContactWithTopic("Selling Strategy Consultation")}
        />

        {/* 6. Seller Marketing Strategy */}
        <MarketingStrategy
          onOpenContact={() => handleOpenContactWithTopic("Marketing Strategy Inquiry")}
        />

        {/* 7. Why Sell With Jonathan */}
        <WhyJonathan />

        {/* 8. About Jonathan */}
        <AboutJonathan
          onOpenContact={() => handleOpenContactWithTopic("Meeting With Jonathan")}
          onOpenHomeValue={() => setIsHomeValueModalOpen(true)}
        />

        {/* 9. Featured Listings */}
        <FeaturedListings
          onSelectProperty={handleSelectProperty}
          onOpenContact={() => handleOpenContactWithTopic("View All Listings & Off-Market Homes")}
        />

        {/* 10. Recent Sales */}
        <RecentSales />

        {/* 11. Testimonials */}
        <Testimonials />

        {/* 12. New Jersey Communities */}
        <Communities
          onOpenContact={() => handleOpenContactWithTopic("Community Market Inquiry")}
        />

        {/* 13. Seller Resources & Educational Guides */}
        <SellerResources
          onOpenHomeValue={() => setIsHomeValueModalOpen(true)}
          onOpenContact={() => handleOpenContactWithTopic("Seller Resources Guidance")}
        />

        {/* 14. Primary Seller CTA */}
        <SellerCTA
          onOpenHomeValue={() => setIsHomeValueModalOpen(true)}
          onOpenContact={() => handleOpenContactWithTopic("Direct Representation Consultation")}
        />

        {/* 15. Buyer Path */}
        <BuyerPath
          onOpenContact={() => handleOpenContactWithTopic("Buying a Home in NJ")}
        />

        {/* 16. Contact Section */}
        <ContactSection
          onSuccess={(msg) => showToast(msg, "success")}
        />
      </main>

      {/* 17. Footer */}
      <Footer />

      {/* 18. Fixed Mobile Contact Bar (calls, cma, contact) */}
      <MobileContactBar
        onOpenHomeValue={() => setIsHomeValueModalOpen(true)}
        onOpenContact={() => handleOpenContactWithTopic("Mobile Quick Contact")}
      />

      {/* App-Native Modals (Strictly NO browser popups) */}
      <HomeValueModal
        isOpen={isHomeValueModalOpen}
        onClose={() => setIsHomeValueModalOpen(false)}
        onSuccess={(msg) => showToast(msg, "success")}
      />

      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
        onSuccess={(msg) => showToast(msg, "success")}
        initialInterest={contactInterest}
      />

      {/* App-Native Notification Toast */}
      <NotificationToast
        toast={toast}
        onClose={() => setToast((prev) => ({ ...prev, show: false }))}
      />
    </div>
  );
}
