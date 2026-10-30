import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jonathan Sells NJ | Sell Your New Jersey Home With Confidence",
  description:
    "Helping New Jersey homeowners sell with confidence. Straightforward guidance, professional marketing, and localized pricing strategy from preparation through closing.",
  keywords: [
    "New Jersey Realtor",
    "Sell my home NJ",
    "New Jersey real estate agent",
    "Jonathan Velasquez",
    "Jonathan Sells NJ",
    "NJ home value",
    "Bergen County real estate",
    "Essex County Realtor",
    "Rutherford NJ real estate",
    "Sell house New Jersey",
  ],
  authors: [{ name: "Jonathan Velasquez" }],
  creator: "Jonathan Velasquez",
  publisher: "Keller Williams Park Views",
  metadataBase: new URL("https://jonathansellsnj.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://jonathansellsnj.com",
    title: "Jonathan Sells NJ | Sell Your New Jersey Home With Confidence",
    description:
      "A clear strategy, professional marketing, and straightforward guidance for New Jersey homeowners considering selling their property.",
    siteName: "Jonathan Sells NJ",
  },
};

export const viewport: Viewport = {
  themeColor: "#481F25",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "RealEstateAgent",
        "@id": "https://jonathansellsnj.com/#agent",
        name: "Jonathan Sells NJ - Jonathan Velasquez",
        image: "https://jonathansellsnj.com/images/jonathan.jpg",
        description:
          "New Jersey real estate professional specializing in helping homeowners prepare, position, and sell their properties for top market value.",
        url: "https://jonathansellsnj.com",
        telephone: "+1-201-555-0198",
        email: "Jonathanvelasquez@kw.com",
        priceRange: "$$$$",
        address: {
          "@type": "PostalAddress",
          streetAddress: "301 NJ-17",
          addressLocality: "Rutherford",
          addressRegion: "NJ",
          postalCode: "07070",
          addressCountry: "US",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: "40.8282",
          longitude: "-74.1068",
        },
        parentOrganization: {
          "@type": "Organization",
          name: "Keller Williams Park Views Realty",
          url: "https://kw.com",
        },
        areaServed: [
          { "@type": "AdministrativeArea", name: "Bergen County, NJ" },
          { "@type": "AdministrativeArea", name: "Essex County, NJ" },
          { "@type": "AdministrativeArea", name: "Passaic County, NJ" },
          { "@type": "AdministrativeArea", name: "Hudson County, NJ" },
          { "@type": "AdministrativeArea", name: "Morris County, NJ" },
        ],
        knowsAbout: [
          "New Jersey Real Estate",
          "Home Valuation & CMA",
          "Property Marketing & Photography",
          "Seller Representation",
          "Contract Negotiation",
        ],
      },
      {
        "@type": "WebSite",
        "@id": "https://jonathansellsnj.com/#website",
        url: "https://jonathansellsnj.com",
        name: "Jonathan Sells NJ",
        publisher: {
          "@id": "https://jonathansellsnj.com/#agent",
        },
      },
    ],
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="min-h-screen bg-[#F6F3ED] text-[#161515] antialiased selection:bg-[#481F25] selection:text-white">
        {children}
      </body>
    </html>
  );
}
