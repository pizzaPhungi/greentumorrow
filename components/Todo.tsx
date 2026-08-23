import { isTodo, type Todo } from "@/content/site";

/**
 * Renders an unmistakable placeholder for content the club still has to supply.
 * Deliberately loud: nothing here should reach a public launch unnoticed.
 */
export function TodoNote({ value }: { value: Todo }) {
  return (
    <span className="inline-flex items-baseline gap-2 rounded-md border border-dashed border-amber-deep bg-cream px-2.5 py-1 text-sm text-amber-deep">
      <span className="font-semibold uppercase tracking-widest text-[0.7em]">
        To do
      </span>
      <span className="text-navy/80">{value.__todo}</span>
    </span>
  );
}

/** Renders a plain string as text, or a TODO marker as a visible placeholder. */
export function Fillable({ value }: { value: string | Todo }) {
  return isTodo(value) ? <TodoNote value={value} /> : <>{value}</>;
}
