import { TODO } from "../shared.ts";
import type { Copy } from "./types.ts";

export const en: Copy = {
  htmlLang: "en",
  switchToOther: "Auf Deutsch lesen",

  meta: {
    title: "gREen tumorrow: student initiative for renewable energy at TUM",
    description:
      "gREen tumorrow is a club for people who are passionate about renewable energy and want to actively drive the energy transition forward. From sharing knowledge to realising real-world energy projects, for a sustainable and decentralised energy future.",
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
    headline: "As students, we move the energy transition forward.",
    lead: "is a club for people who are passionate about renewable energy and want to actively drive the energy transition forward. We foster exchange and collaboration, and create opportunities to turn ideas into action. From sharing knowledge to collaborating on and realising real-world energy projects, for a sustainable and decentralised energy future.",
    joinCta: "Join the WhatsApp group",
    projectsCta: "See what we work on",
    photoAlt: TODO("Alt text for the hero photo, written together with the photo"),
  },

  stats: [
    { value: "6", label: "students", note: "plus two academic advisors" },
    { value: "2", label: "energy projects", note: "running with partners" },
    {
      value: TODO("How many events have you run so far?"),
      label: "events",
      note: "talks and evenings about renewables",
    },
    {
      value: "35",
      unit: "kWp",
      label: "in ongoing projects",
      note: "what those two projects add up to",
    },
  ],

  pillars: {
    eyebrow: "What we do",
    items: [
      {
        prefix: "RE",
        name: "Community",
        text: "Industry, university and neighbourhoods rarely sit at the same table. We put them there, because that is what a project needs before anything gets built.",
      },
      {
        prefix: "RE",
        name: "Projects",
        text: "Planning, financing and delivering renewable energy installations that actually get built. This is where most of the work happens.",
      },
      {
        prefix: "RE",
        name: "Knowledge",
        text: "What we learn on a roof does not stay there. We run events about renewables, open to anyone who wants to understand how this actually works.",
      },
    ],
  },

  events: {
    eyebrow: "Passing it on",
    title: "Events about renewables",
    lead: "Building something teaches you things a lecture cannot. We put those evenings on for anyone who wants them, students and neighbours alike.",
    sofar: TODO(
      "Which events have run so far: titles, roughly when, and who came",
    ),
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
      },
      "Nana Kwabena Osei": {
        role: "Engineering",
        work: "Site surveys, system design and yield simulation",
      },
      "Duc Viet Phung": {
        role: "Finance",
        work: "Business cases, funding routes and project budgets",
      },
      "Marvin Elling": {
        role: "Legal",
        work: "Agreements with owners, energy law and compliance",
      },
      "Salma Gares": {
        role: "Public Relations",
        work: "Campus presence, neighbourhood events and this website",
      },
      "Karim Alzahabi": {
        role: "Research & Development",
        work: "Energy sharing, storage and new project models",
      },
      "Dr. Markus Eblenkamp": {
        role: "Education",
        work: "Connects our projects to TUM chairs and teaching formats",
      },
      "Dr. Christoph Göbel": {
        role: "Education",
        work: "Supervises academic work coming out of our projects",
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
