import type { ReactNode } from "react";

export function PageHero({
  kicker,
  title,
  children,
  dark = false,
}: {
  kicker: string;
  title: string;
  children?: ReactNode;
  dark?: boolean;
}) {
  return (
    <header className={dark ? "bg-graphite text-cream" : "border-b border-line bg-paper-2"}>
      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-16">
        <p
          className={
            "text-xs font-semibold tracking-[0.22em] uppercase " +
            (dark ? "text-gold" : "text-red")
          }
        >
          {kicker}
        </p>
        <h1 className="mt-4 max-w-4xl font-display text-4xl leading-[0.98] font-extrabold sm:text-6xl">
          {title}
        </h1>
        {children ? <div className={"mt-5 max-w-2xl text-lg " + (dark ? "text-cream/80" : "text-muted")}>{children}</div> : null}
      </div>
    </header>
  );
}
