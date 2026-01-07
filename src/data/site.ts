export const site = {
  name: "Henrique Braga",
  email: "shenrique40moreira@gmail.com",
  phone: { href: "tel:+5511942998620", label: "+55 (11) 94299-8620" },
  photo: "/henrique-braga.jpg",
  cv: {
    "pt-BR": "/cv/Henrique-Braga-CV-PT.pdf",
    "en-US": "/cv/Henrique-Braga-CV-EN.pdf",
    "es-ES": "/cv/Henrique-Braga-CV-ES.pdf",
  },
  timeZone: "America/Sao_Paulo",
  url: (
    process.env.NEXT_PUBLIC_SITE_URL ??
    (process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : "http://localhost:3000")
  ).replace(/\/$/, ""),
  socials: {
    github: "https://github.com/HenriqueBragaMoreira",
    linkedin: "https://www.linkedin.com/in/h-braga/",
    instagram: "https://www.instagram.com/hen1_braga/",
  },
} as const;
