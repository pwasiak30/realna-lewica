import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import type { ProgramTarget } from "@/data/program";

/** Link do miejsca w pełnym programie: rozdział (z kotwicą punktu) albo aneks kosztów. */
export function ProgramLink({
  target,
  className,
  children,
}: {
  target: ProgramTarget;
  className?: string;
  children: ReactNode;
}) {
  if ("page" in target) {
    return (
      <Link to={target.page} hash={target.hash} className={className}>
        {children}
      </Link>
    );
  }
  return (
    <Link
      to="/program/$slug"
      params={{ slug: target.slug }}
      hash={target.hash}
      className={className}
    >
      {children}
    </Link>
  );
}

/** Znaczek „Unikat” przy postulacie. */
export function UniqueBadge({
  tone = "light",
  spaced = true,
}: {
  tone?: "light" | "dark";
  spaced?: boolean;
}) {
  return (
    <span
      className={
        tone === "dark"
          ? `${spaced ? "ml-2 " : ""}inline-block bg-gold px-1.5 py-0.5 align-middle font-sans text-[0.65rem] font-semibold tracking-widest text-ink uppercase`
          : `${spaced ? "ml-2 " : ""}inline-block border border-gold bg-gold-soft px-1.5 py-0.5 align-middle font-sans text-[0.65rem] font-semibold tracking-widest text-red-deep uppercase`
      }
      title="W tej formie nie ma tego żadna partia sejmowa"
    >
      Unikat
    </span>
  );
}
