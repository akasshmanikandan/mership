import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import WhyUsGrid from "../components/WhyUsGrid";
import ProcessSteps from "../components/ProcessSteps";

export const metadata: Metadata = {
  title: "About Mercury Shipping | CHA Licensed Agent Chennai, Est. 2000",
  description:
    "Learn about Mercury Shipping & Logistics — Chennai's trusted customs house agent since 2000. CHA LIC NO: R230. Timely delivery, 24×7 helpline, global network.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title:
      "About Mercury Shipping | CHA Agent Chennai Since 2000 | CHA LIC NO: R230",
    description:
      "Mercury Shipping & Logistics Services has been a trusted customs clearance and freight forwarding partner in Chennai since 2000.",
  },
};

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Page Header */}
      <section className="bg-[#1c2539] text-white py-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-block bg-amber-400 text-[#1c2539] text-xs font-bold px-3 py-1 rounded-full mb-6 w-max mx-auto">
            CHA LIC NO: R230 | Est. 2000
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            About Us
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
            Over two decades of trusted freight forwarding and customs
            clearance from the heart of Chennai.
          </p>
        </div>
      </section>

      {/* Company Intro */}
      <section className="py-16 bg-white px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1c2539] mb-6">
            Mercury Shipping &amp; Logistics Services
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Founded in 2000, Mercury Shipping &amp; Logistics Services is a
            licensed Customs House Agent (CHA LIC NO: R230) headquartered in
            Chennai. We provide end-to-end freight forwarding — air, ocean, and
            customs clearance — for importers and exporters across India.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            With over 25 years of industry experience, our team delivers
            reliable, fully documented, and compliance-first logistics solutions.
            We operate across 9 major ports and ICDs including Chennai, Cochin,
            Mumbai, Mundra, and Kolkata, and maintain a 24×7 cargo helpline for
            our clients.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Our office is located at No. 269/1 JSJ Complex, B1, 2nd Floor,
            Thambu Chetty Street, Chennai 600 001.
          </p>
        </div>
      </section>

      {/* Why Mercury Shipping */}
      <section className="py-20 bg-[#1c2539] text-white px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Mercury Shipping?
            </h2>
          </div>
          <WhyUsGrid />
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 bg-white px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1c2539] mb-4">
              Our Process
            </h2>
            <p className="text-gray-600">
              A clear, step-by-step approach — from understanding your
              requirements to final delivery.
            </p>
          </div>
          <ProcessSteps />
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#101726] text-white px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to work with us?
          </h2>
          <p className="text-gray-400 mb-8">
            Reach our team 24×7 for all your logistics and customs needs.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-amber-400 text-[#1c2539] px-6 py-3 rounded font-bold hover:bg-amber-500 transition-colors flex items-center gap-2"
            >
              Contact Us <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/services"
              className="border border-white/30 text-white px-6 py-3 rounded hover:bg-white/10 transition-colors font-medium flex items-center gap-2"
            >
              Our Services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
