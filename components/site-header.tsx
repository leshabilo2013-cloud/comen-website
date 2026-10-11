"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"

const NAV = [
  { label: "Головна", href: "/" },
  { label: "Про компанію", href: "/about" },
  { label: "Напрямки", href: "/directions" },
  { label: "Контакти", href: "/contacts" },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href))

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5">
        <Link href="/" className="flex items-center gap-2.5" aria-label="Ком Ін Ком – головна">
          <img 
            src="https://i.postimg.cc/Dzw1YX2r/Logotip.jpg" 
            alt="Ком Ін Ком" 
            className="h-10 w-auto object-contain mix-blend-screen" 
          />
        </Link>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Головна навігація">
          {NAV.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={`text-sm transition-colors hover:text-foreground ${
                isActive(item.href) ? "font-medium text-foreground" : "text-muted-foreground"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <div className="flex items-center gap-1 font-mono text-xs">
            <span className="font-semibold text-foreground">UA</span>
            <span className="text-border">/</span>
            <a href="#" className="text-muted-foreground transition-colors hover:text-foreground">
              EN
            </a>
          </div>
          <Link
            href="/contacts"
            className="rounded-sm bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Зв&apos;язатися
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex h-9 w-9 items-center justify-center rounded-sm border border-border text-foreground md:hidden"
          aria-label={open ? "Закрити меню" : "Відкрити меню"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-border bg-background px-5 py-4 md:hidden" aria-label="Мобільна навігація">
          <ul className="flex flex-col gap-1">
            {NAV.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={`block rounded-sm px-2 py-2.5 text-sm transition-colors hover:bg-secondary hover:text-foreground ${
                    isActive(item.href) ? "bg-secondary font-medium text-foreground" : "text-muted-foreground"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="mt-2">
              <Link
                href="/contacts"
                onClick={() => setOpen(false)}
                className="block rounded-sm bg-primary px-2 py-2.5 text-center text-sm font-medium text-primary-foreground"
              >
                Зв&apos;язатися
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}
