import { Reveal } from "@/components/reveal"

const PRINCIPLES = [
  "Якісне та надійне обладнання",
  "Багатопрофільний сервіс",
  "Порядність та кваліфікація персоналу",
  "Дотримання принципів ділової етики",
  "Взаємна повага із замовником",
  "Відкритість до діалогу",
]

export function PrinciplesSection() {
  return (
    <section className="border-b border-yellow-200 bg-[#f7f7f5] py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid gap-12 lg:grid-cols-[0.7fr_1fr] lg:gap-16">
          <Reveal>
            <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-yellow-700">
              <span className="h-px w-8 bg-yellow-500" aria-hidden="true" />
              Принципи співпраці
            </div>
            <h2 className="mt-5 font-display text-3xl font-bold leading-tight tracking-tight text-black md:text-4xl text-balance">
              Ми завжди дбаємо про своїх клієнтів
            </h2>
            <p className="mt-4 text-base leading-relaxed text-gray-700 text-pretty">
              Готові у будь-який момент вести ділову, конструктивну бесіду та працювати на взаємовигідних умовах.
            </p>
          </Reveal>

          <ul className="grid gap-px overflow-hidden rounded-md border border-yellow-200 bg-yellow-200/70 sm:grid-cols-2">
            {PRINCIPLES.map((item, i) => (
              <Reveal as="li" key={item} delay={i * 70} className="group flex items-start gap-3 bg-white p-6 transition-colors duration-300 hover:bg-yellow-50">
                <span className="font-mono text-sm font-semibold text-gray-700 transition-colors duration-300 group-hover:text-yellow-700">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-sm font-medium leading-snug text-black">{item}</span>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
