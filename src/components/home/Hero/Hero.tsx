"use client";
import Image from "next/image";

export const Hero: React.FC = () => (
  <section
    aria-labelledby="hero-title"
    className="relative isolate w-full overflow-hidden text-white min-h-[500px] md:min-h-[60dvh]"
  >
    <div className="absolute inset-0 -z-10">
      <Image
        src="/hero.jpg"
        alt="Systemy bezpieczeństwa"
        fill
        priority
        className="h-full w-full object-cover"
      />
    </div>

    <div className="pointer-events-none absolute inset-0 -z-10 before:absolute before:inset-0 before:content-[''] before:bg-[var(--hero-overlay)] before:transition-[background-color] before:duration-500" />

    <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center gap-4 px-6 py-10 text-center">
      <h2
        id="hero-title"
        className="text-xl font-extrabold drop-shadow md:text-5xl animate-fade-in-up"
      >
        Nowoczesne rozwiązania dla Twojego bezpieczeństwa.
      </h2>
      <p className="max-w-xl text-base font-medium md:text-lg animate-fade-in">
        Monitoring, alarmy, inteligentne rozwiązania dla Twojego domu i firmy.
      </p>
    </div>
  </section>
);
