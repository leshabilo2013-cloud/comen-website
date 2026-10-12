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
    <section id="about" className="scroll-mt-20 border-b border-yellow-200 bg-[#fffdf5] py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid gap-12 lg:grid-cols-[1fr_0.85fr] lg:gap-16">
          <Reveal>
            <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-yellow-700">
              <span className="h-px w-8 bg-yellow-500" aria-hidden="true" />
              Хто ми
            </div>
            <h2 className="mt-5 font-display text-3xl font-bold leading-tight tracking-tight text-black md:text-4xl text-balance">
              ТОВ «Ком Ін Ком» спеціалізується в&nbsp;галузі електроенергетики
            </h2>
            <div className="mt-6 space-y-5 text-base leading-relaxed text-gray-700 text-pretty">
              <p>
                Основним напрямом компанії є діяльність з дослідження об’єкта, проєктування та електромонтажних робіт,
                монтажу систем резервного живлення (генератори, інвертори, стабілізатори напруги), а також систем
                автоматизації та охоронної сигналізації.
              </p>
              <p>
                Унікальність роботи з ТОВ «Ком Ін Ком» полягає в індивідуальному підході до кожного проекту. Співпраця
                з нами дає можливість вирішувати питання комплексного монтажу внутрішніх інженерних мереж та систем
                електропостачання з повним супроводженням проекту від отримання технічних умов до здачі об&apos;єкта в
                експлуатацію — усе з однією компанією.
              </p>
            </div>

            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {HIGHLIGHTS.map((item, i) => (
                <Reveal
                  as="li"
                  key={item}
                  delay={i * 80}
                  className="flex items-start gap-2.5 text-sm text-black"
                >
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-yellow-600" aria-hidden="true" />
                  <span>{item}</span>
                </Reveal>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={120} className="relative">
            <div className="group overflow-hidden rounded-md border border-yellow-200 bg-white">
              <img
                src="/images/control-panel.png"
                alt="Промисловий електротехнічний щит керування та автоматизації"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="absolute -bottom-5 -left-5 hidden max-w-[220px] rounded-sm border border-yellow-200 bg-white p-5 shadow-lg sm:block">
              <p className="font-display text-2xl font-bold text-yellow-600">Під ключ</p>
              <p className="mt-1 text-xs leading-snug text-gray-700">
                Від технічних умов до введення об&apos;єкта в експлуатацію
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
