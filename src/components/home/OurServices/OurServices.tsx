import { ServiceCard } from "@/components/elements/ServiceCard/ServiceCard";

/**
 * OurServices – produkcyjna sekcja usług.
 * - Tokeny kolorów (Tailwind v4) zamiast hard‑coded stroke colors.
 * - A11y/SEO: aria-labelledby, <ul>/<li> jako lista usług, microdata Service.
 * - Dodany punkt: "Zdalny podgląd i zarządzanie w aplikacji".
 */

const services = [
  {
    title: "Systemy alarmowe",
    description:
      "Projektujemy i montujemy nowoczesne alarmy dla domów, firm i obiektów przemysłowych – zawsze indywidualnie dopasowane.",
    icon: (
      <span className="text-warning">
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          className="stroke-current"
        >
          <circle
            cx="16"
            cy="16"
            r="14"
            strokeWidth="2"
          />
          <path
            d="M10 22a6 6 0 1 1 12 0"
            strokeWidth="2"
          />
          <circle
            cx="16"
            cy="16"
            r="2.5"
            strokeWidth="2"
          />
        </svg>
      </span>
    ),
    reverse: false,
  },
  {
    title: "Monitoring wizyjny",
    description:
      "Kamery IP i analogowe, rejestratory, konfiguracje online. Pełne bezpieczeństwo i zdalny podgląd przez aplikację.",
    icon: (
      <span className="text-accent">
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          className="stroke-current"
        >
          <rect
            x="4"
            y="8"
            width="24"
            height="16"
            rx="3"
            strokeWidth="2"
          />
          <circle
            cx="16"
            cy="16"
            r="3"
            strokeWidth="2"
          />
        </svg>
      </span>
    ),
    reverse: true,
  },
  {
    title: "Zdalny podgląd i zarządzanie w aplikacji",
    description:
      "Podgląd na żywo, powiadomienia push, oś czasu zdarzeń i szybkie udostępnianie materiałów – iOS/Android, przeglądarka i TV.",
    icon: (
      <span className="text-success">
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          className="stroke-current"
        >
          {/* smartfon */}
          <rect
            x="9"
            y="5"
            width="14"
            height="22"
            rx="3"
            strokeWidth="2"
          />
          <circle
            cx="16"
            cy="24"
            r="1.5"
            strokeWidth="2"
          />
          {/* sygnał/wifi */}
          <path
            d="M12 12q4-4 8 0"
            strokeWidth="2"
          />
          <path
            d="M13.5 14.5q2.5-2.5 5 0"
            strokeWidth="2"
          />
        </svg>
      </span>
    ),
    reverse: false,
  },
  {
    title: "Sieci komputerowe",
    description:
      "Projektujemy i wdrażamy sieci LAN/Wi‑Fi: szybki internet, stabilna łączność i segmentacja dla bezpieczeństwa.",
    icon: (
      <span className="text-foreground">
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          className="stroke-current"
        >
          <rect
            x="6"
            y="16"
            width="20"
            height="8"
            rx="2"
            strokeWidth="2"
          />
          <path
            d="M16 16V8"
            strokeWidth="2"
          />
          <circle
            cx="16"
            cy="6"
            r="2"
            strokeWidth="2"
          />
        </svg>
      </span>
    ),
    reverse: false,
  },
  {
    title: "Kontrola dostępu",
    description:
      "Czytniki, karty RFID, integracja z domofonem i automatyką bram – bezpieczeństwo i wygoda w jednym.",
    icon: (
      <span className="text-success">
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          className="stroke-current"
        >
          <rect
            x="10"
            y="12"
            width="12"
            height="14"
            rx="2"
            strokeWidth="2"
          />
          <circle
            cx="16"
            cy="18"
            r="2"
            strokeWidth="2"
          />
          <path
            d="M16 14v2"
            strokeWidth="2"
          />
        </svg>
      </span>
    ),
    reverse: true,
  },
] as const;

export const OurServices: React.FC = () => {
  return (
    <section
      id="uslugi"
      aria-labelledby="services-title"
      role="region"
      className="w-full bg-primary-dark px-4 py-12 text-foreground"
    >
      <div className="mx-auto max-w-7xl">
        <h2
          id="services-title"
          className="mb-3 text-center text-2xl font-bold md:text-3xl animate-fade-in-up"
        >
          Nasze usługi
        </h2>
        <p className="mx-auto mb-10 max-w-2xl text-center text-foreground/90">
          Kompleksowo projektujemy i wdrażamy systemy bezpieczeństwa: od kamer i
          alarmów, przez sieć i kontrolę dostępu, po zdalny podgląd i
          zarządzanie w aplikacji.
        </p>

        <ul
          role="list"
          className="space-y-8 text-center flex flex-col justify-center items-center"
        >
          {services.map((service, i) => (
            <li
              key={service.title}
              role="listitem"
              itemScope
              itemType="https://schema.org/Service"
            >
              <ServiceCard
                {...service}
                motionProps={{
                  initial: { opacity: 0, scale: 0.98, y: 24 },
                  whileInView: { opacity: 1, scale: 1, y: 0 },
                  transition: {
                    duration: 0.55,
                    ease: "easeOut",
                    delay: i * 0.08,
                  },
                  viewport: { once: true, amount: 0.2 },
                }}
              />
              {/* microdata tytułu/opisu jeśli ServiceCard nie dodaje */}
              <meta
                itemProp="name"
                content={service.title}
              />
              <meta
                itemProp="description"
                content={service.description}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
