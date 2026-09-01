import type { Metadata } from "next";
import GetQuoteButton from "../components/GetQuoteButton";
import ContactSection from "../components/ContactSection";

export const metadata: Metadata = {
  title: "Contact Mercury Shipping Chennai | 24×7 Cargo Helpline",
  description:
    "Reach Mercury Shipping & Logistics Services at No. 269/1 JSJ Complex, Thambu Chetty St, Chennai 600 001. Call or email for customs clearance and freight enquiries. CHA LIC NO: R230.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title:
      "Contact Mercury Shipping Chennai | CHA LIC NO: R230 | 24×7 Helpline",
    description:
      "Get in touch with Mercury Shipping & Logistics Services — your trusted customs clearance and freight forwarding partner in Chennai.",
  },
};

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      {/* Page Header */}
      <section className="bg-[#1c2539] text-white py-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Contact Us
          </h1>
          <p className="text-gray-400 text-lg mb-8">
            Available 24×7 for your logistics needs.
          </p>
          <GetQuoteButton className="bg-amber-400 text-[#1c2539] px-6 py-3 rounded font-bold hover:bg-amber-500 transition-colors inline-block">
            Get a Quote
          </GetQuoteButton>
        </div>
      </section>

      {/* Contact Details + Map */}
      <section className="py-20 bg-[#1c2539] text-white px-6">
        <div className="max-w-7xl mx-auto">
          <ContactSection />
        </div>
      </section>
    </div>
  );
}
