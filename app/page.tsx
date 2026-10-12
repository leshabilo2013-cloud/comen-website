@import "tailwindcss";

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-primary: var(--primary);
  --color-primary-foreground: var(--primary-foreground);
  --color-secondary: var(--secondary);
  --color-secondary-foreground: var(--secondary-foreground);
  --color-muted: var(--muted);
  --color-muted-foreground: var(--muted-foreground);
  --color-card: var(--card);
  --color-card-foreground: var(--card-foreground);
  --color-border: var(--border);
  --color-input: var(--input);
  --color-ring: var(--ring);
  --color-destructive: var(--destructive);
  --color-destructive-foreground: var(--destructive-foreground);
  --color-ink: var(--ink);
  --color-ink-foreground: var(--ink-foreground);
  --color-accent: var(--accent);
  --color-accent-foreground: var(--accent-foreground);
}

:root {
  --primary: #facc15;
  --primary-foreground: #111111;
  --ring: #facc15;
  --chart-1: #facc15;
  --chart-2: #fef3c7;
  --accent: #facc15;
  --accent-foreground: #111111;

  --background: #f7f7f5;
  --foreground: #111111;

  --card: #ffffff;
  --card-foreground: #111111;

  --secondary: #f3f4f6;
  --secondary-foreground: #111111;

  --muted: #f5f5f4;
  --muted-foreground: #4b5563;

  --destructive: #ef4444;
  --destructive-foreground: #ffffff;

  --border: #e5e7eb;
  --input: #e5e7eb;

  --ink: #111111;
  --ink-foreground: #f9fafb;
}

html {
  background: var(--background);
  color: var(--foreground);
}

body {
  background: var(--background);
  color: var(--foreground);
}
