export const SITE = {
  name: "RafBobBob",
  url: "https://portfoliodev-hazel.vercel.app/",
  contact: {
    phoneDisplay: "+48 793 386 445",
    phoneE164: "+48793386445",
    email: "rafbobbob@gmail.com",
  },
  address: {
    streetAddress: "Stradomska 3",
    postalCode: "04-619",
    addressLocality: "Warszawa",
    addressCountry: "PL",
  },
} as const;

export const TEL_HREF = `tel:${SITE.contact.phoneE164}`;
export const MAIL_HREF = `mailto:${SITE.contact.email}`;
