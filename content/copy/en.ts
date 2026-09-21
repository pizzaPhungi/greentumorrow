import type { Copy } from "./types.ts";

export const en: Copy = {
  htmlLang: "en",
  switchToOther: "Auf Deutsch lesen",

  meta: {
    title: "gREen Tumorrow, student initiative for renewable energy at TUM",
    description:
      "gREen Tumorrow is a club for people who are passionate about renewable energy and want to actively drive the energy transition forward. From sharing knowledge to realising real-world energy projects, for a sustainable and decentralised energy future.",
    ogLocale: "en_GB",
  },

  nav: {
    join: "Join",
    homeTab: "Home",
    sections: { projects: "Projects", about: "About us" },
    home: "gREen Tumorrow, home",
    skipToContent: "Skip to content",
    openMenu: "Open menu",
    closeMenu: "Close menu",
  },

  hero: {
    headline: "Moving the energy transition forward.",
    lead: "connects students, communities, industry and capital to accelerate the renewable energy transition. By fostering collaboration, facilitating knowledge exchange and developing innovative solutions, we address real-world energy challenges and realise projects. Together, we contribute to a sustainable and decentralised energy future.",
    joinCta: "Join us",
    photoAlt:
      "A wind turbine blade radiating out over a montage of renewable energy scenes: solar panels, green fields, a cloudy sky and farmland dotted with turbines",
  },

  missionVisionValues: {
    mission: {
      label: "Mission",
      text: "Connecting people, knowledge and capital to accelerate the renewable energy transition.",
    },
    vision: {
      label: "Vision",
      text: "A future where renewable energy is led by the community, for the community.",
    },
    values: {
      label: "Values",
      items: ["Sustainability", "Innovation", "Integrity"],
    },
  },

  stats: {
    title: "Number Highlights",
    items: [
      {
        value: "2026",
        label: "founded",
        note: "and accredited by TUM",
        animate: false,
      },
      { value: "3", label: "partners" },
      { value: "2", label: "solar projects" },
      { value: "6", label: "students" },
    ],
  },

  pillars: {
    eyebrow: "What we do",
    items: [
      {
        prefix: "RE",
        name: "Community",
        text: "Building a strong network between locals, industry and students to foster collaboration.",
      },
      {
        prefix: "RE",
        name: "Projects",
        text: "Planning, financing and delivering renewable energy installations that actually get built.",
      },
      {
        prefix: "RE",
        name: "Innovation",
        text: "Bridging the gap between theory and practice through education, knowledge exchange, and innovative solutions.",
      },
    ],
  },


  projects: {
    title: "PV Projects",
    lead: "Everything we do runs on a real building, a real budget or a real research question. One is on the grid, one is being planned, and the next one could be yours.",
    partnerLabel: "Partner",
    entries: {
      "harthof-ascend": {
        name: "Harthof · ASCEND",
        field: "Plus-energy district",
        status: "In planning",
        year: "EU project ASCEND",
        summary:
          "A plus-energy district for Harthof, developed as part of the EU-funded ASCEND project. Battery storage and EV charging points are planned alongside the site's solar.",
        specLabels: ["Area"],
        heroLine: "Plus-energy district, roughly 450 m², in planning",
        photoAlt:
          "An aerial map of the Harthof neighbourhood in Munich with the ASCEND project area outlined in yellow",
      },
      "gemeinde-neuperlach": {
        name: "Evangelisch-Freikirchliche Gemeinde Neuperlach",
        field: "Solar and storage",
        status: "In planning",
        year: "Next project",
        summary:
          "A congregation roof in Neuperlach, more than twice the size of our first plant and paired with battery storage, so the building will use its own solar power in the evening instead of selling it at the spot price.",
        specLabels: ["Capacity", "Storage"],
        heroLine: "PV array with battery storage, 25 kWp, in planning",
        photoAlt:
          "The congregation building in Neuperlach from above, a long tiled roof and a white bell tower, before the array goes on",
      },
    },
    own: {
      badge: "Open",
      headline: "Bring your own project",
      intro:
        "Not everything has to come through a partner. If you have an idea, a building, a measurement you want to run or a question you want answered, that can become a gREen Tumorrow project, and you lead it.",
      examplesLabel: "For example",
      examples: [
        "A roof whose owner you already know",
        "A tool or model renewable energy projects are missing",
        "A study or measurement campaign nobody has run",
      ],
    },
  },

  team: {
    title: "Student team",
    /** One entry per person, added when their portrait lands. */
    people: {},
  },

  advisors: {
    title: "Advisors",
  },

  partners: {
    title: "Partners",
    entries: [
      {
        name: "EGM eG",
        full: "Energiegemeinschaften München eG",
      },
      {
        name: "BENG eG",
        full: "Bürgerenergiegenossenschaft BENG eG",
      },
    ],
  },

  closing: {
    panels: [
      {
        title: "Want to move the energy transition forward? Start here.",
        lead: "Tell us who you are and what you study. What motivates you to join? We have a variety of possibilities and a lot of flexibility, you decide how much time and energy you put in. Bring your own ideas and realise them together with us.",
      },
      {
        title: "Have an energy challenge? Bring it to us.",
        lead: "Bring us your most challenging problem in renewable energy or storage. We work together to find innovative solutions that hold up in the real world. Already running a project and want fresh energy on board? Contact us at any time.",
      },
      {
        title: "Want to change something around you? Start here.",
        lead: "Want to share your energy knowledge, or improve something in your neighbourhood but you don't know how to start? You don't need to be a student or an expert, just the will to make something happen. Reach us anytime and we will help you take the first step.",
      },
    ],
    cta: "Fill in the form",
    contactUs: "Contact us",
    audiences: ["Students", "Companies and organizations", "Energy enthusiasts"],
  },

  footer: {
    legalHeading: "Legal",
    findUsHeading: "Find us",
    imprint: "Imprint",
    privacy: "Privacy",
  },

  photo: {
    missing: "Photo missing",
  },

  todo: {
    label: "To do",
  },
};
