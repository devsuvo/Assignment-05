import type { Technology } from "../types/technology";
import TechCard from "./TechCard";
import StackSidebar from "./StackSidebar";

type TechCatalogProps = {
  technologies: Technology[];
  stack: Technology[];
  loading: boolean;
  onAdd: (tech: Technology) => void;
  onRemove: (id: string) => void;
  onRemoveAll: () => void;
};

export default function TechCatalog({
  technologies,
  stack,
  loading,
  onAdd,
  onRemove,
  onRemoveAll,
}: TechCatalogProps) {
  return (
    <section id="technologies" className="mx-auto max-w-7xl scroll-mt-24 px-4 py-12 lg:px-8 lg:py-16">
      {/* Title */}
      <div className="mb-8 text-center lg:mb-10 lg:text-left">
        <h2 className="text-2xl font-extrabold text-slate-900 lg:text-4xl">
          Explore the{" "}
          <span className="bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">
            Technologies
          </span>
        </h2>
        <p className="mt-2 text-xs text-slate-500 lg:text-base">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>

      {/* Cards (bam) + Sidebar (dan) */}
      <div className="grid gap-8 lg:grid-cols-[1fr_280px]">
        {loading ? (
          <div className="flex justify-center py-20">
            <span className="loading loading-spinner loading-lg text-pink-500" />
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
            {technologies.map((tech) => (
              <TechCard
                key={tech.id}
                tech={tech}
                isAdded={stack.some((item) => item.id === tech.id)}
                onAdd={onAdd}
              />
            ))}
          </div>
        )}

        <StackSidebar stack={stack} onRemove={onRemove} onRemoveAll={onRemoveAll} />
      </div>
    </section>
  );
}