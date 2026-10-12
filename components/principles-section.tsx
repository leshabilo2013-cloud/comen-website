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
    <section className="border-b border-yellow-200 bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal className="max-w-2xl">
          <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-yellow-700">
            <span className="h-px w-8 bg-yellow-500" aria-hidden="true" />
            Наші орієнтири
          </div>
          <h2 className="mt-5 font-display text-3xl font-bold leading-tight tracking-tight text-black md:text-4xl text-balance">
            Місія, стратегія та мета
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {PILLARS.map((p, i) => {
            const Icon = p.icon
            return (
              <Reveal key={p.tag} delay={i * 100} className="flex">
                <article className="group flex w-full flex-col rounded-md border border-yellow-200 bg-white p-7 shadow-sm transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:border-yellow-400 hover:shadow-md">
                  <span className="flex h-11 w-11 items-center justify-center rounded-sm bg-yellow-100 text-yellow-700 transition-transform duration-300 group-hover:scale-110">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className="mt-5 font-mono text-xs uppercase tracking-[0.18em] text-gray-700">
                    {p.tag}
                  </span>
                  <h3 className="mt-2 font-display text-lg font-semibold leading-snug text-black text-balance">
                    {p.title}
                  </h3>
                  {p.points.length > 0 && (
                    <ul className="mt-4 space-y-2.5 border-t border-yellow-200 pt-4">
                      {p.points.map((point) => (
                        <li key={point} className="flex items-start gap-2 text-sm leading-snug text-gray-700">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-yellow-500" aria-hidden="true" />
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
