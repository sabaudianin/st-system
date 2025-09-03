"use client";
import type { FC } from "react";
import { useReducedMotion } from "framer-motion";
import { SITE, TEL_HREF } from "@/config/site";

export const Cta: FC = () => {
  const reduce = useReducedMotion();
  const phone = SITE.contact.phoneDisplay;

  return (
    <section
      id="cta"
      role="region"
      aria-labelledby="cta-title"
      className="relative isolate overflow-hidden py-12 text-center text-foreground bg-[var(--panel-light)]"
    >
      <div className="mx-auto flex w-full max-w-xl flex-col items-center gap-4 px-6">
        <h2
          id="cta-title"
          className="text-2xl font-extrabold md:text-3xl drop-shadow"
        >
          Zyskaj profesjonalną wycenę i indywidualne doradztwo.
        </h2>

        <a
          href={TEL_HREF}
          className="
            group relative inline-flex items-center gap-3 rounded-full px-8 py-4 text-lg font-extrabold
            transition-transform duration-200 hover:-translate-y-0.5 active:scale-95
            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent animate-fade-in-up
            before:content-[''] before:absolute before:inset-0 before:-z-20 before:rounded-full before:animate-cta-glow"
          aria-label={`Zadzwoń teraz: ${phone}`}
          aria-describedby="cta-note"
          itemProp="telephone"
        >
          <span
            aria-hidden
            className="absolute inset-0 -z-10 rounded-full border-2 bg-black "
          />

          <span className="relative z-10 text-white">Zamów wycenę</span>

          <span className="relative z-10 inline-grid h-6 w-6 place-items-center text-success">
            {!reduce && (
              <span
                aria-hidden="true"
                className="absolute inset-0 rounded-full bg-success/45 animate-[ping_1.2s_ease-out_infinite]"
              />
            )}
            <svg
              className="relative h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              focusable="false"
            >
              <path d="M22 16.92v2.5a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.07-8.63A2 2 0 0 1 4.62 1h2.5a2 2 0 0 1 2 1.72c.12.9.34 1.77.65 2.6a2 2 0 0 1-.45 2.11L8.2 8.55a16 16 0 0 0 7.25 7.25l1.12-1.12a2 2 0 0 1 2.11-.45c.83.31 1.7.53 2.6.65A2 2 0 0 1 22 16.92Z" />
            </svg>
          </span>
        </a>

        <p
          id="cta-note"
          className="text-sm/relaxed text-foreground/90"
        >
          Bezpośredni kontakt:{" "}
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
          <span>Szybka odpowiedź — doradzimy i wycenimy.</span>
        </span>
      </div>
    </section>
  );
};
