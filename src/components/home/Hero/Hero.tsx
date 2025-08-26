"use client";
import { HomeCameraIcon } from "@/components/elements/HomeCameraIcon/HomeCameraIcon";

import Image from "next/image";

export const Hero = () => (
  <section className="relative w-full h-[500px] overflow-hidden text-white">
    <div className="absolute inset-0">
      <Image
        src="/hero.jpg"
        alt="Systemy bezpieczeństwa"
        fill
        className="object-cover w-full h-full"
        priority
      />

      <div
        className="absolute inset-0 transition-colors duration-500"
        style={{ backgroundColor: "var(--hero-overlay)" }}
      />
    </div>
    <div className="relative z-10 h-full flex flex-col justify-between items-center text-center p-4">
      <h2 className="text-2xl md:text-5xl font-extrabold animate-fade-in drop-shadow-lg text-white">
        Nowoczesne rozwiązania dla Twojego bezpieczeństwa.
      </h2>
      <p className="text-lg mt-4 mb-6 max-w-xl font-bold text-center">
        Monitoring, alarmy, inteligentne rozwiązania dla Twojego domu i firmy.
      </p>
    </div>
  </section>
);
