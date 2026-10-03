/**
 * Single source for site-wide identity, navigation, socials and the
 * resume link. Previously this was scattered as literal strings across
 * Home.jsx; centralising it means SiteHeader, SiteFooter, Hero,
 * SpecPanel and ContactPlate can't drift out of sync with each other.
 */
export const site = {
  name: "Abhigyan Yadav",
  wordmark: "ABHIGYAN",

  headline: "I BUILD THINGS.",
  tagline:
    "I work at the intersection of product and operations. " +
    "Getting close to problems, figuring out what needs to happen, and making it happen.",

  // NIT Manipur identity — nothing on the site said this before.
  identity: {
    school: "NIT Manipur",
    cohort: "Class of 2027",
    degree: "B.Tech, Mechanical Engineering",
    year: "Final year",
    focus: "Products — building, growth, operations",
    location: "Imphal, Manipur, India",
  },

  spec: [
    { k: "School", v: "NIT Manipur · Class of 2027" },
    { k: "Degree", v: "B.Tech, Mechanical Engineering" },
    { k: "Based in", v: "Imphal, Manipur" },
    { k: "Open to", v: "Product & operations roles" },
  ],

  // `href` targets are rooted at "/#..." rather than a bare hash so they
  // resolve correctly from any page — a bare "#about" clicked from
  // /work/handi-story would try to scroll to an anchor that only
  // exists on Home, not navigate there first.
  nav: [
    { label: "About", href: "/#about" },
    { label: "Work", href: "/#work" },
    { label: "Now", href: "/#now" },
    { label: "Side quests", to: "/sidequests" },
    { label: "Contact", href: "/#contact" },
  ],

  // Unchanged from the existing site.
  socials: [
    {
      label: "Instagram",
      href: "https://www.instagram.com/benzene_co/",
      external: true,
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/abhigyan-yadav-09a4b92a4/",
      external: true,
    },
    { label: "Email", href: "mailto:thebenzene2208@gmail.com" },
    {
      label: "GitHub",
      href: "https://github.com/abhigyanyadav2204-art",
      external: true,
    },
  ],

  // Flip `ready` to true once the PDF is dropped into public/. Nothing
  // else needs to change — the button and contact row read this flag.
  resume: {
    href: "/abhigyan-yadav-resume.pdf",
    filename: "abhigyan-yadav-resume.pdf",
    ready: true,
  },

  meta: {
    title: "Abhigyan Yadav — Product, Operations & Growth",
    description:
      "Final-year B.Tech Mechanical Engineering student at NIT Manipur (Class of 2027). " +
      "I build businesses, products and audiences — operations, growth and product work, up close.",
    url: "https://abhigyan.vercel.app",
    ogImage: "/og.png",
  },
};

// Dev-only nudge so dropping the PDF into public/ without flipping the
// flag above doesn't go unnoticed until someone clicks a dead button.
if (import.meta.env?.DEV && !site.resume.ready) {
  console.info(
    `[site] resume.ready is false — the Resume button is disabled. ` +
      `Drop the PDF at public${site.resume.href} and set resume.ready to true.`,
  );
}
