"use client";

export default function AboutUs() {
  return (
    <section
      id="o-nas"
      aria-label="O nas - informacje o firmie ST System"
      className="flex flex-col items-center text-center mx-auto px-6 py-14 mb-10 bg-[var(--panel-bg)] backdrop-glass shadow-xl animate-fade-in-up"
      tabIndex={-1}
    >
      <h2 className="text-2xl md:text-3xl font-bold mb-4">O naszej firmie:</h2>
      <p className="text-lg md:text-xl mb-6 font-semibold text-[var(--foreground)]">
        Twój spokój to nasza misja.
        <br className="hidden md:inline" />
        <span className="text-red-600  font-bold">ST System</span>
        &nbsp; doświadczenie, które procentuje bezpieczeństwem.
      </p>
      <p className="text-base md:text-lg mb-5 max-w-2xl text-[var(--foreground)]">
        Od ponad &nbsp;
        <span className="font-bold ">18 lat &nbsp;</span>
        pomagamy chronić to, co najcenniejsze. Wdrażamy systemy alarmowe,
        monitoring oraz sieci dla domów, firm i instytucji.
        <span className="block md:inline">
          Stawiamy na najnowsze technologie, sprawdzonych partnerów i
          indywidualne podejście.
        </span>
      </p>
      <p className="text-base italic mb-2 text-gray-700 ">
        „Dbamy o każdy szczegół, bo Twoje bezpieczeństwo nie zna kompromisów.”
      </p>
      <ul className="flex flex-wrap justify-center gap-4 mt-4 text-sm font-semibold text-slate-600 dark:text-slate-200">
        <li className="px-4 py-1 bg-blue-100/70 dark:bg-blue-900/40">
          Certyfikowane systemy
        </li>
        <li className="px-4 py-1 bg-blue-100/70 dark:bg-blue-900/40">
          Fachowe doradztwo
        </li>
        <li className="px-4 py-1 bg-blue-100/70 dark:bg-blue-900/40">
          Setki zadowolonych klientów
        </li>
        <li className="px-4 py-1 bg-blue-100/70 dark:bg-blue-900/40">
          Gwarancja satysfakcji
        </li>
      </ul>
      <div className="mt-8 flex flex-col md:flex-row items-center gap-4">
        <span className="text-xl font-bold text-blue-700 dark:text-blue-200">
          Zaufaj doświadczeniu.
        </span>
        <span className="text-slate-500 dark:text-slate-300">
          Porozmawiajmy o bezpieczeństwie Twojego świata.
        </span>
      </div>
    </section>
  );
}
