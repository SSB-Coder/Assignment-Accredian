import { stats } from "@/data/mock";

export default function Stats() {
  return (
    <section className="bg-brand-500 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="text-4xl font-extrabold text-white mb-1">
                {stat.value}
              </p>
              <p className="text-sm font-medium text-indigo-100">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
