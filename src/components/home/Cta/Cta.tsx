"use client";

import Link from "next/link";

export const Cta = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-6 text-center min-h-[420px] relative overflow-hidden">
      <svg
        aria-hidden="true"
        className="absolute inset-0 w-full h-full z-0 opacity-30 pointer-events-none select-none svg-moving-bg "
        viewBox="0 0 900 450"
        fill="none"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          maxWidth: "100vw",
          maxHeight: "100%",
        }}
      >
        <g
          stroke="#f0f0f0"
          strokeWidth="1.9"
        >
          <circle
            cx="120"
            cy="200"
            r="18"
          />
          <circle
            cx="500"
            cy="80"
            r="14"
          />
          <circle
            cx="800"
            cy="170"
            r="22"
          />
          <circle
            cx="300"
            cy="350"
            r="20"
          />
          <circle
            cx="700"
            cy="340"
            r="16"
          />
          <line
            x1="120"
            y1="200"
            x2="500"
            y2="80"
          />
          <line
            x1="120"
            y1="200"
            x2="800"
            y2="170"
          />
          <line
            x1="500"
            y1="80"
            x2="700"
            y2="340"
          />
          <line
            x1="800"
            y1="170"
            x2="700"
            y2="340"
          />
          <line
            x1="300"
            y1="350"
            x2="120"
            y2="200"
          />
          <line
            x1="700"
            y1="340"
            x2="300"
            y2="350"
          />
          <line
            x1="500"
            y1="80"
            x2="300"
            y2="350"
          />
          <line
            x1="800"
            y1="170"
            x2="300"
            y2="350"
          />
        </g>
        <g
          stroke="#ffffffff"
          strokeWidth="0.6"
        >
          <circle
            cx="250"
            cy="120"
            r="10"
          />
          <circle
            cx="600"
            cy="240"
            r="7"
          />
          <circle
            cx="400"
            cy="200"
            r="9"
          />
          <line
            x1="250"
            y1="120"
            x2="500"
            y2="80"
          />
          <line
            x1="250"
            y1="120"
            x2="400"
            y2="200"
          />
          <line
            x1="600"
            y1="240"
            x2="700"
            y2="340"
          />
          <line
            x1="400"
            y1="200"
            x2="600"
            y2="240"
          />
        </g>
      </svg>
      <div className=" max-w-xl w-full mx-auto p-8 rounded-2xl shadow-xl flex flex-col items-center">
        <p className="text-xl md:text-2xl text-white font-semibold mb-2 drop-shadow-[0_2px_16px_rgba(30,41,59,0.13)]">
          Zyskaj profesjonalną wycenę i
          <br />
          <span className="font-extrabold">indywidualne doradztwo</span>
          &nbsp;w 24h!
        </p>
        <Link href="#oferta">
          <button
            className="relative flex items-center gap-2 px-10 py-4 rounded-full font-extrabold text-lg bg-gradient-to-r from-blue-800 via-blue-600 to-blue-400 text-white shadow-xl gradient-animate cta-glow
            hover:from-blue-900 hover:via-blue-700 hover:to-blue-500 hover:scale-105 active:scale-95 transition-all duration-400 group mt-6"
            aria-label="Zamów wycenę"
          >
            Zamów wycenę
            <svg
              className="w-6 h-6 ml-2 arrow-anim"
              fill="none"
              stroke="currentColor"
              strokeWidth={3}
              viewBox="0 0 24 24"
            >
              <path
                d="M5 12h14M12 5l7 7-7 7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span
              className="absolute -z-10 inset-0 rounded-full pointer-events-none"
              style={{
                boxShadow:
                  "0 0 36px 8px rgba(37,99,235,0.13), 0 4px 24px 0 #0001",
                filter: "blur(2px) opacity(.56)",
              }}
            />
          </button>
        </Link>
        <span className="text-xs  mt-2 flex items-center gap-1 tracking-wide">
          <svg
            className="w-4 h-4 animate-pulse"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <circle
              cx="12"
              cy="12"
              r="10"
              strokeDasharray="2 2"
            />
          </svg>
          <span>Bezpośredni kontakt i szybka odpowiedź</span>
        </span>
      </div>
    </section>
  );
};
