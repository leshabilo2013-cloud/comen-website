import { CheckCircle2 } from "lucide-react"
import { Reveal } from "@/components/reveal"

const HIGHLIGHTS = [
  "Індивідуальний підхід до кожного проекту",
  "Комплексний монтаж внутрішніх інженерних мереж",
  "Мінімізація помилок між розділами проекту",
  "Економія часу та коштів замовника",
]

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-20 border-b border-border bg-background py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid gap-12 lg:grid-cols-[1fr_0.85fr] lg:gap-16">
          <Reveal>
            <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-primary">
              <span className="h-px w-8 bg-primary" aria-hidden="true" />
              Хто ми
            </div>
            <h2 className="mt-5 font-display text-3xl font-bold leading-tight tracking-tight text-foreground md:text-4xl text-balance">
              ТОВ «Ком Ін Ком» спеціалізується в&nbsp;галузі електроенергетики
            </h2>
            <div className="mt-6 space-y-5 text-base leading-relaxed text-muted-foreground text-pretty">
              <p>
                Основним напрямком компанії є діяльність з дослідження об&apos;єкта, проектування та електромонтажних
                робіт у комплексі з монтажем систем вентиляції та кондиціювання повітря, водопостачання та каналізації,
                опалення та газозабезпечення, автоматизації та охоронної сигналізації.
              </p>
              <p>
                Унікальність роботи з ТОВ «Ком Ін Ком» полягає в індивідуальному підході до кожного проекту. Співпраця з
                нами дає можливість вирішувати питання комплексного монтажу внутрішніх інженерних мереж та систем із
                супроводженням проекту від отримання технічних умов до здачі об&apos;єкта в експлуатацію — усе з однією
                компанією.
              </p>
            </div>

            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {HIGHLIGHTS.map((item, i) => (
                <Reveal
                  as="li"
                  key={item}
                  delay={i * 80}
                  className="flex items-start gap-2.5 text-sm text-foreground"
                >
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                  <span>{item}</span>
                </Reveal>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={120} className="relative">
            <div className="group overflow-hidden rounded-md border border-border">
              <img
                src="/images/control-panel.png"
                alt="Промисловий електротехнічний щит керування та автоматизації"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="absolute -bottom-5 -left-5 hidden max-w-[220px] rounded-sm border border-border bg-card p-5 shadow-lg sm:block">
              <p className="font-display text-2xl font-bold text-primary">Під ключ</p>
              <p className="mt-1 text-xs leading-snug text-muted-foreground">
                Від технічних умов до введення об&apos;єкта в експлуатацію
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
