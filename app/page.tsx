"use client";

import { useState } from "react";
import {
  ArrowRight,
  Plane,
  Ship,
  FileText,
  MapPin,
  Clock,
  ShieldCheck,
  Globe,
  CheckCircle2,
  Building2,
  Menu,
  X
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      {/* Navigation */}
      <header className="bg-[#172033] text-white py-4 px-6 md:px-12 flex items-center justify-between sticky top-0 z-50 shadow-md">
        <div className="flex items-center space-x-2">
          <span className="font-bold text-lg tracking-wider text-white">MERCURY <span className="text-gray-400 font-normal hidden sm:inline">SHIPPING & LOGISTICS</span></span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
          <Link href="#home" className="hover:text-amber-400 transition-colors">Home</Link>
          <Link href="#services" className="hover:text-amber-400 transition-colors">Services</Link>
          <Link href="#about" className="hover:text-amber-400 transition-colors">About</Link>
          <Link href="#ports" className="hover:text-amber-400 transition-colors">Ports</Link>
          <Link href="#contact" className="hover:text-amber-400 transition-colors">Contact Us</Link>
          <Link href="#contact" className="bg-amber-400 text-[#172033] px-5 py-2.5 rounded hover:bg-amber-500 transition-colors font-bold inline-block">
            Get a Quote
          </Link>
        </nav>

        {/* Mobile Nav Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </header>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#101726] text-white py-4 px-6 fixed top-[72px] left-0 right-0 z-40 shadow-lg border-b border-white/10 flex flex-col space-y-4">
          <Link href="#home" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-amber-400 transition-colors">Home</Link>
          <Link href="#services" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-amber-400 transition-colors">Services</Link>
          <Link href="#about" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-amber-400 transition-colors">About</Link>
          <Link href="#ports" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-amber-400 transition-colors">Ports</Link>
          <Link href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-amber-400 transition-colors">Contact Us</Link>
          <Link href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="bg-amber-400 text-[#172033] px-5 py-2.5 rounded hover:bg-amber-500 transition-colors font-bold text-center inline-block">
            Get a Quote
          </Link>
        </div>
      )}

      {/* Hero Section */}
      <section id="home" className="flex flex-col md:flex-row min-h-[500px] w-full bg-[#1c2539] scroll-mt-[72px]">
        {/* Left Column */}
        <div className="w-full md:w-1/2 flex flex-col justify-center px-8 md:px-20 py-16 text-white text-left">
          <div className="inline-block bg-amber-400 text-[#1c2539] text-xs font-bold px-3 py-1 rounded-full mb-8 w-max">
            CHA LIC NO: R230 | Est. 2000
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-2 leading-tight">
            Your Cargo.<br />
            <span className="text-amber-400">Our Commitment.</span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-lg mt-6 mb-10 leading-relaxed font-light">
            Chennai-based global freight forwarding, customs clearance, and multimodal logistics delivered with precision.
          </p>
          <div className="flex flex-wrap gap-4 items-center">
            <Link href="#contact" className="bg-amber-400 text-[#1c2539] px-6 py-3 rounded hover:bg-amber-500 transition-colors font-bold flex items-center">
              Get a Quote
            </Link>
            <Link href="#services" className="border border-white/30 hover:bg-white/10 text-white px-6 py-3 rounded transition-colors flex items-center gap-2 font-medium">
              Our Services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Right Column / Image Area */}
        <div className="w-full md:w-1/2 min-h-[400px] relative overflow-hidden group">
          <Image
            src="/hero_ship_port.png"
            alt="Container Ship at Port"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1c2539] via-transparent to-transparent md:block hidden"></div>
          <div className="absolute inset-0 bg-black/20 z-0"></div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-[#101726] text-white py-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/10">
          <div>
            <div className="text-3xl font-bold text-amber-400 mb-1">25+</div>
            <div className="text-xs uppercase tracking-wider text-gray-400">Years Experience</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-amber-400 mb-1">9</div>
            <div className="text-xs uppercase tracking-wider text-gray-400">Ports & ICDs</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-amber-400 mb-1">24×7</div>
            <div className="text-xs uppercase tracking-wider text-gray-400">Cargo Helpline</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-amber-400 mb-1">100%</div>
            <div className="text-xs uppercase tracking-wider text-gray-400">Custom Compliant</div>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section id="services" className="py-20 bg-gray-50 px-6 scroll-mt-[72px]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1c2539] mb-4">Our Services</h2>
            <p className="text-gray-600">Comprehensive logistics solutions — air, sea, and land.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Service 1 */}
            <div className="bg-white p-8 rounded shadow-sm border-t-4 border-t-amber-400 hover:shadow-md transition-shadow flex flex-col">
              <div className="text-xs font-bold text-amber-500 uppercase tracking-widest mb-4">Customs</div>
              <h3 className="text-xl font-bold text-[#1c2539] mb-4">Customs Clearance</h3>
              <p className="text-gray-600 text-sm flex-grow mb-8 leading-relaxed">End-to-end clearance with legal advisory and full documentation.</p>
              <Link href="#" className="text-[#3f679e] text-sm font-semibold flex items-center gap-1 hover:text-amber-500 transition-colors">
                Learn more <ArrowRight className="w-3 h-3" />
              </Link>
            </div>

            {/* Service 2 */}
            <div className="bg-white p-8 rounded shadow-sm border-t-4 border-t-amber-400 hover:shadow-md transition-shadow flex flex-col">
              <div className="text-xs font-bold text-amber-500 uppercase tracking-widest mb-4">Air</div>
              <h3 className="text-xl font-bold text-[#1c2539] mb-4">Air Freight</h3>
              <p className="text-gray-600 text-sm flex-grow mb-8 leading-relaxed">Export & import air freight forwarding with charter options.</p>
              <Link href="#" className="text-[#3f679e] text-sm font-semibold flex items-center gap-1 hover:text-amber-500 transition-colors">
                Learn more <ArrowRight className="w-3 h-3" />
              </Link>
            </div>

            {/* Service 3 */}
            <div className="bg-white p-8 rounded shadow-sm border-t-4 border-t-amber-400 hover:shadow-md transition-shadow flex flex-col">
              <div className="text-xs font-bold text-amber-500 uppercase tracking-widest mb-4">Sea</div>
              <h3 className="text-xl font-bold text-[#1c2539] mb-4">Ocean Freight</h3>
              <p className="text-gray-600 text-sm flex-grow mb-8 leading-relaxed">FCL/LCL ocean forwarding for export & import worldwide.</p>
              <Link href="#" className="text-[#3f679e] text-sm font-semibold flex items-center gap-1 hover:text-amber-500 transition-colors">
                Learn more <ArrowRight className="w-3 h-3" />
              </Link>
            </div>

            {/* Service 4 */}
            <div className="bg-white p-8 rounded shadow-sm border-t-4 border-t-amber-400 hover:shadow-md transition-shadow flex flex-col">
              <div className="text-xs font-bold text-amber-500 uppercase tracking-widest mb-4">Advisory</div>
              <h3 className="text-xl font-bold text-[#1c2539] mb-4">Custom Advisory</h3>
              <p className="text-gray-600 text-sm flex-grow mb-8 leading-relaxed">Notifications, circulars, and compliance/regulatory updates.</p>
              <Link href="#" className="text-[#3f679e] text-sm font-semibold flex items-center gap-1 hover:text-amber-500 transition-colors">
                Learn more <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Mercury Shipping? */}
      <section id="about" className="py-20 bg-[#1c2539] text-white px-6 scroll-mt-[72px]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Mercury Shipping?</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 text-center">
            {/* Feature 1 */}
            <div className="bg-[#242f46] p-6 rounded hover:bg-[#2e3b56] transition-colors flex flex-col items-center justify-center aspect-square gap-4">
              <Clock className="w-8 h-8 text-amber-400" />
              <div className="text-sm font-medium">Timely Delivery</div>
            </div>
            {/* Feature 2 */}
            <div className="bg-[#242f46] p-6 rounded hover:bg-[#2e3b56] transition-colors flex flex-col items-center justify-center aspect-square gap-4">
              <ShieldCheck className="w-8 h-8 text-amber-400" />
              <div className="text-sm font-medium">Secure & Protected</div>
            </div>
            {/* Feature 3 */}
            <div className="bg-[#242f46] p-6 rounded hover:bg-[#2e3b56] transition-colors flex flex-col items-center justify-center aspect-square gap-4">
              <Globe className="w-8 h-8 text-amber-400" />
              <div className="text-sm font-medium">Global Network</div>
            </div>
            {/* Feature 4 */}
            <div className="bg-[#242f46] p-6 rounded hover:bg-[#2e3b56] transition-colors flex flex-col items-center justify-center aspect-square gap-4">
              <FileText className="w-8 h-8 text-amber-400" />
              <div className="text-sm font-medium">Full Documentation</div>
            </div>
            {/* Feature 5 */}
            <div className="bg-[#242f46] p-6 rounded hover:bg-[#2e3b56] transition-colors flex flex-col items-center justify-center aspect-square gap-4">
              <CheckCircle2 className="w-8 h-8 text-amber-400" />
              <div className="text-sm font-medium">24×7 Helpline</div>
            </div>
            {/* Feature 6 */}
            <div className="bg-[#242f46] p-6 rounded hover:bg-[#2e3b56] transition-colors flex flex-col items-center justify-center aspect-square gap-4">
              <Building2 className="w-8 h-8 text-amber-400" />
              <div className="text-sm font-medium">Client-First</div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 bg-white px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1c2539] mb-4">Our Process</h2>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between relative">
            {/* Connecting line for desktop */}
            <div className="hidden md:block absolute top-[28px] left-0 w-full h-[2px] bg-gray-200 z-0"></div>

            {[
              { num: "1", title: "Understand", sub: "Requirements" },
              { num: "2", title: "Documentation", sub: "& Paperwork" },
              { num: "3", title: "Packing", sub: "& Checking" },
              { num: "4", title: "Safe Loading", sub: "& Unloading" },
              { num: "5", title: "Customs", sub: "Clearance" },
              { num: "6", title: "Delivery &", sub: "Updates" },
            ].map((step, idx) => (
              <div key={idx} className="relative z-10 flex flex-col items-center text-center w-full md:w-auto mb-8 md:mb-0">
                <div className={`w-14 h-14 rounded-full flex items-center justify-center text-xl font-bold mb-4 shadow-sm ${idx === 0 ? 'bg-amber-400 text-white' : 'bg-[#e5efff] text-[#3f679e]'}`}>
                  {step.num}
                </div>
                <div className="text-xs font-bold text-[#1c2539] uppercase tracking-wide">
                  {step.title}<br />{step.sub}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ports & ICDs We Serve */}
      <section id="ports" className="py-20 bg-gray-50 px-6 scroll-mt-[72px]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1c2539] mb-4">Ports & ICDs We Serve</h2>
            <p className="text-gray-600">Strategically connected across India's key trade gateways.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center text-sm">
            {/* Left: Map */}
            <div className="relative rounded-xl overflow-hidden shadow-2xl min-h-[400px] group border border-gray-200">
              <Image
                src="/india_ports_map.png"
                alt="Map of India Shipping Ports"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <div className="text-xl font-bold">Network Reach</div>
                <div className="text-sm opacity-80">9 Major Ports & ICDs Connected</div>
              </div>
            </div>

            {/* Right: List */}
            <div>
              <div className="mb-6 font-bold text-[#1c2539] text-base">Active Ports & ICDs</div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "Port: Chennai", "Port: Cochin", "Port: Bangalore", "Port: Vizag",
                  "Port: Hyderabad", "Port: Mumbai", "Port: Tuticorin", "Port: Mundra", "Port: Kolkata"
                ].map(port => (
                  <div key={port} className="bg-white p-3 rounded shadow-sm hover:border-amber-400 border border-transparent transition-colors flex items-center gap-2 text-gray-700">
                    <MapPin className="w-4 h-4 text-[#3f679e]" /> {port}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us */}
      <section id="contact" className="py-20 bg-[#1c2539] text-white px-6 scroll-mt-[72px]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h2>
            <p className="text-gray-400">Available 24×7 for your logistics needs.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Card Info */}
            <div className="bg-[#242f46] p-8 md:p-10 rounded shadow-md flex flex-col space-y-8 lg:min-h-[500px] justify-center">
              {/* Mr. Raajeysh */}
              <div>
                <h3 className="text-lg font-bold mb-4 text-amber-400 tracking-wide">Mr. RAAJEYSH K C</h3>
                <div className="space-y-3 text-gray-300 text-sm">
                  <p><span className="text-gray-400 inline-block w-16">Phone:</span> 9840019341 / 9740789343</p>
                  <div className="flex items-start">
                    <span className="text-gray-400 inline-block w-16">Email:</span>
                    <div className="flex flex-col space-y-1">
                      <a href="mailto:rajesh3393@gmail.com" className="hover:text-amber-400 transition-colors">rajesh3393@gmail.com</a>
                      <a href="mailto:raajeyshkc@gmail.com" className="hover:text-amber-400 transition-colors">raajeyshkc@gmail.com</a>
                      <a href="mailto:mershiplog@gmail.com" className="hover:text-amber-400 transition-colors">mershiplog@gmail.com</a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mrs. Shoba */}
              <div className="pt-6 border-t border-white/10">
                <h3 className="text-lg font-bold mb-4 text-amber-400 tracking-wide">Mrs. SHOBA RAAJEYSH</h3>
                <div className="space-y-3 text-gray-300 text-sm">
                  <p><span className="text-gray-400 inline-block w-16">Phone:</span> 9840789341 / 9840789342</p>
                  <div className="flex items-start">
                    <span className="text-gray-400 inline-block w-16">Email:</span>
                    <div className="flex flex-col space-y-1">
                      <a href="mailto:mershiplog@gmail.com" className="hover:text-amber-400 transition-colors">mershiplog@gmail.com</a>
                      <a href="mailto:shoba570@gmail.com" className="hover:text-amber-400 transition-colors">shoba570@gmail.com</a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Office Addr */}
              <div className="pt-6 border-t border-white/10">
                <h3 className="text-lg font-bold mb-4 text-white tracking-wide">Office</h3>
                <div className="space-y-3 text-gray-300 text-sm">
                  <p><span className="text-gray-400 inline-block w-16">Tel:</span> 044-42059383</p>
                  <div className="flex items-start">
                    <span className="text-gray-400 inline-block w-16 mt-1"><MapPin className="w-4 h-4" /></span>
                    <span className="leading-relaxed">
                      No. 269/1 JSJ Complex, 61 2nd Fl,<br />
                      Thambu Chetty St, Chennai 600 001
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Map Image */}
            <a href="https://www.google.com/maps/dir/?api=1&destination=269%2F1+JSJ+Complex,+61+Thambu+Chetty+St,+Chennai+600001" target="_blank" rel="noopener noreferrer" className="relative block w-full min-h-[400px] rounded-xl overflow-hidden shadow-2xl group border border-white/10">
              <Image
                src="/office_location_map.png"
                alt="Office Location Map Chennai"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-[#1c2539]/10 group-hover:bg-transparent transition-colors duration-500"></div>
              <div className="absolute top-4 right-4 bg-amber-400 text-[#1c2539] px-4 py-2 rounded font-bold text-sm shadow-lg group-hover:bg-amber-500 transition-colors">
                Visit Us
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#101726] text-gray-400 py-6 text-xs border-t border-white/5 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <div>© 2025 Mercury Shipping & Logistics Services. CHA LIC NO: R230. All rights reserved.</div>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms</Link>
            <Link href="#" className="hover:text-white transition-colors">Sitemap</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
