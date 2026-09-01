"use client";

import { useState, useEffect, useRef } from "react";
import {
  X,
  CheckCircle2,
  User,
  Mail,
  Phone,
  MessageSquare,
  Send,
  Package,
} from "lucide-react";

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function QuoteModal({ isOpen, onClose }: QuoteModalProps) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const firstInputRef = useRef<HTMLInputElement>(null);

  // Focus trap & Escape key
  useEffect(() => {
    if (!isOpen) return;
    firstInputRef.current?.focus();
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.message || "Failed to submit quote");
      }
      setSubmitted(true);
    } catch (error) {
      console.error(error);
      alert(
        "Failed to send the request. Please email us directly or call instead."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    onClose();
    // Reset after animation
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: "", email: "", phone: "", service: "", message: "" });
    }, 300);
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      style={{ animation: "fadeIn 0.2s ease" }}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-[#0d1420]/80 backdrop-blur-sm"
        onClick={handleClose}
      />

      {/* Modal Panel */}
      <div
        className="relative w-full max-w-lg bg-[#1c2539] rounded-2xl shadow-2xl border border-white/10 overflow-hidden"
        style={{ animation: "slideUp 0.25s ease" }}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-amber-400 to-amber-500 px-8 py-6 flex items-center justify-between">
          <div>
            <div className="text-[#1c2539] text-[10px] font-bold uppercase tracking-widest mb-1">
              Mercury Shipping &amp; Logistics Services
            </div>
            <h2 className="text-[#1c2539] text-2xl font-extrabold">
              Get a Quote
            </h2>
          </div>
          <button
            onClick={handleClose}
            className="text-[#1c2539]/70 hover:text-[#1c2539] transition-colors rounded-full p-1 hover:bg-black/10"
            aria-label="Close"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Body */}
        <div className="px-8 py-8">
          {submitted ? (
            /* Success State */
            <div className="flex flex-col items-center text-center py-6 gap-4">
              <div className="w-16 h-16 rounded-full bg-amber-400/20 flex items-center justify-center">
                <CheckCircle2 className="w-9 h-9 text-amber-400" />
              </div>
              <h3 className="text-white text-xl font-bold">
                Request Received!
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Thank you for reaching out. Our team will get back to you
                within{" "}
                <span className="text-amber-400 font-semibold">24 hours</span>.
              </p>
              <button
                onClick={handleClose}
                className="mt-4 bg-amber-400 text-[#1c2539] px-8 py-3 rounded-lg font-bold hover:bg-amber-500 transition-colors"
              >
                Done
              </button>
            </div>
          ) : (
            /* Form */
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name */}
              <div className="relative">
                <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                <input
                  ref={firstInputRef}
                  id="quote-name"
                  name="name"
                  type="text"
                  required
                  placeholder="Full Name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full bg-[#242f46] border border-white/10 rounded-lg pl-10 pr-4 py-3 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-amber-400 transition-colors"
                />
              </div>

              {/* Email */}
              <div className="relative">
                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                <input
                  id="quote-email"
                  name="email"
                  type="email"
                  required
                  placeholder="Email Address"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full bg-[#242f46] border border-white/10 rounded-lg pl-10 pr-4 py-3 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-amber-400 transition-colors"
                />
              </div>

              {/* Phone */}
              <div className="relative">
                <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                <input
                  id="quote-phone"
                  name="phone"
                  type="tel"
                  placeholder="Phone Number"
                  value={form.phone}
                  onChange={handleChange}
                  className="w-full bg-[#242f46] border border-white/10 rounded-lg pl-10 pr-4 py-3 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-amber-400 transition-colors"
                />
              </div>

              {/* Service */}
              <div className="relative">
                <Package className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                <select
                  id="quote-service"
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  className="w-full bg-[#242f46] border border-white/10 rounded-lg pl-10 pr-4 py-3 text-sm focus:outline-none focus:border-amber-400 transition-colors appearance-none"
                  style={{ color: form.service ? "white" : "#6b7280" }}
                >
                  <option value="" disabled>
                    Select Service
                  </option>
                  <option value="customs">Customs Clearance</option>
                  <option value="air">Air Freight</option>
                  <option value="ocean">Ocean Freight (FCL/LCL)</option>
                  <option value="advisory">Custom Advisory</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Message */}
              <div className="relative">
                <MessageSquare className="absolute left-3.5 top-3.5 w-4 h-4 text-gray-400 pointer-events-none" />
                <textarea
                  id="quote-message"
                  name="message"
                  rows={3}
                  placeholder="Describe your shipment or query…"
                  value={form.message}
                  onChange={handleChange}
                  className="w-full bg-[#242f46] border border-white/10 rounded-lg pl-10 pr-4 py-3 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-amber-400 transition-colors resize-none"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-amber-400 text-[#1c2539] py-3.5 rounded-lg font-bold text-sm flex items-center justify-center gap-2 hover:bg-amber-500 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <svg
                      className="animate-spin w-4 h-4"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                      />
                    </svg>
                    Sending…
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" /> Submit Request
                  </>
                )}
              </button>

              <p className="text-center text-gray-500 text-xs">
                We typically respond within 24 hours · sales@mershiplog.com
              </p>
            </form>
          )}
        </div>
      </div>

      <style>{`
        @keyframes fadeIn { from { opacity: 0 } to { opacity: 1 } }
        @keyframes slideUp { from { opacity: 0; transform: translateY(24px) } to { opacity: 1; transform: translateY(0) } }
      `}</style>
    </div>
  );
}
