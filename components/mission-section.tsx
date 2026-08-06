import { Target, Compass, TrendingUp } from "lucide-react"
import { Reveal } from "@/components/reveal"

const PILLARS = [
  {
    icon: Compass,
    tag: "Місія",
    title: "Новітні технології на благо людства та навколишнього середовища",
    points: [],
  },
  {
    icon: Target,
    tag: "Стратегія",
    title: "Надійність і сучасні рішення",
    points: [
      "Стабільне електроживлення будь-якого об'єкта",
      "Розробка та впровадження нових схемних рішень",
      "Інтеграція технологій світових лідерів в енергетику України",
    ],
  },
  {
    icon: TrendingUp,
    tag: "Мета",
    title: "Досягнення високих позицій на ринку електроенергетики України",
    points: ["Цілеспрямована робота на результат", "Взаємовигідні умови із замовником"],
  },
]

export function MissionSection() {
  return (
    <section className="border-b border-border bg-background py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal className="max-w-2xl">
          <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-primary">
            <span className="h-px w-8 bg-primary" aria-hidden="true" />
            Наші орієнтири
          </div>
          <h2 className="mt-5 font-display text-3xl font-bold leading-tight tracking-tight text-foreground md:text-4xl text-balance">
            Місія, стратегія та мета
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {PILLARS.map((p, i) => {
            const Icon = p.icon
            return (
              <Reveal key={p.tag} delay={i * 100} className="flex">
                <article className="group flex w-full flex-col rounded-md border border-border bg-card p-7 transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg">
                  <span className="flex h-11 w-11 items-center justify-center rounded-sm bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                <span className="mt-5 font-mono text-xs uppercase tracking-[0.18em] text-accent-foreground/70">
                  {p.tag}
                </span>
                <h3 className="mt-2 font-display text-lg font-semibold leading-snug text-foreground text-balance">
                  {p.title}
                </h3>
                {p.points.length > 0 && (
                  <ul className="mt-4 space-y-2.5 border-t border-border pt-4">
                    {p.points.map((point) => (
                      <li key={point} className="flex items-start gap-2 text-sm leading-snug text-muted-foreground">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                        {point}
                      </li>
                    ))}
                  </ul>
                )}
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
