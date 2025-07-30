"use client";

import Image from "next/image";
import Link from "next/link";

export const Hero = () => (
  <section className="relative w-full h-[500px] rounded overflow-hidden ">
    <div className="absolute inset-0">
      <Image
        src="/hero.jpg"
        alt="Systemy bezpieczeństwa"
        fill
        className="object-cover w-full h-full"
        priority
      />
      <div className="absolute inset-0 bg-black/50" />
    </div>

    <div className="relative z-10 h-full flex flex-col justify-between items-center text-center p-4">
      <h2 className="text-2xl md:text-5xl font-bold animate-fade-in drop-shadow-lg text-white">
        Profesjonalne Systemy Zabezpieczeń
      </h2>
      <p className="text-lg text-gray-100  mt-4 mb-6 max-w-xl">
        Monitoring, alarmy, inteligentne rozwiązania dla Twojego domu i firmy
        <Link href="#oferta">
          <button className="px-6 py-2 mt-4 bg-blue-600 text-white font-semibold rounded shadow-md hover:bg-blue-700 transition duration-300">
            Zamów wycenę
          </button>
        </Link>
      </p>
    </div>
  </section>
);
