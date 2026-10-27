import type { Copy } from "./types.ts";
import { partnerCount, studentCount } from "../shared.ts";

/**
 * German lives under /de; English is the default at the root.
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
    sections: { projects: "Projekte", events: "Events", about: "Über uns" },
    home: "gREen Tumorrow, Startseite",
    skipToContent: "Zum Inhalt springen",
    openMenu: "Menü öffnen",
    closeMenu: "Menü schließen",
    mainNav: "Hauptnavigation",
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
      text: "Eine Zukunft, in der erneuerbare Energie von Innovation angetrieben wird und von allen getragen wird.",
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
      { value: String(partnerCount), label: "Partner" },
      { value: "2", label: "Solarprojekte" },
      { value: String(studentCount), label: "Studierende" },
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
    title: "Projekte",
    lead: "Alles, was wir tun, hängt an einem echten Gebäude, einem echten Budget oder einer echten Forschungsfrage. Bei Solar sind zwei Projekte in Planung und eines wartet auf die Genehmigung. Bei Wind suchen wir einen Partner.",
    jumpLabel: "Springe zu",
    pvTitle: "PV-Projekte",
    windTitle: "Windprojekte",
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
      "tum-garching": {
        name: "TUM-Projekt · Garching",
        field: "Solar",
        status: "Konzept",
        year: "Genehmigung ausstehend",
        summary:
          "Eine Solaranlage an der TUM selbst, auf dem Campus Garching. Die Idee steht, die Genehmigung steht noch aus, festgelegt ist also noch nichts. Wir sammeln gerade Ideen und brauchen mehr Leute, die mitplanen.",
        specLabels: ["Standort"],
        heroLine: "Solar auf dem TUM-Campus Garching, Genehmigung ausstehend",
        photoAlt:
          "Der TUM-Campus Garching von oben, ein langes Gebäude mit Glasdach, dessen Flügel mit Solarmodulen belegt sind, umgeben von Wiesen und Bäumen",
      },
    },
    wind: {
      status: "Partner gesucht",
      field: "Exkursion",
      name: "Besuch auf einer Windbaustelle",
      summary:
        "Wir wollen sehen, wie ein Windrad entsteht, nicht nur darüber lesen. Geplant ist eine Exkursion mit einem Unternehmen, das Windprojekte baut: Studierende besuchen die Baustelle und lernen die Planung dahinter kennen. Weder der Partner noch der Termin stehen bisher fest.",
      asks: [
        {
          label: "Für Unternehmen",
          text: "Sie planen oder bauen Windenergieanlagen und würden eine Gruppe TUM-Studierender auf die Baustelle oder in die Planung mitnehmen? Melden Sie sich bei uns.",
          cta: "Partner werden",
          subject: "Wind-Exkursion: Partnerschaft",
        },
        {
          label: "Für Studierende",
          text: "Wir brauchen Leute, die einen Partner finden, den Kontakt halten und den Besuch planen. Wenn du mitorganisieren oder einfach mitkommen willst, melde dich.",
          cta: "Mitplanen",
          subject: "Wind-Exkursion: Ich mache mit",
        },
      ],
      photoAlt:
        "Vier Windräder über einem Wald und einer grünen Wiese unter blauem Himmel",
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

  events: {
    title: "Events",
    countdownLabel: "Noch",
    countdownDone: "Heute ist es so weit",
    units: { days: "Tage", hours: "Stunden", minutes: "Minuten", seconds: "Sekunden" },
    dateLabel: "Datum",
    placeLabel: "Ort",
    register: "Sichere dir deinen Platz, die Plätze sind begrenzt",
    entries: {
      "watt-the-hack": {
        name: "WATT THE HACK",
        tagline: "Energy & AI Hackathon",
        presentedBy: "Veranstaltet von gREen Tumorrow während der Munich Climate Week",
        date: "24. Oktober 2026",
        place: "Audimax, TUM Stammgelände",
        recap:
          "Am 24. Oktober 2026 haben wir während der Munich Climate Week WATT THE HACK im Audimax auf dem TUM Stammgelände veranstaltet. Teams von Studierenden haben an vier echten Challenges unserer Partner gearbeitet, von Ertragsverlusten im Windpark bis zum öffentlichen E-Laden, und das Gewinnerteam jeder Challenge hat 1.000 € mitgenommen.",
        photoAlt:
          "Veranstaltungsplakat für WATT THE HACK, Energy & AI Hackathon, 24. Oktober auf dem TUM Stammgelände: eine illustrierte grüne Stadt mit Windrädern und Beschriftungen für KI-Anwendungen wie Speichermanagement und Windprognosen",
      },
    },
  },

  wattTheHack: {
    partnersTitle: "Unsere Challenge-Partner und Sponsoren",
    partnersLead:
      "Jeder Partner hat ein echtes Problem aus der eigenen Arbeit mitgebracht.",
    logoAlt: "Logo von",
    winnersTitle: "Gewinnerteams",
    winnersLead:
      "Jede Challenge hatte ihr eigenes Gewinnerteam, und jedes Gewinnerteam hat 1.000 € erhalten, insgesamt 4.000 €.",
    challengeWord: "Challenge",
    prize: "1.000 €",
    challenges: {
      "baywa-re": {
        title: "Energieverluste von Windparks vorhersagen",
        summary:
          "Die Windgeschwindigkeiten, die ein Windpark während eines Ausfalls nicht misst, aus einem benachbarten Referenzpark vorhersagen und den Ertragsverlust in kWh berechnen.",
        winnerPhotoAlt:
          "FAMi auf der Bühne im Audimax mit einem großen Preisscheck über 1.000 Euro und Blumensträußen, unter einer Leinwand mit dem Preis",
      },
      "nomadic-drones": {
        title: "Damit der Strom weiter fließt",
        summary:
          "Planen, wie mobile, selbstladende Sensoren, die zwischen Stromleitungen fliegen, nach Stürmen, Hitze oder Waldbränden Netzschäden untersuchen.",
        winnerPhotoAlt:
          "NomaderWatt auf der Bühne im Audimax mit einem großen Preisscheck über 1.000 Euro und Blumensträußen, unter einer Leinwand mit dem Preis",
      },
      ecurious: {
        title: "Ein smartes Reservierungssystem für öffentliches E-Laden",
        summary:
          "Einen Prototyp einer Lade-App auf der Reservierungshardware von Ecurious bauen, damit Fahrer einen öffentlichen Ladeplatz reservieren und ihn bei Ankunft frei vorfinden.",
        winnerPhotoAlt:
          "Flash auf der Bühne im Audimax mit einem großen Preisscheck über 1.000 Euro, unter einer Leinwand, die sie als Gewinner der Ecurious Challenge zeigt",
      },
      nuuenergy: {
        title: "Bereit für die Wärmepumpe?",
        summary:
          "Kann KI Hausbesitzern sagen, ob ihr Zuhause für eine Wärmepumpe bereit ist, ohne auf eine Begehung vor Ort zu warten?",
        winnerPhotoAlt:
          "Team Swap auf der Bühne im Audimax mit einem großen Preisscheck über 1.000 Euro, unter einer Leinwand, die sie als Gewinner der nuuEnergy Challenge zeigt",
      },
    },
    galleryTitle: "Fotos vom Tag",
    galleryCredit: "Kamerafotos von",
    galleryAlts: [
      "Teilnehmende stehen an der Registrierung in der Glashalle an und schreiben Namensschilder",
      "Weitere Teilnehmende kommen an der Registrierung an",
      "Eine teilnehmende Person zeigt neben dem Frühstückstisch mit Brot, Gebäck und Haferdrink den Daumen nach oben",
      "Vier Teilnehmende lächeln in einer Pause, mit Kaffee und Tellern in der Hand",
      "Eine teilnehmende Person lächelt neben der Registrierung in die Kamera, dahinter Partner-Banner und viele Menschen",
      "Eine Person von Nomadic Drones unterschreibt den Preisscheck für ihre Challenge",
      "Eine Person von nuuEnergy unterschreibt den Preisscheck für ihre Challenge",
      "Zwei Vortragende auf der Bühne vor einer Folie der Munich Climate Week",
      "Eine vortragende Person erklärt mit Mikrofon etwas auf der Bühne",
      "Zwei Personen von BayWa r.e. stellen auf der Bühne ihre Challenge vor, dahinter ihre Profile auf der Leinwand",
      "Zwei Personen von BayWa r.e. stellen auf der Bühne ihre Challenge vor",
      "Eine vortragende Person auf der Bühne im Audimax vor der Titelfolie von WATT THE HACK",
      "Eine vortragende Person mit Mikrofon neben dem TUM-Rednerpult",
      "Zwei Vortragende erklären neben dem Rednerpult die Challenge von BayWa r.e., die Aufgabe auf der Leinwand",
      "Eine vortragende Person auf der Bühne des Audimax zeigt Energiepreisdaten auf der großen Leinwand",
      "Eine vortragende Person stellt im Audimax die Challenge von Nomadic Drones vor",
      "Eine vortragende Person mit Mikrofon gestikuliert neben dem TUM-Rednerpult",
      "Eine vortragende Person im nuuEnergy-Pullover auf der Bühne neben dem Rednerpult",
      "Eine vortragende Person auf der Bühne vor dem großen nuuEnergy-Logo auf der Leinwand",
      "Gespräche am Stand von nuuEnergy in der Glashalle",
      "Ein Team arbeitet an einem Tisch an Laptops",
      "Reihen von Teams bei der Arbeit in der Glashalle",
      "Teilnehmende konzentrieren sich am Laptop auf ihren Code",
      "Ein Team bespricht am Tisch seinen Ansatz",
      "Zwei Teilnehmende arbeiten gemeinsam an einem Laptop",
      "Gespräche am Stand von nuuEnergy neben einem Preisscheck",
      "Zwei Teilnehmende am Stand von BayWa r.e., neben einem Preisscheck an der Pinnwand",
      "Ein Team an einem Tisch an der Glasfront bespricht seine Arbeit",
      "Teams arbeiten an Tischen entlang der Glasfront",
      "Die Glashalle von oben, die Teams auf die Tische verteilt",
      "Drei Teilnehmende arbeiten an einem Tisch mit Laptops und Getränken",
      "Ein Team arbeitet am Fenster an seinen Laptops",
      "Mehrere Teams arbeiten nebeneinander in der Halle",
      "Eine teilnehmende Person arbeitet an einem Laptop mit Blätter-Aufklebern",
      "Teilnehmende konzentriert vor ihren Bildschirmen",
      "Eine teilnehmende Person schaut auf den Laptop, daneben ein Kaffee",
      "Drei Teilnehmende unterhalten sich in einer Pause",
      "Teilnehmende arbeiten an einem langen Tisch an Laptops",
      "Zwei Personen von nuuEnergy an ihrem Stand",
      "Zwei Teilnehmende programmieren nebeneinander am Fenster",
      "Zwei Teilnehmende arbeiten zusammen an einem Laptop",
      "Eine Person spricht mit einem Team an dessen Tisch",
      "Eine Person im T-Shirt der Munich Climate Week schneidet draußen eine Grimasse",
      "Ein Team arbeitet in der Glashalle an Laptops",
      "Eine Person spricht mit einem Team an dessen Laptops",
      "Gespräche vor dem Banner von BayWa r.e. und den Preisschecks",
      "Drei Personen unterhalten sich vor dem Banner von BayWa r.e.",
      "Teilnehmende am Stand von nuuEnergy",
      "Eine Person von Nomadic Drones erklärt etwas an ihrem Banner",
      "Teilnehmende in eine Diskussion vertieft an ihrem Tisch",
      "Ein Team an einem runden Tisch, von oben gesehen",
      "Eine Person im T-Shirt der Munich Climate Week lacht, eine Kamera in der Hand",
      "Vier Personen posieren vor dem Banner von Nomadic Drones",
      "Drei Personen lächeln in der Glashalle",
      "Eine Gruppe von sechs Personen lächelt in der Glashalle",
      "Zwei Personen am Kaffee- und Snacktisch",
      "Vier Teilnehmende posieren zusammen, eine Person zeigt den Daumen nach oben",
      "Ein Team an seinem Tisch, ein Mitglied schaut vom Laptop auf",
      "Teilnehmende beugen sich gemeinsam über einen Laptop",
      "Teams bei der Arbeit im Abendlicht der Glashalle",
      "Teams arbeiten und essen an ihren Tischen",
      "Zwei Teilnehmende schauen an ihrem Tisch auf ein Handy",
      "Ein Team an seinem Tisch zeigt den Daumen nach oben",
      "Teams arbeiten an langen Tischreihen in der Glashalle",
      "Drei Teilnehmende besprechen ihre Arbeit an den Laptops",
      "Zwei Personen schauen gemeinsam auf ein Handy",
      "Teams arbeiten in der Glashalle an Laptops, vor den Fenstern Bäume",
      "Drei Teilnehmende arbeiten an einem Tisch an der Glasfront",
      "Teilnehmende stehen um eine gelbe Parkplatzsperre von Ecurious und testen sie mit einem Laptop",
      "Zwei Personen von BayWa r.e. an einem Stehtisch neben einem Preisscheck an der Pinnwand",
      "Teilnehmende drängen sich um den Stand von nuuEnergy",
      "Teilnehmende versammeln sich am Banner von Nomadic Drones",
      "Teilnehmende arbeiten auf den Stufen des Audimax",
      "Ein Team versammelt sich in den Reihen des Audimax um einen Laptop",
      "Ein Team geht im Audimax am Laptop seine Folien durch",
      "Die Moderation erklärt im Audimax den Ablauf",
      "Die Moderation spricht im Audimax zu den Teams",
      "Ein Team bereitet in den Reihen des Audimax seinen Pitch vor",
      "Personen warten in den Reihen des Audimax auf die Pitches",
      "Teilnehmende warten in den Reihen des Audimax",
      "Die Moderation auf der Bühne vor den sitzenden Teams, kurz vor den Pitches",
      "Ein Team pitcht auf der Bühne, ein Mitglied hält einen Laptop",
      "Ein Team pitcht auf der Bühne neben dem Rednerpult",
      "Zwei Personen hören einem Pitch zu",
      "Die Jury hört von ihren Plätzen auf der Bühne einem Pitch zu",
      "Ein Team pitcht, eine Grafik auf der Leinwand",
      "Die Jury verfolgt einen Pitch aufmerksam",
      "Die Jury hört zu, ein Mitglied in Gedanken versunken",
      "Die Jury lehnt sich während eines Pitches zurück",
      "Ein Team präsentiert neben dem Rednerpult, die Folie auf der Leinwand",
      "Ein Team pitcht vor einer Karte auf der Leinwand",
      "Ein Team pitcht mit einer Folie zur Frage, wo eine Übertragungsleitung gerissen ist",
      "Ein Team pitcht mit einer Folie im Baywatch-Stil auf der Leinwand",
      "Jurymitglieder sprechen in der ersten Reihe",
      "Ein Team pitcht mit einer Folie dazu, wie lange die Fehlersuche im Netz dauert",
      "Eine teilnehmende Person auf der Bühne hört einer Frage zu",
      "Teams und Publikum verfolgen die Pitches aus den Reihen des Audimax",
      "Ein Team stellt vor, wie eine Drohne einen Netzfehler findet",
      "Ein Team pitcht seine Idee Storm Drone Response",
      "Ein Team pitcht byteMD, der Name auf der Leinwand",
      "Ein Team mit Laptops am Rednerpult auf der Bühne",
      "Ein Team präsentiert eine Wärmepumpen-Schätzung auf der Leinwand",
      "Zwei Personen auf der Bühne mit Mikrofon lesen von einer Karte ab",
      "Flash auf der Bühne mit dem Preisscheck, unter einer Leinwand, die sie als Gewinner der Ecurious Challenge zeigt",
      "Flash mit dem Preisscheck auf der Bühne",
      "FAMi nimmt auf der Bühne den Preisscheck entgegen",
      "FAMi auf der Bühne mit Preisscheck und Blumen",
      "NomaderWatt wird auf die Bühne gerufen, ihr Name auf der Leinwand",
      "NomaderWatt mit Preisscheck und Blumen",
      "NomaderWatt auf der Bühne mit Preisscheck und Blumen",
      "NomaderWatt feiert mit dem Preisscheck",
      "Team Swap auf der Bühne mit dem Preisscheck, unter einer Leinwand, die sie als Gewinner der nuuEnergy Challenge zeigt",
      "Die Jury und die Challenge-Partner mit Blumen auf der Bühne, unter einer Folie mit der Aufschrift Meet the jury",
      "Alle auf der Bühne zum Gruppenfoto unter der Leinwand von WATT THE HACK",
      "Zwei Personen mit Blumen vor den Partner-Logos",
      "Alle vier Gewinnerteams mit ihren Schecks vor den Logos der Challenge-Partner",
      "Die vier Gewinnerteams auf der Bühne mit ihren Preisschecks, unter einer Leinwand mit dem Titel WATT THE HACK und den Logos der Challenge-Partner",
      "Zwei Mitglieder von Flash albern mit dem riesigen Scheck herum",
      "Die Moderation mit Mikrofon auf der Bühne vor der Folie von WATT THE HACK",
      "Eine Person am Rednerpult nach dem Event, dahinter die Partner-Logos",
      "Vier Personen lächeln auf der Bühne vor den Partner-Logos",
      "Flash nimmt auf der Bühne den Preisscheck entgegen",
      "Die vier Gewinnerteams gemeinsam mit ihren Preisschecks vor den Logos der Challenge-Partner",
      "Zwei Mitglieder von Flash lachen mit dem riesigen Scheck",
      "Zwei Mitglieder von Flash ziehen vor der Leinwand an ihrem Preisscheck",
      "NomaderWatt posiert mit dem Scheck, ein Mitglied in einer Breakdance-Pose auf dem Boden",
      "Drei Personen umarmen sich nach dem Event im leeren Audimax",
    ],
  },

  team: {
    title: "Studierendenteam",
    /** One entry per person, added when their portrait lands. */
    people: {
      "Salma Gares": { role: "Gründerin" },
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
