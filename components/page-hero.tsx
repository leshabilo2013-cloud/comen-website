import Link from "next/link"
import { ChevronRight } from "lucide-react"

type Crumb = { label: string; href?: string }

export function PageHero({
  eyebrow,
  title,
  description,
  crumbs,
}: {
  eyebrow: string
  title: string
  description?: string
  crumbs: Crumb[]
}) {
  return (
    <section className="relative overflow-hidden border-b border-sky-200 bg-[#f0f7ff] text-slate-900">
      <div className="relative mx-auto max-w-6xl px-5 pb-14 pt-14 md:pb-20 md:pt-20">
        <nav aria-label="Хлібні крихти" className="mb-8">
          <ol className="flex flex-wrap items-center gap-1.5 font-mono text-xs text-slate-500">
            {crumbs.map((c, i) => (
              <li key={c.label} className="flex items-center gap-1.5">
                {c.href ? (
                  <Link href={c.href} className="transition-colors hover:text-slate-900">
                    {c.label}
                  </Link>
                ) : (
                  <span className="text-slate-800 font-medium">{c.label}</span>
                )}
                {i < crumbs.length - 1 && <ChevronRight className="h-3.5 w-3.5 text-slate-400" aria-hidden="true" />}
              </li>
            ))}
          </ol>
        </nav>

        <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-sky-600">
          <span className="h-px w-8 bg-sky-500" aria-hidden="true" />
          {eyebrow}
        </div>
        <h1 className="mt-5 max-w-4xl font-display text-4xl font-bold leading-[1.05] tracking-tight text-slate-900 md:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-700 md:text-lg">
            {description}
          </p>
        )}
      </div>
    </section>
  )
}
