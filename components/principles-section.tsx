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
    <section className="border-b border-border bg-secondary/50 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid gap-12 lg:grid-cols-[0.7fr_1fr] lg:gap-16">
          <Reveal>
            <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-primary">
              <span className="h-px w-8 bg-primary" aria-hidden="true" />
              Принципи співпраці
            </div>
            <h2 className="mt-5 font-display text-3xl font-bold leading-tight tracking-tight text-foreground md:text-4xl text-balance">
              Ми завжди дбаємо про своїх клієнтів
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground text-pretty">
              Готові у будь-який момент вести ділову, конструктивну бесіду та працювати на взаємовигідних умовах.
            </p>
          </Reveal>

          <ul className="grid gap-px overflow-hidden rounded-md border border-border bg-border sm:grid-cols-2">
            {PRINCIPLES.map((item, i) => (
              <Reveal as="li" key={item} delay={i * 70} className="group flex items-start gap-3 bg-card p-6 transition-colors duration-300 hover:bg-secondary">
                <span className="font-mono text-sm font-semibold text-accent-foreground/60 transition-colors duration-300 group-hover:text-primary">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-sm font-medium leading-snug text-foreground">{item}</span>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
