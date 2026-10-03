import regenHackathon from "../assets/regen-hackathon.webp";
import nidarDrone from "../assets/nidar-drone-build.webp";
import khatakhatCart from "../assets/khatakhat-cart.webp";
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
      "Solo-led sponsorship outreach for a national hackathon, securing ₹1.3L in sponsorships through a mix of cash partnerships and brand visibility exchanges.",
    image: regenHackathon,
    imageAlt: "Abhigyan receiving a certificate of appreciation on stage at the ReGen Hackathon, NIT Manipur.",
  },
  {
    id: "nidar-drone",
    title: "NIDAR Drone Challenge",
    kind: "ROBOTICS · CV",
    role: "Computer vision",
    brick: { color: "var(--brick-slate)", ink: "var(--c-ink)", size: [1, 2] },
    blurb:
      "Participated in the NIDAR Drone Challenge, building a disaster-management drone and contributing to its computer vision side using YOLO.",
    image: nidarDrone,
    imageAlt: "Building and wiring the NIDAR drone's airframe.",
  },
  {
    id: "khatakhat",
    title: "Khatakhat",
    kind: "LOGISTICS · CONTENT",
    role: "Social & content",
    brick: { color: "var(--brick-green)", ink: "var(--c-ink)", size: [1, 2] },
    blurb:
      "Led the social media campaign for an early-stage logistics startup, crossing 50K+ views on short-form content and 200K+ monthly interactions.",
    image: khatakhatCart,
    imageAlt: "A Khatakhat-branded delivery cart used for last-mile logistics.",
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
