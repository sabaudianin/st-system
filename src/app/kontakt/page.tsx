"use client";

import { SITE, TEL_HREF, MAIL_HREF } from "@/config/site";

export default function Contact() {
  // query do mapy ze źródła (SITE.address)
  const addr = SITE.address;
  const mapQuery = addr
    ? encodeURIComponent(
        `${addr.streetAddress}, ${addr.postalCode} ${addr.addressLocality}`
      )
    : "";
  const mapSrc = `https://www.google.com/maps?q=${mapQuery}&output=embed`;

  return (
    <section
      id="kontakt"
      aria-labelledby="contact-title"
      role="region"
      className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-6 py-12 md:px-12 lg:grid-cols-2 bg-[var(--panel-light)]"
      itemScope
      itemType="https://schema.org/LocalBusiness"
    >
      <meta
        itemProp="name"
        content={SITE.name}
      />
      <link
        itemProp="url"
        href={SITE.url}
      />

      <div className="animate-fade-in-left rounded-2xl border border-[var(--border)] bg-[var(--hero-overlay)] p-6 shadow-lg md:p-8">
        <h1
          id="contact-title"
          className="mb-4 text-2xl font-bold text-foreground md:text-3xl"
        >
          Skontaktuj się z nami
        </h1>
        <p className="mb-6 text-foreground/80">
          Doradzimy, zaproponujemy rozwiązanie i przygotujemy darmową wycenę.
        </p>

        <ul
          role="list"
          className="space-y-4 text-base"
        >
          <li className="flex items-center gap-3">
            <span aria-hidden>📞</span>
            <a
              href={TEL_HREF}
              className="font-semibold transition-colors hover:text-accent"
              aria-label={`Zadzwoń: ${SITE.contact.phoneDisplay}`}
              itemProp="telephone"
            >
              {SITE.contact.phoneDisplay}
            </a>
          </li>

          <li className="flex items-center gap-3">
            <span aria-hidden>✉️</span>
            <a
              href={MAIL_HREF}
              className="font-semibold transition-colors hover:text-accent"
              aria-label={`Napisz: ${SITE.contact.email}`}
              itemProp="email"
            >
              {SITE.contact.email}
            </a>
          </li>

          {addr && (
            <li className="flex items-start gap-3">
              <span aria-hidden>📍</span>
              <address
                className="not-italic"
                itemProp="address"
                itemScope
                itemType="https://schema.org/PostalAddress"
              >
                <span itemProp="streetAddress">{addr.streetAddress}</span>
                <br />
                <span itemProp="postalCode">{addr.postalCode}</span>{" "}
                <span itemProp="addressLocality">{addr.addressLocality}</span>
                {addr.addressCountry && (
                  <>
                    ,{" "}
                    <span itemProp="addressCountry">{addr.addressCountry}</span>
                  </>
                )}
              </address>
            </li>
          )}
        </ul>
      </div>

      <div
        className="animate-fade-in-right overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--panel)] shadow-lg"
        aria-label="Mapa dojazdu"
      >
        <iframe
          title={`Mapa dojazdu — ${SITE.name}`}
          className="h-[360px] w-full md:h-full"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          src={mapSrc}
        />
      </div>
    </section>
  );
}
