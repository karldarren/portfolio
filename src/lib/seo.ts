import { profile } from "@/data/profile";

/** JSON-LD Person structured data for the site owner. */
export function personJsonLd(siteUrl: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    url: siteUrl,
    jobTitle: profile.title,
    email: `mailto:${profile.email}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Cavite",
      addressCountry: "PH",
    },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Cavite State University",
    },
    sameAs: [profile.socials.github, profile.socials.linkedin],
    knowsAbout: [
      "Full-Stack Web Development",
      "System Development",
      "IT Support",
      "Network Administration",
      "Automation",
      "UI/UX",
      "Technical Operations",
    ],
  };
}

/** JSON-LD WebSite structured data. */
export function websiteJsonLd(siteUrl: string) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: `${profile.name} Portfolio`,
    url: siteUrl,
    author: { "@type": "Person", name: profile.name },
  };
}
