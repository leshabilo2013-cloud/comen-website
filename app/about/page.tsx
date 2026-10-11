import Link from "next/link"
import { ChevronRight } from "lucide-react"

interface Breadcrumb {
  label: string
  href?: string
}

interface PageHeroProps {
  eyebrow: string
  title: string
  description?: string
  crumbs: Breadcrumb[]
}

export function PageHero({ eyebrow, title, description, crumbs }: PageHeroProps) {
  return (
    <section className="border-b border-gray-200 bg-white py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-5">
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center gap-2 font-mono text-xs text-gray-500">
            {crumbs.map((crumb, index) => {
              const isLast = index === crumbs.length - 1
              return (
                <li key={index} className="flex items-center gap-2">
                  {index > 0 && <ChevronRight className="h-3 w-3 text-gray-400" aria-hidden="true" />}
                  {crumb.href && !isLast ? (
                    <Link href={crumb.href} className="transition-colors hover:text-black">
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="font-medium text-gray-900">{crumb.label}</span>
                  )}
                </li>
              )
            })}
          </ol>
        </nav>

        <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-black">
          <span className="h-px w-8 bg-black" aria-hidden="true" />
          {eyebrow}
        </div>
        <h1 className="mt-4 font-display text-3xl font-bold tracking-tight text-gray-900 md:text-5xl text-balance">
          {title}
        </h1>
        {description && (
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-gray-600 md:text-lg text-pretty">
            {description}
          </p>
        )}
      </div>
    </section>
  )
}
import { Target, Compass, Award } from "lucide-react"
import { Reveal } from "@/components/reveal"

const ITEMS = [
  {
    icon: Target,
    title: "Місія",
    desc: "Забезпечувати об'єкти надійними, безпечними та енергоефективними інженерними мережами, підвищуючи якість життя та ефективність бізнесу.",
  },
  {
    icon: Compass,
    title: "Стратегія",
    desc: "Впровадження інноваційних технологій, автоматизація процесів та постійне підвищення кваліфікації нашої команди.",
  },
  {
    icon: Award,
    title: "Мета",
    desc: "Стати беззаперечним лідером у сфері комплексного монтажу внутрішніх інженерних мереж в Україні.",
  },
]

export function MissionSection() {
  return (
    <section className="border-b border-gray-200 bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid gap-8 md:grid-cols-3">
          {ITEMS.map((item, index) => {
            const Icon = item.icon
            return (
              <Reveal key={item.title} delay={index * 100}>
                <div className="flex h-full flex-col rounded-md border border-gray-200 bg-gray-50 p-8 transition-all hover:bg-gray-100/80 hover:shadow-md">
                  <div className="flex h-12 w-12 items-center justify-center rounded-sm bg-black text-white">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="mt-6 font-display text-xl font-bold text-gray-900">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-gray-600">{item.desc}</p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
import { CheckCircle2 } from "lucide-react"
import { Reveal } from "@/components/reveal"

const PRINCIPLES = [
  {
    title: "Якість та надійність",
    desc: "Використовуємо лише сертифіковані матеріали та обладнання від перевірених світових виробників.",
  },
  {
    title: "Професіоналізм",
    desc: "Наша команда складається з досвідчених інженерів та сертифікованих фахівців.",
  },
  {
    title: "Комплексний підхід",
    desc: "Беремо на себе всі етапи: від аналізу об'єкта до гарантійного та післягарантійного обслуговування.",
  },
  {
    title: "Прозорість",
    desc: "Чітке дотримання кошторису та термінів виконання робіт без прихованих платежів.",
  },
]

export function PrinciplesSection() {
  return (
    <section className="border-b border-gray-200 bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal className="max-w-2xl">
          <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-black">
            <span className="h-px w-8 bg-black" aria-hidden="true" />
            Принципи співпраці
          </div>
          <h2 className="mt-5 font-display text-3xl font-bold leading-tight tracking-tight text-gray-900 md:text-4xl text-balance">
            Чому обирають «Ком Ін Ком»
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {PRINCIPLES.map((item, index) => (
            <Reveal key={item.title} delay={index * 100}>
              <div className="flex items-start gap-4 rounded-md border border-gray-200 bg-gray-50 p-6 transition-all hover:bg-gray-100/80">
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-black" aria-hidden="true" />
                <div>
                  <h3 className="font-display text-lg font-semibold text-gray-900">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">{item.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function CtaBand() {
  return (
    <section className="border-b border-gray-200 bg-gray-50 py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-5 text-center">
        <h2 className="font-display text-2xl font-bold tracking-tight text-gray-900 md:text-4xl text-balance">
          Готові розпочати проект або потрібна консультація?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base text-gray-600 text-pretty">
          Зв&apos;яжіться з нашими фахівцями для розрахунку вартості та консультації щодо ваших інженерних мереж.
        </p>
        <div className="mt-8 flex justify-center">
          <Link
            href="/contacts"
            className="inline-flex items-center gap-2 rounded-sm bg-black px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-gray-800"
          >
            Зв&apos;язатися з нами
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  )
}
