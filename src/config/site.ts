export const SITE = {
  name: "ST-System",
  url: "https://st-system.pl",
  contact: {
    phoneDisplay: "+48 698 698 810",
    phoneE164: "+48698698810",
    email: "slawomirtomala@wp.pl",
  },
  address: {
    streetAddress: "Świętego Mikołaja 6",
    postalCode: "05-510",
    addressLocality: "Warszawa",
    addressCountry: "PL",
  },
} as const;

export const TEL_HREF = `tel:${SITE.contact.phoneE164}`;
export const MAIL_HREF = `mailto:${SITE.contact.email}`;
