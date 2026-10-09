import handiFounders from "../assets/handi-founders.webp";
import handiRenovation from "../assets/handi-renovation.webp";
import handiBiryaniFire from "../assets/handi-biryani-fire.webp";
import handiRestaurantEmpty from "../assets/handi-restaurant-empty.webp";
import handiRestaurantFull from "../assets/handi-restaurant-full.webp";
import laarikhojoMap from "../assets/laarikhojo-map.webp";
import laarikhojoVendorCard from "../assets/laarikhojo-vendor-card.webp";
import laarikhojoTiffinCard from "../assets/laarikhojo-tiffin-card.webp";
import laarikhojoAaharBazar from "../assets/laarikhojo-aahar-bazar.webp";
import laarikhojoFlyer from "../assets/laarikhojo-flyer.webp";

export const projects = {
  "handi-story": {
    order: 1,
    status: "active",
    tagline: "A Hyderabadi biryani cloud kitchen, co-founded in college, that grew into a real restaurant.",
    brick: { color: "var(--brick-red)", ink: "var(--c-ink)", size: [2, 4], tier: "standard" },
    links: [],

    title: "The Handi Story",
    eyebrow: "DEMAND · RETENTION · CUSTOMER BEHAVIOR",
    role: "Co-Founder",
    timeline: "2024 — Present",
    intro:
      "An authentic Hyderabadi biryani business started by three college students and built from a cloud kitchen into a restaurant.",

    metrics: [
      {
        value: "₹3L+",
        label: "Revenue in 3 months",
      },
      {
        value: "50+",
        label: "Orders per day",
      },
    ],

    sections: [
      {
        heading: "The idea",
        image: handiFounders,
        imageAlt: "Abhigyan with his two Handi Story co-founders on a hilltop.",
        paragraphs: [
          "In my second year of college, a friend from Hyderabad called me during semester break with an idea: start a cloud kitchen serving authentic Hyderabadi biryani in Imphal.",

          "I had no experience running a food business. I joined anyway.",

          "Three of us started The Handi Story — two college friends and a childhood friend. Each of us put in ₹1 lakh and we registered it as a partnership firm.",
        ],
      },

      {
        heading: "Putting our own money in",
        paragraphs: [
          "For me, that ₹1 lakh wasn't money I had sitting around. I borrowed it through a committee-style arrangement, where I took the amount upfront and had to pay it back with interest.",

          "I was teaching tuition on the side to keep up with the monthly payments while we were trying to get the business running.",
        ],
      },

      {
        heading: "Building the operation",
        image: handiRenovation,
        imageAlt: "The team waterproofing and fitting out the rooftop space that would become the restaurant.",
        paragraphs: [
          "The first problem was finding someone who could actually make the biryani we wanted to sell.",

          "We were 19-year-old college students trying to hire chefs capable of making authentic Hyderabadi biryani. We booked flights for chefs to come to Imphal, tested their cooking and sent them back when it didn't meet the standard. We were scammed twice in the process.",

          "Getting the right ingredients and equipment into Manipur was another challenge. We sourced spices and utensils from Hyderabad and Delhi while the state was going through a period of conflict.",
        ],
      },

      {
        heading: "Finding customers",
        image: handiBiryaniFire,
        imageAlt: "Handi over an open flame, mid-order, on the rooftop kitchen.",
        paragraphs: [
          "Once the kitchen was running, the next problem was getting people to buy from us.",

          "We distributed paper flyers across colleges, shops and universities, particularly targeting students from medical and engineering colleges and Telugu students who were more likely to know what authentic Hyderabadi biryani should taste like.",

          "We experimented constantly. We tried bamboo biryani, influencer collaborations, our own shoots, Instagram advertising and barter deals.",

          "On some days, I would personally go hostel to hostel, knock on doors and sell the biryani directly.",
        ],
      },

      {
        heading: "When demand didn't behave",
        paragraphs: [
          "One of the hardest parts was learning how unpredictable demand could be.",

          "We once sold around 30 orders from a batch and decided to cook two batches for the following day, expecting demand to continue. The next day, we sold only three orders.",

          "We couldn't let the remaining food go to waste, so we donated it to an orphanage.",

          "It was one of the simplest lessons in the business: demand isn't something you assume. You keep testing it.",
        ],
      },

      {
        heading: "From cloud kitchen to restaurant",
        image: handiRestaurantEmpty,
        imageAlt: "The finished restaurant space, set up with lighting and seating, before opening.",
        paragraphs: [
          "Over time, we realised the location we were operating from had more potential than we were using.",

          "We slowly added chairs, tables and lighting and turned the cloud kitchen into a full restaurant.",

          "What started as three college students trying to sell biryani became a restaurant that continues to serve hundreds of customers every month.",
        ],
      },

      {
        heading: "The outcome",
        image: handiRestaurantFull,
        imageAlt: "The restaurant full of customers on a busy evening.",
        paragraphs: [
          "In the first three months, we crossed ₹3 lakh in revenue and reached 50+ orders a day.",

          "More importantly, I got to experience what it means to operate when there is no playbook — finding people, solving supply problems, testing demand, selling directly, dealing with things going wrong and figuring out what to do next.",
        ],
      },
    ],
  },

  "laarikhojo": {
  order: 3,
  status: "shipped",
  tagline: "A discovery marketplace for street vendors and tiffin makers, built during an operations internship.",
  brick: { color: "var(--brick-green)", ink: "var(--c-ink)", size: [2, 6], tier: "feature" },
  teaserImage: {
    src: laarikhojoMap,
    alt: "The live LaariKhojo map, showing vendor and tiffin-maker pins across Ahmedabad.",
  },
  links: [],

  title: "LaariKhojo",
  eyebrow: "ONBOARDING · TRUST · ADOPTION",
  role: "Operations Intern · Cibos",
  timeline: "Jun 2026 — Aug 2026",
  intro:
    "A discovery platform built around a simple question: If Zomato helps you discover restaurants, how do you discover the street food vendors and tiffin makers around you?",

  metrics: [
    {
      value: "700+",
      label: "Vendors and tiffin makers onboarded",
    },
    {
      value: "1,500",
      label: "Original onboarding target",
    },
  ],

  sections: [
    {
      heading: "The assignment",
      image: laarikhojoFlyer,
      imageAlt: "A LaariKhojo one-pager with onboarding stats: 551 vendors onboarded, 200+ active weekly, 400+ weekly users.",
      paragraphs: [
        "In 2026, I joined Cibos, a startup working on clean cooking solutions for households and grassroots food businesses, as an Operations Intern.",

        "Cibos works across clean-cooking products including Orza for households and Agnit for commercial kitchens and street vendors. My assignment was on a separate vertical called LaariKhojo.",
        
        "The brief was straightforward: onboard 1,000 street vendors and 500 tiffin makers across Gujarat.",
      ],
    },

    {
      heading: "The marketplace I didn't know I was joining",
      image: laarikhojoMap,
      imageAlt: "The live LaariKhojo map, showing vendor and tiffin-maker pins clustered across Ahmedabad.",
      paragraphs: [
        "LaariKhojo was being built around a simple question: If Zomato helps you discover restaurants, how do you discover the street food vendors and tiffin makers around you?",

        "When I started, I wasn't coming in with the context of building a marketplace. The website was not really up and running, there were bugs to fix and there were new features that needed to be added. What started as an onboarding assignment quickly became much broader.",
        
        "I ended up working on the website while also trying to understand what the platform actually needed to become useful.",
      ],
    },

    {
      heading: "The real problem was trust",
      paragraphs: [
        "The technical problem was probably the easier one.",

        "I was visiting street vendors in the afternoon, explaining what LaariKhojo was trying to do, collecting their information, understanding how their businesses worked and figuring out what information actually mattered to them.",

        "I would onboard them and then show them their location pin appearing on the website I was building. The next morning, I would be back fixing things on the platform and then spend the rest of the evening tracking down and onboarding tiffin makers.",

        "I was doing all of this while trying to build trust in a state where I didn't speak the local language.",
      ],
    },

    {
      heading: "Two businesses. Two different problems.",
      images: [
        {
          src: laarikhojoVendorCard,
          alt: "Shree Nikunj Frankie Centre's listing — a street-food vendor's live LaariKhojo pin.",
        },
        {
          src: laarikhojoTiffinCard,
          alt: "Kusum Tiffin Service's listing — meal timings and service areas, the kind of detail a tiffin maker needs that a street vendor doesn't.",
        },
      ],
      paragraphs: [
        "A street vendor and a tiffin maker may both sell food, but their businesses operate very differently.",

        "What works for one doesn't necessarily work for the other. That difference started showing up not just in onboarding, but in the product itself.",

        "Even decisions that initially looked small, like choosing the colour palette and deciding how information should be presented, had an impact on the experience for each group.",
      ],
    },

    {
      heading: "A role that kept changing",
      paragraphs: [
        "Some days I was writing code.",

        "Some days I was figuring out a product problem. Some days I was tracking down tiffin makers through Google Maps, Instamart, Justdial and other sources. And some days I was simply trying to figure out what the next problem even was.",

        "By the end, I had onboarded 700+ street vendors and tiffin makers while working across development, product and field operations.",
      ],
    },

    {
      heading: "Aahar Bazar",
      image: laarikhojoAaharBazar,
      imageAlt: "The LaariKhojo team and fellow founders at Aahar Bazar.",
      paragraphs: [
        "The work eventually took LaariKhojo beyond the website and into the field in another way.",

        "LaariKhojo was selected as one of 15 startups from around 200 to showcase its model at Aahar Bazar.",

        "I represented LaariKhojo at the event alongside our founder, Aditya, and one of the tiffin makers I had personally onboarded.",
        
        "It was an opportunity to see how other startups and organisations were approaching similar problems, and to learn from conversations with businesses, NGOs and investors.",
      ],
    },

    {
      heading: "The outcome",
      paragraphs: [
        "I started with a clear operations target. I ended up working across operations, development, product and UX.",

        "The biggest shift was understanding that getting a product technically functional is only one part of making it work. The harder problem can be getting real people to trust it, use it and tell you what needs to change.",
      ],
    },
  ],
},

  "benzene": {
  order: 2,
  status: "active",
  tagline: "A personal content brand and growth experiment, built from zero.",
  brick: { color: "var(--brick-azure)", ink: "var(--c-ink)", size: [2, 3], tier: "standard" },
  links: [],

  title: "Benzene",
  eyebrow: "AUDIENCE · DISTRIBUTION · ATTENTION",
  role: "Founder",
  timeline: "2024 — Present",
  intro:
    "A student-driven personal brand built from scratch through content, storytelling and experimentation with distribution.",

  metrics: [
    {
      value: "100K+",
      label: "Views",
    },
    {
      value: "200K+",
      label: "Monthly interactions",
    },
  ],

  sections: [
    {
        heading: "Starting from zero",
      paragraphs: [
        "Benzene started as an experiment in putting ideas out into the world.",
        
        "I wasn't naturally comfortable being in front of a camera. I started learning by doing — picking up a camera, making content, figuring out what people responded to and improving with every iteration.",
      ],
    },

    {
      heading: "Learning distribution",
      paragraphs: [
        "The work quickly became less about simply making posts and more about understanding why something gets attention.",
        
        "I experimented with storytelling, formats, hooks, editing, distribution and different ways of presenting ideas to a student audience.",
        
        "Some experiments worked. A lot didn't. The process taught me how much of content is really about understanding the audience and the distribution system around the content.",
      ],
    },

    {
      heading: "Building the audience",
      paragraphs: [
        "Over time, Benzene grew into a student-driven personal brand and community around startups, ideas and experimentation.",
        
        "The content has crossed 100K+ views, with 200K+ monthly interactions at its peak.",
      ],
    },

    {
      heading: "What I am really building",
      paragraphs: [
        "The biggest value of Benzene wasn't any individual post. It was learning how to take an idea, package it for an audience, put it into the world and learn from what happened next.",
      ],
    },
  ],
},

  "meet-ups": {
  order: 4,
  status: "active",
  tagline: "An early-stage product helping students find the right people to build with.",
  brick: { color: "var(--brick-orange)", ink: "var(--c-ink-invert)", size: [1, 4], tier: "open" },
  links: [],

  title: "Meet Ups",
  eyebrow: "DISCOVERY · VALIDATION · PRODUCT",
  role: "Founder",
  timeline: "2025 — Present",
  intro:
    "An attempt to solve a problem I kept seeing in college: students finding the right people to learn, build and collaborate with.",

  metrics: [
    {
      value: "80+",
      label: "User interviews conducted",
    },
  ],

  sections: [
    {
        heading: "The problem",
      paragraphs: [
        "College gives you access to a lot of people, but finding the right ones to learn from, build with or simply talk to isn't always easy.",

        "I kept seeing students with similar interests, ideas or problems who had no easy way of finding each other.",
      ],
    },

    {
      heading: "Starting with research",
      paragraphs: [
        "Instead of starting by building a platform, I started by trying to understand whether the problem was actually worth solving.",

        "I spoke to students, looked at how they currently found people and paid attention to the situations where they wanted to connect but didn't know where to start.",
      ],
    },

    {
      heading: "Taking it offline",
      paragraphs: [
        "The first experiments were deliberately simple. I started bringing people together through offline sessions and using WhatsApp and existing college networks to get people into the same room.",

        "These sessions became a way to test the underlying problem without hiding behind a product. I could see what conversations happened naturally, where people struggled to connect and what kinds of people they actually wanted to meet.",
      ],
    },

    {
      heading: "What I'm figuring out",
      paragraphs: [
        "The question now isn't simply how to build another networking platform. It's how to make finding the right people genuinely useful enough that students want to come back.",

        "I'm still working through that problem and figuring out what the product should actually become.",
      ],
    },
  ],
},
};

/**
 * Slug-stamped, order-sorted array. Replaces the hardcoded
 * journeyProjectIds list that used to live in Home.jsx — adding a
 * project now just means adding an entry above with an `order`,
 * rather than also remembering to update a separate id list.
 */
export const projectList = Object.entries(projects)
  .map(([slug, project]) => ({ slug, ...project }))
  .sort((a, b) => a.order - b.order);

export const projectSlugs = projectList.map((project) => project.slug);

/** Previous/next case study for CaseNav, by current slug. */
export function getProjectNeighbours(slug) {
  const index = projectSlugs.indexOf(slug);
  if (index < 0) return { prev: null, next: null };

  return {
    prev: index > 0 ? projectList[index - 1] : null,
    next: index < projectList.length - 1 ? projectList[index + 1] : null,
  };
}
