import {
  Clock,
  ShieldCheck,
  Globe,
  FileText,
  CheckCircle2,
  Building2,
} from "lucide-react";

const features = [
  { icon: Clock, label: "Timely Delivery" },
  { icon: ShieldCheck, label: "Secure & Protected" },
  { icon: Globe, label: "Global Network" },
  { icon: FileText, label: "Full Documentation" },
  { icon: CheckCircle2, label: "24×7 Helpline" },
  { icon: Building2, label: "Client-First" },
];

export default function WhyUsGrid() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 text-center">
      {features.map(({ icon: Icon, label }) => (
        <div
          key={label}
          className="bg-[#242f46] p-6 rounded hover:bg-[#2e3b56] transition-colors flex flex-col items-center justify-center aspect-square gap-4"
        >
          <Icon className="w-8 h-8 text-amber-400" />
          <div className="text-sm font-medium">{label}</div>
        </div>
      ))}
    </div>
  );
}
