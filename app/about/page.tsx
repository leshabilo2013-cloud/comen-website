import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function CtaBand() {
  return (
    <section className="border-b border-gray-200 bg-gray-50 py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-5 text-center">
        <h2 className="font-display text-2xl font-bold tracking-tight text-gray-900 md:text-4xl text-balance">
          Готові розпочати проект или потрібна консультація?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base text-gray-600 text-pretty">
          Зв'яжіться з нашими фахівцями для розрахунку вартості та консультації щодо ваших інженерних мереж.
        </p>
        <div className="mt-8 flex justify-center">
          <Link
            href="/contacts"
            className="inline-flex items-center gap-2 rounded-sm bg-black px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-gray-800"
          >
            Зв'язатися з нами
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  )
}
