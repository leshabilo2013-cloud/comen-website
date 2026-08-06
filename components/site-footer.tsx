import Link from "next/link"
import { Zap, Mail, MapPin, ArrowUpRight } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="bg-ink text-ink-foreground">
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-24">
        <div className="grid gap-12 border-b border-ink-foreground/15 pb-16 lg:grid-cols-[1fr_1fr] lg:gap-16">

          <dl className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-md border border-ink-foreground/15 p-6">
              <dt className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-accent">
                <Mail className="h-4 w-4" aria-hidden="true" />
                Пошта
              </dt>
              <dd className="mt-3 text-sm text-ink-foreground/85">info@comen.com.ua</dd>
<dd className="mt-1 text-sm leading-relaxed text-ink-foreground/85">
  02154, м. Київ, пр-т Соборності, б. 30, оф. 393<br />(044) 290-55-59
</dd>
            </div>
            <div className="rounded-md border border-ink-foreground/15 p-6">
              <dt className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-accent">
                <MapPin className="h-4 w-4" aria-hidden="true" />
                Компанія
              </dt>
              <dd className="mt-3 text-sm leading-relaxed text-ink-foreground/85">
                ТОВ «Ком Ін Ком» — Комунікаційна Інжинірінгова Компанія
              </dd>
            </div>
          </dl>
        </div>

        <div className="flex flex-col items-start justify-between gap-6 pt-8 md:flex-row md:items-center">
          <Link href="/" className="flex items-center gap-2.5">
            <span className="flex h-8 w-8 items-center justify-center rounded-sm bg-accent text-accent-foreground">
              <Zap className="h-4 w-4" aria-hidden="true" />
            </span>
            <span className="font-display text-sm font-bold tracking-tight">КОМ ІН КОМ</span>
          </Link>
          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink-foreground/60" aria-label="Нижня навігація">
            <Link href="/about" className="transition-colors hover:text-ink-foreground">
              Про компанію
            </Link>
            <Link href="/directions" className="transition-colors hover:text-ink-foreground">
              Напрямки
            </Link>
            <Link href="/contacts" className="transition-colors hover:text-ink-foreground">
              Контакти
            </Link>
          </nav>
          <p className="font-mono text-xs text-ink-foreground/40">© {new Date().getFullYear()} Ком Ін Ком</p>
        </div>
      </div>
    </footer>
  )
}
