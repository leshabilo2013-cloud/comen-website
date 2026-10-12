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
    <section className="border-b border-yellow-200 bg-[#fffdf5] py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <nav className="mb-6 flex items-center gap-2 text-xs text-gray-600">
          {crumbs.map((crumb, index) => (
            <div key={index} className="flex items-center gap-2">
              {index > 0 && <ChevronRight className="h-3.5 w-3.5 text-gray-400" />}
              {crumb.href ? (
                <Link href={crumb.href} className="text-yellow-700 hover:text-yellow-900 transition-colors">
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-gray-800 font-medium">{crumb.label}</span>
              )}
            </div>
          ))}
        </nav>

        <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-yellow-700">
          <span className="h-px w-8 bg-yellow-500" aria-hidden="true" />
          {eyebrow}
        </div>

        <h1 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight text-black md:text-5xl max-w-3xl">
          {title}
        </h1>

        {description && (
          <p className="mt-4 text-base md:text-lg leading-relaxed text-gray-700 max-w-2xl">
            {description}
          </p>
        )}
      </div>
    </section>
  )
}
