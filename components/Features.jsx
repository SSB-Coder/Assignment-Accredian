import {
  BookOpen,
  BarChart2,
  Users,
  Award,
  Settings,
  Shield,
} from "lucide-react";
import { features } from "@/data/mock";

const iconMap = { BookOpen, BarChart2, Users, Award, Settings, Shield };

export default function Features() {
  return (
    <section id="features" className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Header ─────────────────────────────────── */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-semibold uppercase tracking-widest text-brand-500 mb-3 block">
            Why Accredian Enterprise
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            The Operating System for{" "}
            <span className="text-brand-500">Ambitious Learning Orgs</span>
          </h2>
          <p className="text-gray-500 leading-relaxed">
            From curriculum design to real-time analytics — Accredian Enterprise
            is built end-to-end for enterprises that take talent development
            seriously.
          </p>
        </div>

        {/* ── Cards grid ─────────────────────────────── */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feat) => {
            const Icon = iconMap[feat.icon];
            return (
              <div
                key={feat.id}
                className="group bg-white rounded-2xl p-7 border border-gray-100 hover:border-brand-500/30 hover:shadow-xl hover:shadow-brand-500/5 transition-all duration-300"
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-brand-50 flex items-center justify-center mb-5 group-hover:bg-brand-500 transition-colors duration-300">
                  {Icon && (
                    <Icon
                      size={22}
                      className="text-brand-500 group-hover:text-white transition-colors duration-300"
                    />
                  )}
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">
                  {feat.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {feat.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
