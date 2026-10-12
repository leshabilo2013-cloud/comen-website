import { Reveal } from "@/components/reveal"

const STEPS = [
  {
    n: "01",
    title: "Отримання технічних умов",
    desc: "Аналіз об'єкта та оформлення ТУ — відправна точка кожного проекту.",
  },
  {
    n: "02",
    title: "Проектні роботи",
    desc: "Розробка проектної документації по всіх розділах інженерних систем.",
  },
  {
    n: "03",
    title: "Комплексний монтаж",
    desc: "Електромонтаж у поєднанні з вентиляцією, водопостачанням, опаленням та автоматизацією.",
  },
  {
    n: "04",
    title: "Здача в експлуатацію",
    desc: "Пусконалагодження та введення об'єкта в експлуатацію одним підрядником.",
  },
]

export function ProcessSection() {
  return (
    <section id="process" className="scroll-mt-20 border-b border-yellow-200 bg-black py-20 text-white md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal className="max-w-2xl">
          <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-yellow-400">
            <span className="h-px w-8 bg-yellow-400" aria-hidden="true" />
            Повний цикл
          </div>
          <h2 className="mt-5 font-display text-3xl font-bold leading-tight tracking-tight text-balance md:text-4xl">
            Один підрядник на всіх етапах
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/70 text-pretty">
            Супроводження проекту з однією компанією мінімізує помилки при виконанні умов різних розділів та значно
            підвищує ефективність співпраці.
          </p>
        </Reveal>

        <ol className="mt-14 grid gap-px overflow-hidden rounded-md border border-white/15 bg-white/10 md:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, i) => (
            <Reveal as="li" key={step.n} delay={i * 90} className="relative flex flex-col bg-black p-7">
              <div className="group flex flex-1 flex-col">
                <span className="font-display text-4xl font-bold text-white/20 transition-colors duration-300 group-hover:text-yellow-400">
                  {step.n}
                </span>
                <span
                  className="mt-3 h-px w-10 bg-yellow-400 transition-all duration-300 group-hover:w-16"
                  aria-hidden="true"
                />
                <h3 className="mt-4 font-display text-base font-semibold leading-snug text-white">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/65">{step.desc}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
