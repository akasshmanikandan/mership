import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PortsSection from "../components/PortsSection";
import GetQuoteButton from "../components/GetQuoteButton";

export const metadata: Metadata = {
  title: "Ports & ICDs Network | Mercury Shipping Chennai",
  description:
    "Mercury Shipping operates across 9 major Indian ports and ICDs — Chennai, Cochin, Mumbai, Mundra, Kolkata, Vizag, Bangalore, Hyderabad, and Tuticorin.",
  alternates: {
    canonical: "/ports",
  },
  openGraph: {
    title:
      "Indian Ports & ICDs Network | Mercury Shipping & Logistics Chennai",
    description:
      "Strategically connected across India's key trade gateways. Mercury Shipping covers 9 major ports and ICDs for seamless freight forwarding.",
  },
};

export default function PortsPage() {
  return (
    <div className="bg-gray-50 flex flex-col">
      {/* Page Header */}
      <section className="bg-[#1c2539] text-white py-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Ports &amp; ICDs We Serve
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
            Strategically connected across India&apos;s key trade gateways.
          </p>
        </div>
      </section>

      {/* Ports Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <PortsSection />
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#101726] text-white px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Shipping to one of these ports?
          </h2>
          <p className="text-gray-400 mb-8">
            Our team is ready to handle customs clearance and freight forwarding
            end-to-end.
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
