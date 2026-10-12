import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { AboutSection } from "@/components/about-section"
import { MissionSection } from "@/components/mission-section"
import { PrinciplesSection } from "@/components/principles-section"
import { ProcessSection } from "@/components/process-section"

export const metadata: Metadata = {
  title: "Про компанію",
  description:
    "ТОВ «Ком Ін Ком» — інжинірингова компанія у галузі електроенергетики. Проєктування, монтаж та сервісне забезпечення об'єктів.",
}

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Про компанію"
        title="Досвід, надійність і комплексний підхід до кожного об’єкта"
        description="Ми працюємо як один підрядник від отримання технічних умов до введення об’єкта в експлуатацію."
        crumbs={[{ label: "Головна", href: "/" }, { label: "Про компанію" }]}
      />
      <AboutSection />
      <MissionSection />
      <PrinciplesSection />
      <ProcessSection />
    </>
  )
}
