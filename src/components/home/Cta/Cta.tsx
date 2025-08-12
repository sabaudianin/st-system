"use client";
import { HomeCameraIcon } from "@/components/elements/HomeCameraIcon/HomeCameraIcon";
import Link from "next/link";

export const Cta = () => {
  return (
    <section className="flex flex-col items-center justify-center  text-center  relative overflow-hidden">
      <div className=" max-w-xl w-full mx-auto p-4 rounded-2xl shadow-xl flex flex-col items-center gap-2">
        <HomeCameraIcon
          height={64}
          width={64}
        />
        <p className="text-xl md:text-2xl text-white font-semibold mb-2 drop-shadow-[0_2px_16px_rgba(30,41,59,0.13)]">
          Zyskaj profesjonalną wycenę i
          <br />
          <span className="font-extrabold">indywidualne doradztwo.</span>
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
