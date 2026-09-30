import type { Technology } from "../types/technology";

type TechCardProps = {
  tech: Technology;
  isAdded: boolean;
  onAdd: (tech: Technology) => void;
};

const badgeStyles: Record<string, string> = {
  Popular: "bg-sky-50 text-sky-500 border-sky-100",
  Versatile: "bg-emerald-50 text-emerald-600 border-emerald-100",
  Fast: "bg-orange-50 text-orange-600 border-orange-100",
  "SSR / Edge": "bg-purple-50 text-purple-700 border-purple-100",
  Standard: "bg-emerald-50 text-emerald-600 border-emerald-100",
  "Top SQL": "bg-blue-50 text-blue-600 border-blue-100",
  NoSQL: "bg-green-50 text-green-600 border-green-100",
  Cache: "bg-red-50 text-red-600 border-red-100",
  Ubiquitous: "bg-amber-50 text-amber-600 border-amber-100",
  Essential: "bg-sky-50 text-sky-600 border-sky-100",
  Robust: "bg-sky-50 text-sky-600 border-sky-100",
  Modern: "bg-cyan-50 text-cyan-600 border-cyan-100",
  Containers: "bg-blue-50 text-blue-600 border-blue-100",
  "Must-Have": "bg-rose-50 text-rose-600 border-rose-100",
};

export default function TechCard({ tech, isAdded, onAdd }: TechCardProps) {
  const badgeClass = badgeStyles[tech.badge] ?? "bg-slate-50 text-slate-600 border-slate-100";

  return (
    <div className="flex flex-col rounded-2xl border border-slate-100 bg-white p-5 shadow-sm transition hover:shadow-md">
      {/* Icon + Badge */}
      <div className="flex items-start justify-between">
        <div className="flex h-10 w-10 items-center justify-center">
          <img src={tech.icon} alt={tech.name} className="h-7 w-7 object-contain" />
        </div>
        <span className={`rounded-full border px-2.5 py-0.5 text-[11.5px] font-semibold ${badgeClass}`}>
          {tech.badge}
        </span>
      </div>

      {/* Name + Description */}
      <h3 className="mt-3 text-lg font-bold text-slate-900">{tech.name}</h3>
      <p className="mt-1 text-xs leading-relaxed text-slate-500">{tech.description}</p>

      {/* mt-auto: button shob card e niche ek line e thakbe */}
      <div className="mt-auto pt-4">
        {/* Category chip, Difficulty, Rating */}
        <div className="flex items-center justify-between border-t border-slate-50 py-3">
          <span className="rounded bg-slate-100/80 px-2 py-0.5 text-[11px] font-medium text-slate-600">
            {tech.category}
          </span>
          <span className="text-[11px] font-medium text-slate-500">{tech.difficulty}</span>
          <span className="flex items-center gap-1 text-[11px] font-semibold text-slate-700">
            <span className="text-amber-400">★</span>
            {tech.rating}
          </span>
        </div>

        {/* Add button */}
        <button
          onClick={() => onAdd(tech)}
          disabled={isAdded}
          className={`w-full rounded-lg py-2.5 text-xs font-medium transition ${
            isAdded
              ? "cursor-not-allowed border border-emerald-200 bg-emerald-50 text-emerald-600"
              : "bg-[#0a0f1d] text-white hover:bg-slate-700"
          }`}
        >
          {isAdded ? "✓ Added to Stack" : "Add to Stack"}
        </button>
      </div>
    </div>
  );
}