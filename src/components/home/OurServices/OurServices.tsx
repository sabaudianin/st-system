import { ServiceCard } from "@/components/elements/ServiceCard/ServiceCard";

const services = [
  {
    title: "Systemy alarmowe",
    description:
      "Projektujemy i montujemy nowoczesne alarmy dla domów, firm i obiektów przemysłowych zawsze indywidualnie dopasowane.",
    icon: (
      <span className="inline-block text-warning">
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          className="stroke-current"
          aria-hidden="true"
          focusable="false"
        >
          <g
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          >
            {/* kopuła syreny */}
            <path
              d="M10 20v-5a6 6 0 0 1 12 0v5"
              strokeWidth="2"
            />
            {/* podstawa */}
            <rect
              x="8"
              y="20"
              width="16"
              height="6"
              rx="2"
              strokeWidth="2"
            />
            {/* promienie ostrzegawcze */}
            <path
              d="M3 16h3M26 16h3M7 9l2 2M23 11l2-2M16 6V4"
              strokeWidth="2"
            />
          </g>
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
      <span className="inline-block text-accent">
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          className="stroke-current"
          aria-hidden="true"
          focusable="false"
        >
          <g
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          >
            {/* korpus kamery */}
            <rect
              x="4"
              y="10"
              width="18"
              height="8"
              rx="2"
              strokeWidth="2"
            />
            {/* obiektyw */}
            <circle
              cx="18"
              cy="14"
              r="2"
              strokeWidth="2"
            />
            {/* uchwyt / ramię */}
            <path
              d="M9 18v4a2 2 0 0 0 2 2h5"
              strokeWidth="2"
            />
            {/* „daszek”/przedłużka */}
            <path
              d="M22 12l6 3M28 15l-6 3"
              strokeWidth="2"
            />
          </g>
        </svg>
      </span>
    ),
    reverse: false,
  },
  {
    title: "Zdalny podgląd i zarządzanie w aplikacji",
    description:
      "Podgląd na żywo, powiadomienia push, oś czasu zdarzeń i szybkie udostępnianie materiałów - iOS/Android.",
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
      "Projektujemy i wdrażamy sieci LAN/Wi-Fi: szybki internet, stabilna łączność i segmentacja dla bezpieczeństwa.",
    icon: (
      <span className="inline-block text-warning">
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          className="stroke-current"
          aria-hidden="true"
          focusable="false"
        >
          <g
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          >
            {/* łuk zewnętrzny */}
            <path d="M6 14q10-10 20 0" />
            {/* łuk środkowy */}
            <path d="M9 18q7-7 14 0" />
            {/* łuk wewnętrzny */}
            <path d="M12 21q4-4 8 0" />
            {/* kropka sygnału */}
            <circle
              cx="16"
              cy="25"
              r="1.5"
              fill="currentColor"
              stroke="none"
            />
          </g>
        </svg>
      </span>
    ),
    reverse: false,
  },
  {
    title: "Kontrola dostępu",
    description:
      "Czytniki, karty RFID, integracja z domofonem i automatyką bram - bezpieczeństwo i wygoda w jednym.",
    icon: (
      <span className="inline-block text-success">
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          className="stroke-current"
          aria-hidden="true"
          focusable="false"
        >
          <g
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          >
            {/* jarzmo/pałąk */}
            <path
              d="M12 14v-2a4 4 0 0 1 8 0v2"
              strokeWidth="2"
            />
            {/* korpus */}
            <rect
              x="10"
              y="14"
              width="12"
              height="10"
              rx="2"
              strokeWidth="2"
            />
            {/* otwór na klucz */}
            <circle
              cx="16"
              cy="19"
              r="1"
              strokeWidth="2"
            />
            <path
              d="M16 20v2"
              strokeWidth="2"
            />
          </g>
        </svg>
      </span>
    ),
    reverse: false,
  },
] as const;

export const OurServices: React.FC = () => {
  return (
    <section
      id="uslugi"
      aria-labelledby="services-title"
      role="region"
      className="w-full bg-[var(--hero-overlay)] px-4 py-12"
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
          className="flex flex-col items-center justify-center space-y-8 text-center"
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
                  initial: {
                    opacity: 0,
                    x: i % 2 === 0 ? -28 : 28,
                    y: 8,
                    scale: 0.98,
                  },
                  whileInView: { opacity: 1, x: 0, y: 0, scale: 1 },
                  transition: {
                    duration: 0.55,
                    ease: "easeOut",
                    delay: Math.min(i * 0.1, 0.6),
                  },
                  viewport: {
                    once: true,
                    amount: 0.2,
                    margin: "0px 0px -10% 0px",
                  },
                }}
              />
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
