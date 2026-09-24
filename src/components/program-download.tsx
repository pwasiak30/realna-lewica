import { Download } from "lucide-react";
import { PROGRAM_FILE } from "@/data/program";

const BASE = import.meta.env.BASE_URL;

type Tone = "solid" | "line" | "text" | "footer";

const TONE: Record<Tone, string> = {
  solid: "inline-flex min-h-11 items-center justify-center bg-red px-5 font-semibold text-cream hover:bg-red-deep",
  line: "inline-flex min-h-11 items-center justify-center border border-ink px-5 font-semibold hover:bg-ink hover:text-cream",
  text: "inline-flex min-h-11 items-center font-semibold text-red",
  footer: "hover:text-gold",
};

export function ProgramDownload({ tone = "solid" }: { tone?: Tone }) {
  return (
    <a href={`${BASE}${PROGRAM_FILE.href}`} download={PROGRAM_FILE.filename} className={TONE[tone]}>
      {tone === "footer" ? null : <Download className="mr-2 size-4 shrink-0" aria-hidden="true" />}
      {PROGRAM_FILE.label}
    </a>
  );
}
