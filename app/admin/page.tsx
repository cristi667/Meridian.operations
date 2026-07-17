"use client";

import React, { useState, useEffect, useCallback } from "react";
import { supabase } from "@/lib/supabase";
import { Shield, EyeOff, RefreshCw, Terminal } from "lucide-react";

export default function AdminPage() {
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [leads, setLeads] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "xadetyjc30$") {
      setIsAuthenticated(true);
      setErrorMsg("");
    } else {
      setErrorMsg("INVALID ARCHITECT SECURITY KEY.");
    }
  };

  const fetchLeads = useCallback(async () => {
    setLoading(true);
    setErrorMsg("");
    try {
      const { data, error } = await supabase
        .from("leads")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        throw error;
      }
      setLeads(data || []);
    } catch (err: any) {
      setErrorMsg(err.message || "Failed to parse secure rows.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      fetchLeads();
    }
  }, [isAuthenticated, fetchLeads]);

  if (!isAuthenticated) {
    return (
      <main className="min-h-screen flex items-center justify-center px-6 bg-[#0a0a0a]">
        <form onSubmit={handleLogin} className="max-w-sm w-full border border-white/10 bg-[#111]/40 p-8 relative">
          <div className="absolute top-0 left-0 w-full h-[2px] bg-neon-cyan" />
          <div className="flex items-center gap-2 mb-6">
            <Shield className="text-neon-cyan w-5 h-5" />
            <span className="text-xs font-mono font-bold tracking-wider uppercase">ENTER SYSTEM ACCESS KEY</span>
          </div>

          <input
            required
            type="password"
            placeholder="ACCESS_KEY"
            className="w-full bg-black border border-white/10 px-4 py-2.5 text-sm outline-none text-white focus:border-neon-cyan font-mono mb-4 text-center tracking-widest"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            className="w-full bg-white text-black font-mono font-bold text-xs py-2.5 tracking-wider hover:bg-neon-cyan hover:shadow-[0_0_15px_#00e5ff] transition-all duration-300"
          >
            AUTHENTICATE
          </button>

          {errorMsg && (
            <div className="mt-4 text-center text-red-500 font-mono text-[10px] tracking-widest uppercase">
              {errorMsg}
            </div>
          )}
        </form>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white p-6">
      <div className="max-w-7xl mx-auto">
        <header className="flex justify-between items-center mb-8 border-b border-white/10 pb-4">
          <div className="flex items-center gap-2">
            <Terminal className="text-neon-cyan w-5 h-5" />
            <h1 className="text-lg font-mono font-bold tracking-tight">TERMINAL: RECRUITMENT LOGS</h1>
          </div>
          <button
            onClick={fetchLeads}
            disabled={loading}
            className="flex items-center gap-1.5 border border-neon-cyan/40 bg-neon-cyan/5 text-neon-cyan font-mono text-xs px-4 py-1.5 hover:bg-neon-cyan hover:text-black transition-all duration-300 disabled:opacity-50"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${loading ? "animate-spin" : ""}`} /> REFRESH
          </button>
        </header>

        {errorMsg && (
          <div className="mb-6 p-4 border border-red-500/30 bg-red-500/5 text-red-400 text-xs font-mono">
            {errorMsg}
          </div>
        )}

        <div className="overflow-x-auto border border-white/10 bg-[#111]/20">
          <table className="w-full text-left text-xs font-mono border-collapse">
            <thead>
              <tr className="border-b border-white/10 text-gray-500 uppercase tracking-wider bg-black/40 text-[10px]">
                <th className="p-4">Timestamp</th>
                <th className="p-4">Client/Company</th>
                <th className="p-4">Niche</th>
                <th className="p-4">Budget</th>
                <th className="p-4">Priority</th>
                <th className="p-4">Signal ID</th>
                <th className="p-4">Weak Link Diagnostic</th>
              </tr>
            </thead>
            <tbody>
              {leads.length === 0 && !loading ? (
                <tr>
                  <td colSpan={7} className="p-8 text-center text-gray-600">
                    <EyeOff className="w-8 h-8 mx-auto mb-2 opacity-30" />
                    No secure deployment records retrieved.
                  </td>
                </tr>
              ) : (
                leads.map((lead) => {
                  const isCritical = lead.prioritate_proiect?.includes("Critical");
                  return (
                    <tr
                      key={lead.id}
                      className={`border-b border-white/5 hover:bg-white/5 transition-colors relative ${
                        isCritical
                          ? "border-l-2 border-l-red-500 bg-red-500/5"
                          : ""
                      }`}
                    >
                      <td className="p-4 text-gray-500">
                        {lead.created_at
                          ? new Date(lead.created_at).toLocaleDateString()
                          : "Unknown"}
                      </td>
                      <td className="p-4">
                        <span className="font-bold text-white block">{lead.nume_client}</span>
                        <span className="text-gray-500 text-[10px]">{lead.nume_companie}</span>
                      </td>
                      <td className="p-4 text-gray-300">{lead.domeniu_activitate}</td>
                      <td className="p-4 text-neon-cyan font-bold">{lead.buget_estimat}</td>
                      <td className="p-4">
                        <span
                          className={`px-2 py-0.5 text-[9px] rounded-full uppercase tracking-wider ${
                            isCritical
                              ? "bg-red-500/20 text-red-400 font-bold"
                              : "bg-gray-800 text-gray-400"
                          }`}
                        >
                          {lead.prioritate_proiect}
                        </span>
                      </td>
                      <td className="p-4 text-gray-300 select-all">{lead.contact_signal}</td>
                      <td className="p-4 text-gray-400 max-w-xs truncate" title={lead.veriga_slaba}>
                        {lead.veriga_slaba}
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
