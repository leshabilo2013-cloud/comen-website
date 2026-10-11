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
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-2">
        
        {/* Контейнер для логотипа и меню */}
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center" aria-label="Ком Ін Ком – головна">
            <img 
              src="https://i.postimg.cc/jqB5pJhM/Logotip-removebg-preview.png" 
              alt="Ком Ін Ком" 
              className="h-20 md:h-24 w-auto object-contain transition-all" 
            />
          </Link>

          <nav className="hidden items-center gap-6 md:flex" aria-label="Головна навігація">
            {NAV.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={`text-sm transition-colors hover:text-black ${
                  isActive(item.href) ? "font-semibold text-black" : "text-gray-600"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Переключатель языка */}
        <div className="hidden items-center gap-3 md:flex">
          <div className="flex items-center gap-1 font-mono text-xs">
            <span className="font-bold text-black">UA</span>
            <span className="text-gray-300">/</span>
            <a href="#" className="text-gray-500 transition-colors hover:text-black">
              EN
            </a>
          </div>
        </div>

        {/* Мобильная кнопка */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex h-9 w-9 items-center justify-center rounded-sm border border-gray-200 text-black md:hidden"
          aria-label={open ? "Закрити меню" : "Відкрити меню"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-gray-200 bg-white px-5 py-4 md:hidden" aria-label="Мобільна навігація">
          <ul className="flex flex-col gap-1">
            {NAV.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={`block rounded-sm px-2 py-2.5 text-sm transition-colors hover:bg-gray-100 hover:text-black ${
                    isActive(item.href) ? "bg-gray-100 font-semibold text-black" : "text-gray-600"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
