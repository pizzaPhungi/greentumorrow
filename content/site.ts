/**
 * Single source of truth for every piece of copy and data on the site.
 * Edit this file to update the website; the components read from here.
 *
 * `TODO(...)` marks content the club still has to supply. It renders as a loud
 * amber placeholder on the page AND fails `npm run build` via the `prebuild`
 * check, so nothing unfinished can reach a launch unnoticed. Use
 * `ALLOW_TODOS=1 npm run build` for previews while placeholders remain.
 */

export const TODO = (what: string) => ({ __todo: what }) as const;
export type Todo = ReturnType<typeof TODO>;
export type Fillable = string | Todo;
export const isTodo = (v: unknown): v is Todo =>
  typeof v === "object" && v !== null && "__todo" in v;

export const site = {
  name: "gREen tumorrow",
  legalName: "gREen tumorrow",
  url: "https://greentumorrow.de",
  affiliation: "Student initiative at TUM",
  city: "Munich",
  tagline: "Unleashing the power of Munich",
  description:
    "gREen tumorrow is a student initiative at TUM for everyone who wants to work on renewable energy, not read about it. You join a real project, with one of our partners or one you bring yourself, and you build genuine expertise doing it.",
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
  meetup: {
    room: TODO("Room / floor / how to find you at Dachauer Str. 90"),
  },
};

/** Founded and accredited by TUM in the same year. */
export const founded: Fillable = "2026";

export type Stat = {
  value: Fillable;
  unit?: string;
  label: string;
  note?: string;
};

export const stats: Stat[] = [
  { value: "6", label: "students", note: "plus two academic advisors" },
  { value: "2", label: "energy projects", note: "running with partners" },
  {
    value: "35.23",
    unit: "kWp",
    label: "in ongoing projects",
    note: "what those two projects add up to",
  },
  {
    value: founded,
    label: "founded and accredited",
    note: "as a TUM student initiative",
  },
];

export type Project = {
  slug: string;
  name: string;
  /** Where the project came from. Drives how the projects page groups entries. */
  type: "partner" | "own";
  /** Which renewable energy area, e.g. Solar, Solar & storage, Wind. */
  field: string;
  status: "Live" | "In construction";
  year: string;
  summary: string;
  specs: { label: string; value: string }[];
  partner?: string;
};

export const projects: Project[] = [
  {
    slug: "perlacher-herz",
    name: "Perlacher Herz",
    type: "partner",
    field: "Solar",
    status: "Live",
    year: "On the grid since 2026",
    summary:
      "Our first plant. A rooftop PV system on a community building in Perlach, developed with the energy cooperative EGM eG and financed by its members, the neighbours who now own it.",
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
    type: "partner",
    field: "Solar & storage",
    status: "In construction",
    year: "Current project",
    summary:
      "A congregation roof in Neuperlach, more than twice the size of our first plant and paired with battery storage, so the building uses its own solar power in the evening instead of selling it at the spot price.",
    specs: [
      { label: "Capacity", value: "25 kWp" },
      { label: "Storage", value: "11 kWh" },
      { label: "Status", value: "In construction" },
    ],
    partner: "EGM eG",
  },
];

/**
 * Own projects are an invitation, not a claim. No placeholder entry is added to
 * `projects`. The `type: "own"` variant exists so the projects page can group
 * by it the day a real one starts.
 */
export const ownProjects = {
  headline: "Bring your own project",
  intro:
    "Not everything has to come through a partner. If you have an idea, a building, a measurement you want to run or a question you want answered, that can become a gREen tumorrow project, and you lead it.",
  examples: [
    "A roof whose owner you already know",
    "A tool or model renewable energy projects are missing",
    "A study or measurement campaign nobody has run",
  ],
  requirements: TODO(
    "What a project proposal needs and who approves it: how a project actually starts",
  ),
};

/**
 * The club's three pillars. The published LinkedIn carousel had
 * Community / Knowledge / Investment; Investment is dropped and Projects takes
 * its place, because building things is what the club actually does.
 * The `RE` prefix is a separate field so it can be coloured like the wordmark.
 */
export const pillars = [
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
];

export type Person = {
  name: string;
  role: string;
  /** What that role actually does. A department label alone says nothing. */
  work: string;
  kind: "student" | "advisor";
};

