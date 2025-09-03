import { Logo } from "../../elements/logo/Logo";
import { SITE, TEL_HREF, MAIL_HREF } from "@/config/site";

export const Footer = () => (
  <footer
    role="contentinfo"
    aria-labelledby="footer-title"
    className="w-full border-t border-slate-200/80 bg-[var(--hero-overlay)] px-4 py-8 text-center text-sm text-foreground"
    itemScope
    itemType="https://schema.org/LocalBusiness"
  >
    <h2
      id="footer-title"
      className="sr-only"
    >
      Stopka {SITE.name}
    </h2>
    <meta
      itemProp="name"
      content={SITE.name}
    />
    <link
      itemProp="url"
      href={SITE.url}
    />

    <div className="mx-auto flex max-w-7xl flex-col items-center gap-5 md:gap-6">
      <Logo />

      <div className="flex flex-col items-center gap-2 md:flex-row md:gap-4">
        <a
          href={TEL_HREF}
          className="font-bold transition-colors hover:text-accent"
          aria-label={`Zadzwoń pod numer ${SITE.contact.phoneDisplay}`}
          itemProp="telephone"
        >
          <span aria-hidden>📞 </span>
          {SITE.contact.phoneDisplay}
        </a>
        <span className="hidden md:inline text-slate-400">|</span>
        <a
          href={MAIL_HREF}
          className="font-semibold transition-colors hover:text-accent"
          aria-label={`Wyślij e-mail na adres ${SITE.contact.email}`}
          itemProp="email"
        >
          <span aria-hidden>✉️ </span>
          {SITE.contact.email}
        </a>
      </div>

      {SITE.address && (
        <address
          className="not-italic text-xs"
          itemProp="address"
          itemScope
          itemType="https://schema.org/PostalAddress"
        >
          <span itemProp="streetAddress">
            {SITE.address.streetAddress},&nbsp;
          </span>
          <span itemProp="postalCode">{SITE.address.postalCode},&nbsp;</span>
          <span itemProp="addressLocality">
            {SITE.address.addressLocality},&nbsp;
          </span>
          {SITE.address.addressCountry && (
            <>
              <span itemProp="addressCountry">
                {SITE.address.addressCountry}
              </span>
            </>
          )}
        </address>
      )}

      <span className="text-xs">
        &copy; {new Date().getFullYear()} {SITE.name}. Wszelkie prawa
        zastrzeżone.
      </span>
    </div>
  </footer>
);
