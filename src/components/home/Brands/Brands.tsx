"use client";
import Image from "next/image";

export const Brands = () => {
  return (
    <section className="w-full py-4 px-4 md:px-0 flex flex-col items-center bg-background">
      <h3 className="text-xl md:text-2xl font-bold py-8 animate-fade-in">
        Twój spokój, najlepsza technologia:
      </h3>
      <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 w-full max-w-3xl animate-fade-in-up">
        <div className="flex flex-col items-center">
          <Image
            src="/satel.svg"
            alt="Satel"
            width={120}
            height={48}
            className="object-contain bg-white rounded-md px-1 shadow-sm"
          />
        </div>
        <div className="flex flex-col items-center">
          <Image
            src="/hikvision.png"
            alt="Hikvision"
            width={128}
            height={40}
            className="object-contain hover:grayscale-0 transition duration-300 bg-white rounded-md p-2 shadow-sm"
          />
        </div>
      </div>
    </section>
  );
};
