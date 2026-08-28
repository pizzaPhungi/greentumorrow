import { TODO } from "../shared.ts";
import type { Copy } from "./types.ts";

export const en: Copy = {
  htmlLang: "en",
  switchToOther: "Auf Deutsch lesen",

  meta: {
    title: "gREen tumorrow, student initiative for renewable energy at TUM",
    description:
      "gREen tumorrow is a club for people who are passionate about renewable energy and want to actively drive the energy transition forward. From sharing knowledge to realising real-world energy projects, for a sustainable and decentralised energy future.",
    ogLocale: "en_GB",
  },

  nav: {
    join: "Join",
    sections: { projects: "Projects", partners: "Partners", members: "Members" },
    home: "gREen tumorrow, home",
    skipToContent: "Skip to content",
    openMenu: "Open menu",
    closeMenu: "Close menu",
  },

  hero: {
    eyebrow: "Student initiative",
    headline: "As students, we move the energy transition forward.",
    lead: "is a club for people who are passionate about renewable energy and want to actively drive the energy transition forward. We foster exchange and collaboration, and create opportunities to turn ideas into action. From sharing knowledge to collaborating on and realising real-world energy projects, for a sustainable and decentralised energy future.",
    joinCta: "Join the WhatsApp group",
    projectsCta: "See what we work on",
    photoAlt:
      "Solar modules in the foreground, workers in high-visibility gear behind them, wind turbines on the horizon at sunset",
  },

  stats: {
    eyebrow: "In numbers",
    title: "Where we stand",
    items: [
      {
        value: "2026",
        label: "founded",
        note: "and accredited as a TUM student initiative",
      },
      { value: "3", label: "partners", note: "TUM, EGM eG and BENG eG" },
      { value: "2", label: "solar projects", note: "35 kWp between them" },
      { value: "6", label: "students", note: "plus two academic advisors" },
    ],
  },

  pillars: {
    eyebrow: "What we do",
    items: [
      {
        prefix: "RE",
        name: "Community",
        text: "Building a strong network between locals, industry and students to foster collaboration and develop real-world projects.",
      },
      {
        prefix: "RE",
        name: "Projects",
        text: "Planning, financing and delivering renewable energy installations that actually get built. This is where most of the work happens.",
      },
      {
        prefix: "RE",
        name: "Knowledge",
        text: "Bridging the gap between theory and practice through education, knowledge exchange, and building expertise.",
      },
    ],
  },


  projects: {
    eyebrow: "What we work on",
    title: "Projects",
    lead: "Everything we do runs on a real building, a real budget or a real research question. One is on the grid, one is being planned, and the next one could be yours.",
    partnerLabel: "Partner",
    entries: {
      "perlacher-herz": {
        name: "Perlacher Herz",
        field: "Solar",
        status: "Live",
        year: "On the grid since 2026",
        summary:
          "Our first plant. A rooftop PV system on a community building in Perlach, developed with the energy cooperative EGM eG and financed by its members, the neighbours who now own it.",
        specLabels: ["Capacity", "Modules", "On the grid"],
        heroLine: "PV array on the roof, 10 kWp, on the grid since 2026",
        photoAlt:
          "Members and neighbours standing among the flat-mounted modules on the Perlacher Herz roof",
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
        "Not everything has to come through a partner. If you have an idea, a building, a measurement you want to run or a question you want answered, that can become a gREen tumorrow project, and you lead it.",
      examplesLabel: "For example",
      examples: [
        "A roof whose owner you already know",
        "A tool or model renewable energy projects are missing",
        "A study or measurement campaign nobody has run",
      ],
      requirements: TODO(
        "What a project proposal needs and who approves it, meaning how a project actually starts",
      ),
    },
  },

  team: {
    eyebrow: "Who you would work with",
    title: "Our members",
    advisorBadge: "Advisor",
    /** One entry per person, added when their portrait lands. */
    people: {},
  },

  partners: {
    eyebrow: "Who we work with",
    title: "Partners",
    entries: [
      {
        name: "EGM eG",
        full: "Energiegemeinschaften München eG",
        text: "The energy cooperative that we partner with to realise the PV installation projects.",
      },
      {
        name: "BENG eG",
        full: "Bürgerenergiegenossenschaft BENG eG",
        text: "One of Munich's established citizen energy cooperatives, and a second route from an idea to an installation that a neighbourhood owns.",
      },
      {
        name: "TUM",
        full: "Technical University of Munich",
        text: "Our university. We are an accredited TUM student initiative and work with chairs across engineering and management.",
      },
    ],
  },

  closing: {
    title: "Want to move the energy transition forward? Start here.",
    lead: "There is no application. Everything runs in one WhatsApp group. That is where you find what is happening this week, who needs a hand and when we next meet.",
    cta: "Join the WhatsApp group",
    askInstead: "Rather ask something first?",
  },

  footer: {
    blurb:
      "Student initiative at TUM in Munich. Students working on renewable energy, on real projects, with partners and their own.",
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
