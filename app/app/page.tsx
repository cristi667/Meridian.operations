import Link from "next/link";
import { Terminal, Cpu, Database, Network, Globe, Activity, Shield, Sparkles, MessageSquare, Layers } from "lucide-react";

const services = [
  {
    id: "SYS.01",
    name: "Automation Architecture",
    desc: "Complex workflows engineered via Make.com/Zapier to replace human manual labor.",
    setup: "€300",
    monthly: "€100/mo",
    icon: Cpu
  },
  {
    id: "SYS.02",
    name: "Lead Capture Engines",
    desc: "Advanced chat and API systems (ManyChat, WhatsApp, custom APIs) to convert traffic 24/7.",
    setup: "€200",
    monthly: "€50/mo",
    icon: MessageSquare
  },
  {
    id: "SYS.03",
    name: "Local SEO & Maps Eng.",
    desc: "High-level technical optimization for Google Maps to capture nearby commercial intent.",
    setup: "€50",
    monthly: "€30/mo",
    icon: Globe
  },
  {
    id: "SYS.04",
    name: "CRM & DB Integration",
    desc: "Architecting custom pipelines connecting landing pages directly to Supabase or Google Sheets.",
    setup: "€400",
    monthly: "None",
    icon: Database
  },
  {
    id: "SYS.05",
    name: "Technical Web Systems",
    desc: "Ultra-fast, performance-optimized mini-sites built for high-conversion campaigns.",
    setup: "€150",
    monthly: "€30/mo",
    icon: Terminal
  },
  {
    id: "SYS.06",
    name: "Data Analytics Dashboards",
    desc: "Custom metrics tracking, sales visualization, and reporting interfaces built with clean UI.",
    setup: "€250",
    monthly: "€80/mo",
    icon: Activity
  },
  {
    id: "SYS.07",
    name: "Webhook & API Dev",
    desc: "Bespoke connections between disjointed apps to create customized internal tools.",
    setup: "€350",
    monthly: "None",
    icon: Network
  },
  {
    id: "SYS.08",
    name: "Automated Outreach",
    desc: "Deploying high-volume, automated system notifications and client alerts via Email/Signal.",
    setup: "€200",
    monthly: "€40/mo",
    icon: Sparkles
  },
  {
    id: "SYS.09",
    name: "Workflow Optimization",
    desc: "Complete audit of your company's digital tools to eliminate cost leaks and redundant steps.",
    setup: "€150",
    monthly: "Per session",
    icon: Layers
  },
  {
    id: "SYS.10",
    name: "Cloud Infra Setup",
    desc: "Configuring custom DNS routing, secure hosting, and automatic Vercel-based scaling environments.",
    setup: "€250",
    monthly: "None",
    icon: Shield
  }
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      {/* Top Navbar */}
      <nav className="fixed top-0 left-0 w-full border-b border-white/10 bg-[#0a0a0a]/80 backdrop-blur-md z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-neon-cyan rounded-full shadow-[0_0_8px_#00e5ff] animate-pulse" />
            <span className="font-mono font-bold text-lg tracking-wider">MERIDIAN OPS</span>
          </div>
          <Link
            href="/onboarding"
            className="border border-neon-cyan/30 text-neon-cyan bg-neon-cyan/5 px-4 py-1.5 text-xs font-mono tracking-widest hover:bg-neon-cyan hover:text-black transition-all duration-300"
          >
            DEPLOY SYSTEM
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-36 pb-20 px-6 max-w-5xl mx-auto flex flex-col items-center text-center">
        <div className="inline-flex items-center gap-2 border border-neon-green/20 bg-neon-green/5 text-neon-green px-4 py-1 text-xs font-mono rounded-sm mb-6">
          <span className="w-1.5 h-1.5 bg-neon-green rounded-full animate-ping" />
          SYSTEMS STATUS: ONLINE & OPERATIONAL
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter leading-none mb-6">
          Architecting Business <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-violet">
            Infrastructure.
          </span>
        </h1>

        <p className="text-gray-400 max-w-2xl text-base md:text-lg mb-10 font-light">
          We engineer automated workflows, cloud databases, and technical lead capture engines to scale your operations effortlessly. Pure technical precision.
        </p>

        <Link
          href="/onboarding"
          className="bg-white text-black text-xs md:text-sm font-mono font-bold tracking-widest px-8 py-3.5 hover:bg-neon-cyan hover:shadow-[0_0_15px_#00e5ff] transition-all duration-300"
        >
          INITIATE PROJECT EVALUATION →
        </Link>
      </section>

      {/* Services Grid Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 border-t border-white/10">
        <div className="mb-12">
          <h2 className="text-2xl font-mono font-bold tracking-tight text-white flex items-center gap-2">
            <span className="text-neon-cyan">#</span> INFRASTRUCTURE MODULAR STACK
          </h2>
          <p className="text-gray-500 text-xs font-mono mt-1">Select the tech components your business workflow requires.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.id}
                className="group relative bg-[#111111]/40 border border-white/10 p-6 flex flex-col hover:border-neon-cyan/40 transition-all duration-300"
              >
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-neon-cyan to-neon-violet transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                
                <div className="flex justify-between items-start mb-4">
                  <span className="text-[10px] font-mono text-neon-cyan tracking-widest">{service.id}</span>
                  <IconComponent className="w-5 h-5 text-gray-500 group-hover:text-neon-cyan transition-colors" />
                </div>

                <h3 className="text-lg font-bold mb-2 text-white group-hover:text-neon-cyan transition-colors">{service.name}</h3>
                <p className="text-gray-400 text-xs leading-relaxed mb-6 flex-grow">{service.desc}</p>

                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/5 text-xs font-mono">
                  <div>
                    <span className="text-gray-600 block text-[10px] tracking-wider uppercase">SETUP FEE</span>
                    <span className="text-white font-bold">{service.setup}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-gray-600 block text-[10px] tracking-wider uppercase">MONTHLY</span>
                    <span className="text-neon-cyan font-bold">{service.monthly}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 text-center text-[10px] font-mono text-gray-600 tracking-wider">
        © 2026 MERIDIAN OPERATIONS. SECURE DEPLOYMENT PROTOCOLS ACTIVE.
      </footer>
    </main>
  );
}
