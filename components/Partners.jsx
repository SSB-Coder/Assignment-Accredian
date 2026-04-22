import { partners } from "@/data/mock";

const typeColors = {
  IIT:       "bg-orange-50 text-orange-700",
  IIM:       "bg-teal-50 text-teal-700",
  "B-School":"bg-purple-50 text-purple-700",
};

export default function Partners() {
  return (
    <section id="partners" className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Header ─────────────────────────────────── */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-semibold uppercase tracking-widest text-brand-500 mb-3 block">
            Academic Partners
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            Credentials Backed by{" "}
            <span className="text-brand-500">Top Institutions</span>
          </h2>
          <p className="text-gray-500 leading-relaxed">
            Every program on our platform carries the credential of a top-tier
            institution. No fluff. No self-certification.
          </p>
        </div>

        {/* ── Partner logos grid ─────────────────────── */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
          {partners.map((p) => (
            <div
              key={p.id}
              className="group flex flex-col items-center justify-center gap-3 bg-white rounded-2xl p-6 border border-gray-100 hover:border-brand-300 hover:shadow-lg transition-all duration-300 cursor-default"
            >
              {/* Avatar placeholder */}
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-brand-500 to-indigo-600 flex items-center justify-center shadow-md">
                <span className="text-white font-extrabold text-sm tracking-tight">
                  {p.abbr}
                </span>
              </div>
              <div className="text-center">
                <p className="text-sm font-semibold text-gray-800 mb-1">
                  {p.name}
                </p>
                <span
                  className={`text-[10px] font-semibold uppercase tracking-wide px-2 py-0.5 rounded-full ${
                    typeColors[p.type] || "bg-gray-100 text-gray-600"
                  }`}
                >
                  {p.type}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* ── Trust copy ─────────────────────────────── */}
        <p className="text-center text-sm text-gray-400 mt-10">
          All programs are co-designed and certified by these institutions.
          Learners receive official certificates upon completion.
        </p>
      </div>
    </section>
  );
}
