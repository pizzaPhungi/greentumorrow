import type { Copy } from "./types.ts";
import { partnerCount, studentCount } from "../shared.ts";

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
    sections: { projects: "Projects", events: "Events", about: "About us" },
    home: "gREen Tumorrow, home",
    skipToContent: "Skip to content",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    mainNav: "Main",
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
      text: "A future where renewable energy is powered by innovation and driven by everyone.",
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
      { value: String(partnerCount), label: "partners" },
      { value: "2", label: "solar projects" },
      { value: String(studentCount), label: "students" },
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
    title: "Projects",
    lead: "Everything we do runs on a real building, a real budget or a real research question. On the solar side, two projects are being planned and one is waiting on approval. On the wind side, we are looking for a partner.",
    jumpLabel: "Jump to",
    pvTitle: "PV Projects",
    windTitle: "Wind Projects",
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
      "tum-garching": {
        name: "TUM Project · Garching",
        field: "Solar",
        status: "Concept",
        year: "Awaiting approval",
        summary:
          "A solar installation at TUM itself, on the Garching campus. The idea is there and approval is still pending, so nothing is fixed yet. We are brainstorming and need more people to help plan it.",
        specLabels: ["Location"],
        heroLine: "Solar on the TUM campus in Garching, awaiting approval",
        photoAlt:
          "The TUM campus in Garching from above, a long glass-roofed building whose wings are lined with solar panels, surrounded by lawns and trees",
      },
    },
    wind: {
      status: "Looking for a partner",
      field: "Excursion",
      name: "Wind turbine site visit",
      summary:
        "We want to see a wind turbine go up, not just read about it. The plan is an excursion with a company that builds wind projects, so students can visit the site during construction and follow the planning behind it. Neither the partner nor the date is settled yet.",
      asks: [
        {
          label: "For companies",
          text: "You plan or build wind turbines and would take a group of TUM students onto a site, or into the planning? Get in touch.",
          cta: "Partner with us",
          subject: "Wind excursion: partnership",
        },
        {
          label: "For students",
          text: "We need people to find the partner, stay in contact with them and plan the visit. If you want to help organise it, or just come along, let us know.",
          cta: "Help plan it",
          subject: "Wind excursion: I want to help",
        },
      ],
      photoAlt:
        "Four wind turbines rising above a forest and a green meadow under a blue sky",
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

  events: {
    title: "Events",
    countdownLabel: "Starts in",
    countdownDone: "Happening today",
    units: { days: "Days", hours: "Hours", minutes: "Minutes", seconds: "Seconds" },
    dateLabel: "Date",
    placeLabel: "Location",
    register: "Secure your spot, places are limited",
    entries: {
      "watt-the-hack": {
        name: "WATT THE HACK",
        tagline: "Energy & AI Hackathon",
        presentedBy: "Hosted by gREen Tumorrow during Munich Climate Week",
        date: "24 October 2026",
        place: "Audimax, TUM Main Campus",
        recap:
          "On 24 October 2026, during Munich Climate Week, we hosted WATT THE HACK in the Audimax on TUM's main campus. Teams of students worked on four real challenges brought by our partners, from wind farm energy losses to public EV charging, and the winning team of each challenge took home €1,000.",
        photoAlt:
          "Event poster for WATT THE HACK, Energy & AI Hackathon, 24 October at TUM Main Campus: an illustrated green city with wind turbines and labels for AI use cases such as energy storage management and wind energy forecasting",
      },
    },
  },

  wattTheHack: {
    partnersTitle: "Our challenge partners and sponsors",
    partnersLead:
      "Each partner brought one real problem from their own work.",
    logoAlt: "Logo of",
    winnersTitle: "Winning teams",
    winnersLead:
      "Every challenge had its own winning team, and each winning team received €1,000, €4,000 in total.",
    challengeWord: "challenge",
    prize: "€1,000",
    challenges: {
      "baywa-re": {
        title: "Wind Farm Energy Loss Prediction",
        summary:
          "Predict the wind speeds a wind farm misses during an outage from a neighbouring reference farm, and calculate the energy yield lost in kWh.",
        winnerPhotoAlt:
          "FAMi on stage in the Audimax holding a large prize cheque for 1,000 euros, with bouquets of flowers, under a screen showing the prize",
      },
      "nomadic-drones": {
        title: "Keeping the Power Flowing",
        summary:
          "Plan how mobile, self-charging sensors that fly between power lines should investigate grid damage after storms, heat or wildfires.",
        winnerPhotoAlt:
          "NomaderWatt on stage in the Audimax with a large prize cheque for 1,000 euros and bouquets of flowers, under a screen showing the prize",
      },
      ecurious: {
        title: "A Smart Reservation System for Public EV Charging",
        summary:
          "Build a charging app prototype on Ecurious' reservation hardware, so drivers can reserve a public charging bay and find it free when they arrive.",
        winnerPhotoAlt:
          "Flash on stage in the Audimax holding a large prize cheque for 1,000 euros, under a screen naming them winners of the Ecurious challenge",
      },
      nuuenergy: {
        title: "Heat Pump Ready?",
        summary:
          "Can AI tell homeowners whether their home is ready for a heat pump, without waiting for an on-site assessment?",
        winnerPhotoAlt:
          "Team Swap on stage in the Audimax holding a large prize cheque for 1,000 euros, under a screen naming them winners of the nuuEnergy challenge",
      },
    },
    galleryTitle: "Photos from the day",
    galleryCredit: "Camera photos by",
    galleryAlts: [
      "Participants queuing at the registration desk in the glass hall and writing name tags",
      "More participants arriving at the registration desk",
      "A participant giving a thumbs up next to the breakfast table with bread, pastries and oat milk",
      "Four participants smiling during a break, holding coffee and plates",
      "A participant smiling at the camera next to the registration desk, with partner banners and a crowd behind",
      "Someone from Nomadic Drones signing the prize cheque for their challenge",
      "Someone from nuuEnergy signing the prize cheque for their challenge",
      "Two speakers on stage in front of a Munich Climate Week slide",
      "A speaker with a microphone explaining something on stage",
      "Two people from BayWa r.e. presenting their challenge on stage, with their profiles on the screen behind",
      "Two people from BayWa r.e. on stage introducing their challenge",
      "A speaker on stage in the Audimax in front of the WATT THE HACK title slide",
      "A speaker with a microphone next to the TUM lectern",
      "Two speakers explaining the BayWa r.e. challenge next to the lectern, with the task on the screen",
      "A speaker on the Audimax stage presenting energy price data on the big screen",
      "A speaker introducing the Nomadic Drones challenge in the Audimax",
      "A speaker with a microphone gesturing next to the TUM lectern",
      "A speaker in a nuuEnergy jumper on stage next to the lectern",
      "A speaker on stage in front of the large nuuEnergy logo on the screen",
      "People talking at the nuuEnergy stand in the glass hall",
      "A team working on laptops at a table",
      "Rows of teams at work in the glass hall",
      "Participants concentrating on code at their laptops",
      "A team discussing their approach around a table",
      "Two participants working at a laptop together",
      "Conversations at the nuuEnergy stand next to a prize cheque",
      "Two participants at the BayWa r.e. stand, beside a prize cheque on the pin board",
      "A team at a table by the glass wall, discussing their work",
      "Teams working at tables along the glass wall",
      "The glass hall from above, with teams spread across the tables",
      "Three participants working at a table with laptops and drinks",
      "A team working on their laptops by the window",
      "Several teams working side by side in the hall",
      "A participant working at a laptop covered in leaf stickers",
      "Participants focused on their screens",
      "A participant looking at their laptop, a coffee beside it",
      "Three participants chatting during a break",
      "Participants working on laptops at a long table",
      "Two people from nuuEnergy at their stand",
      "Two participants coding side by side by the window",
      "Two participants working on a laptop together",
      "Someone talking with a team at their table",
      "Someone in a Munich Climate Week T-shirt pulling a face outside",
      "A team working on laptops in the glass hall",
      "Someone talking with a team at their laptops",
      "Conversations in front of the BayWa r.e. banner and the prize cheques",
      "Three people talking in front of the BayWa r.e. banner",
      "Participants gathered at the nuuEnergy stand",
      "Someone from Nomadic Drones explaining something at their banner",
      "Participants deep in discussion at their table",
      "A team at a round table, seen from above",
      "Someone in a Munich Climate Week T-shirt laughing, a camera in hand",
      "Four people posing in front of the Nomadic Drones banner",
      "Three people smiling in the glass hall",
      "A group of six smiling in the glass hall",
      "Two people at the coffee and snack table",
      "Four participants posing together, one giving a thumbs up",
      "A team at their table, one member looking up from the laptop",
      "Participants leaning over a laptop together",
      "Teams at work in the evening light of the glass hall",
      "Teams working and eating at their tables",
      "Two participants looking at a phone at their table",
      "A team at their table giving a thumbs up to the camera",
      "Teams working at long rows of tables in the glass hall",
      "Three participants discussing their work over laptops",
      "Two people looking at something on a phone together",
      "Teams working on laptops in the glass hall, with trees outside the windows",
      "Three participants working at a table by the glass wall",
      "Participants gathered around a yellow parking barrier from Ecurious, testing it with a laptop",
      "Two people from BayWa r.e. at a standing table next to a prize cheque on a pin board",
      "Participants crowding around the nuuEnergy stand",
      "Participants gathered at the Nomadic Drones banner",
      "Participants working on the Audimax steps",
      "A team gathered round a laptop in the Audimax seats",
      "A team going through their slides on a laptop in the Audimax",
      "The host explaining the schedule in the Audimax",
      "The host speaking to the teams in the Audimax",
      "A team preparing their pitch in the Audimax seats",
      "People waiting in the Audimax seats for the pitches",
      "Participants waiting in the Audimax rows",
      "The host on stage in front of the seated teams, just before the pitches",
      "A team pitching on stage, one member holding a laptop",
      "A team pitching on stage next to the lectern",
      "Two people listening to a pitch",
      "The jury listening to a pitch from their seats on stage",
      "A team pitching, a chart on the screen",
      "The jury following a pitch closely",
      "The jury listening, one member deep in thought",
      "The jury leaning back during a pitch",
      "A team presenting next to the lectern, their slide on the screen",
      "A team pitching in front of a map on the screen",
      "A team pitching with a slide asking where a transmission line broke",
      "A team pitching with a Baywatch-style slide on the screen",
      "Jury members talking in the front row",
      "A team pitching with a slide on how long finding a grid fault takes",
      "A participant on stage listening to a question",
      "Teams and audience watching the pitches from the Audimax seats",
      "A team presenting how a drone pins down a grid fault",
      "A team pitching their idea, Storm Drone Response",
      "A team pitching byteMD, the name on the screen",
      "A team on stage with laptops at the lectern",
      "A team presenting a heat pump estimate on the screen",
      "Two people on stage with a microphone, reading from a card",
      "Flash on stage with their prize cheque, under a screen naming them winners of the Ecurious challenge",
      "Flash on stage with their prize cheque",
      "FAMi receiving their prize cheque on stage",
      "FAMi on stage with their prize cheque and flowers",
      "NomaderWatt called on stage, their name on the screen",
      "NomaderWatt with their prize cheque and flowers",
      "NomaderWatt on stage with their prize cheque and flowers",
      "NomaderWatt celebrating with their prize cheque",
      "Team Swap on stage with their prize cheque, under a screen naming them winners of the nuuEnergy challenge",
      "The jury and challenge partners on stage with flowers, under a slide reading Meet the jury",
      "Everyone on stage for a group photo under the WATT THE HACK screen",
      "Two people with flowers in front of the partner logos",
      "All four winning teams with their cheques in front of the challenge partners' logos",
      "The four winning teams on stage holding their prize cheques, under a screen with the WATT THE HACK title and the challenge partners' logos",
      "Two members of Flash clowning around with the oversized cheque",
      "The host with a microphone on stage in front of the WATT THE HACK slide",
      "Someone at the lectern after the event, partner logos on the screen behind",
      "Four people smiling on stage in front of the partner logos",
      "Flash receiving their prize cheque on stage",
      "The four winning teams together with their prize cheques in front of the challenge partners' logos",
      "Two members of Flash laughing with the oversized cheque",
      "Two members of Flash pulling at their prize cheque in front of the screen",
      "NomaderWatt posing with their cheque, one member in a breakdance pose on the floor",
      "Three people hugging in the empty Audimax after the event",
    ],
  },

  team: {
    title: "Student team",
    /** One entry per person, added when their portrait lands. */
    people: {
      "Salma Gares": { role: "Founder" },
    },
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
