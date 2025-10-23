const fs = require('fs');
const path = require('path');

// Complete German translation
const de = {
  "common": {
    "brand": "Arabian Eagle International",
    "tagline": "Reisen leichter gemacht",
    "readMore": "Mehr lesen",
    "joinNow": "Jetzt beitreten",
    "learnMore": "Mehr erfahren",
    "getStarted": "Loslegen",
    "contactUs": "Kontaktieren Sie uns",
    "copyright": "Arabian Eagle International © 2011",
    "legalNotice": "Rechtlicher Hinweis",
    "downloadPdf": "PDF herunterladen",
    "page": "Seite",
    "of": "von",
    "email": "E-Mail",
    "phone": "Telefon",
    "website": "Webseite"
  },
  "brochure": {
    "ourImpact": "Unsere Wirkung",
    "memberBenefits": "Mitgliedervorteile",
    "ourServices": "Unsere Dienstleistungen",
    "moreServices": "Weitere Dienstleistungen",
    "membershipTiers": "Mitgliedschaftsstufen",
    "hotDeals": "Top-Angebote",
    "moreHotDeals": "Weitere Angebote",
    "saveUpTo": "Sparen Sie bis zu",
    "packageIncludes": "Paket beinhaltet:",
    "starter": "EINSTEIGER",
    "recommended": "EMPFOHLEN",
    "premium": "PREMIUM",
    "mostPopular": "⭐ Am beliebtesten",
    "readyToStart": "Bereit, Ihre Reise zu beginnen?",
    "service": "Service",
    "was": "War",
    "nowOnly": "Jetzt nur"
  },
  "nav": {
    "home": "Startseite",
    "about": "Über AE",
    "cards": "AE Karten",
    "priorityPass": "Priority Pass",
    "services": "Dienstleistungen",
    "join": "Beitreten",
    "contact": "Kontakt",
    "experiences": "Reiseerfahrungen",
    "hotels": "Hotelpreise anfragen",
    "deals": "Urlaubsangebote",
    "login": "Anmelden",
    "register": "Registrieren"
  },
  "home": {
    "hero": {
      "title": "Reisen wird",
      "titleHighlight": "Einfacher",
      "subtitle": "Die ARABIAN EAGLE INT'L Karte wurde speziell entwickelt, um Probleme für häufige internationale Reisende zu minimieren und gleichzeitig Kosten bei den wichtigsten Dienstleistungen zu senken.",
      "ctaPrimary": "Jetzt beitreten",
      "ctaSecondary": "Mehr erfahren"
    },
    "stats": {
      "hotels": "1.145.000+",
      "hotelsLabel": "Hotels weltweit",
      "lounges": "850+",
      "loungesLabel": "VIP-Lounges",
      "countries": "120+",
      "countriesLabel": "Länder",
      "discount": "75%",
      "discountLabel": "Rabatt bis zu"
    },
    "benefits": {
      "title": "Exklusive Mitgliedervorteile",
      "subtitle": "Genießen Sie Premium-Reisedienstleistungen zu unschlagbaren Preisen",
      "hotelTitle": "Hotel-Rabatte",
      "hotelDesc": "Zugang zu über 1.145.000 Hotels weltweit mit bis zu 75% Rabatt auf Standardpreise",
      "loungeTitle": "Flughafen-Lounges",
      "loungeDesc": "850+ VIP-Lounges an großen Flughäfen in über 120 Ländern, unabhängig von Ihrer Fluggesellschaft",
      "carTitle": "Autovermietung",
      "carDesc": "Sparen Sie bis zu 30% bei Autovermietungen für alle Ihre weltweiten Reisen",
      "cardTitle": "MasterCard",
      "cardDesc": "Arabian Eagle MasterCard Prepaid-Debitkarte mit exklusiven Mitgliederprivilegien"
    },
    "promotion": {
      "title": "Sonderangebot",
      "freePass": "Priority Pass KOSTENLOS für ein Jahr",
      "withFirstTrip": "Mit der ersten REISE"
    },
    "howItWorks": {
      "title": "Wie es funktioniert",
      "step1Title": "Mitgliedschaft beitreten",
      "step1Desc": "Registrieren Sie sich für Ihre Benutzer-ID und Ihr Passwort",
      "step2Title": "Buchen & Sparen",
      "step2Desc": "Zugang zu exklusiven Rabatten für Hotels, Lounges und Autovermietungen",
      "step3Title": "Einfach reisen",
      "step3Desc": "Genießen Sie Premium-Services und machen Sie Ihre Reise komfortabel mit weniger Kosten"
    },
    "cta": {
      "title": "Beginnen Sie bei Ihrer nächsten Reise zu sparen",
      "description": "Registrieren Sie sich jetzt für Ihre Benutzer-ID und Ihr Passwort, um auf die Website zuzugreifen und vollständige Informationen zu den Vorteilen zu erhalten und noch heute mit dem Sparen zu beginnen!",
      "button": "Konto erstellen"
    }
  },
  "about": {
    "title": "Über Arabian Eagle",
    "subtitle": "Ihr vertrauenswürdiger Partner für internationale Reisen",
    "whatIsAE": {
      "title": "Was ist Arabian Eagle",
      "description1": "Arabian Eagle International ist nicht nur ein neuer Weg, Ihr Geschäft und Ihre Dienstleistungen zu fördern, sondern einzigartig darin, tatsächlich das erste Kartenunternehmen zu sein, das sich auf die Bedienung von Reisenden von der Arabischen Halbinsel und anderen arabischen Ländern spezialisiert hat und Ihnen so die Möglichkeit bietet, ein breites Publikum mit hohem Einkommen zu erreichen.",
      "description2": "In mehreren Bereichen ähnelt es anderen Reisekarten, die in Bezug auf die dem Karteninhaber und dem Lieferunternehmen gebotenen Dienstleistungen und Vorteile weit verbreitet sind. Was sich jedoch unterscheidet, ist, dass Arabian Eagle International seine Dienstleistungen für einen der weltweit höchsten verfügbaren Einkommen für jeden Markt einzeln etabliert und gestaltet hat... speziell die arabische Welt, insbesondere die Arabische Halbinsel.",
      "description3": "In den letzten Jahren sind Araber und Einwanderer in die arabische Welt zu häufigen internationalen Reisenden geworden, die Hotels und Autovermietungsunternehmen mehr nutzen als ihre Kollegen in anderen geografischen Regionen. Tatsächlich geben Reisende aus der arabischen Welt mehr als einhundertzehn Milliarden US-Dollar pro Jahr für Reisen aus. Dies ist der Markt, den Arabian Eagle International Ihnen anbietet, um Ihr eigenes Geschäft zu fördern.",
      "description4": "Und Sie können als Geschäftspartner von Arabian Eagles Geschäftsvision und den unseren Mitgliedern angebotenen Dienstleistungen profitieren, sobald Sie Partner werden. Alles, was Sie tun müssen, ist uns Informationen über Ihr Geschäft, Ihre Dienstleistungen und Angebote als Partner zu geben, und wir werden sicherstellen, dass Ihre Geschäftsziele und Unternehmensbestrebungen mit einem Geschäftswachstum erreicht werden, das Ihre Erwartungen übertrifft.",
      "description5": "Das umfangreiche Mitgliederprogramm und unsere Fähigkeit, in Märkte einzutreten, haben uns zu einem der besten Pionierunternehmen in der Reisebranche gemacht. Unsere Mitglieder, die mehr als achtundzwanzigtausend sind, genießen eine Reihe von Dienstleistungen und die meisten von ihnen sind seit der Gründung unseres Geschäfts bei uns. Indem Sie Geschäftspartner werden, erhöhen Sie Ihren Kundenstamm durch unsere 42.000 Mitglieder, nutzen das Marketingpflegeteam unserer Mitglieder und unsere Einrichtungen zur Förderung Ihrer Dienstleistungen. Ein großer Schritt in der Geschäftsentwicklung, der normalerweise Jahre dauern würde, können Sie jetzt mit nur wenigen Klicks erreichen.",
      "description6": "Arabian Eagle International zielt darauf ab, seine Dienstleistungen für seine angeschlossenen Mitglieder zu verbessern und seine Geschäftsallianzen aus verschiedenen Ländern auf der ganzen Welt zu erhöhen. Arabian Eagle International hat das Vertrauen und die Loyalität seiner Mitglieder gewonnen und hält sein Geschäftswachstum stetig und streng, aber das ist auch das, was Sie als Geschäftspartner tun werden. Arabian Eagle wird nicht so sehr von Ihnen als Mitglied profitieren, wie Sie davon profitieren werden."
    },
    "companyOverview": {
      "title": "Unternehmensübersicht",
      "description1": "Arabian Eagle International für Tourismusdienstleistungen wurde 1986 gegründet, um im Namen von Geschäftsleuten und VIPs, die ständig reisen, als Verhandlungsgruppe zu fungieren.",
      "description2": "Arabian Eagle International Card gilt als Pionier in der Reisebranche und ist innovativ in der Art und Weise, wie Reisende zu den niedrigsten möglichen Kosten bedient und unterhalten werden.",
      "description3": "Jetzt, mit moderner Technologie und dem Eintritt des Internets in Häuser und Büros, hat Arabian Eagle International all diese Technologie in die Hände von Mitgliedern und Partnern gelegt, sei es zu Hause oder bei der Arbeit und in ihren Büros.",
      "description4": "Diese Möglichkeit ist für Mitglieder und Partner geeignet, um über ein fortschrittliches Technologienetzwerk auf alle Reisebedürfnisse zuzugreifen. Gleichzeitig genießen sie die einzigartigen niedrigen Kosten für Reisen überall auf der Welt.",
      "description5": "Darüber hinaus bietet Arabian Eagle seinen Mitgliedern Angebote, die Dienstleistungen von ihren eigenen Büros oder den Büros ihrer Geschäftspartner unterstützen.",
      "description6": "Die Mitgliedschaft ist für Menschen wie Sie, die als Führungskräfte im internationalen Geschäft und in der professionellen Gemeinschaft bei der Verwaltung und Organisation ihrer Reisen auf komfortable Weise gelten, während die Reisekosten reduziert werden, ohne den erforderlichen Komfort während der Reise zu beeinträchtigen.",
      "description7": "Von hier aus haben wir unser Bestes getan, um dem Reisenden zu helfen, Hindernisse zu überwinden und Ärger und Zeitverschwendung zu vermeiden, und Ihnen die beste Qualität an hervorragenden Dienstleistungen für jeden Dollar zu bieten, den Sie ausgeben, weil es in diesen Zeiten globaler finanzieller Schwierigkeiten von großer Bedeutung ist.",
      "description8": "Wohin Sie auch reisen, Sie können sicher sein, dass eine breite Palette von Versicherungsdokumenten ausschließlich dem Schutz von Ihnen und Ihren Angehörigen gewidmet ist, und die in diesem Leitfaden erwähnten exklusiven internationalen Privilegien werden sich weiterhin erweitern, um mit Ihren Anforderungen bei jeder Reise und die ganze Zeit Schritt zu halten, ohne von denen zu ermüden, die Ihnen im Arabian Eagle International Management oder einem der Unternehmen dienen, die mit uns zusammenarbeiten, um ihre Dienstleistungen international anzubieten.",
      "description9": "Darüber hinaus können Sie dazu beitragen, dies zu erreichen, indem Sie Ihre Vorschläge einreichen, damit wir den besten Weg bieten können, allen Kunden von Arabian Eagle International zu helfen, indem wir das Wort an Ihre Freunde und Reisepartner weitergeben.",
      "description10": "Dies wird zur Erweiterung der Mitgliedschaft und zur Erhöhung der Verhandlungsmacht führen, was wiederum eine Erhöhung und Verbesserung der Vorteile bedeutet."
    },
    "stats": {
      "title": "Wichtige Informationen",
      "founded": "Unternehmen gegründet",
      "foundedYear": "1986",
      "members": "Gesamtmitglieder",
      "membersCount": "42.000+",
      "market": "Zielmarkt",
      "marketDesc": "Reisende von der Arabischen Halbinsel und der arabischen Welt",
      "spending": "Jährliche Ausgaben",
      "spendingAmount": "110+ Milliarden $"
    },
    "partnership": {
      "title": "Partnerschaftsmöglichkeiten",
      "subtitle": "Was sind die Kosten und was sind die Vorteile des Beitritts zum Arabian Eagle International Geschäftsentwicklungsplan?",
      "noCost": "Tatsächlich gibt es keine Kosten oder finanziellen Ausgaben für den Beitritt zum Arabian Eagle International Plan.",
      "formInstruction": "Alles, was Sie tun müssen, ist das Formular auszufüllen und die Felder auszufüllen und die verschiedenen Fragen zu Ihrem Geschäft und den besonderen Dienstleistungen und Privilegien zu beantworten, die Mitgliedern und Karteninhabern von Arabian Eagle International angeboten werden können, und es dann an die genannte Adresse zurückzusenden.",
      "benefits": {
        "title": "Was wird Arabian Eagle International Ihnen im Gegenzug bieten?",
        "benefit1": "Automatische Hinzufügung Ihres Einrichtungsnamens mit allen Details in unser System",
        "benefit2": "Verteilung Ihres Einrichtungsnamens an alle Arabian Eagle International Karteninhaber",
        "benefit3": "Automatische Hinzufügung zur Beratungsdienstliste",
        "benefit4": "Zugang zu über 42.000 potenziellen Mitgliedern"
      }
    },
    "cta": {
      "title": "Interessiert am Beitritt?",
      "description": "Wenn Sie daran interessiert sind, Arabian Eagle International beizutreten oder weitere Informationen benötigen, kontaktieren Sie uns bitte.",
      "button": "Kontaktieren Sie uns jetzt"
    }
  },
  "cards": {
    "title": "Arabian Eagle Karten",
    "subtitle": "Wählen Sie die Karte, die zu Ihren Reisebedürfnissen passt",
    "basic": {
      "name": "Basiskarte",
      "annualFee": "99",
      "feature1": "Zugang zu über 1.145.000 Hotels weltweit",
      "feature2": "Bis zu 50% Rabatt auf Hotelpreise",
      "feature3": "24/7 Kundensupport",
      "feature4": "Kostenloser Newsletter und Reisetipps"
    },
    "silver": {
      "name": "Silberkarte",
      "annualFee": "199",
      "feature1": "Alle Basiskarten-Vorteile",
      "feature2": "Bis zu 65% Rabatt auf Hotelpreise",
      "feature3": "Priority Pass (1 Jahr kostenlos)",
      "feature4": "Autovermietungsrabatte bis zu 25%",
      "feature5": "Reiseversicherung inbegriffen"
    },
    "gold": {
      "name": "Goldkarte",
      "annualFee": "299",
      "feature1": "Alle Silberkarten-Vorteile",
      "feature2": "Bis zu 75% Rabatt auf Hotelpreise",
      "feature3": "Priority Pass (lebenslang)",
      "feature4": "Autovermietungsrabatte bis zu 30%",
      "feature5": "VIP-Hotel-Check-in-Services",
      "feature6": "Arabian Eagle MasterCard Option"
    },
    "intro": {
      "title": "Arabian Eagle International",
      "subtitle": "Nicht nur ein neuer Weg, Ihr Geschäft und Ihre Dienstleistungen zu fördern, sondern wirklich einzigartig",
      "highlights": {
        "founded": "Gegründet 1986",
        "pioneer": "Pionier in der Reisebranche",
        "technology": "Fortschrittliche moderne Technologie",
        "lowCost": "Niedrigste Reisekosten",
        "insurance": "Umfassende Versicherungsdeckung",
        "noCost": "Keine Mitgliedschaftsgebühren",
        "members": "42.000+ Mitglieder"
      }
    },
    "membership": {
      "title": "Mitgliedskarte",
      "description": "Die Arabian Eagle VIP-Mitgliedschaft, die von Arabian Eagle International für Tourismusdienstleistungen ausgegeben wird, bietet Kunden nicht nur finanzielle Einsparungen auf höchstem Niveau, sondern macht ihre Reisen auch einfacher und bequemer.",
      "learnMore": "Mehr erfahren"
    },
    "priorityPass": {
      "title": "Priority Pass Karte",
      "description": "Für den Komfort der Arabian Eagle International Karteninhaber während ihrer Reisen wurden Vereinbarungen mit Priority Pass getroffen, um allen Arabian Eagle International Kunden die internationale Priority Pass Karte zu gewähren, um ihren Zugang zu 850 Business-Lounges in internationalen Flughäfen in mehr als 400 Städten und 120 Ländern auf der ganzen Welt zu gewährleisten, unabhängig von Reiseklasse oder Fluggesellschaft.",
      "lounges": "850 Lounges",
      "cities": "400+ Städte",
      "countries": "120+ Länder",
      "learnMore": "Mehr erfahren"
    },
    "partners": {
      "title": "Arabian Eagle Partner Karte",
      "subtitle": "Der beste Weg, Ihre Einkaufsausgaben zu reduzieren",
      "description": "Machen Sie Einkaufen angenehm, indem Sie die Arabian Eagle Partner Karte - Super Sparer verwenden. Sie bietet Ihnen eine breite Auswahl unter vielen Einkaufszentren, Geschäften, Supermärkten, Restaurants, Bekleidungsgeschäften und Premium-Autovermietungen, alles auf Knopfdruck für ein volles Jahr, das Sie kostenlos erhalten, wenn Sie die Arabian Eagle International Karte erhalten.",
      "freeYear": "Kostenlos für ein volles Jahr",
      "learnMore": "Mehr erfahren"
    },
    "mastercard": {
      "title": "Arabian Eagle International MasterCard",
      "description": "Die Arabian Eagle Karte funktioniert wie jede andere Kreditkarte, außer dass Sie allein bestimmen, wie viel Sie durch Ihre Voreinzahlung ausgeben. Jetzt können Sie Ihre eigene Arabian Eagle International MasterCard einfach über unsere Website bestellen, da die Arabian Eagle International MasterCard Ihnen die Freiheit gibt, überall online und an Verkaufsstellen und Geschäften auf der ganzen Welt einzukaufen, wo Sie möchten.",
      "features": {
        "title": "Kartenmerkmale",
        "prepaid": "Prepaid-Debitkarte",
        "control": "Voreinzahlung kontrollierte Ausgaben",
        "worldwide": "Weltweit akzeptiert",
        "onlineShopping": "Freiheit zum Online-Einkauf"
      },
      "learnMore": "Mehr erfahren"
    }
  },
  "priorityPass": {
    "title": "Arabian Eagle Priority Pass Mitgliedschaft",
    "subtitle": "Das größte unabhängige globale Programm",
    "description": "Dies ist das größte unabhängige globale Programm, das es allen Arabian Eagle Kunden ermöglicht, dem Lärm überfüllter Flughäfen zu entfliehen, indem sie auf mehr als 850 VIP-Lounges in internationalen Flughäfen auf der ganzen Welt zugreifen, wodurch Ihre Wartezeiten an Flughäfen voller Luxus, Ruhe und Seelenfrieden bis zur Boardingzeit werden. Sie genießen den Zugang zu Lounges, wo immer Sie möchten, unabhängig von Reiseklasse oder der Fluggesellschaft, mit der Sie reisen.",
    "stats": {
      "lounges": "850+",
      "loungesLabel": "Lounges weltweit",
      "countries": "120+",
      "countriesLabel": "Länder",
      "cities": "400+",
      "citiesLabel": "Städte"
    },
    "howToUse": {
      "title": "Wie man Priority Pass verwendet",
      "step1": "Vor der Reise können Reisende Lounges in dem Land, in das sie reisen, anzeigen, indem sie das auf der Website verfügbare Verzeichnis durchsuchen",
      "step2": "Bei Ankunft präsentieren Sie Ihre Karte dem Empfangspersonal in der ausgewählten Lounge",
      "step3": "Ein Lounge-Mitarbeiter wird gerne ihre Dienste anbieten und Sie zu dem führen, was jeder Reisende bis zur Boardingzeit benötigt",
      "step4": "Karteninhaber genießen kostenlose Erfrischungen, Zeitungen, Fernsehen. Darüber hinaus gibt es Zugang zu Geschäftseinrichtungen einschließlich Telefon, Fax, Konferenzdienste und Internet"
    },
    "benefits": {
      "title": "Priority Pass Mitgliedschaftsvorteile",
      "peaceAndCalm": {
        "title": "Frieden und Ruhe",
        "description": "Flughäfen sind überfüllte Orte, die Stress und Unbehagen verursachen. Der beste Weg, diesen Stress loszuwerden, besteht darin, eine der luxuriösen Lounges zu betreten, während Sie auf Ihren Flug warten. Die Priority Pass Mitgliedschaft ermöglicht es Ihnen, jederzeit Zugang zu diesen Lounges zu genießen und von ihren Dienstleistungen zu profitieren, unabhängig von Ihrer Flugklasse oder der Fluggesellschaft, mit der Sie zu tun haben"
      },
      "worldwide": {
        "title": "Lounges auf der ganzen Welt",
        "description": "Wir haben viele Business-Lounges, sodass Sie auf mehr als 850 Lounges in mehr als 120 Ländern und mehr als 400 Städten zugreifen können, einschließlich der wichtigsten Flughäfen im Nahen Osten, insbesondere Flughäfen in Saudi-Arabien und am Arabischen Golf"
      }
    },
    "features": {
      "title": "Verfügbare Lounge-Services",
      "feature1": "Kostenlose Erfrischungen, Zeitungen und Fernsehen",
      "feature2": "Zugang zu Geschäftseinrichtungen",
      "feature3": "Nutzung von Telefon, Fax und Konferenzdiensten",
      "feature4": "Internet- und E-Mail-Dienste",
      "feature5": "Vielfalt an Snacks und Getränken",
      "feature6": "Eintritt unabhängig von Ticketklasse oder Fluggesellschaft"
    },
    "companion": {
      "title": "Begleiter-Zugang",
      "description": "Dieser hervorragende Service ist nicht nur für Sie, sondern auch für Begleiter wie Familienmitglieder, Freunde oder Verwandte, und sie genießen die gleichen genannten Vorteile für eine nominelle Gebühr von 27 USD, was angesichts dieser Privilegien nicht viel ist",
      "fee": "27 USD pro Begleiter"
    },
    "keyAccess": {
      "title": "Schlüssel zum VIP-Lounge-Zugang weltweit",
      "description": "Arabian Eagle International Card ist der Schlüssel zum Zugang zu VIP-Lounges weltweit und macht Ihre Wartezeiten an Flughäfen voller Luxus, Ruhe und Seelenfrieden bis zur Boardingzeit"
    },
    "freeOffer": {
      "title": "KOSTENLOS für ein Jahr",
      "subtitle": "Mit der ersten Reise"
    },
    "amenities": {
      "title": "Lounge-Annehmlichkeiten",
      "wifi": "Hochgeschwindigkeits-WiFi",
      "food": "Kostenlose Speisen und Getränke",
      "showers": "Duscheinrichtungen",
      "meeting": "Tagungsräume",
      "comfort": "Bequeme Sitzgelegenheiten",
      "newspaper": "Zeitungen und Zeitschriften",
      "tv": "Fernsehen",
      "business": "Geschäftseinrichtungen"
    }
  },
  "services": {
    "title": "Unsere Dienstleistungen",
    "subtitle": "Umfassende Reiselösungen für unsere Mitglieder",
    "stats": {
      "hotels": "1.145.000+",
      "hotelsLabel": "Hotels weltweit",
      "customers": "3+ Millionen",
      "customersLabel": "Vertrauenswürdige Kunden",
      "reviews": "1-2 Millionen+",
      "reviewsLabel": "Bewertungen jährlich",
      "freeNights": "1.000+",
      "freeNightsLabel": "Kostenlose Nächte",
      "cities": "22.000+",
      "citiesLabel": "Städte"
    },
    "facilities": {
      "title": "Einrichtungen",
      "hotelDiscounts": {
        "title": "Hotelpreisrabatte",
        "description": "Spezielle ermäßigte Preise mit Rabatten von mehr als 50% bis zu 75% auf Zimmerpreise in einer großen Auswahl internationaler Hotels, die als weniger als die Hälfte des Wertes der regulären Preise für diese Hotels gelten."
      },
      "freeBooking": {
        "title": "Kostenlose Buchungsdienste in internationalen Hotels",
        "description": "Durch Kontaktaufnahme mit der nächstgelegenen Arabian Eagle International Geschäftsstelle können Mitglieder kostenlose Buchungsdienste in allen Hotels nutzen"
      },
      "vipPrivileges": {
        "title": "VIP-Privilegien und schnellster Hotel-Check-in",
        "description": "Arabian Eagle International erledigt alle Hotelregistrierungsverfahren im Namen des Mitglieds, um es von der Mühe des Ausfüllens von Formularen zu befreien. Es ermöglicht ihnen auch, kostenlose Premium-Services zu genießen, die VIPs zur Verfügung gestellt werden, die normalerweise erst nach Zahlung ihrer Gebühren gewährt werden"
      },
      "carRentalDiscounts": {
        "title": "Internationale Autovermietungsrabatte",
        "description": "Arabian Eagle International Mitgliedschaftsinhaber genießen spezielle ermäßigte Preise von mehreren internationalen Autovermietungsunternehmen weltweit"
      },
      "freeEmail": {
        "title": "Kostenlose E-Mail von Arabian Eagle",
        "description": "Jedes Arabian Eagle Mitglied erhält nach Zahlung der Abonnementgebühr ein kostenloses E-Mail-Konto"
      },
      "newsletter": {
        "title": "Kostenloser Newsletter",
        "description": "Arabian Eagle International sendet regelmäßig einen Newsletter an alle Mitglieder mit interessanten Themen und Artikeln, die das Interesse von Reisenden wecken, sowie zusätzliche Nachrichten und Informationen über das Unternehmen"
      }
    },
    "cardServices": {
      "title": "Von Arabian Eagle International Card bereitgestellte Dienstleistungen",
      "subtitle": "Hervorragende Dienstleistungen für alle Arabian Eagle International Karteninhaber",
      "intro": "Wir freuen uns, unsere Dienstleistungen allen unseren Kunden zur Verfügung zu stellen, indem wir alle Dienstleistungen im Zusammenhang mit Reisen und Tourismusprogrammen und weltweiten Autovermietungspreisen für sie zugänglich machen und ihnen sehr spezielle Vorteile gewähren. Diese Dienstleistungen sind ausschließlich für alle Arabian Eagle International Karteninhaber aller Arten und Stufen ohne Ausnahme",
      "services": {
        "carBoatRental": "Auto- und Bootsvermietung",
        "cityTours": "Stadtrundfahrten",
        "concerts": "Konzert- und Kinobuchungen",
        "weddingHalls": "Hochzeitssaalreservierungen",
        "shopping": "Einkaufen",
        "hotelReservations": "Hotelreservierungen"
      }
    },
    "travelConsulting": {
      "title": "Reiseberatungsdienste",
      "description": "Arabian Eagle International bietet seinen Mitgliedern umfassende Informationen und Antworten auf alle Anfragen zu Reisen, Tourismusprogrammen, Ticketbuchung, Hotelreservierungen, Autovermietung usw. für alle Geschäftsreisen und kurze oder lange Ferien von seinen Büros auf der ganzen Welt"
    },
    "otherServices": {
      "title": "Und auch andere Dienstleistungen",
      "description": "Das Arabian Eagle Tourism Services Management arbeitet daran, seinen Kunden die besten Dienstleistungen zu bieten, um von all diesen Vorteilen und besonderen Dienstleistungen zu profitieren und zu genießen, die mit der neuesten aktuellen Technologie über das Internet bereitgestellt werden, um alle Informationen und Einrichtungen während ihrer internationalen Reisen mit anderen Privilegien zu erhalten"
    },
    "hotelBookings": {
      "title": "Hotelbuchungen und Rabatte",
      "description": "Zugang zu über 1.145.000 Hotels weltweit mit Rabatten bis zu 75% von Hauptpreisen. Spezielle Mitgliedspreise verfügbar."
    },
    "loungeAccess": {
      "title": "Flughafen-Lounge-Zugang",
      "description": "850+ VIP-Lounges an großen Flughäfen in über 120 Ländern. Genießen Sie Premium-Annehmlichkeiten unabhängig von Ihrer Fluggesellschaft."
    },
    "carRentals": {
      "title": "Autovermietungsrabatte",
      "description": "Sparen Sie bis zu 30% bei Autovermietungen für alle Ihre Reisen. Weltweit bei großen Vermietungsunternehmen verfügbar."
    },
    "mastercard": {
      "title": "Arabian Eagle MasterCard",
      "description": "Prepaid-Debitkarte mit kontrollierten Ausgaben und besonderen Mitgliederprivilegien."
    }
  },
  "join": {
    "title": "Treten Sie Arabian Eagle bei",
    "subtitle": "Beginnen Sie heute, bei Ihren Reisen zu sparen",
    "intro": {
      "title": "Jetzt registrieren",
      "description": "Bewerben Sie sich jetzt, um sich zu registrieren und Ihre Mitgliedsnummer und Ihr Passwort zu erhalten, um auf die von Arabian Eagle International Tourism Services bereitgestellten Dienstleistungen zuzugreifen und sie zu genießen"
    },
    "pricing": {
      "title": "Abonnieren Sie jetzt für nur 400 USD",
      "amount": "400 $",
      "currency": "USD",
      "description": "Ja, es ist wahr!!! Die Abonnementgebühr beträgt nur 400 USD. Es ist ein kleiner Betrag im Vergleich zu den Vorteilen und Dienstleistungen, die Ihnen als Mitglied von Arabian Eagle International Tourism Services angeboten werden"
    },
    "highlights": {
      "hotelDiscounts": {
        "title": "Erhalten Sie 50% bis 75% Rabatt auf Hotelpreise und mehr",
        "description": "Sparen Sie mehr als 50% bis 75% auf Basiszimmerpreise in 1.145.000 Hotels weltweit. Sie können auch Rabatte von Autovermietungsunternehmen erhalten"
      },
      "subscribeToday": {
        "title": "Abonnieren Sie heute",
        "description": "Erhalten Sie Rabatte bis zu 75% auf Basiszimmerpreise. Hotelrabatte... 50% bis 75% Rabatt auf Hotelpreise in 1.145.000 Hotels weltweit"
      },
      "feelComfortable": {
        "title": "Sie werden sich wohl fühlen zu wissen, dass der Rabatt mehr als 50% und bis zu 75% beträgt",
        "description": "Auf Basiszimmerpreise in 1.145.000 Hotels weltweit, einschließlich international renommierter Hotels, die allen Reisenden bekannt sind, und neu gebauter Hotels auf der ganzen Welt auf verschiedenen Ebenen und Servicequalität entsprechend den Bedürfnissen der Reisenden"
      },
      "carRental": {
        "title": "Rabatte bei internationalen Autovermietungsunternehmen",
        "description": "Arabian Eagle International Mitgliedschaftsinhaber genießen spezielle ermäßigte Preise von mehreren internationalen Autovermietungsunternehmen weltweit"
      }
    },
    "tabs": {
      "newMember": "Neues Mitglied",
      "partner": "Bank-/Partnerkarte",
      "mobile": "Mobile Registrierung"
    },
    "form": {
      "userId": "Benutzer-ID",
      "password": "Passwort",
      "confirmPassword": "Passwort bestätigen",
      "email": "E-Mail",
      "phone": "Telefonnummer",
      "fullName": "Vollständiger Name",
      "rememberMe": "Angemeldet bleiben",
      "forgotPassword": "Ich habe mein Passwort vergessen",
      "submit": "Konto erstellen",
      "login": "Anmeldung zum bestehenden Konto"
    },
    "benefits": {
      "title": "Mitgliedervorteile",
      "access": "Zugang zu vollständigen Vorteilsdetails",
      "save": "Heute mit dem Sparen beginnen",
      "exclusive": "Exklusive Mitgliederprivilegien"
    },
    "faq": {
      "title": "Häufig gestellte Fragen",
      "partner": {
        "q1": {
          "question": "Was sind die Kosten und was sind die Vorteile des Beitritts zum Arabian Eagle Partnerprogramm?",
          "answer": "Tatsächlich gibt es keine Vorab-Finanzkosten für Ihr Unternehmen, um dem Arabian Eagle International Partnerschaftsprogramm beizutreten. Alles, was Sie tun müssen, ist das Formular auf der Website auszufüllen, verschiedene Fragen zu Ihrem Geschäft und den besonderen Dienstleistungen und Privilegien zu beantworten, die Sie Arabian Eagle International Mitgliedern anbieten können, und dann einfach auf die Senden-Schaltfläche zu klicken"
        },
        "q2": {
          "question": "Was wird Arabian Eagle International für Sie tun?",
          "answer": "Sobald Sie Arabian Eagle International beigetreten sind, wird Ihr Unternehmen automatisch im Tourismusverzeichnis mit vollständigen Details registriert, und Ihr Name wird an alle Mitglieder als neues Unternehmen verteilt, bei dem sie ihre verschiedenen Karten verwenden können. Gleichzeitig werden Sie in die Reiseberatungslisten aufgenommen"
        }
      }
    }
  },
  "contact": {
    "title": "Unsere Büros auf der ganzen Welt",
    "subtitle": "Wir sind hier, um zu helfen",
    "form": {
      "name": "Name",
      "email": "E-Mail",
      "phone": "Telefon",
      "country": "Land",
      "city": "Stadt",
      "subject": "Betreff",
      "message": "Nachricht",
      "submit": "Nachricht senden"
    },
    "info": {
      "email": "E-Mail-Adresse",
      "phone": "Telefonnummer",
      "whatsapp": "WhatsApp",
      "address": "Büroadresse"
    },
    "usaHotline": {
      "title": "Nur für USA-Mitglieder",
      "number": "+1 305 371 0000"
    },
    "officesTitle": "Unsere Büroadressen",
    "offices": {
      "jeddah": {
        "name": "Jeddah Büro",
        "address": "Al-Siteen Straße - Al-Darajah Platz - Al-Awwad Zentrum - 3. Stock - 301",
        "poBox": "7517",
        "zip": "21472",
        "tel": "+966 2 674 0950",
        "fax": "+966 2 672 4222",
        "mobile": "+966 54 201 20 40",
        "email": "jeddah@ae4net.net",
        "registry": "40 30 20 4932",
        "established": "1988"
      },
      "kuwait": {
        "name": "Kuwait Büro",
        "address": "Al-Manjaf - Fahaheel - Gebiet 4 - Straße 26",
        "poBox": "7512",
        "zip": "64006",
        "tel": "+965 372 5180",
        "fax": "+956 371 3669",
        "mobile": "+965 99 38 1301",
        "email": "kuwait@ae4net.net",
        "registry": "752852",
        "established": "1998"
      },
      "beirut": {
        "name": "Beirut Büro",
        "address": "Bashara El Khoury Straße - Ras El Nabaa - Greater Beirut Center - 8. Stock",
        "poBox": "155-600",
        "tel": "+961 1 648 262",
        "fax": "+961 1 648 216",
        "email": "beirut@ae4net.net",
        "registry": "77304/24",
        "established": "2000"
      }
    },
    "directLines": {
      "title": "Direkte Leitung zum Hauptbüro in Jeddah",
      "kuwaitLabel": "Kuwait Büro",
      "kuwait": "+965 99 38 1301",
      "uaeLabel": "UAE Büro",
      "uae": "+971 566 041 043",
      "egyptLabel": "Ägypten",
      "egypt": "+20 111 660 68 01",
      "philippinesLabel": "Philippinen",
      "philippines": "+63 9179 37 37 37"
    },
    "agents": {
      "title": "Unsere Tourismusdienstleistungsagenten",
      "singapore": {
        "name": "Singapur Hauptbuchungsbüro",
        "company": "AT Reservation Pte Ltd",
        "address": "22, Cavenagh Road/Orchard Road, #01-21 Hotel Grand Central, Singapore 229617",
        "tel": "(65) 6235 2498, 6235 6426",
        "fax": "(65) 6235 7620",
        "license": "01148"
      },
      "hongKong": {
        "name": "Hongkong",
        "company": "Asia Travel Network Ltd",
        "address": "Rm 7A, No 6, Knutsford Terrace, Tsimshatsui, Kowloon, Hongkong",
        "tel": "(852) 2736 0922",
        "fax": "(852) 2405 0922",
        "license": "352156"
      },
      "guangzhou": {
        "name": "Guangzhou",
        "address": "218 Sky Galleria, Citic Plaza, 233 Tianhe North Road, Guangzhou, China, PC 510613",
        "hours": "Mo-Sa (0900-1900), So (1200-1600)"
      },
      "beijing": {
        "name": "Peking",
        "address": "Jianwai Soho, Block A, #19-05, 39 East Third Ring Road, Chaoyang District Beijing, Beijing, China, PC 100022",
        "hours": "Mo-Fr (0900-1800), Sa (0900-1300)"
      },
      "thailand": {
        "name": "Thailand",
        "company": "AT Network Co. Ltd.",
        "address": "Lumpini Tower, 1168/44 18th Floor, Rama 4 Road, Tungmahamek, Sathorn Bangkok 10120, Thailand",
        "tel": "(662) 677 6240-5, 679 7185, 679 7187",
        "fax": "(662) 677 6246-7",
        "license": "11/1921"
      },
      "malaysia": {
        "name": "Malaysia",
        "company": "Asiatravel Online Sdn Bhd",
        "address": "148-03, 3rd Floor, Jln Bukit Bintang, 55100 Kuala Lumpur",
        "tel": "603 - 2143 6555",
        "fax": "603 - 2143 6558"
      },
      "philippinesManila": {
        "name": "Philippinen",
        "company": "AT Phil., Inc",
        "address": "G/F, Edgardo Angara Wing, IBP Bldg., Jade Street, Ortigas Center, Pasig City, Metro Manila 1605 Philippines",
        "tel": "(632)634-4220/40/60, (632) 635-5099",
        "fax": "(632) 635-6699, 910-4206",
        "license": "TO-154-2004"
      },
      "philippinesCebu": {
        "name": "Philippinen Cebu Zweigstelle",
        "address": "Lobby, Waterfront Airport Hotel, 1 Airport Road, Lapu-Lapu City, Cebu, Philippines",
        "tel": "(6332) 341-20-35",
        "fax": "(6332) 341-20-36"
      },
      "shanghai": {
        "name": "China",
        "company": "Asia Travel Shanghai Office",
        "address": "333 Jui Jiang Road, 17th Floor, Finance Square Building, Shanghai 200001, China",
        "tel": "(86-21) 6322 3855",
        "fax": "(86-21) 6322 9542, 63600967"
      },
      "indochina": {
        "name": "Indochina",
        "company": "AT Network Co. Ltd.",
        "address": "Lumpini Tower, 1168/44 18th Floor, Rama 4 Road, Tungmahamek, Sathorn Bangkok 10120, Thailand",
        "tel": "(662) 677 6240-5, 679 7185, 679 7187",
        "fax": "(662) 677 6246-7",
        "license": "11/1921"
      },
      "dubai": {
        "name": "Dubai",
        "company": "Asia Middle East Tours LLC",
        "address": "Shop Numbers: WB21, WB22, WB23, (Basement 1/Tourist Village) Musalla Tower Mall, Bank Street, Bur Dubai, P.O. Box 112758 Dubai, United Arab Emirates",
        "tel": "+971 566 041 043",
        "license": "549563"
      }
    }
  },
  "hotels": {
    "title": "Hotelzimmerpreise anfragen",
    "subtitle": "Bitte geben Sie die folgenden Informationen ein",
    "personalInfo": "Persönliche Informationen",
    "hotelInfo": "Benötigte Hotelinformationen",
    "travelDate": "Reisedatum",
    "form": {
      "email": "E-Mail",
      "gender": "Geschlecht",
      "male": "Männlich",
      "female": "Weiblich",
      "title": "Titel",
      "titleOptions": {
        "mr": "Herr",
        "mrs": "Frau",
        "miss": "Fräulein",
        "drMd": "Dr. - MD",
        "drPhd": "Dr. - PHD",
        "engineer": "Ingenieur"
      },
      "firstName": "Vorname",
      "familyName": "Familienname",
      "nationality": "Nationalität",
      "mobile": "Mobil",
      "hotelName": "Hotelname",
      "or": "ODER",
      "city": "Stadt",
      "country": "Land",
      "from": "Von (Ankunft)",
      "to": "Bis (Abreise)",
      "priceRange": "Preisspanne",
      "currency": "Währung aktualisieren",
      "starRating": "Sternebewertung",
      "hotelType": "Hoteltyp",
      "apartment": "Apartment",
      "hotel": "Hotel",
      "resort": "Resort",
      "submit": "Anfrage senden",
      "required": "Pflichtfeld",
      "pleaseChoose": "Bitte wählen..."
    },
    "discount": "Bis zu 75% RABATT"
  },
  "deals": {
    "title": "Urlaubs-Super-Sparer",
    "subtitle": "Exklusive Angebote für unsere Mitglieder",
    "filters": {
      "destination": "Ziel",
      "travelType": "Reiseart",
      "season": "Saison"
    }
  },
  "experiences": {
    "title": "Reiseerfahrungen",
    "subtitle": "Geschichten unserer Mitglieder",
    "shareYours": "Teilen Sie Ihre Geschichte"
  },
  "footer": {
    "about": "Über uns",
    "services": "Dienstleistungen",
    "support": "Support",
    "newsletter": {
      "title": "Newsletter abonnieren",
      "placeholder": "Geben Sie Ihre E-Mail ein",
      "button": "Abonnieren"
    },
    "social": "Folgen Sie uns"
  }
};

const outputPath = path.join(__dirname, '..', 'messages', 'de.json');
fs.writeFileSync(outputPath, JSON.stringify(de, null, 2), 'utf8');
console.log('✅ German translation file created successfully!');
console.log(`📁 Location: ${outputPath}`);
console.log(`📊 Total keys: ${JSON.stringify(de).match(/:/g).length}`);


