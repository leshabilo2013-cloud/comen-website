import { Zap, Wind, Droplets, Flame, ShieldCheck, ClipboardCheck } from "lucide-react"
import { Reveal } from "@/components/reveal"

const DIRECTIONS = [
  {
    id: "01",
    icon: Zap,
    title: "Електромонтажні роботи",
    desc: "Дослідження об'єкта, проектування та монтаж систем електропостачання будь-якої складності.",
    featured: true,
  },
  {
    id: "02",
    icon: Wind,
    title: "Системи резервного живлення",
    desc: "Монтаж та підключення генераторів, інверторів, АКБ та систем безперебійного живлення.",
  },
  {
    id: "03",
    icon: Droplets,
    title: "Стабілізатори та захист мережі",
    desc: "Встановлення систем захисту від перепадів напруги, стабілізаторів та розподільчих щитів.",
  },
  {
    id: "04",
    icon: Flame,
    title: "Автоматизація та АВР",
    desc: "Налаштування систем автоматичного вводу резерву (АВР) та автоматизації електромереж.",
  },
  {
    id: "05",
    icon: ShieldCheck,
    title: "Автоматизація та сигналізація",
    desc: "Проектування та монтаж систем охоронної сигналізації, відеоспостереження та контролю доступу.",
  },
  {
    id: "06",
    icon: ClipboardCheck,
    title: "Консалтинг та аудиторські послуги",
    desc: "Аудит існуючих електромереж, розрахунок навантажень та технічний консалтинг.",
  },
]

export function DirectionsSection() {
  return (
    <section id="directions" className="scroll-mt-20 border-b border-border bg-secondary/50 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal className="max-w-2xl">
          <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-primary">
            <span className="h-px w-8 bg-primary" aria-hidden="true" />
            Напрямки роботи
          </div>
          <h2 className="mt-5 font-display text-3xl font-bold leading-tight tracking-tight text-foreground md:text-4xl text-balance">
            Комплексний монтаж інженерних систем
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground text-pretty">
            Ми виконуємо повний спектр робіт із внутрішніх інженерних мереж — від електрики до автоматизації, поєднуючи
            всі розділи проекту в єдиному підряді.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-px overflow-hidden rounded-md border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {DIRECTIONS.map((d, i) => {
            const Icon = d.icon
            return (
              <Reveal key={d.id} delay={i * 80} className="flex">
                <article
                  className={`group relative flex w-full flex-col p-7 transition-[background-color,box-shadow] duration-300 ${
                    d.featured
                      ? "bg-primary text-primary-foreground"
                      : "bg-card hover:z-10 hover:bg-secondary hover:shadow-lg"
                  }`}
                >
                  <span
                    className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-accent transition-transform duration-300 group-hover:scale-x-100"
                    aria-hidden="true"
                  />
                  <div className="flex items-center justify-between">
                    <span
                      className={`flex h-11 w-11 items-center justify-center rounded-sm transition-transform duration-300 group-hover:scale-110 ${
                        d.featured ? "bg-primary-foreground/15 text-accent" : "bg-primary/10 text-primary"
                      }`}
                    >
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span
                      className={`font-mono text-xs ${
                        d.featured ? "text-primary-foreground/50" : "text-muted-foreground/60"
                      }`}
                    >
                      {d.id}
                    </span>
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold leading-snug">{d.title}</h3>
                  <p
                    className={`mt-2 text-sm leading-relaxed ${
                      d.featured ? "text-primary-foreground/75" : "text-muted-foreground"
                    }`}
                  >
                    {d.desc}
                  </p>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
