import sikkimRide from "../assets/sikkim-ride.webp";

/**
 * Previously hardcoded directly in SideQuests.jsx. Blurbs are moved
 * verbatim — only surrounding whitespace is collapsed.
 */
export const sideQuests = [
  {
    id: "regen-hackathon",
    title: "ReGen National Hackathon",
    kind: "HACKATHON",
    role: "Sponsorship & Marketing Lead",
    brick: { color: "var(--brick-azure)", ink: "var(--c-ink)", size: [1, 3] },
    blurb:
      "Sponsorship & Marketing Lead for a national hackathon. Managed sponsorship outreach and secured ₹1.3L in sponsorships through a combination of cash partnerships and brand visibility exchanges.",
  },
  {
    id: "nidar-drone",
    title: "NIDAR Drone Challenge",
    kind: "ROBOTICS · CV",
    role: "Computer vision",
    brick: { color: "var(--brick-slate)", ink: "var(--c-ink)", size: [1, 2] },
    blurb:
      "Worked on a disaster-management drone project, contributing to the computer vision side using YOLO.",
  },
  {
    id: "khatakhat",
    title: "Khatakhat",
    kind: "LOGISTICS · CONTENT",
    role: "Social & content",
    brick: { color: "var(--brick-green)", ink: "var(--c-ink)", size: [1, 2] },
    blurb:
      "Worked with an early-stage logistics and commerce venture around its social media and content.",
  },
  {
    // Carries the Himalaya photo previously (and inaccurately) used as
    // the homepage hero — its alt text described "a neutral-toned
    // creative workspace", but the image is Abhigyan on a snow ridge
    // in Sikkim. It belongs with the story it actually illustrates.
    id: "sikkim-ride",
    title: "Two wheels, 17,800 ft",
    kind: "RIDE",
    role: "Rider",
    brick: { color: "var(--brick-sand)", ink: "var(--c-ink-invert)", size: [1, 4] },
    blurb:
      "My love for bikes took me to Sikkim, a ride to Lachung, to witness the divine Gurudongmar Lake at roughly 17,800 ft.",
    image: sikkimRide,
    imageAlt: "Abhigyan on a snow-covered ridge in Sikkim, Himalayan peaks behind.",
  },
];
