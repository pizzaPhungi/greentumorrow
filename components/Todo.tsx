import { isTodo, type Fillable, type Todo } from "@/content/shared";

/**
 * Renders an unmistakable placeholder for content the club still has to supply.
 * Deliberately loud: `npm run build` also refuses to run while any of these
 * remain (see scripts/check-content.mjs).
 */
export function TodoNote({ value, label }: { value: Todo; label: string }) {
  return (
    <span className="inline-flex items-baseline gap-2 rounded border border-dashed border-amber-deep bg-cream px-2.5 py-1 text-sm text-amber-deep">
      <span className="text-[0.7em] font-semibold uppercase tracking-widest">
        {label}
      </span>
      <span className="text-navy/80">{value.__todo}</span>
    </span>
  );
}

/** Renders a plain string as text, or a TODO marker as a visible placeholder. */
export function Fill({ value, label }: { value: Fillable; label: string }) {
  return isTodo(value) ? <TodoNote value={value} label={label} /> : <>{value}</>;
}
