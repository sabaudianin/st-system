import { Logo } from "../../elements/logo/Logo";

export const Footer = () => (
  <footer
    className="flex flex-col items-center gap-5 md:gap-6 py-8 px-4 text-center text-sm border-t border-slate-200/80 bg-[var(--panel)] w-full"
    aria-label="Stopka strony"
  >
    <Logo />

    <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
      <a
        href="tel:+48123456789"
        className="font-bold hover:text-blue-700 transition-colors"
        aria-label="Zadzwoń pod numer +48 123 456 789"
      >
        📞 +48 123 456 789
      </a>
      <span className="hidden md:inline text-slate-400">|</span>
      <a
        href="mailto:slawomirtomala@wp.pl"
        className="font-semibold hover:text-blue-700 transition-colors"
        aria-label="Wyślij e-mail na adres slawomirtomala@wp.pl"
      >
        ✉️ slawomirtomala@wp.pl
      </a>
    </div>

    <address className="not-italic text-xs ">
      ul. Świętego Mikołaja 6, 05-510 Chylice, Piaseczno
    </address>

    <span className="text-xs ">
      &copy; {new Date().getFullYear()} ST-System Sławomir Tomala. Wszelkie
      prawa zastrzeżone.
    </span>
  </footer>
);
