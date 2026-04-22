"use client";

import { Star } from "lucide-react";
import { testimonials } from "@/data/mock";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Header ─────────────────────────────────── */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-semibold uppercase tracking-widest text-brand-500 mb-3 block">
            What Leaders Say
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            Trusted by{" "}
            <span className="text-brand-500">L&amp;D Leaders</span> Across India
          </h2>
          <p className="text-gray-500 leading-relaxed">
            Hear from the CHROs and L&amp;D heads who transformed their
            organisations with Accredian Enterprise.
          </p>
        </div>

        {/* ── Testimonial Cards ──────────────────────── */}
        <div className="grid sm:grid-cols-2 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="flex flex-col bg-gray-50 rounded-2xl p-7 border border-gray-100 hover:border-brand-200 hover:shadow-lg transition-all duration-300"
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star
                    key={i}
                    size={15}
                    className="fill-amber-400 text-amber-400"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-700 leading-relaxed mb-6 flex-1 italic">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-500 to-indigo-600 flex items-center justify-center shrink-0">
                  <span className="text-white text-sm font-bold">{t.avatar}</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{t.name}</p>
                  <p className="text-gray-500 text-xs">
                    {t.title} &middot; {t.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── Bottom trust strip ─────────────────────── */}
        <div className="mt-14 bg-gradient-to-r from-brand-500 to-indigo-600 rounded-2xl p-8 text-center text-white">
          <p className="text-lg font-bold mb-2">
            Join 500+ enterprises already upskilling with Accredian
          </p>
          <p className="text-sm text-indigo-100 mb-6">
            Average cohort completion rate: 94% — 3× the industry benchmark.
          </p>
          <a
            href="#lead-form"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#lead-form")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-brand-600 font-semibold text-sm rounded-xl hover:bg-gray-50 transition-colors"
          >
            Get a Free Demo
          </a>
        </div>
      </div>
    </section>
  );
}
