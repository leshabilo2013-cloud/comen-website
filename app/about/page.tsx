import { PageHero } from "@/components/page-hero"
import { MissionSection } from "@/components/mission-section"
import { PrinciplesSection } from "@/components/principles-section"
import { CtaBand } from "@/components/cta-band"

export default function AboutPage() {
  return (
    <main>
      <PageHero
        eyebrow="Про компанію"
        title="Надійні інженерні рішення для вашого бізнесу"
        description="«Ком Ін Ком» — експерт у сфері комплексного монтажу внутрішніх інженерних мереж."
        crumbs={[{ label: "Головна", href: "/" }, { label: "Про компанію" }]}
      />
      <MissionSection />
      <PrinciplesSection />
      <CtaBand />
    </main>
  )
}
<div className="flex h-full flex-col rounded-md border border-blue-600 bg-blue-600 p-8 text-white transition-all shadow-md">
  <div className="flex h-12 w-12 items-center justify-center rounded-sm bg-white text-blue-600">
    <Icon className="h-6 w-6" aria-hidden="true" />
  </div>
  <h3 className="mt-6 font-display text-xl font-bold text-white">{item.title}</h3>
  <p className="mt-3 text-sm leading-relaxed text-blue-100">{item.desc}</p>
</div>
