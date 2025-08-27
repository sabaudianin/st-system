"use client";
import type { FC } from "react";

export const Cta: FC = () => {
  const phone = "+48 123 456 789";
  const telHref = `tel:${phone.replace(/\s+/g, "")}`;

  return (
    <section
      id="cta"
      aria-labelledby="cta-title"
      className="relative isolate overflow-hidden py-12 text-center text-foreground "
      itemScope
      itemType="https://schema.org/LocalBusiness"
      role="region"
    >
      <div className="mx-auto flex w-full max-w-xl flex-col items-center gap-4 px-6">
        <h2
          id="cta-title"
          className="text-2xl font-extrabold md:text-3xl drop-shadow"
        >
          Zyskaj profesjonalną wycenę i
          <span className="font-black">indywidualne doradztwo.</span>
        </h2>

        <a
          href={telHref}
          className="group relative inline-flex items-center gap-2 rounded-full px-8 py-4 text-lg font-extrabold text-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent animate-fade-in-up 
          "
          aria-label={`Zadzwoń teraz: ${phone}`}
          aria-describedby="cta-note"
          itemProp="telephone"
        >
          <span
            className="absolute inset-0 -z-10 rounded-full bg-accent animate-cta-glow"
            aria-hidden
          />
          Zadzwoń teraz
          <svg
            className="ml-2 h-6 w-6 transition-transform group-hover:animate-arrow-move"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={3}
            aria-hidden="true"
          >
            <path
              d="M5 12h14M12 5l7 7-7 7"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-20 rounded-full blur-sm opacity-60"
          />
        </a>

        <p
          id="cta-note"
          className="text-sm/relaxed text-foreground/90"
        >
          Bezpośredni kontakt:
          <span
            className="font-semibold"
            itemProp="telephone"
          >
            {phone}
          </span>
        </p>

        <span
          className="mt-1 inline-flex items-center gap-1 text-xs tracking-wide text-foreground/80"
          aria-live="polite"
        >
          <svg
            className="h-4 w-4 animate-pulse"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            aria-hidden="true"
          >
            <circle
              cx="12"
              cy="12"
              r="10"
              strokeDasharray="2 2"
            />
          </svg>
          <span>Odbieramy szybko — doradzimy i wycenimy.</span>
        </span>
      </div>
    </section>
  );
};
