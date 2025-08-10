"use client";

export default function Contact() {
  return (
    <section
      id="kontakt"
      aria-label="Dane kontaktowe ST System"
      className="
        max-w-6xl mx-auto px-6 md:px-12 py-12
        grid grid-cols-1 lg:grid-cols-2 gap-8
      "
    >
      <div
        className="
          bg-[var(--panel-bg)] backdrop-blur-md shadow-xl p-6 md:p-8
          animate-fade-in-left
        "
      >
        <h1 className="text-2xl md:text-3xl font-bold mb-4 text-[var(--foreground)]">
          Skontaktuj się z nami
        </h1>
        <p className="text-slate-600 dark:text-slate-300 mb-6">
          Doradzimy, zaproponujemy rozwiązanie i przygotujemy darmową wycenę.
        </p>

        <ul className="space-y-4 text-base">
          <li className="flex items-center gap-3">
            <span aria-hidden="true">📞</span>
            <a
              href="tel:+48123456789"
              className="font-semibold hover:text-blue-700 transition-colors"
            >
              +48 123 456 789
            </a>
          </li>
          <li className="flex items-center gap-3">
            <span aria-hidden="true">✉️</span>
            <a
              href="mailto:slawomirtomala@wp.pl"
              className="font-semibold hover:text-blue-700 transition-colors"
            >
              slawomirtomala@wp.pl
            </a>
          </li>
          <li className="flex items-start gap-3">
            <span aria-hidden="true">📍</span>
            <address className="not-italic">
              ul. Świętego Mikołaja 6<br />
              05-510 Chylice, Piaseczno
            </address>
          </li>
        </ul>

        <p className="mt-8 text-sm text-slate-500 dark:text-slate-400 italic">
          „Dbamy o każdy szczegół, bo Twoje bezpieczeństwo nie zna kompromisów.”
        </p>
      </div>

      <div
        className="
          bg-[var(--panel-bg)] backdrop-blur-md shadow-xl overflow-hidden
          animate-fade-in-right
        "
        aria-label="Mapa dojazdu"
      >
        <iframe
          title="Mapa dojazdu ST System"
          className="w-full h-[360px] md:h-full"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps?q=ul.+%C5%9Awi%C4%99tego+Miko%C5%82aja+6,+Chylice,+Piaseczno&output=embed"
        />
      </div>
    </section>
  );
}
