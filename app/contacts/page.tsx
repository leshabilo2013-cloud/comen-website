import type { Metadata } from "next"
import { Mail, MapPin, Building2, Clock } from "lucide-react"
import { PageHero } from "@/components/page-hero"
import { ContactForm } from "@/components/contact-form"

export const metadata: Metadata = {
  title: "Контакти",
  description:
    "Зв'яжіться з ТОВ «Ком Ін Ком» — інжинірингова компанія у галузі електроенергетики. Пошта, реквізити та форма зворотного зв'язку.",
}

const contactDetails = [
  {
    icon: Mail,
    tag: "Пошта",
    lines: ["info@comen.com.ua"],
  },
  {
    icon: MapPin,
    tag: "Адреса",
    lines: ["02154, м. Київ, пр-т Соборності, б. 30, оф. 393", "(044) 290-55-59"],
  },
  {
    icon: Building2,
    tag: "Компанія",
    lines: ["ТОВ «Ком Ін Ком»", "Комунікаційна Інжинірингова Компанія"],
  },
  {
    icon: Clock,
    tag: "Графік",
    lines: ["Пн–Пт, 09:00 – 18:00"],
  },
]

export default function ContactsPage() {
  return (
    <main className="min-h-screen bg-background">
      <PageHero
        title="Контакти"
        description="Зв'яжіться з нами для консультації або обговорення вашого проекту"
        crumbs={[
          { label: "Головна", href: "/" },
          { label: "Контакти" },
        ]}
      />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-8">Контактна інформація</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                {contactDetails.map((item, index) => {
                  const Icon = item.icon
                  return (
                    <div key={index} className="p-6 rounded-xl border bg-card text-card-foreground shadow-sm">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                        {item.tag}
                      </h3>
                      {item.lines.map((line, lineIndex) => (
                        <p key={lineIndex} className="text-sm font-medium">
                          {line}
                        </p>
                      ))}
                    </div>
                  )
                })}
              </div>
            </div>

            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}