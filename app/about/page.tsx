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
