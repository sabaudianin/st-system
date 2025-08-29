"use client";
import Image from "next/image";

export const Hero: React.FC = () => (
  <section
    aria-labelledby="hero-title"
    className="relative isolate w-full overflow-hidden text-white min-h-[500px] md:min-h-[60dvh]"
  >
    <div className="absolute inset-0 -z-10">
      <Image
        src="/hero.png"
        alt="Systemy bezpieczeństwa"
        fill
        priority
        className="h-full w-full object-cover"
      />
    </div>

    <div className="relative z-10 flex flex-col justify-between items-center mx-auto min-h-[500px] md:min-h-[60dvh] max-w-7xl gap-4 px-6 py-10 text-center">
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
