import Link from "next/link"
import { ChevronRight } from "lucide-react"

interface Crumb {
  label: string
  href?: string
}

interface PageHeroProps {
  eyebrow: string
  title: string
  description?: string
  crumbs: Crumb[]
}

export function PageHero({ eyebrow, title, description, crumbs }: PageHeroProps) {
  return (
    <section className="border-b border-sky-100 bg-[#f0f7ff] py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <nav className="mb-6 flex items-center gap-2 text-xs text-slate-500">
          {crumbs.map((crumb, index) => (
            <div key={index} className="flex items-center gap-2">
              {index > 0 && <ChevronRight className="h-3.5 w-3.5 text-slate-400" />}
              {crumb.href ? (
                <Link href={crumb.href} className="hover:text-slate-900 transition-colors">
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-slate-700 font-medium">{crumb.label}</span>
              )}
            </div>
          ))}
        </nav>

        <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-sky-600">
          <span className="h-px w-8 bg-sky-500" aria-hidden="true" />
          {eyebrow}
        </div>

        <h1 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight text-slate-900 md:text-5xl max-w-3xl">
          {title}
        </h1>

        {description && (
          <p className="mt-4 text-base md:text-lg leading-relaxed text-slate-600 max-w-2xl">
            {description}
          </p>
        )}
      </div>
    </section>
  )
}
