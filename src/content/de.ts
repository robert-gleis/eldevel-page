// Deutsche Texte für eldevel Landing Page
// Strukturiert für spätere Internationalisierung

export const content = {
  meta: {
    title: "eldevel – Electronics Development | Hans-Jürgen Rode",
    description: "Professionelle Elektronik-Entwicklung von der Idee bis zur Serie. PCB-Design, Prototyping, Tests und Produktbegleitung. 20+ Jahre Erfahrung.",
    keywords: "Elektronik, PCB, Leiterplatten, Entwicklung, Prototyping, Altium Designer, Eagle, EMV, Tests",
  },
  
  navigation: {
    home: "Start",
    company: "Unternehmen", 
    services: "Leistungen",
    process: "Prozess",
    contact: "Kontakt",
    legal: "Rechtliches",
  },
  
  hero: {
    headline: "Elektronik-Entwicklung, die Produkte voranbringt.",
    subheadline: "Von der Idee bis zur Serie – Schaltung, PCB-Layout, Prototyping, Tests und Produktbegleitung.",
    cta_primary: "Projekt anfragen",
    cta_secondary: "Leistungen ansehen",
  },
  
  about: {
    headline: "Über eldevel",
    subheadline: "Ihr Partner für professionelle Elektronik-Entwicklung",
    intro: "Als erfahrener Elektronikentwickler unterstütze ich Sie bei der Realisierung Ihrer Elektronikprojekte – von der ersten Idee bis zur erfolgreichen Markteinführung.",
    experience: {
      title: "Hans-Jürgen Rode",
      subtitle: "Elektronikentwicklung seit 2011",
      description: "Mit über 20 Jahren Erfahrung in der Elektronikentwicklung und als selbständiger Unternehmer seit 2011 bringe ich fundiertes Fachwissen und bewährte Entwicklungsprozesse in Ihr Projekt ein.",
      highlights: [
        "20+ Jahre Erfahrung in der Elektronikentwicklung",
        "Selbständig seit 2011 als Einzelunternehmen",
        "Spezialist für Altium Designer und Eagle CAD",
        "ISO 9001:2015 zertifizierte Prozesse",
        "Umfassende EMV- und HALT-Testexpertise"
      ]
    }
  },
  
  services: {
    headline: "Unsere Leistungen",
    subheadline: "Komplettservice für Ihre Elektronikentwicklung",
    items: [
      {
        title: "Produktentwicklung",
        description: "Ganzheitliche Entwicklung von der Idee bis zum fertigen Produkt",
        icon: "cog",
        features: [
          {
            name: "Feasibility & Analyse",
            description: "Lasten- und Pflichtenheft-Erstellung, Blockschaltpläne, Risiko- und Kostenanalyse für fundierte Projektentscheidungen."
          },
          {
            name: "CAD-Entwicklung",
            description: "Professionelle Schaltplan-Entwicklung, PCB-Layout, Materialmanagement und Fertigungsdaten mit Altium Designer und Eagle."
          },
          {
            name: "Redesign & Optimierung",
            description: "Optimierung bestehender Designs durch Erkenntnisse aus Tests, Kostenoptimierung und Verbesserungen."
          },
          {
            name: "Produktbegleitung",
            description: "Qualitäts-, Termin- und Produktionsüberwachung, Feldfeedback-Integration und Reparaturservice."
          }
        ]
      },
      {
        title: "Kleinserienfertigung",
        description: "Fertigung von Kleinserien mit höchster Qualität und Präzision",
        icon: "factory",
        features: [
          {
            name: "Prototyping & Tests",
            description: "Prototypenbau, Testsysteme, Inbetriebnahme, Fehleranalyse sowie EMV- und HALT-Tests."
          }
        ]
      }
    ]
  },
  
  process: {
    headline: "Unser Entwicklungsprozess",
    subheadline: "Strukturiert von der Idee zum fertigen Produkt",
    steps: [
      {
        number: "01",
        title: "Analyse & Konzept",
        description: "Gemeinsame Anforderungsanalyse und Erstellung eines detaillierten Entwicklungskonzepts."
      },
      {
        number: "02", 
        title: "Design & Layout",
        description: "Schaltungsentwurf und PCB-Layout mit modernsten CAD-Tools und bewährten Design-Rules."
      },
      {
        number: "03",
        title: "Prototyping",
        description: "Aufbau und Test von Prototypen zur Funktionsverifikation und Optimierung."
      },
      {
        number: "04",
        title: "Validierung",
        description: "Umfassende Tests inklusive EMV-Prüfung und HALT-Tests für Produktionssicherheit."
      },
      {
        number: "05",
        title: "Produktion",
        description: "Fertigungsbegleitung und Qualitätssicherung für einen erfolgreichen Produktionsstart."
      }
    ]
  },
  
  clients: {
    headline: "Unsere Kunden",
    subheadline: "Vertrauen etablierter Unternehmen",
    companies: [
      {
        name: "Coherent GmbH",
        logo: "Coherent.png",
        alt: "Coherent GmbH Logo"
      },
      {
        name: "Flügel GmbH",
        logo: "Fluegel_logo.png",
        alt: "Flügel GmbH Logo"
      },
      {
        name: "Hochschule Flensburg",
        logo: "FH Flensburg_Logo_color_schrift_grau_72dpi-320px.png",
        alt: "Hochschule Flensburg Logo"
      },
      {
        name: "Industriekonzeptakademie",
        logo: "IndustrieKonzeptakademie.gif",
        alt: "Industriekonzeptakademie Logo"
      },
      {
        name: "Mandarien Medien",
        logo: "Mandarien Medien.png",
        alt: "Mandarien Medien Logo"
      },
      {
        name: "Medizinisches Laserzentrum Lübeck",
        logo: "Medizienes_Laserzentrum_Luebeck.png",
        alt: "Medizinisches Laserzentrum Lübeck Logo"
      },
      {
        name: "THW - Flensburg",
        logo: "THW FL.png",
        alt: "THW Flensburg Logo"
      },
      {
        name: "Thorlabs GmbH",
        logo: "Thorlabs.jpg",
        alt: "Thorlabs GmbH Logo"
      },
      {
        name: "Trident GmbH",
        logo: "Trident.png",
        alt: "Trident GmbH Logo"
      },
      {
        name: "Visotec GmbH",
        logo: "Visotec-Logo-final_HE_rgb_2025-scaled.jpg",
        alt: "Visotec GmbH Logo"
      },
      {
        name: "WES Energy GmbH",
        logo: "20210211_WES-energy_300px.png",
        alt: "WES Energy GmbH Logo"
      },
      {
        name: "WES Smart Power Electronics GmbH",
        logo: "20210211_WES-smartpower_300px.png",
        alt: "WES Smart Power Electronics GmbH Logo"
      }
    ]
  },
  
  contact: {
    headline: "Kontakt aufnehmen",
    subheadline: "Lassen Sie uns über Ihr Projekt sprechen",
    cta: "Nachricht senden",
    info: {
      company: "eldevel – Electronics Development",
      owner: "Hans-Jürgen Rode",
      address: {
        street: "Lise-Meitner-Straße 2",
        city: "24941 Flensburg",
        country: "Deutschland"
      },
      phone: "0461 – 494 339 10",
      email: "info@eldevel.de",
      hours: "Mo–Fr 9–17 Uhr",
      legal_form: "Einzelunternehmen"
    },
    form: {
      name: "Name",
      email: "E-Mail",
      company: "Unternehmen (optional)",
      subject: "Betreff",
      message: "Nachricht",
      privacy: "Ich stimme der Verarbeitung meiner Daten gemäß der Datenschutzerklärung zu.",
      submit: "Nachricht senden"
    }
  },
  
  legal: {
    imprint: {
      headline: "Impressum",
      content: {
        company: "eldevel – Electronics Development",
        owner: "Hans-Jürgen Rode",
        address: "Lise-Meitner-Straße 2, 24941 Flensburg, Deutschland",
        phone: "Telefon: 0461 – 494 339 10",
        email: "E-Mail: info@eldevel.de",
        form: "Rechtsform: Einzelunternehmen",
        responsible: "Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV: Hans-Jürgen Rode",
      }
    },
    privacy: {
      headline: "Datenschutzerklärung",
      intro: "Der Schutz Ihrer persönlichen Daten ist uns wichtig. Diese Datenschutzerklärung informiert Sie über die Verarbeitung personenbezogener Daten auf unserer Website.",
      sections: [
        {
          title: "Verantwortlicher",
          content: "Verantwortlicher für die Datenverarbeitung: Hans-Jürgen Rode, Lise-Meitner-Straße 2, 24941 Flensburg, info@eldevel.de"
        },
        {
          title: "Erhebung und Verwendung von Daten",
          content: "Wir erheben und verwenden personenbezogene Daten nur im Rahmen der gesetzlichen Bestimmungen. Bei Kontaktaufnahme über das Kontaktformular oder per E-Mail werden die übermittelten Daten zur Bearbeitung Ihrer Anfrage gespeichert."
        },
        {
          title: "Ihre Rechte",
          content: "Sie haben das Recht auf Auskunft, Berichtigung, Löschung und Einschränkung der Verarbeitung Ihrer personenbezogenen Daten sowie das Recht auf Datenübertragbarkeit und Widerspruch."
        }
      ]
    }
  },
  
  footer: {
    tagline: "Elektronik-Entwicklung mit Erfahrung und Präzision",
    copyright: "© 2024 eldevel – Electronics Development. Alle Rechte vorbehalten.",
    links: {
      imprint: "Impressum",
      privacy: "Datenschutz"
    }
  }
};
