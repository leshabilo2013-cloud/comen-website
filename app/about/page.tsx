import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { AboutSection } from "@/components/about-section"
import { MissionSection } from "@/components/mission-section"
import { PrinciplesSection } from "@/components/principles-section"
import { CtaBand } from "@/components/cta-band"

export const metadata: Metadata = {
  title: "Про компанію",
  description:
    "ТОВ «Ком Ін Ком» — інжинірингова компанія у галузі електроенергетики: місія, стратегія, мета та принципи співпраці.",
}

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Про компанію"
        title="Інжинірингова компанія у галузі електроенергетики"
        description="Комплексний монтаж внутрішніх інженерних мереж із супроводженням проекту від отримання технічних умов до здачі об'єкта в експлуатацію."
        crumbs={[{ label: "Головна", href: "/" }, { label: "Про компанію" }]}
      />
      <AboutSection />
      <MissionSection />
      <PrinciplesSection />
      <CtaBand />
    </>
  )
}
