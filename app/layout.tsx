import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.mershiplog.com"),
  title: {
    default:
      "Mercury Shipping & Logistics Services | Global Freight Forwarding Chennai",
    template: "%s | Mercury Shipping & Logistics",
  },
  description:
    "Chennai-based global freight forwarding, customs clearance, and multimodal logistics delivered with precision. CHA LIC NO: R230. Est. 2000.",
  keywords: [
    "shipping",
    "logistics",
    "chennai",
    "freight forwarding",
    "customs clearance",
    "mercury shipping",
    "CHA agent Chennai",
    "air freight Chennai",
    "ocean freight Chennai",
  ],
  openGraph: {
    title: "Mercury Shipping & Logistics Services",
    description:
      "Global freight forwarding and customs clearance experts in Chennai. CHA LIC NO: R230.",
    type: "website",
    url: "https://www.mershiplog.com",
    siteName: "Mercury Shipping & Logistics",
  },
};

// LocalBusiness + Organization JSON-LD — applies to all pages
const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "Organization"],
  name: "Mercury Shipping & Logistics Services",
  alternateName: "Mercury Shipping",
  description:
    "Chennai-based global freight forwarding, customs clearance, and multimodal logistics. CHA LIC NO: R230. Est. 2000.",
  url: "https://www.mershiplog.com",
  foundingDate: "2000",
  identifier: "CHA LIC NO: R230",
  address: {
    "@type": "PostalAddress",
    streetAddress: "No. 269/1 JSJ Complex, B1, 2nd Fl, Thambu Chetty St",
    addressLocality: "Chennai",
    postalCode: "600001",
    addressCountry: "IN",
  },
  telephone: ["+914442059383", "+919840019341", "+919840789341"],
  email: "sales@mershiplog.com",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "00:00",
    closes: "23:59",
  },
  hasMap: "https://maps.app.goo.gl/WcmXGTsWWGNvfWUi8",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <Header />
        <main className="flex-grow flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
