import { ServiceCard } from "../../ServiceCard/ServiceCard";

export const OurServices = () => (
  <section
    className="w-full py-12 px-4 flex flex-col items-center bg-slate-50 dark:bg-slate-800"
    id="uslugi"
  >
    <h3 className="text-2xl md:text-3xl font-bold text-slate-700 dark:text-white mb-10 animate-fade-in-up">
      Nasze usługi
    </h3>
    <ServiceCard
      title="Systemy alarmowe"
      description="Projektujemy i montujemy nowoczesne alarmy dla domów, firm i obiektów przemysłowych – zawsze indywidualnie dopasowane."
      icon={
        <svg
          width="32"
          height="32"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <circle
            cx="16"
            cy="16"
            r="14"
          />
          <path d="M10 22a6 6 0 1 1 12 0" />
          <circle
            cx="16"
            cy="16"
            r="2.5"
          />
        </svg>
      }
    />
    <ServiceCard
      title="Monitoring wizyjny"
      description="Kamery IP i analogowe, rejestratory, konfiguracje online. Pełne bezpieczeństwo i zdalny podgląd przez aplikację."
      icon={
        <svg
          width="32"
          height="32"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <rect
            x="4"
            y="8"
            width="24"
            height="16"
            rx="3"
          />
          <circle
            cx="16"
            cy="16"
            r="3"
          />
        </svg>
      }
      reverse
    />
    <ServiceCard
      title="Sieci komputerowe"
      description="Projektujemy i wdrażamy sieci LAN/Wi-Fi: szybki internet, stabilna łączność, rozwiązania dla firm i domów."
      icon={
        <svg
          width="32"
          height="32"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <rect
            x="6"
            y="16"
            width="20"
            height="8"
            rx="2"
          />
          <path d="M16 16V8" />
          <circle
            cx="16"
            cy="6"
            r="2"
          />
        </svg>
      }
    />
    <ServiceCard
      title="Kontrola dostępu"
      description="Systemy kontroli wejścia, karty RFID, czytniki, automatyczne bramy – bezpieczeństwo i wygoda w jednym."
      icon={
        <svg
          width="32"
          height="32"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <rect
            x="10"
            y="12"
            width="12"
            height="14"
            rx="2"
          />
          <circle
            cx="16"
            cy="18"
            r="2"
          />
          <path d="M16 14v2" />
        </svg>
      }
      reverse
    />
  </section>
);
