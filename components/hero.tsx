import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink text-ink-foreground">
      <img
        src="/images/power-engineering.png"
        alt="Високовольтна електрична підстанція у сутінках"
        className="absolute inset-0 h-full w-full object-cover opacity-30"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/40" aria-hidden="true" />
      <div
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--ink-foreground) 1px, transparent 1px), linear-gradient(to bottom, var(--ink-foreground) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl px-5 pb-16 pt-20 md:pb-24 md:pt-28">
        <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-accent">
          <span className="h-px w-8 bg-accent" aria-hidden="true" />
          Комунікаційна Інжинірінгова Компанія
        </div>

        <h1 className="mt-6 max-w-4xl font-display text-4xl font-bold leading-[1.05] tracking-tight text-balance md:text-6xl lg:text-7xl">
          Інжинірингова компанія у&nbsp;галузі{" "}
          <span className="text-accent">електроенергетики</span>
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-foreground/70 md:text-lg text-pretty">
          ТОВ «Ком Ін Ком» — це дослідження об&apos;єкта, проектування та електромонтажні роботи в комплексі з
          інженерними системами. Один підрядник від отримання ТУ до здачі об&apos;єкта в&nbsp;експлуатацію.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <Link
            href="/directions"
            className="inline-flex items-center gap-2 rounded-sm bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent/90"
          >
            Напрямки роботи
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 rounded-sm border border-ink-foreground/25 px-6 py-3 text-sm font-medium text-ink-foreground transition-colors hover:bg-ink-foreground/10"
          >
            Про компанію
          </Link>
        </div>

        <dl className="mt-16 grid max-w-3xl grid-cols-2 gap-x-6 gap-y-8 border-t border-ink-foreground/15 pt-8 md:grid-cols-4">
          {[
            { value: "5", label: "напрямків монтажу" },
            { value: "100%", label: "супровід проекту" },
            { value: "ТУ→∞", label: "повний цикл робіт" },
            { value: "1", label: "підрядник на все" },
          ].map((stat) => (
            <div key={stat.label}>
              <dt className="font-display text-3xl font-bold text-accent md:text-4xl">{stat.value}</dt>
              <dd className="mt-1 font-mono text-[11px] uppercase leading-snug tracking-wider text-ink-foreground/60">
                {stat.label}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
