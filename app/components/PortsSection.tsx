import Image from "next/image";
import { MapPin } from "lucide-react";

const ports = [
  "Port: Chennai",
  "Port: Cochin",
  "Port: Bangalore",
  "Port: Vizag",
  "Port: Hyderabad",
  "Port: Mumbai",
  "Port: Tuticorin",
  "Port: Mundra",
  "Port: Kolkata",
];

export default function PortsSection() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center text-sm">
      {/* Left: Map */}
      <div className="relative rounded-xl overflow-hidden shadow-2xl min-h-[400px] group border border-gray-200">
        <Image
          src="/india_ports_map.png"
          alt="Map of India Shipping Ports served by Mercury Shipping"
          fill
          className="object-cover transition-transform duration-1000 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        <div className="absolute bottom-6 left-6 text-white">
          <div className="text-xl font-bold">Network Reach</div>
          <div className="text-sm opacity-80">9 Major Ports &amp; ICDs Connected</div>
        </div>
      </div>

      {/* Right: List */}
      <div>
        <div className="mb-6 font-bold text-[#1c2539] text-base">
          Active Ports &amp; ICDs
        </div>
        <div className="grid grid-cols-2 gap-4">
          {ports.map((port) => (
            <div
              key={port}
              className="bg-white p-3 rounded shadow-sm hover:border-amber-400 border border-transparent transition-colors flex items-center gap-2 text-gray-700"
            >
              <MapPin className="w-4 h-4 text-[#3f679e]" /> {port}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
