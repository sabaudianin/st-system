"use client";
import Image from "next/image";

export const Brands = () => {
  return (
    <section className="w-full py-8 px-4 md:px-0 flex flex-col items-center bg-background">
      <h3 className="text-xl md:text-2xl font-bold text-slate-700 mb-4 animate-fade-in">
        Zaufali nam:
      </h3>
      <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 w-full max-w-3xl animate-fade-in-up">
        <div className="flex flex-col items-center">
          <Image
            src="/satel.svg"
            alt="Satel"
            width={120}
            height={48}
            className="object-contain grayscale hover:grayscale-0 transition duration-300"
          />
          <span className="text-xs mt-2 text-slate-500">Satel</span>
        </div>
        <div className="flex flex-col items-center">
          <Image
            src="/hikvision.png"
            alt="Hikvision"
            width={128}
            height={40}
            className="object-contain grayscale hover:grayscale-0 transition duration-300"
          />
          <span className="text-xs mt-2 text-slate-500">Hikvision</span>
        </div>
      </div>
    </section>
  );
};
