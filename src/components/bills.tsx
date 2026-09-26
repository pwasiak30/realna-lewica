import { Download } from "lucide-react";
import { billsForChapter, billPointers, BILLS, type Bill } from "@/data/program";

const BASE = import.meta.env.BASE_URL;

function DownloadLink({ bill }: { bill: Bill }) {
  return (
    <a
      href={`${BASE}${bill.href}`}
      download={bill.filename}
      className="inline-flex min-h-11 items-center gap-2 bg-ink px-4 text-sm font-semibold text-cream hover:bg-graphite"
    >
      <Download className="size-4 shrink-0" aria-hidden="true" />
      Pobierz wzór druku
      <span className="text-gold">PDF</span>
    </a>
  );
}

function BillCard({ bill }: { bill: Bill }) {
  return (
    <li className="border-t border-ink/15 pt-4 first:border-t-0 first:pt-0">
      <p className="font-display text-2xl leading-snug">{bill.title}</p>
      <p className="mt-2">{bill.line}</p>
      <p className="mt-2 text-sm text-graphite">{bill.covers}</p>
      <div className="mt-3">
        <DownloadLink bill={bill} />
      </div>
    </li>
  );
}

/** Karta projektów ustaw przypisanych do rozdziału. Odsyłacz, gdy ustawa jest w innym rozdziale. */
export function ChapterBills({ slug }: { slug: string }) {
  const bills = billsForChapter(slug);
  const pointers = billPointers(slug);
  if (bills.length === 0 && pointers.length === 0) return null;

  if (bills.length === 0) {
    return (
      <aside className="mt-8 border-l-4 border-gold bg-gold-soft px-5 py-4" aria-label="Projekt ustawy">
        {pointers.map((bill) => (
          <p key={bill.id} className="text-sm">
            <span className="font-semibold">Projekt ustawy. </span>
            {bill.line}{" "}
            <a
              href={`${BASE}${bill.href}`}
              download={bill.filename}
              className="font-semibold text-red underline underline-offset-4"
            >
              Pobierz wzór druku (PDF)
            </a>
          </p>
        ))}
      </aside>
    );
  }

  return (
    <aside className="mt-8 border-l-4 border-gold bg-gold-soft px-5 py-5" aria-label="Projekty ustaw">
      <p className="text-xs font-semibold tracking-widest text-gold-ink uppercase">
        {bills.length === 1 ? "Projekt ustawy do tego rozdziału" : "Projekty ustaw do tego rozdziału"}
      </p>
      <ul className="mt-4 space-y-4">
        {bills.map((bill) => (
          <BillCard key={bill.id} bill={bill} />
        ))}
      </ul>
    </aside>
  );
}

/** Pełna lista wzorów — spis programu. */
export function BillList() {
  return (
    <section id="ustawy" className="mt-14 scroll-mt-28 border-t border-line pt-10" aria-labelledby="ustawy-tytul">
      <p className="text-xs font-semibold tracking-widest text-red uppercase">Do pobrania</p>
      <h2 id="ustawy-tytul" className="mt-3 font-display text-4xl leading-tight">
        Projekty ustaw
      </h2>
      <p className="mt-3 max-w-3xl text-lg text-muted">
        Dwa rozdziały mają już wzór druku sejmowego. To dokumenty robocze do czytania i konsultacji, nie ustawy wniesione do Sejmu.
      </p>
      <ul className="mt-6 grid gap-px bg-line md:grid-cols-2">
        {BILLS.map((bill) => (
          <li key={bill.id} className="bg-cream p-5">
            <p className="font-display text-2xl leading-snug">{bill.title}</p>
            <p className="mt-2 text-muted">{bill.line}</p>
            <p className="mt-2 text-sm text-graphite">{bill.covers}</p>
            <div className="mt-4">
              <DownloadLink bill={bill} />
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
