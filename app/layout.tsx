import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Mercury Shipping & Logistics Services | Global Freight Forwarding",
    template: "%s | Mercury Shipping & Logistics"
  },
  description: "Chennai-based global freight forwarding, customs clearance, and multimodal logistics delivered with precision. CHA LIC NO: R230.",
  keywords: ["shipping", "logistics", "chennai", "freight forwarding", "customs clearance", "mercury shipping"],
  openGraph: {
    title: "Mercury Shipping & Logistics Services",
    description: "Global freight forwarding and customs clearance experts in Chennai.",
    type: "website",
    url: "https://mershiplog.com",
    siteName: "Mercury Shipping & Logistics",
  },
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
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
