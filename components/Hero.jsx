"use client";

import { ArrowRight, Play } from "lucide-react";

export default function Hero() {
  const scrollTo = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative pt-24 pb-20 lg:pt-32 lg:pb-28 overflow-hidden bg-gradient-to-br from-slate-900 via-brand-900 to-slate-900"
    >
      {/* ── Background decoration ────────────────────── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-brand-500 opacity-10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 -left-40 w-80 h-80 bg-indigo-500 opacity-10 rounded-full blur-3xl" />
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.3) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">

          {/* ── Badge ──────────────────────────────────── */}
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-500/20 border border-brand-500/30 text-brand-100 text-xs font-medium tracking-wide mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            India's Most Trusted Enterprise Learning Platform
          </span>

          {/* ── Headline ────────────────────────────────── */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
            Upskill Your Workforce{" "}
            <span className="bg-gradient-to-r from-brand-400 to-indigo-300 bg-clip-text text-transparent">
              at Scale
            </span>
          </h1>

          {/* ── Sub-headline ─────────────────────────────── */}
          <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            Partner with IITs, IIMs, and global universities to upskill your
            enterprise teams — with curated programs, live mentorship, and
            real-time analytics that deliver measurable ROI.
          </p>

          {/* ── CTAs ────────────────────────────────────── */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollTo("#lead-form")}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold text-white bg-brand-500 hover:bg-brand-600 rounded-xl transition-all duration-200 shadow-lg shadow-brand-500/30 hover:shadow-brand-600/40 hover:-translate-y-0.5"
            >
              Request a Free Demo
              <ArrowRight size={16} />
            </button>
            <button
              onClick={() => scrollTo("#programs")}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold text-white border border-white/20 hover:bg-white/10 rounded-xl transition-all duration-200"
            >
              <Play size={14} className="fill-current" />
              Explore Programs
            </button>
          </div>

          {/* ── Social proof strip ─────────────────────── */}
          <div className="mt-14 pt-10 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            {[
              { val: "500+", text: "Enterprise Partners" },
              { val: "94%",  text: "Completion Rate"    },
              { val: "500+", text: "Expert Mentors"     },
              { val: "40%",  text: "Productivity Gain"  },
            ].map((item) => (
              <div key={item.text}>
                <p className="text-3xl font-extrabold text-white mb-1">{item.val}</p>
                <p className="text-sm text-slate-400">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
