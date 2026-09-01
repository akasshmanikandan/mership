import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import StatsBar from "./components/StatsBar";
import ServicesGrid from "./components/ServicesGrid";
import WhyUsGrid from "./components/WhyUsGrid";
import GetQuoteButton from "./components/GetQuoteButton";

export const metadata: Metadata = {
  title:
    "Mercury Shipping & Logistics Services | Global Freight Forwarding Chennai",
  description:
    "Chennai-based global freight forwarding, customs clearance, and multimodal logistics delivered with precision. CHA LIC NO: R230. Est. 2000.",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <div className="bg-gray-50 flex flex-col">
      {/* ─── Hero Section ─────────────────────────────── */}
      <section className="flex flex-col md:flex-row min-h-[500px] w-full bg-[#1c2539]">
        {/* Left Column */}
        <div className="w-full md:w-1/2 flex flex-col justify-center px-8 md:px-20 py-16 text-white text-left">
          <div className="inline-block bg-amber-400 text-[#1c2539] text-xs font-bold px-3 py-1 rounded-full mb-8 w-max">
            CHA LIC NO: R230 | Est. 2000
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-2 leading-tight">
            Your Cargo.
            <br />
            <span className="text-amber-400">Our Commitment.</span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-lg mt-6 mb-10 leading-relaxed font-light">
            Chennai-based global freight forwarding, customs clearance, and
            multimodal logistics delivered with precision.
          </p>
          <div className="flex flex-wrap gap-4 items-center">
            <GetQuoteButton className="bg-amber-400 text-[#1c2539] px-6 py-3 rounded hover:bg-amber-500 transition-colors font-bold flex items-center">
              Get a Quote
            </GetQuoteButton>
            <Link
              href="/services"
              className="border border-white/30 hover:bg-white/10 text-white px-6 py-3 rounded transition-colors flex items-center gap-2 font-medium"
            >
              Our Services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Right Column / Image Area */}
        <div className="w-full md:w-1/2 min-h-[400px] relative overflow-hidden group">
          <Image
            src="/hero_ship_port.png"
            alt="Container Ship at Port — Mercury Shipping Chennai"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1c2539] via-transparent to-transparent md:block hidden" />
          <div className="absolute inset-0 bg-black/20 z-0" />
        </div>
      </section>

      {/* ─── Stats Bar ────────────────────────────────── */}
      <StatsBar />

      {/* ─── Services Preview ─────────────────────────── */}
      <section className="py-20 bg-gray-50 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1c2539] mb-4">
              Our Services
            </h2>
            <p className="text-gray-600">
              Comprehensive logistics solutions — air, sea, and land.
            </p>
          </div>
          <ServicesGrid />
          <div className="text-center mt-10">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-[#3f679e] font-semibold hover:text-amber-500 transition-colors text-sm"
            >
              View all services &amp; details <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Why Mercury Preview ──────────────────────── */}
      <section className="py-20 bg-[#1c2539] text-white px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Mercury Shipping?
            </h2>
          </div>
          <WhyUsGrid />
          <div className="text-center mt-10">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-amber-400 font-semibold hover:text-amber-300 transition-colors text-sm"
            >
              Learn more about us <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Contact CTA ──────────────────────────────── */}
      <section className="py-16 bg-[#101726] text-white px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Ship?
          </h2>
          <p className="text-gray-400 mb-10 leading-relaxed">
            Available 24×7 for all your logistics needs. Get a quote or reach
            our team directly — we&apos;ll take it from there.
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
