import type { Copy } from "./types.ts";

/**
 * German is the default language, so this is the first text most visitors read.
 * Written as German sentences rather than translated ones: where a literal
 * rendering of the English would be stiff, the German says what a person here
 * would actually say.
 */
export const de: Copy = {
  htmlLang: "de",
  switchToOther: "Read in English",

  meta: {
    title: "gREen tumorrow, Studenteninitiative für Erneuerbare an der TUM",
    description:
      "gREen tumorrow ist ein Verein für alle, die sich für Erneuerbare Energien begeistern und die Energiewende aktiv voranbringen wollen. Von Wissen weitergeben bis zu echten Energieprojekten, für eine nachhaltige und dezentrale Energieversorgung.",
    ogLocale: "de_DE",
  },

  nav: {
    join: "Mitmachen",
    homeTab: "Start",
    sections: { projects: "Projekte", partners: "Partner", members: "Mitglieder" },
    home: "gREen tumorrow, Startseite",
    skipToContent: "Zum Inhalt springen",
    openMenu: "Menü öffnen",
    closeMenu: "Menü schließen",
  },

  hero: {
    eyebrow: "Studenteninitiative",
    headline: "Als Studierende bringen wir die Energiewende voran.",
    lead: "ist ein Verein für alle, die sich für Erneuerbare Energien begeistern und die Energiewende aktiv voranbringen wollen. Wir fördern Austausch und Zusammenarbeit und schaffen Gelegenheiten, aus Ideen etwas Konkretes zu machen. Von Wissen weitergeben bis zu echten Energieprojekten, die wir gemeinsam planen und umsetzen, für eine nachhaltige und dezentrale Energieversorgung.",
    joinCta: "Mitmachen",
    projectsCta: "Woran wir arbeiten",
    photoAlt:
      "Solarmodule im Vordergrund, dahinter Monteure in Warnkleidung, am Horizont Windräder bei Sonnenuntergang",
  },

  stats: {
    eyebrow: "In Zahlen",
    title: "Wo wir stehen",
    items: [
      {
        value: "2026",
        label: "gegründet",
        note: "und als Studenteninitiative der TUM akkreditiert",
      },
      { value: "3", label: "Partner", note: "TUM, EGM eG und BENG eG" },
      { value: "2", label: "Solarprojekte", note: "35 kWp zusammen" },
      { value: "6", label: "Studierende", note: "dazu zwei Betreuer" },
    ],
  },

  pillars: {
    eyebrow: "Was wir machen",
    items: [
      {
        prefix: "RE",
        name: "Community",
        text: "Ein starkes Netzwerk zwischen Anwohnern, Industrie und Studierenden aufbauen, das Zusammenarbeit fördert und echte Projekte hervorbringt.",
      },
      {
        prefix: "RE",
        name: "Projekte",
        text: "Anlagen planen, finanzieren und bauen, bis sie am Netz sind. Hier passiert der größte Teil der Arbeit.",
      },
      {
        prefix: "RE",
        name: "Wissen",
        text: "Wir schließen die Lücke zwischen Theorie und Praxis durch Lehre, Wissensaustausch und den Aufbau von Fachwissen.",
      },
    ],
  },


  projects: {
    eyebrow: "Woran wir arbeiten",
    title: "Projekte",
    lead: "Alles, was wir tun, hängt an einem echten Gebäude, einem echten Budget oder einer echten Forschungsfrage. Eines läuft, eines ist in Planung, das nächste könnte deines sein.",
    partnerLabel: "Partner",
    entries: {
      "perlacher-herz": {
        name: "Perlacher Herz",
        field: "Solar",
        status: "Am Netz",
        year: "Seit 2026 am Netz",
        summary:
          "Unsere erste Anlage. Eine Aufdach-PV auf einem Gemeinschaftsgebäude in Perlach, entwickelt mit der Energiegenossenschaft EGM eG und finanziert von deren Mitgliedern, den Nachbarn, denen sie jetzt gehört.",
        specLabels: ["Leistung", "Module", "Am Netz seit"],
        heroLine: "PV-Anlage auf dem Dach, 10 kWp, seit 2026 am Netz",
        photoAlt:
          "Mitglieder und Nachbarn stehen zwischen den flach montierten Modulen auf dem Dach des Perlacher Herz",
      },
      "gemeinde-neuperlach": {
        name: "Evangelisch-Freikirchliche Gemeinde Neuperlach",
        field: "Solar und Speicher",
        status: "In Planung",
        year: "Nächstes Projekt",
        summary:
          "Ein Gemeindedach in Neuperlach, mehr als doppelt so groß wie unsere erste Anlage und mit Batteriespeicher. Damit nutzt das Gebäude seinen Solarstrom abends selbst, statt ihn zum Börsenpreis abzugeben.",
        specLabels: ["Leistung", "Speicher"],
        heroLine: "PV-Anlage mit Speicher, 25 kWp, in Planung",
        photoAlt:
          "Das Gemeindegebäude in Neuperlach von oben, ein langes Ziegeldach und ein weißer Glockenturm, bevor die Anlage daraufkommt",
      },
    },
    own: {
      badge: "Offen",
      headline: "Bring dein eigenes Projekt mit",
      intro:
        "Nicht alles muss über einen Partner kommen. Wenn du eine Idee hast, ein Gebäude, eine Messung, die du machen willst, oder eine Frage, die dich umtreibt, kann daraus ein Projekt von gREen tumorrow werden. Und du leitest es.",
      examplesLabel: "Zum Beispiel",
      examples: [
        "Ein Dach, dessen Eigentümer du schon kennst",
        "Ein Werkzeug oder Modell, das in Erneuerbaren-Projekten fehlt",
        "Eine Untersuchung oder Messreihe, die noch niemand gemacht hat",
      ],
    },
  },

  team: {
    eyebrow: "Mit wem du arbeiten würdest",
    title: "Unsere Mitglieder",
    advisorBadge: "Betreuer",
    /** One entry per person, added when their portrait lands. */
    people: {},
  },

  partners: {
    eyebrow: "Mit wem wir zusammenarbeiten",
    title: "Partner",
    entries: [
      {
        name: "EGM eG",
        full: "Energiegemeinschaften München eG",
        text: "Die Energiegenossenschaft, mit der wir die PV-Projekte umsetzen.",
      },
      {
        name: "BENG eG",
        full: "Bürgerenergiegenossenschaft BENG eG",
        text: "Eine der etablierten Bürgerenergiegenossenschaften Münchens, und ein zweiter Weg von der Idee zu einer Anlage, die einem Viertel gehört.",
      },
      {
        name: "TUM",
        full: "Technische Universität München",
        text: "Unsere Hochschule. Wir sind eine akkreditierte Studenteninitiative der TUM und arbeiten mit Lehrstühlen aus Technik und Management.",
      },
    ],
  },

  closing: {
    title: "Du willst die Energiewende voranbringen? Fang hier an.",
    lead: "Sag uns kurz, wer du bist und wie wir dich erreichen. Wir melden uns und holen dich in die WhatsApp-Gruppe, in der alles läuft. Was diese Woche ansteht, wo jemand Hilfe braucht, wann wir uns treffen.",
    cta: "Formular ausfüllen",
    askInstead: "Lieber erst etwas fragen?",
  },

  footer: {
    blurb:
      "Studenteninitiative an der TUM in München. Studierende, die an Erneuerbaren arbeiten, in echten Projekten, mit Partnern und mit eigenen.",
    legalHeading: "Rechtliches",
    findUsHeading: "So erreichst du uns",
    imprint: "Impressum",
    privacy: "Datenschutz",
  },

  photo: {
    missing: "Foto fehlt",
  },

  todo: {
    label: "To do",
  },
};
