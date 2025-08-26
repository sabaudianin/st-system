"use client";

import type { FC } from "react";

export const Cta: FC = () => {
  const phone = "+48 123 456 789";
  const telHref = "tel:+48123456789";

  return (
    <section
      id="cta"
      aria-labelledby="cta-title"
      className="cta-animated-bg relative overflow-hidden flex flex-col items-center justify-center py-12 text-center"
    >
      <div className="max-w-xl w-full mx-auto px-6 flex flex-col items-center gap-4">
        <h2
          id="cta-title"
          className="text-2xl md:text-3xl font-extrabold text-white drop-shadow-[0_2px_16px_rgba(0,0,0,0.35)]"
        >
          Zyskaj profesjonalną wycenę i{" "}
          <span className="font-black">indywidualne doradztwo.</span>
        </h2>

        <a
          href={telHref}
          role="button"
          className="relative inline-flex items-center gap-2 px-10 py-4 mt-2 rounded-full
font-extrabold text-lg text-white shadow-xl
bg-gradient-to-r from-blue-800 via-blue-600 to-blue-500
transition-all duration-300
hover:from-blue-900 hover:via-blue-700 hover:to-blue-600
hover:scale-105 active:scale-95 gradient-animate cta-glow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
          aria-label={`Zadzwoń teraz: ${phone}`}
        >
          Zadzwoń teraz
          <svg
            className="w-6 h-6 ml-2 arrow-anim"
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
            className="absolute -z-10 inset-0 rounded-full pointer-events-none"
            style={{
              boxShadow:
                "0 0 36px 8px rgba(37,99,235,0.13), 0 4px 24px 0 #0001",
              filter: "blur(2px) opacity(.56)",
            }}
          />
        </a>

        <p className="text-sm text-blue-100/95">
          Bezpośredni kontakt: <span className="font-semibold">{phone}</span>
        </p>

        <span
          className="text-xs text-blue-100/90 mt-1 flex items-center gap-1 tracking-wide"
          aria-live="polite"
        >
          <svg
            className="w-4 h-4 animate-pulse"
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
