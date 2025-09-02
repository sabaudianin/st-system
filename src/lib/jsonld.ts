import { SITE } from "@/config/site";

export const businessJsonLd = () => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE.url}#org`,
  name: SITE.name,
  url: SITE.url,
  telephone: SITE.contact.phoneE164,
  email: SITE.contact.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: SITE.address.streetAddress,
    postalCode: SITE.address.postalCode,
    addressLocality: SITE.address.addressLocality,
    addressCountry: SITE.address.addressCountry,
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "customer service",
      telephone: SITE.contact.phoneE164,
      email: SITE.contact.email,
      availableLanguage: ["pl-PL"],
    },
  ],
});
