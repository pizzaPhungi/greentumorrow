"use client";

import { useSyncExternalStore } from "react";

/**
 * Ticks down to `target` once a second. The exported HTML is built ahead of
 * time, so any number baked into it would already be wrong when a visitor
 * opens the page: before hydration the boxes show dashes instead.
 *
 * Labels arrive as props so the dictionaries stay on the server.
 */

/** Notifies once a second; the clock itself is the external store. */
function subscribe(onTick: () => void) {
  const id = setInterval(onTick, 1000);
  return () => clearInterval(id);
}
/** Whole seconds, so the snapshot only changes when the display would. */
const clientNow = () => Math.floor(Date.now() / 1000) * 1000;
/** Null while prerendering and hydrating: the boxes show dashes. */
const serverNow = () => null;

export function Countdown({
  target,
  label,
  doneLabel,
  units,
}: {
  target: string;
  label: string;
  doneLabel: string;
  units: { days: string; hours: string; minutes: string; seconds: string };
}) {
  const end = new Date(target).getTime();
  const now = useSyncExternalStore(subscribe, clientNow, serverNow);

  const left = now === null ? null : Math.max(0, end - now);

  if (left === 0) {
    return (
      <p className="text-2xl font-semibold text-green-dark">{doneLabel}</p>
    );
  }

  const s = left === null ? null : Math.floor(left / 1000);
  const parts = [
    { value: s === null ? null : Math.floor(s / 86400), label: units.days },
    { value: s === null ? null : Math.floor(s / 3600) % 24, label: units.hours },
    { value: s === null ? null : Math.floor(s / 60) % 60, label: units.minutes },
    { value: s === null ? null : s % 60, label: units.seconds },
  ];

  return (
    <div>
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-deep">
        {label}
      </p>
      {/* The seconds change every tick; announcing each one would drown a
          screen reader, so the live region stays off. */}
      <dl className="mt-4 grid grid-cols-4 gap-3 sm:gap-4">
        {parts.map((p) => (
          <div
            key={p.label}
            className="flex flex-col-reverse items-center rounded-lg bg-green-dark px-2 py-4 text-mist sm:py-5"
          >
            <dt className="mt-1 text-[0.7rem] font-medium uppercase tracking-wider text-mist/75 sm:text-xs">
              {p.label}
            </dt>
            <dd className="text-3xl font-semibold tabular-nums sm:text-4xl">
              {p.value === null ? "--" : String(p.value).padStart(2, "0")}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
