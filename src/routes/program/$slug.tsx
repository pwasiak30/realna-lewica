import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Prose } from "@/components/prose";
import { Shell } from "@/components/shell";
import { CHAPTERS, chapterBySlug, neighbors } from "@/data/program";

export const Route = createFileRoute("/program/$slug")({
  head: ({ params }) => {
    const chapter = chapterBySlug(params.slug);
    return {
      meta: [{ title: chapter ? `${chapter.title} — Realna Lewica` : "Program — Realna Lewica" }],
    };
  },
  component: ChapterPage,
});

function pad(n: number) {
  return String(n).padStart(2, "0");
}

function pointId(n: string) {
  return `p-${n.replace(".", "-")}`;
}

function ChapterPage() {
  const { slug } = Route.useParams();
  const navigate = useNavigate();
  const chapter = chapterBySlug(slug);

  if (!chapter) {
    return (
      <Shell>
        <div className="mx-auto max-w-3xl px-5 py-20 sm:px-8">
          <h1 className="font-display text-4xl">Nie ma takiego rozdziału.</h1>
          <Link to="/program" className="mt-6 inline-flex min-h-11 items-center font-semibold text-red">
            Wróć do spisu
          </Link>
        </div>
      </Shell>
    );
  }

  const { prev, next } = neighbors(slug);
  const withTitles = chapter.points.filter((point) => point.title);

  return (
    <Shell>
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-10 sm:px-8 lg:grid-cols-[16rem_1fr] lg:py-14">
        <aside className="hidden lg:sticky lg:top-28 lg:block lg:self-start">
          <p className="text-xs font-semibold tracking-widest text-muted uppercase">Spis</p>
          <nav className="mt-3" aria-label="Rozdziały">
            <ol className="max-h-[70vh] space-y-1 overflow-auto pr-2">
              {CHAPTERS.map((item) => (
                <li key={item.slug}>
                  <Link
                    to="/program/$slug"
                    params={{ slug: item.slug }}
                    className={
                      "flex min-h-11 items-baseline gap-3 py-1 text-sm " +
                      (item.slug === slug ? "font-semibold text-red" : "text-graphite hover:text-red")
                    }
                    aria-current={item.slug === slug ? "page" : undefined}
                  >
                    <span className="w-6 shrink-0 font-display">{pad(item.num)}</span>
                    <span>{item.title}</span>
                  </Link>
                </li>
              ))}
            </ol>
          </nav>
        </aside>

        <article>
          <label className="mb-8 block lg:hidden">
            <span className="text-xs font-semibold tracking-widest text-muted uppercase">Rozdział</span>
            <select
              className="mt-2 min-h-11 w-full border border-line-strong bg-cream px-3"
              value={chapter.slug}
              onChange={(event) => {
                void navigate({ to: "/program/$slug", params: { slug: event.target.value } });
              }}
            >
              {CHAPTERS.map((item) => (
                <option key={item.slug} value={item.slug}>
                  {pad(item.num)}. {item.title}
                </option>
              ))}
            </select>
          </label>
          <p className="text-xs font-semibold tracking-widest text-red uppercase">
            Część {chapter.part} · rozdział {pad(chapter.num)} · {chapter.kicker}
          </p>
          <h1 className="mt-3 font-display text-5xl leading-tight">{chapter.title}</h1>
          <p className="mt-5 max-w-3xl text-xl text-graphite">{chapter.lead}</p>

          {withTitles.length > 0 ? (
            <nav className="mt-8 border-y border-line py-4" aria-label="Punkty rozdziału">
              <ol className="grid gap-2 sm:grid-cols-2">
                {withTitles.map((point) => (
                  <li key={point.n}>
                    <a href={`#${pointId(point.n)}`} className="text-sm hover:text-red">
                      <span className="font-semibold text-red">{point.n} </span>
                      {point.title}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          ) : null}

          <ol className="mt-4">
            {chapter.points.map((point) => (
              <li
                key={point.n}
                id={pointId(point.n)}
                className="grid scroll-mt-36 gap-3 border-b border-line py-7 sm:grid-cols-[4.5rem_1fr] sm:gap-6"
              >
                {point.group ? (
                  <p className="text-xs font-semibold tracking-widest text-gold-ink uppercase sm:col-span-2">
                    {point.group}
                  </p>
                ) : null}
                <p className="font-display text-2xl text-red">{point.n}</p>
                <div>
                  {point.title ? <h2 className="mb-3 font-display text-2xl">{point.title}</h2> : null}
                  <Prose body={point.body} />
                </div>
              </li>
            ))}
          </ol>

          <div className="mt-10 grid gap-3 sm:grid-cols-2">
            {prev ? (
              <Link
                to="/program/$slug"
                params={{ slug: prev.slug }}
                className="flex min-h-11 items-center gap-3 border border-line px-4 py-4 hover:border-ink"
              >
                <ArrowLeft className="size-4 shrink-0" aria-hidden="true" />
                <span>
                  <span className="block text-xs tracking-widest text-muted uppercase">Poprzedni</span>
                  <span className="font-display text-xl">{prev.title}</span>
                </span>
              </Link>
            ) : (
              <span />
            )}
            {next ? (
              <Link
                to="/program/$slug"
                params={{ slug: next.slug }}
                className="flex min-h-11 items-center justify-between gap-3 border border-line px-4 py-4 text-right hover:border-ink sm:col-start-2"
              >
                <span>
                  <span className="block text-xs tracking-widest text-muted uppercase">Następny</span>
                  <span className="font-display text-xl">{next.title}</span>
                </span>
                <ArrowRight className="size-4 shrink-0" aria-hidden="true" />
              </Link>
            ) : (
              <Link
                to="/rachunek"
                className="flex min-h-11 items-center justify-between gap-3 bg-ink px-4 py-4 text-cream sm:col-start-2"
              >
                <span>
                  <span className="block text-xs tracking-widest text-gold uppercase">Dalej</span>
                  <span className="font-display text-xl">Aneks kosztów</span>
                </span>
                <ArrowRight className="size-4 shrink-0" aria-hidden="true" />
              </Link>
            )}
          </div>
        </article>
      </div>
    </Shell>
  );
}
