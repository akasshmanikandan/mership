import Link from "next/link";

interface Service {
  tag: string;
  title: string;
  description: string;
  details: string[];
}

const services: Service[] = [
  {
    tag: "Customs",
    title: "Customs Clearance",
    description:
      "End-to-end clearance with legal advisory and full documentation.",
    details: [
      "Bill of Entry filing and HS code classification",
      "Customs valuation and duty calculation",
      "DGFT compliance and import/export licensing",
      "Drawback and duty refund claim facilitation",
      "Liaison with Customs authorities on your behalf",
    ],
  },
  {
    tag: "Air",
    title: "Air Freight",
    description:
      "Export & import air freight forwarding with charter options.",
    details: [
      "Export and import AWB handling and documentation",
      "Dangerous goods (DG) cargo coordination",
      "Time-sensitive and perishable cargo management",
      "Door-to-airport and airport-to-door options",
      "Charter arrangements for urgent oversized cargo",
    ],
  },
  {
    tag: "Sea",
    title: "Ocean Freight",
    description: "FCL/LCL ocean forwarding for export & import worldwide.",
    details: [
      "Full Container Load (FCL) and Less than Container Load (LCL)",
      "Bill of Lading issuance and management",
      "Worldwide carrier network with competitive rates",
      "Port-to-port and multimodal freight solutions",
      "Reefer and out-of-gauge cargo handling",
    ],
  },
  {
    tag: "Advisory",
    title: "Custom Advisory",
    description:
      "Notifications, circulars, and compliance/regulatory updates.",
    details: [
      "Latest Customs and DGFT notifications & circulars",
      "Import/export duty exemption guidance",
      "Regulatory compliance and trade policy advisory",
      "Classification and valuation dispute resolution",
      "Free Trade Agreement (FTA) benefit advisory",
    ],
  },
];

export default function ServicesGrid({
  expanded = false,
}: {
  expanded?: boolean;
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {services.map((service) => (
        <div
          key={service.title}
          className="bg-white p-8 rounded shadow-sm border-t-4 border-t-amber-400 hover:shadow-md transition-shadow flex flex-col"
        >
          <div className="text-xs font-bold text-amber-500 uppercase tracking-widest mb-4">
            {service.tag}
          </div>
          <h3 className="text-xl font-bold text-[#1c2539] mb-4">
            {service.title}
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            {service.description}
          </p>

          {expanded ? (
            <ul className="flex-grow text-gray-500 text-xs space-y-2 mb-6">
              {service.details.map((detail) => (
                <li key={detail} className="flex items-start gap-1.5">
                  <span className="text-amber-500 mt-0.5 shrink-0">•</span>
                  {detail}
                </li>
              ))}
            </ul>
          ) : (
            <div className="flex-grow mb-8" />
          )}

          <Link
            href="/contact"
            className="text-[#3f679e] text-sm font-semibold flex items-center gap-1 hover:text-amber-500 transition-colors"
          >
            Enquire now →
          </Link>
        </div>
      ))}
    </div>
  );
}
