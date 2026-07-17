"use client";

import React, { useState } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabase";
import { Terminal, ShieldAlert, Cpu, ArrowLeft } from "lucide-react";

export default function OnboardingPage() {
  const [formData, setFormData] = useState({
    nume_client: "",
    nume_companie: "",
    domeniu_activitate: "",
    veriga_slaba: "",
    buget_estimat: "Under €200",
    prioritate_proiect: "Medium",
    contact_signal: ""
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");

    try {
      const { error } = await supabase.from("leads").insert([
        {
          nume_client: formData.nume_client,
          nume_companie: formData.nume_companie,
          domeniu_activitate: formData.domeniu_activitate,
          veriga_slaba: formData.veriga_slaba,
          buget_estimat: formData.buget_estimat,
          prioritate_proiect: formData.prioritate_proiect,
          contact_signal: formData.contact_signal
        }
      ]);

      if (error) {
        throw error;
      }

      setSuccess(true);
    } catch (err: any) {
      setErrorMessage(err.message || "Failed to submit connection data to database client.");
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <main className="min-h-screen flex items-center justify-center px-6 py-12 bg-[#0a0a0a]">
        <div className="max-w-md w-full border border-neon-green/30 bg-[#111]/60 backdrop-blur-md p-8 relative">
          <div className="absolute top-0 left-0 w-full h-[2px] bg-neon-green" />
          <div className="w-12 h-12 rounded-full bg-neon-green/10 text-neon-green flex items-center justify-center mb-6 border border-neon-green/30">
            <Cpu className="w-6 h-6 animate-pulse" />
          </div>
          <h2 className="text-xl font-mono font-bold tracking-tight text-white mb-2">SYSTEM INITIALIZED</h2>
          <p className="text-gray-400 text-sm leading-relaxed mb-6 font-light">
            Project evaluation protocol has been scheduled. Our team will perform a workflow diagnostic and contact you on Signal secure messenger within 24 hours.
          </p>
          <a
            href="https://signal.me/#eu/-HdQyRcyCByDAiFhMWzSbHeJXHRgpmUzRaaasz9SYMhOs9DFqu9IKpWZd0A8_TG5"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center bg-white text-black font-mono font-bold tracking-wider text-xs py-3 hover:bg-neon-cyan hover:shadow-[0_0_15px_#00e5ff] transition-all duration-300"
          >
            SECURE CHAT ON SIGNAL →
          </a>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#0a0a0a] pt-24 pb-16 px-6">
      <div className="max-w-2xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-1.5 text-xs font-mono text-gray-500 hover:text-neon-cyan mb-8 transition-colors">
          <ArrowLeft className="w-3.5 h-3.5" /> BACK TO ROOT
        </Link>

        <div className="mb-8">
          <h1 className="text-3xl font-mono font-bold text-white tracking-tight flex items-center gap-2">
            <Terminal className="text-neon-cyan w-6 h-6" /> INITIATE DEPLOYMENT
          </h1>
          <p className="text-gray-500 text-xs font-mono mt-1">Configure parameters to schedule a technical diagnostics report.</p>
        </div>

        {errorMessage && (
          <div className="mb-6 p-4 border border-red-500/30 bg-red-500/5 text-red-400 text-xs font-mono flex items-start gap-3">
            <ShieldAlert className="w-5 h-5 flex-shrink-0" />
            <div>
              <span className="font-bold uppercase">DATABASE ERROR:</span> {errorMessage}
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-[10px] font-mono text-gray-400 tracking-wider uppercase mb-2">CLIENT NAME</label>
              <input
                required
                type="text"
                className="w-full bg-[#111]/40 border border-white/10 px-4 py-2.5 text-sm outline-none focus:border-neon-cyan transition-colors"
                onChange={(e) => setFormData({ ...formData, nume_client: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-[10px] font-mono text-gray-400 tracking-wider uppercase mb-2">COMPANY NAME</label>
              <input
                required
                type="text"
                className="w-full bg-[#111]/40 border border-white/10 px-4 py-2.5 text-sm outline-none focus:border-neon-cyan transition-colors"
                onChange={(e) => setFormData({ ...formData, nume_companie: e.target.value })}
              />
            </div>
          </div>

          <div>
            <label className="block text-[10px] font-mono text-gray-400 tracking-wider uppercase mb-2">INDUSTRY / NICHE</label>
            <input
              required
              type="text"
              placeholder="e.g. E-Commerce, Logistics, Real Estate"
              className="w-full bg-[#111]/40 border border-white/10 px-4 py-2.5 text-sm outline-none focus:border-neon-cyan transition-colors placeholder:text-gray-700"
              onChange={(e) => setFormData({ ...formData, domeniu_activitate: e.target.value })}
            />
          </div>

          <div>
            <label className="block text-[10px] font-mono text-gray-400 tracking-wider uppercase mb-2">THE WEAKEST LINK (Where do you lose money?)</label>
            <textarea
              required
              rows={4}
              placeholder="Describe what bottlenecks, leaks, or manual processes are hurting your daily operations..."
              className="w-full bg-[#111]/40 border border-white/10 px-4 py-2.5 text-sm outline-none focus:border-neon-cyan transition-colors placeholder:text-gray-700 resize-none"
              onChange={(e) => setFormData({ ...formData, veriga_slaba: e.target.value })}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-[10px] font-mono text-gray-400 tracking-wider uppercase mb-2">ESTIMATED BUDGET</label>
              <select
                className="w-full bg-[#111] border border-white/10 px-4 py-2.5 text-sm outline-none focus:border-neon-cyan"
                onChange={(e) => setFormData({ ...formData, buget_estimat: e.target.value })}
              >
                <option value="Under €200">Under €200</option>
                <option value="€200 - €500">€200 - €500</option>
                <option value="Over €500">Over €500</option>
              </select>
            </div>
            <div>
              <label className="block text-[10px] font-mono text-gray-400 tracking-wider uppercase mb-2">PROJECT PRIORITY</label>
              <select
                className="w-full bg-[#111] border border-white/10 px-4 py-2.5 text-sm outline-none focus:border-neon-cyan"
                onChange={(e) => setFormData({ ...formData, prioritate_proiect: e.target.value })}
              >
                <option value="Medium">Medium</option>
                <option value="Critical (ASAP)">Critical (ASAP)</option>
                <option value="Low">Low</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-[10px] font-mono text-gray-400 tracking-wider uppercase mb-2">SIGNAL ID / CONTACT NUMBER</label>
            <input
              required
              type="text"
              placeholder="@username.99 or secure number (+40...)"
              className="w-full bg-[#111]/40 border border-white/10 px-4 py-2.5 text-sm outline-none focus:border-neon-cyan transition-colors placeholder:text-gray-700"
              onChange={(e) => setFormData({ ...formData, contact_signal: e.target.value })}
            />
          </div>

          <button
            disabled={loading}
            type="submit"
            className="w-full bg-white text-black font-mono font-bold tracking-widest text-xs py-4 hover:bg-neon-cyan hover:shadow-[0_0_15px_#00e5ff] transition-all duration-300 disabled:bg-gray-800 disabled:text-gray-500"
          >
            {loading ? "PROCESING PROTOCOL..." : "SUBMIT ARCHITECTURE FOR REVIEW"}
          </button>
        </form>
      </div>
    </main>
  );
}
u
