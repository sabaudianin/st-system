import Image from "next/image";

export const SecurityNetwork: React.FC = () => (
  <section
    id="security-network"
    aria-labelledby="security-network-title"
    role="region"
    className="relative isolate min-h-[420px] md:min-h-[56dvh] overflow-hidden"
  >
    <div className="absolute inset-0 -z-20">
      <Image
        src="/cctv.png"
        alt=""
        fill
        priority
        className="h-full w-full object-cover"
      />
    </div>

    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-r from-background/60 via-background/30 to-transparent dark:from-background/70 dark:via-background/40"
    />

    <div className="relative z-10 mx-auto flex justify-center h-full max-w-7xl items-end px-6 py-6 md:px-12">
      <div className="max-w-xl animate-fade-in-up text-foreground drop-shadow">
        <h2
          id="security-network-title"
          className="text-2xl font-extrabold md:text-4xl text-center"
        >
          Nie ryzykuj - powierz swoje bezpieczeństwo specjalistom.
        </h2>
      </div>
    </div>
  </section>
);
