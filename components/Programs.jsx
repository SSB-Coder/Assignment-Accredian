"use client";

import { useState } from "react";
import { Clock, Signal, Building2, ArrowRight } from "lucide-react";
import { programs } from "@/data/mock";

const CATEGORIES = ["All", "AI & Machine Learning", "Data Science", "Product Management", "Leadership", "Business Analytics", "Cloud & DevOps"];

const badgeColors = {
  "Most Popular": "bg-amber-50 text-amber-700 border-amber-200",
  "Best ROI":     "bg-green-50 text-green-700 border-green-200",
  "New":          "bg-blue-50 text-blue-700 border-blue-200",
  "High Demand":  "bg-purple-50 text-purple-700 border-purple-200",
};

export default function Programs() {
  const [activeTab, setActiveTab] = useState("All");

  const visible =
    activeTab === "All"
      ? programs
      : programs.filter((p) => p.category === activeTab);

  return (
    <section id="programs" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Header ─────────────────────────────────── */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-semibold uppercase tracking-widest text-brand-500 mb-3 block">
            Our Programs
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            Programs Built for{" "}
            <span className="text-brand-500">Enterprise Impact</span>
          </h2>
          <p className="text-gray-500 leading-relaxed">
            Co-designed with India's finest institutions. Every credential your
            team earns carries the weight of a top-tier university.
          </p>
        </div>

        {/* ── Filter Tabs ─────────────────────────────── */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-4 py-2 text-sm font-medium rounded-full border transition-all duration-200 ${
                activeTab === cat
                  ? "bg-brand-500 text-white border-brand-500 shadow-sm"
                  : "bg-white text-gray-600 border-gray-200 hover:border-brand-300 hover:text-brand-500"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* ── Cards ──────────────────────────────────── */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visible.map((prog) => (
            <div
              key={prog.id}
              className="flex flex-col bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-gray-200/60 hover:-translate-y-1 transition-all duration-300"
            >
              {/* Coloured top bar */}
              <div className="h-1.5 bg-gradient-to-r from-brand-500 to-indigo-400" />

              <div className="p-6 flex flex-col flex-1">
                {/* Category + Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-medium text-brand-500 bg-brand-50 px-3 py-1 rounded-full">
                    {prog.category}
                  </span>
                  {prog.badge && (
                    <span
                      className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${
                        badgeColors[prog.badge] || "bg-gray-50 text-gray-600 border-gray-200"
                      }`}
                    >
                      {prog.badge}
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="font-bold text-gray-900 text-lg mb-2 leading-snug">
                  {prog.title}
                </h3>

                {/* Meta */}
                <div className="flex flex-wrap gap-3 text-xs text-gray-500 mb-4">
                  <span className="flex items-center gap-1">
                    <Building2 size={13} />
                    {prog.partner}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={13} />
                    {prog.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <Signal size={13} />
                    {prog.level}
                  </span>
                </div>

                {/* Topics */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {prog.topics.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2.5 py-1 bg-gray-50 text-gray-600 rounded-lg border border-gray-100"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <div className="mt-auto">
                  <button className="w-full flex items-center justify-center gap-2 py-2.5 text-sm font-semibold text-brand-500 border border-brand-200 rounded-xl hover:bg-brand-500 hover:text-white hover:border-brand-500 transition-all duration-200">
                    Learn More <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── Bottom CTA ─────────────────────────────── */}
        <div className="text-center mt-12">
          <p className="text-gray-500 text-sm mb-4">
            Don't see what you need? We build custom programs.
          </p>
          <a
            href="#lead-form"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#lead-form")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-brand-500 hover:bg-brand-600 rounded-xl transition-colors"
          >
            Request a Custom Program <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}