export const team: Person[] = [
  {
    name: "Alex Treml",
    role: "Acquisition",
    work: "Finds the next roof and the partner behind it",
    kind: "student",
  },
  {
    name: "Nana Kwabena Osei",
    role: "Engineering",
    work: "Site surveys, system design and yield simulation",
    kind: "student",
  },
  {
    name: "Duc Viet Phung",
    role: "Finance",
    work: "Business cases, funding routes and project budgets",
    kind: "student",
  },
  {
    name: "Marvin Elling",
    role: "Legal",
    work: "Agreements with owners, energy law and compliance",
    kind: "student",
  },
  {
    name: "Salma Gares",
    role: "Public Relations",
    work: "Campus presence, neighbourhood events and this website",
    kind: "student",
  },
  {
    name: "Karim Alzahabi",
    role: "Research & Development",
    work: "Energy sharing, storage and new project models",
    kind: "student",
  },
  {
    name: "Dr. Markus Eblenkamp",
    role: "Education",
    work: "Connects our projects to TUM chairs and teaching formats",
    kind: "advisor",
  },
  {
    name: "Dr. Christoph Göbel",
    role: "Education",
    work: "Supervises academic work coming out of our projects",
    kind: "advisor",
  },
];

/** The path from interested stranger to member. Every step is an action. */
export const journey = [
  {
    title: "Get in touch",
    text: "Come to a meet-up in Munich, or just write us. Both work, and you do not need to wait for the next meeting to start a conversation.",
  },
  {
    title: "Pick what you want to work on",
    text: "A project decides what you work on; the kind of work (engineering, finance, legal, outreach, research) decides how.",
  },
  {
    title: "Meet the person whose work it is",
    text: "Every part of a project has someone behind it. You talk to them, they show you what is actually on their plate, and you take a piece of it.",
  },
  {
    title: "Or bring your own project",
    text: "Already have an idea, a building or a question worth answering? Then you skip the queue and lead it yourself.",
  },
];


export const partners = [
  {
    name: "EGM eG",
    full: "Energiegemeinschaften München eG",
    text: "The energy cooperative behind our first two solar projects. It owns the installations; its members, the neighbours, own the cooperative.",
    href: "https://www.energiegemeinschaften-muenchen.com/",
  },
  {
    name: "TUM",
    full: "Technical University of Munich",
    text: "Our university. We are an accredited TUM student initiative and work with chairs across engineering and management.",
    href: "https://www.tum.de/",
  },
];

export const join = {
  headline: "Six people, two live projects, and more work than we can carry.",
  intro:
    "gREen tumorrow is open to any student who wants to work on renewable energy, whatever you study, whatever year you are in. What we cannot offer is a club where you can be a passenger.",
  expectations: [
    {
      title: "Time",
      text: TODO("Expected weekly time commitment, e.g. “4–6 hours a week during the semester”"),
    },
    {
      title: "Background",
      text: "Any subject. Engineering, business, law, communication and policy are all load-bearing here. An energy project needs all of them.",
    },
    {
      title: "Language",
      text: "We work in English. Our projects and partners run in German. You do not need it to start, but it helps.",
    },
    {
      title: "Commitment",
      text: "One semester minimum. Partners and building owners are counting on continuity.",
    },
  ],
  admission: TODO(
    "Rolling admission or intake rounds per semester, and whether there is a membership fee",
  ),
  /**
   * With the per-role starter tasks gone, this mail is the concrete first
   * action. Three things at most, plus a response window. An open-ended ask
   * with an unknown outcome is the friction the starter tasks removed.
   */
  mail: {
    intro:
      "One mail is enough, and it does not have to be polished. Tell us three things:",
    items: [
      "Which project interests you, or the idea you would bring yourself",
      "Which kind of work you want to do: engineering, finance, legal, outreach, research, teaching",
      "What you would want to get out of it",
    ],
    responseTime: TODO(
      "How quickly you answer mail. Commit to a number, e.g. “within three days”",
    ),
  },
  firstWeeks: TODO(
    "What a new member concretely does in their first four weeks",
  ),
};

/**
 * Top-level pages besides the home page. Empty for now: everything lives on one
 * page. The header and footer both handle an empty list.
 */
export const nav: { href: string; label: string }[] = [];

/** Kept out of `nav` so the header can render it as a standing button. */
export const joinCta = { href: "/join", label: "Join" };
