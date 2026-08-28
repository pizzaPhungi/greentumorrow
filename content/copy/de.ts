import { TODO } from "../shared.ts";
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
    title: "gREen tumorrow: Studenteninitiative für Erneuerbare an der TUM",
    description:
      "gREen tumorrow ist ein Verein für alle, die sich für Erneuerbare Energien begeistern und die Energiewende aktiv voranbringen wollen. Von Wissen weitergeben bis zu echten Energieprojekten, für eine nachhaltige und dezentrale Energieversorgung.",
    ogLocale: "de_DE",
  },

  nav: {
    join: "Mitmachen",
    home: "gREen tumorrow, Startseite",
    skipToContent: "Zum Inhalt springen",
    openMenu: "Menü öffnen",
    closeMenu: "Menü schließen",
  },

  hero: {
    eyebrow: "Studenteninitiative",
    headline: "Als Studierende bringen wir die Energiewende voran.",
    lead: "ist ein Verein für alle, die sich für Erneuerbare Energien begeistern und die Energiewende aktiv voranbringen wollen. Wir fördern Austausch und Zusammenarbeit und schaffen Gelegenheiten, aus Ideen etwas Konkretes zu machen. Von Wissen weitergeben bis zu echten Energieprojekten, die wir gemeinsam planen und umsetzen, für eine nachhaltige und dezentrale Energieversorgung.",
    joinCta: "Zur WhatsApp-Gruppe",
    projectsCta: "Woran wir arbeiten",
    photoAlt: TODO("Alt-Text für das Hero-Foto, zusammen mit dem Foto zu schreiben"),
  },

  stats: [
    { value: "6", label: "Studierende", note: "dazu zwei Betreuer" },
    { value: "2", label: "Energieprojekte", note: "mit Partnern" },
    {
      value: TODO("Wie viele Veranstaltungen habt ihr bisher gemacht?"),
      label: "Veranstaltungen",
      note: "Vorträge und Abende zu Erneuerbaren",
    },
    {
      value: "35",
      unit: "kWp",
      label: "in laufenden Projekten",
      note: "was die beiden zusammen ergeben",
    },
  ],

  pillars: {
    eyebrow: "Was wir machen",
    items: [
      {
        prefix: "RE",
        name: "Community",
        text: "Industrie, Hochschule und Quartier sitzen selten am selben Tisch. Wir setzen sie zusammen, weil ein Projekt genau das braucht, bevor irgendwo gebaut wird.",
      },
      {
        prefix: "RE",
        name: "Projekte",
        text: "Anlagen planen, finanzieren und bauen, bis sie am Netz sind. Hier passiert der größte Teil der Arbeit.",
      },
      {
        prefix: "RE",
        name: "Wissen",
        text: "Was wir auf dem Dach lernen, bleibt nicht dort. Wir machen Veranstaltungen zu Erneuerbaren, offen für alle, die verstehen wollen, wie das wirklich funktioniert.",
      },
    ],
  },

  events: {
    eyebrow: "Weitergeben",
    title: "Veranstaltungen zu Erneuerbaren",
    lead: "Etwas zu bauen bringt einem Dinge bei, die keine Vorlesung vermittelt. Diese Abende machen wir für alle, die sie wollen: Studierende und Nachbarn gleichermaßen.",
    sofar: TODO(
      "Welche Veranstaltungen liefen bisher: Titel, ungefähr wann, und wer da war",
    ),
  },

  projects: {
    eyebrow: "Woran wir arbeiten",
    title: "Unsere Projekte",
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
          "Das Gemeindegebäude in Neuperlach von oben: ein langes Ziegeldach und ein weißer Glockenturm, bevor die Anlage daraufkommt",
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
      requirements: TODO(
        "Was ein Projektvorschlag braucht und wer ihn freigibt: wie ein Projekt tatsächlich startet",
      ),
    },
  },

  team: {
    eyebrow: "Mit wem du arbeiten würdest",
    title: "Unsere Mitglieder",
    advisorBadge: "Betreuer",
    people: {
      "Alex Treml": {
        role: "Akquise",
        work: "Findet das nächste Dach und den Partner dahinter",
      },
      "Nana Kwabena Osei": {
        role: "Technik",
        work: "Begehungen, Auslegung und Ertragssimulation",
      },
      "Duc Viet Phung": {
        role: "Finanzen",
        work: "Wirtschaftlichkeit, Förderwege und Projektbudgets",
      },
      "Marvin Elling": {
        role: "Recht",
        work: "Verträge mit Eigentümern, Energierecht und Nachweise",
      },
      "Salma Gares": {
        role: "Öffentlichkeitsarbeit",
        work: "Präsenz auf dem Campus, Termine im Viertel und diese Website",
      },
      "Karim Alzahabi": {
        role: "Forschung und Entwicklung",
        work: "Energy Sharing, Speicher und neue Projektmodelle",
      },
      "Dr. Markus Eblenkamp": {
        role: "Lehre",
        work: "Verbindet unsere Projekte mit Lehrstühlen und Lehrformaten der TUM",
      },
      "Dr. Christoph Göbel": {
        role: "Lehre",
        work: "Betreut wissenschaftliche Arbeiten aus unseren Projekten",
      },
    },
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
    title:
      "Die Energiewende braucht Leute, die schon mal etwas gebaut haben. Fang hier an.",
    lead: "Es gibt keine Bewerbung. Alles läuft über eine WhatsApp-Gruppe: was diese Woche ansteht, wo jemand Hilfe braucht, wann wir uns treffen.",
    cta: "Zur WhatsApp-Gruppe",
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
