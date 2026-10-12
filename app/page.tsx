import Link from "next/link"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { Hero } from "@/components/hero"
import { DirectionsSection } from "@/components/directions-section"

const HIGHLIGHTS = [
  "Індивідуальний підхід до кожного проекту",
  "Комплексний монтаж внутрішніх інженерних мереж",
  "Мінімізація помилок між розділами проекту",
  "Економія часу та коштів замовника",
]

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="border-b border-blue-200 bg-gradient-to-b from-white to-blue-50 py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5">
          <div className="grid gap-12 lg:grid-cols-[1fr_0.8fr] lg:gap-16">
            <div>
              <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-blue-700">
                <span className="h-px w-8 bg-blue-600" aria-hidden="true" />
                Хто ми
              </div>

              <h2 className="mt-5 font-display text-3xl font-bold leading-tight tracking-tight text-blue-950 md:text-4xl text-balance">
                Один підрядник для всіх інженерних мереж об&apos;єкта
              </h2>

              <p className="mt-6 text-base leading-relaxed text-slate-600 text-pretty">
                ТОВ «Ком Ін Ком» спеціалізується на дослідженні об&apos;єкта, проектуванні та електромонтажних роботах
                в комплексі з монтажем вентиляції, водопостачання, опалення, газозабезпечення, автоматизації
                та охоронної сигналізації.
              </p>

              <Link
                href="/about"
                className="mt-8 inline-flex items-center gap-2 rounded-sm bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
              >
                Про компанію
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>

            <ul className="grid content-start gap-3 sm:grid-cols-1">
              {HIGHLIGHTS.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 rounded-sm border border-blue-100 bg-white p-4 text-sm font-medium text-blue-950 shadow-sm transition-all hover:bg-blue-50"
                >
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-blue-600" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <DirectionsSection />
    </>
  )
}
