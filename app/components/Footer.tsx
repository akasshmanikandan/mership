import { ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#101726] border-t border-white/5">
      <div className="py-6 px-6 text-gray-400 text-xs">
        <div className="max-w-7xl mx-auto flex flex-col items-center justify-center text-center">
          <div>
            © 2025 Mercury Shipping &amp; Logistics Services. CHA LIC NO: R230.
            All rights reserved.
          </div>
        </div>
      </div>

      {/* Personal Branding / Lead Gen */}
      <div className="bg-[#0b0f19] border-t border-white/5 py-4 px-6 flex justify-center items-center group transition-colors hover:bg-black/40">
        <p className="text-gray-500 text-xs flex items-center gap-2">
          Need a modern, high-converting website for your business?{" "}
          <a
            href="https://www.troyflex.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-500 hover:text-amber-400 font-semibold transition-colors flex items-center gap-1 border-b border-transparent hover:border-amber-400 pb-0.5"
          >
            Get in touch with the Developer{" "}
            <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
          </a>
        </p>
      </div>
    </footer>
  );
}
