import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ServicesGrid from "../components/ServicesGrid";
import GetQuoteButton from "../components/GetQuoteButton";

export const metadata: Metadata = {
  title:
    "Customs Clearance, Air & Ocean Freight Forwarding Chennai",
  description:
    "Licensed customs clearance agent (CHA LIC NO: R230) offering air freight, ocean freight FCL/LCL, and custom advisory services in Chennai since 2000.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title:
      "Customs Clearance Agent in Chennai | Air & Ocean Freight | Mercury Shipping",
    description:
      "Mercury Shipping offers end-to-end customs clearance, air freight, ocean freight (FCL/LCL), and trade advisory from Chennai. CHA LIC NO: R230.",
  },
};

export default function ServicesPage() {
  return (
    <div className="bg-gray-50 flex flex-col">
      {/* Page Header */}
      <section className="bg-[#1c2539] text-white py-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-block bg-amber-400 text-[#1c2539] text-xs font-bold px-3 py-1 rounded-full mb-6 w-max mx-auto">
            CHA LIC NO: R230 | Est. 2000
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Our Services
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
            Comprehensive air, sea, and customs logistics solutions —
            handled end-to-end by our licensed team in Chennai.
          </p>
        </div>
      </section>

      {/* Services Grid — Expanded */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <ServicesGrid expanded />
        </div>
      </section>

      {/* CTA Strip */}
      <section className="py-16 bg-[#101726] text-white px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Have a shipment in mind?
          </h2>
          <p className="text-gray-400 mb-8">
            Request a quote and our team will get back to you within 24 hours.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <GetQuoteButton className="bg-amber-400 text-[#1c2539] px-6 py-3 rounded font-bold hover:bg-amber-500 transition-colors">
              Get a Quote
            </GetQuoteButton>
            <Link
              href="/contact"
              className="border border-white/30 text-white px-6 py-3 rounded hover:bg-white/10 transition-colors font-medium flex items-center gap-2"
            >
              Contact Us <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
