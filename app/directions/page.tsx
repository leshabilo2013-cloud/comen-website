import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { DirectionsSection } from "@/components/directions-section"
import { ProcessSection } from "@/components/process-section"
import { CtaBand } from "@/components/cta-band"

export const metadata: Metadata = {
  title: "Напрямки роботи",
  description:
    "Напрямки ТОВ «Ком Ін Ком»: електромонтаж, вентиляція та кондиціювання, водопостачання, опалення та газозабезпечення, автоматизація і сигналізація.",
}

export default function DirectionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Напрямки роботи"
        title="Комплексний монтаж інженерних систем"
        description="Повний спектр робіт із внутрішніх інженерних мереж — від електрики до автоматизації, поєднаний у єдиному підряді."
        crumbs={[{ label: "Головна", href: "/" }, { label: "Напрямки" }]}
      />
      <DirectionsSection />
      <ProcessSection />
      <CtaBand />
    </>
  )
}
