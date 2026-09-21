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
    title: "gREen Tumorrow, Studenteninitiative für Erneuerbare an der TUM",
    description:
      "gREen Tumorrow ist ein Verein für alle, die sich für Erneuerbare Energien begeistern und die Energiewende aktiv voranbringen wollen. Von Wissen weitergeben bis zu echten Energieprojekten, für eine nachhaltige und dezentrale Energieversorgung.",
    ogLocale: "de_DE",
  },

  nav: {
    join: "Mitmachen",
    homeTab: "Start",
    sections: { projects: "Projekte", about: "Über uns" },
    home: "gREen Tumorrow, Startseite",
    skipToContent: "Zum Inhalt springen",
    openMenu: "Menü öffnen",
    closeMenu: "Menü schließen",
  },

  hero: {
    headline: "Die Energiewende voranbringen.",
    lead: "verbindet Studierende, Kommunen, Industrie und Kapital, um die Energiewende im Bereich erneuerbare Energien zu beschleunigen. Durch die Förderung von Zusammenarbeit, den Austausch von Wissen und die Entwicklung innovativer Lösungen gehen wir reale Herausforderungen der Energiewende an und realisieren Projekte. Gemeinsam tragen wir zu einer nachhaltigen und dezentralen Energiezukunft bei.",
    joinCta: "Mitmachen",
    photoAlt:
      "Ein Windradflügel strahlt über eine Bildmontage aus Szenen erneuerbarer Energien: Solarmodule, grüne Felder, ein bewölkter Himmel und Ackerland mit Windrädern",
  },

  missionVisionValues: {
    mission: {
      label: "Mission",
      text: "Menschen, Wissen und Kapital verbinden, um die Energiewende im Bereich erneuerbare Energien zu beschleunigen.",
    },
    vision: {
      label: "Vision",
      text: "Eine Zukunft, in der erneuerbare Energie von der Gemeinschaft für die Gemeinschaft gestaltet wird.",
    },
    values: {
      label: "Werte",
      items: ["Nachhaltigkeit", "Innovation", "Integrität"],
    },
  },

  stats: {
    title: "Zahlen-Highlights",
    items: [
      {
        value: "2026",
        label: "gegründet",
        note: "und von der TUM akkreditiert",
        animate: false,
      },
      { value: "3", label: "Partner" },
      { value: "2", label: "Solarprojekte" },
      { value: "6", label: "Studierende" },
    ],
  },

  pillars: {
    eyebrow: "Was wir machen",
    items: [
      {
        prefix: "RE",
        name: "Community",
        text: "Ein starkes Netzwerk zwischen Anwohnern, Industrie und Studierenden aufbauen, das Zusammenarbeit fördert.",
      },
      {
        prefix: "RE",
        name: "Projekte",
        text: "Anlagen planen, finanzieren und bauen, bis sie am Netz sind.",
      },
      {
        prefix: "RE",
        name: "Innovation",
        text: "Wir schließen die Lücke zwischen Theorie und Praxis durch Lehre, Wissensaustausch und innovative Lösungen.",
      },
    ],
  },


  projects: {
    title: "PV-Projekte",
    lead: "Alles, was wir tun, hängt an einem echten Gebäude, einem echten Budget oder einer echten Forschungsfrage. Eines läuft, eines ist in Planung, das nächste könnte deines sein.",
    partnerLabel: "Partner",
    entries: {
      "harthof-ascend": {
        name: "Harthof · ASCEND",
        field: "Plus-Energie-Quartier",
        status: "In Planung",
        year: "EU-Projekt ASCEND",
        summary:
          "Ein Plus-Energie-Quartier in Harthof im Rahmen des EU-Projekts ASCEND. Großspeicher und Ladesäulen sind zusätzlich zur Solaranlage geplant.",
        specLabels: ["Fläche"],
        heroLine: "Plus-Energie-Quartier, ca. 450 m², in Planung",
        photoAlt:
          "Eine Luftbildkarte des Münchner Stadtteils Harthof mit dem gelb markierten ASCEND-Projektgebiet",
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
        "Nicht alles muss über einen Partner kommen. Wenn du eine Idee hast, ein Gebäude, eine Messung, die du machen willst, oder eine Frage, die dich umtreibt, kann daraus ein Projekt von gREen Tumorrow werden. Und du leitest es.",
      examplesLabel: "Zum Beispiel",
      examples: [
        "Ein Dach, dessen Eigentümer du schon kennst",
        "Ein Werkzeug oder Modell, das in Erneuerbaren-Projekten fehlt",
        "Eine Untersuchung oder Messreihe, die noch niemand gemacht hat",
      ],
    },
  },

  team: {
    title: "Studierendenteam",
    /** One entry per person, added when their portrait lands. */
    people: {
      "Prof. Dr. Christoph Goebel": {
        programme: "Professor für Energiemanagement-Technologien",
      },
    },
  },

  advisors: {
    title: "Betreuer",
  },

  partners: {
    title: "Partner",
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
        title: "Du willst die Energiewende voranbringen? Fang hier an.",
        lead: "Sag uns, wer du bist und was du studierst. Was motiviert dich mitzumachen? Bei uns gibt es viele Möglichkeiten und viel Flexibilität, du entscheidest, wie viel Zeit und Energie du einbringst. Bring deine eigenen Ideen mit und setze sie gemeinsam mit uns um.",
      },
      {
        title: "Hast du eine Herausforderung im Energiebereich? Bring sie zu uns.",
        lead: "Bring uns dein kniffligstes Problem aus dem Bereich Erneuerbare oder Speicher. Gemeinsam entwickeln wir innovative Lösungen, die sich in der Praxis bewähren. Läuft bei dir schon ein Projekt und du willst frischen Wind mit an Bord holen? Kontaktiere uns jederzeit.",
      },
      {
        title: "Du willst etwas in deinem Umfeld verändern? Fang hier an.",
        lead: "Du willst dein Wissen über Energie teilen oder etwas in deiner Nachbarschaft verbessern, weißt aber nicht, wie du anfangen sollst? Du musst weder Studierender noch Experte sein, nur der Wille zählt, etwas zu bewegen. Melde dich jederzeit bei uns, wir helfen dir beim ersten Schritt.",
      },
    ],
    cta: "Formular ausfüllen",
    contactUs: "Kontaktiere uns",
    audiences: ["Studierende", "Unternehmen und Organisationen", "Energiebegeisterte"],
  },

  footer: {
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
