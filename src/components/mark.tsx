export function Mark({ className = "size-9" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <rect width="48" height="48" rx="4" className="fill-ink" />
      <path
        d="M9 34 L18 25 L24 29 L34 16"
        fill="none"
        className="stroke-cream"
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M28 16 H39 V27"
        fill="none"
        className="stroke-gold"
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
