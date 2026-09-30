import type { Technology } from "../types/technology";

type StackSidebarProps = {
  stack: Technology[];
  onRemove: (id: string) => void;
  onRemoveAll: () => void;
};

export default function StackSidebar({ stack, onRemove, onRemoveAll }: StackSidebarProps) {
  const count = stack.length;

  return (
    <aside className="self-start lg:sticky lg:top-24">
      <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
        <h3 className="text-base font-bold text-slate-900">Your Stack</h3>
        <p className="mt-1 text-xs text-slate-400">
          {count === 0
            ? "No technologies selected yet."
            : `${count} ${count === 1 ? "Technology" : "Technologies"} Selected`}
        </p>

        {count === 0 ? (
          /* ===== Empty state ===== */
          <div className="mt-4 rounded-xl border border-dashed border-slate-200 py-6 text-center text-xs text-slate-400">
            Your stack is empty.
          </div>
        ) : (
          /* ===== Items ache ===== */
          <>
            <ul className="mt-4 flex flex-col gap-2">
              {stack.map((item) => (
                <li
                  key={item.id}
                  className="flex items-center gap-3 rounded-lg border border-slate-200 px-2.5 py-2"
                >
                  <img src={item.icon} alt={item.name} className="h-7 w-7 object-contain" />
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-bold text-slate-900">{item.name}</p>
                    <p className="text-[11px] text-slate-400">{item.category}</p>
                  </div>
                  <button
                    onClick={() => onRemove(item.id)}
                    aria-label={`Remove ${item.name}`}
                    className="btn btn-circle btn-ghost btn-xs text-slate-400 hover:text-red-500"
                  >
                    ✕
                  </button>
                </li>
              ))}
            </ul>

            <button
              onClick={onRemoveAll}
              className="mt-4 w-full rounded-lg border border-red-300 py-2 text-sm font-semibold text-red-600 transition hover:bg-red-50"
            >
              Remove All
            </button>
          </>
        )}
      </div>
    </aside>
  );
}