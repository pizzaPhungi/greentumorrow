/**
 * Single source of truth for every piece of copy and data on the site.
 * Edit this file to update the website — the components read from here.
 *
 * `TODO` markers render as a visible amber placeholder on the page, so
 * unfinished content cannot be shipped by accident.
 */

export const TODO = (what: string) => ({ __todo: what }) as const;
export type Todo = ReturnType<typeof TODO>;
export const isTodo = (v: unknown): v is Todo =>
  typeof v === "object" && v !== null && "__todo" in v;

export const site = {
  name: "gREen tumorrow",
  legalName: "gREen tumorrow",
  url: "https://greentumorrow.de",
  affiliation: "TUM-accredited student initiative",
  city: "Munich",
  tagline: "Unleashing the power of Munich",
  description:
    "gREen tumorrow is a TUM student initiative that plans, finances and delivers community-owned solar projects in Munich — and turns them into master's theses, research internships and careers in energy.",
};

export const contact = {
  email: "info@greentumorrow.de",
  phone: "+49 176 36396502",
  phoneHref: "+4917636396502",
  instagram: "https://instagram.com/greentumorrow",
  instagramHandle: "@greentumorrow",
  linkedin: "https://www.linkedin.com/company/green-tumorrow",
  linkedinHandle: "green-tumorrow",
  address: {
    street: "Dachauer Str. 90",
    postalCode: "80335",
    city: "Munich",
    country: "Germany",
  },
  /** Recurring meet-up. Without a weekday and time this is useless to a visitor. */
  meetup: {
    cadence: TODO("Weekday + time of the regular meet-up, e.g. “Every Tuesday, 18:00”"),
    room: TODO("Room / floor / how to find you at Dachauer Str. 90"),
  },
};

export const stats = [
  { value: "10.23", unit: "kWp", label: "live on the grid", note: "Perlacher Herz" },
  { value: "25", unit: "kWp", label: "in construction", note: "Gemeinde Neuperlach" },
  { value: "11", unit: "kWh", label: "battery storage", note: "Gemeinde Neuperlach" },
  { value: "6", unit: "", label: "active members", note: "and hiring" },
];

export type Project = {
  slug: string;
  name: string;
  status: "Live" | "In construction";
  year: string;
  summary: string;
  specs: { label: string; value: string }[];
  partner: string;
};

export const projects: Project[] = [
  {
    slug: "perlacher-herz",
    name: "Perlacher Herz",
    status: "Live",
    year: "On the grid since 2026",
    summary:
      "Our first plant. A rooftop PV system on a community building in Perlach, developed with the energy cooperative EGM eG and financed by its members — the neighbours who now own it.",
    specs: [
      { label: "Capacity", value: "10.23 kWp" },
      { label: "Modules", value: "24" },
      { label: "On the grid", value: "2026" },
    ],
    partner: "EGM eG",
  },
  {
    slug: "gemeinde-neuperlach",
    name: "Evangelisch-Freikirchliche Gemeinde Neuperlach",
    status: "In construction",
    year: "Current project",
    summary:
      "A church roof in Neuperlach, three times the size of our first plant and paired with battery storage — so the congregation uses its own solar power in the evening instead of selling it at the spot price.",
    specs: [
      { label: "Capacity", value: "25 kWp" },
      { label: "Storage", value: "11 kWh" },
      { label: "Status", value: "In construction" },
    ],
    partner: "EGM eG",
  },
];

export type Unit = {
  slug: string;
  name: string;
  blurb: string;
  work: string[];
  lead: string | null;
  open: boolean;
};

export const units: Unit[] = [
  {
    slug: "engineering",
    name: "Engineering",
    blurb: "Turning a roof into a system that produces power.",
    work: ["Site surveys and roof assessment", "PV layout and yield simulation", "Storage sizing and grid connection"],
    lead: "Nana Kwabena Osei",
    open: false,
  },
  {
    slug: "finance",
    name: "Finance",
    blurb: "Making the numbers work before anyone climbs a roof.",
    work: ["Project business cases", "Cooperative shares and member loans", "Funding and subsidy applications"],
    lead: "Leonie Merkl",
    open: false,
  },
  {
    slug: "legal",
    name: "Legal",
    blurb: "The contracts that let a community own a power plant.",
    work: ["Roof lease and usage agreements", "Cooperative and energy law", "Compliance and documentation"],
    lead: "Marvin Elling",
    open: false,
  },
  {
    slug: "acquisition",
    name: "Acquisition",
    blurb: "Finding the next roof — and the people on it.",
    work: ["Churches, housing associations, schools", "First contact and site visits", "Building the project pipeline"],
    lead: "Alex Treml",
    open: false,
  },
  {
    slug: "public-relations",
    name: "Public Relations",
    blurb: "Getting a neighbourhood to care about its own roof.",
    work: ["Neighbourhood events and info evenings", "Social media and campus presence", "This website"],
    lead: "Salma Gares",
    open: false,
  },
  {
    slug: "research-development",
    name: "Research & Development",
    blurb: "What comes after the first plant.",
    work: ["Energy sharing and community models", "Sector coupling and heat", "Feeding findings back into TUM research"],
    lead: "Karim Alzahabi",
    open: false,
  },
  {
    slug: "education",
    name: "Education",
    blurb: "The bridge between our projects and TUM lecture halls.",
    work: ["Matching thesis topics to chairs", "Ring lectures and seminars", "Mentoring new members"],
    lead: null,
    open: true,
  },
];

