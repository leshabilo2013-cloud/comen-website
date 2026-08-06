"use client"

import { useState } from "react"
import { Send, CheckCircle2 } from "lucide-react"

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-start gap-4 rounded-md border border-border bg-card p-8">
        <span className="flex h-12 w-12 items-center justify-center rounded-sm bg-primary/10 text-primary">
          <CheckCircle2 className="h-6 w-6" aria-hidden="true" />
        </span>
        <h3 className="font-display text-xl font-semibold text-foreground">Дякуємо за звернення!</h3>
        <p className="text-sm leading-relaxed text-muted-foreground text-pretty">
          Ваше повідомлення надіслано. Наші фахівці зв&apos;яжуться з вами найближчим часом.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-2 rounded-sm border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
        >
          Надіслати ще одне
        </button>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-md border border-border bg-card p-6 md:p-8"
      aria-label="Форма зворотного зв'язку"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="name" className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
            Ім&apos;я *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="rounded-sm border border-input bg-background px-3 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-ring focus:ring-2 focus:ring-ring/20"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="phone" className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
            Телефон
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            className="rounded-sm border border-input bg-background px-3 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-ring focus:ring-2 focus:ring-ring/20"
          />
        </div>
      </div>

      <div className="mt-5 flex flex-col gap-1.5">
        <label htmlFor="email" className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
          Ел. пошта *
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="rounded-sm border border-input bg-background px-3 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-ring focus:ring-2 focus:ring-ring/20"
        />
      </div>

      <div className="mt-5 flex flex-col gap-1.5">
        <label htmlFor="message" className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
          Повідомлення *
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="resize-y rounded-sm border border-input bg-background px-3 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-ring focus:ring-2 focus:ring-ring/20"
        />
      </div>

      <button
        type="submit"
        className="mt-6 inline-flex items-center gap-2 rounded-sm bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
      >
        Надіслати повідомлення
        <Send className="h-4 w-4" aria-hidden="true" />
      </button>
    </form>
  )
}
