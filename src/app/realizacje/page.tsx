import Image from "next/image";

const realizacje = [
  {
    img: "/hik.avif",
    title: "Kamera zewnetrzna typu bullet",
    slogan: "Zapewnia jasny obraz nawet w nocy",
  },
  {
    img: "/czujka.avif",
    title: "Nowoczesny czujka ruchu",
    slogan: "Dzieki długoletniemu doświadczeniu minimalizujemy ",
  },
  {
    img: "/camera.avif",
    title: "Kamery obrotowe z zoomem ",
    slogan: "Wyjtkowo wyraźny obraz, doskonała redukcja szumów ",
  },
  {
    img: "/2.avif",
    title: "Przykładowy montaż elementów systemu alarmowego",
    slogan: "Zawsze dbamy o estetyke i najwyższą jakośc montażu",
  },
];

export default function RealizacjePage() {
  return (
    <section
      id="realizacje"
      aria-label="Wybrane realizacje ST System"
      className="max-w-7xl mx-auto px-6 md:px-12 py-12 bg-[var(--panel-light)]"
    >
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-[var(--foreground)]">
        Nasze realizacje
      </h2>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {realizacje.map((item, idx) => (
          <article
            key={idx}
            className="
              group bg-[var(--panel-bg)] backdrop-blur-md shadow-lg
              overflow-hidden flex flex-col
              transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl
              animate-fade-in-up
            "
          >
            <div className="relative aspect-[3/2] overflow-hidden">
              <Image
                src={item.img}
                alt={item.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                priority={idx === 0}
              />

              <div
                className="
                  pointer-events-none absolute inset-0
                  bg-gradient-to-t from-black/60 via-black/20 to-transparent
                  opacity-0 transition-opacity duration-300
                  group-hover:opacity-100
                "
                aria-hidden="true"
              />

              <div
                className="
                  pointer-events-none absolute inset-x-0 bottom-0 p-4
                  translate-y-2 opacity-0 transition-all duration-300
                  group-hover:opacity-100 group-hover:translate-y-0
                "
              >
                <h2 className="text-white font-semibold leading-snug drop-shadow">
                  {item.title}
                </h2>
                <p className="text-blue-100 text-sm drop-shadow">
                  {item.slogan}
                </p>
              </div>
            </div>

            <div className="p-4 flex-1 flex flex-col">
              <h3 className="text-base md:text-lg font-bold mb-1 text-[var(--foreground)]">
                {item.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-300 italic">
                {item.slogan}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
