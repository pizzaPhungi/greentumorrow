import { TODO } from "../shared.ts";
import type { Copy } from "./types.ts";

export const en: Copy = {
  htmlLang: "en",
  switchToOther: "Auf Deutsch lesen",

  meta: {
    title: "gREen tumorrow: student initiative for renewable energy at TUM",
    description:
      "gREen tumorrow is a student initiative at TUM for everyone who wants to work on renewable energy, not read about it. You join a real project, with one of our partners or one you bring yourself, and you build genuine expertise doing it.",
    ogLocale: "en_GB",
  },

  nav: {
    join: "Join",
    home: "gREen tumorrow, home",
    skipToContent: "Skip to content",
    openMenu: "Open menu",
    closeMenu: "Close menu",
  },

  hero: {
    eyebrow: "Student initiative",
    headline: "Learn renewable energy by building it.",
    lead: "is where students who care about renewable energy do the work instead of reading about it. You join a real project, with one of our partners or one you bring yourself, and you build genuine expertise doing it.",
    joinCta: "Join the WhatsApp group",
    projectsCta: "See what we work on",
    cardTitle: "Our two projects",
  },

  stats: [
    { value: "6", label: "students", note: "plus two academic advisors" },
    { value: "2", label: "energy projects", note: "running with partners" },
    {
      value: "35",
      unit: "kWp",
      label: "in ongoing projects",
      note: "what those two projects add up to",
    },
    {
      value: "2026",
      label: "founded and accredited",
      note: "as a TUM student initiative",
    },
  ],

  pillars: {
    eyebrow: "What we do",
    title: "Three things, and they hold each other up.",
    lead: "Technology alone does not get a renewable energy project built. It takes people who know each other, work that actually ships, and knowledge that outlives the people who gathered it.",
    items: [
      {
        prefix: "RE",
        name: "Community",
        text: "A network between neighbourhoods, industry and students, so a project has people behind it, not just a plan.",
      },
      {
        prefix: "RE",
        name: "Projects",
        text: "Planning, financing and delivering renewable energy installations that actually get built. This is where most of the work happens.",
      },
      {
        prefix: "RE",
        name: "Knowledge",
        text: "Closing the gap between theory and practice through teaching, exchange and expertise you can carry into a career.",
      },
    ],
  },

  projects: {
    eyebrow: "What we work on",
    title: "Our projects",
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
          "The congregation building in Neuperlach from above: a long tiled roof and a white bell tower, before the array goes on",
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
        "What a project proposal needs and who approves it: how a project actually starts",
      ),
    },
  },

  team: {
    eyebrow: "Who you would work with",
    title: "Our members",
    advisorBadge: "Advisor",
    people: {
      "Alex Treml": {
        role: "Acquisition",
        work: "Finds the next roof and the partner behind it",
        photoAlt: TODO("Portrait of Alex Treml"),
      },
      "Nana Kwabena Osei": {
        role: "Engineering",
        work: "Site surveys, system design and yield simulation",
        photoAlt: TODO("Portrait of Nana Kwabena Osei"),
      },
      "Duc Viet Phung": {
        role: "Finance",
        work: "Business cases, funding routes and project budgets",
        photoAlt: TODO("Portrait of Duc Viet Phung"),
      },
      "Marvin Elling": {
        role: "Legal",
        work: "Agreements with owners, energy law and compliance",
        photoAlt: TODO("Portrait of Marvin Elling"),
      },
      "Salma Gares": {
        role: "Public Relations",
        work: "Campus presence, neighbourhood events and this website",
        photoAlt: TODO("Portrait of Salma Gares"),
      },
      "Karim Alzahabi": {
        role: "Research & Development",
        work: "Energy sharing, storage and new project models",
        photoAlt: TODO("Portrait of Karim Alzahabi"),
      },
      "Dr. Markus Eblenkamp": {
        role: "Education",
        work: "Connects our projects to TUM chairs and teaching formats",
        photoAlt: TODO("Portrait of Dr. Markus Eblenkamp"),
      },
      "Dr. Christoph Göbel": {
        role: "Education",
        work: "Supervises academic work coming out of our projects",
        photoAlt: TODO("Portrait of Dr. Christoph Göbel"),
      },
    },
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
        name: "TUM",
        full: "Technical University of Munich",
        text: "Our university. We are an accredited TUM student initiative and work with chairs across engineering and management.",
      },
    ],
  },

  closing: {
    title:
      "Renewable energy needs people who have already built something. Start here.",
    lead: "There is no application. Everything runs in one WhatsApp group: what is happening this week, who needs a hand, when we next meet.",
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