export type Person = {
  name: string;
  role: string;
  kind: "student" | "advisor";
};

export const team: Person[] = [
  { name: "Alex Treml", role: "Acquisition", kind: "student" },
  { name: "Nana Kwabena Osei", role: "Engineering", kind: "student" },
  { name: "Leonie Merkl", role: "Finance", kind: "student" },
  { name: "Marvin Elling", role: "Legal", kind: "student" },
  { name: "Salma Gares", role: "Public Relations", kind: "student" },
  { name: "Karim Alzahabi", role: "Research & Development", kind: "student" },
  { name: "Dr. Markus Eblenkamp", role: "Education", kind: "advisor" },
  { name: "Dr. Christoph Göbel", role: "Education", kind: "advisor" },
];

export const values = [
  {
    name: "Sustainability",
    text: "We measure ourselves in kilowatt-peak on real roofs, not in pledges.",
  },
  {
    name: "Innovation",
    text: "Community energy is a young field. We build the models it still lacks.",
  },
  {
    name: "Integrity",
    text: "Members' money is in these projects. We are honest about risk and returns.",
  },
];

export const missionVision = {
  mission:
    "Connecting people, knowledge and capital to accelerate the renewable energy transition.",
  vision:
    "A future where renewable energy is led by the community, for the community.",
};

export const academics = {
  intro:
    "Our projects are not simulations. That makes them unusually good material for academic work — and TUM chairs treat them accordingly.",
  majors: [
    "M.Sc. Power Engineering",
    "M.Sc. Electrical Engineering and Information Technology",
    "M.Sc. Management & Technology",
  ],
  formats: [
    {
      name: "Master's thesis",
      text: "We supply the topic and the field data, a TUM chair supplies the academic supervision and the grade.",
    },
    {
      name: "Research internship",
      text: "A shorter, credited format for measurement campaigns, simulations and feasibility studies.",
    },
    {
      name: "Ring lectures & seminars",
      text: "Practitioners from Munich's energy cooperatives in front of a lecture hall, organised by us.",
    },
    {
      name: "Mentoring",
      text: "Our academic advisors and cooperative partners help you find the direction, not just the topic.",
    },
  ],
  steps: [
    {
      title: "You bring the interest",
      text: "A study programme in energy, engineering or management — and a question you actually want answered.",
    },
    {
      title: "We bring the topic and the field",
      text: "Live plants, real yield data, real cooperative economics, and supervision from people who built them.",
    },
    {
      title: "A TUM chair brings the format",
      text: "Thesis, research internship or seminar. The chair sets the academic frame and supervises alongside us.",
    },
    {
      title: "Your results go back to the field",
      text: "Findings are presented at our forum and feed into the next project instead of a drawer.",
    },
  ],
};

export const partners = [
  {
    name: "EGM eG",
    full: "Energiegemeinschaften München eG",
    text: "The energy cooperative we build our PV projects with. It owns the plants; its members — the neighbours — own the cooperative.",
    href: "https://www.energiegemeinschaften-muenchen.com/",
  },
  {
    name: "BENG eG",
    full: "Bürgerenergiegenossenschaft BENG eG",
    text: "One of Munich's established citizen energy cooperatives and a partner of EGM eG.",
    href: "https://www.beng-eg.de/",
  },
  {
    name: "TUM",
    full: "Technical University of Munich",
    text: "Our university. We are an accredited TUM student initiative and work with chairs across engineering and management.",
    href: "https://www.tum.de/",
  },
];

export const euProjects = [
  {
    name: "Creating NEBourhoods Together",
    place: "Neuperlach",
    text: "EU-funded New European Bauhaus project in which the Neuperlach energy community was founded.",
    href: "https://www.nebourhoods.de/",
  },
  {
    name: "ASCEND",
    place: "Harthof",
    text: "EU project accelerating positive clean energy districts, home of the Harthof energy community.",
    href: "https://ascend-project.eu/",
  },
];

export const join = {
  headline: "We are six people and two live projects. That is the honest pitch.",
  intro:
    "Six people cannot cover seven units, and a plant in construction does not wait for the semester to end. If you want a student club where you can be a passenger, this is the wrong one.",
  expectations: [
    {
      title: "Time",
      text: TODO("Expected weekly time commitment, e.g. “4–6 hours a week during the semester”"),
    },
    {
      title: "Language",
      text: "We work in English. Our projects, partners and neighbourhoods run in German — you do not need it to start, but it helps.",
    },
    {
      title: "Background",
      text: "Any TUM programme. Engineering, business, law and communication are all load-bearing here.",
    },
    {
      title: "Commitment",
      text: "One semester minimum. Roof owners and cooperative members are counting on continuity.",
    },
  ],
  steps: [
    {
      title: "Come to a meet-up",
      text: "We meet at Dachauer Str. 90 in Munich. Turn up, ask what is actually happening, decide afterwards.",
    },
    {
      title: "Write to us",
      text: "Tell us which unit interests you and what you would want to work on. Two paragraphs are enough.",
    },
    {
      title: "Talk to the unit",
      text: "You meet the people you would work with and we agree on a first concrete task.",
    },
  ],
};

export const nav = [
  { href: "/projects", label: "Projects" },
  { href: "/academics", label: "Thesis & Internships" },
  { href: "/team", label: "Team" },
  { href: "/about", label: "About" },
  { href: "/join", label: "Join" },
];
