import ContactInfo from '../../ContactInfo';
// AUSTRIAN GERMAN TRANSLATION FILE
export default {
    general: {
        monday: 'Montag',
        tuesday: 'Dienstag',
        wednesday: 'Mittwoch',
        thursday: 'Donnerstag',
        friday: 'Freitag',
        saturday: 'Samstag',
        sunday: 'Sonntag',
        amount: 'Betrag',
        amortize_length: 'Laufzeit',
        loan_purpose: 'Kreditzweck',
        address: 'Adresse',
        employment: 'Beschäftigung',
        personal_information: 'Persönliche Informationen',
        politically_exposed_person: 'Politisch exponierte Person',
        email: 'Email',
        phone: 'Telefon',
        city: 'Ort',
        first_name: 'Vorname',
        last_name: 'Nachname',
        bank_partners: 'Bankpartner',
        faq: 'Häufig gestellte Fragen',
        required: 'Das ist ein Pflichtfeld', //This is the fallback for all validation
        invalid: 'Ungültige Angabe', //This is the fallback for all validation
        years: ({ number }) => `${number} %{Jahr|Jahre}`,
        inbox: 'Anmelden',
        more: 'Mehr lesen...',
        less: 'Verstecken',
        verify: 'Überprüfen',
    },
    not_found: {
        main_header: '404 - Seite nicht gefunden',
        back_home_button: 'Zurück',
    },
    contact: {
        open_hours: 'Öffnungszeiten',
        contact_us: 'Kontaktieren Sie uns!',
    },
    cookie_banner: {
        text: (
            <span>
                Durch die Nutzung unseres Dienstes stimmen Sie der Verwendung von Cookies zu.{' '}
                <a href="/datenschutz/cookies">Mehr über Cookies.</a>
            </span>
        ),
        button: 'OK',
    },
    footer: {
        our_services: 'Über Kredite',
        lendo: 'Über Lendo',
        lendo_pages: {
            about: 'Lendo',
            partners: 'Bankpartner',
        },
        legal: 'Rechtliches',
        legal_pages: {
            privacy_policy: 'Datenschutz',
            data_protection: 'Datenschutzerklärung',
            cookies: 'Cookies',
            conditions: 'AGB',
            imprint: 'Impressum',
        },
        contact: 'Kontakt',
    },
    otp: {
        error: {
            generate: {
                title: 'Der Verifizierungscode konnte nicht erstellt werden',
                content:
                    'Ein Fehler ist bei der Erstellung des Verifizierungscodes aufgetreten. Kontaktieren Sie bitte den Lendo Kundenservice.',
            },
            verify: {
                title: 'Ihr Verifizierungscode wurde nicht erkannt',
                content:
                    'Bitte stellen Sie sicher, dass Sie den Code korrekt eingegeben haben. Haben Sie keinen Code bekommen, oder wurde dieser nicht erkannt, fordern Sie bitte einen neuen Code an.',
            },
        },
        sent: {
            title: 'Ein Verifizierungscode wurde an die angegebene Telefonnummer gesandt.',
            per_du: {
                content: 'Wir haben dir einen Verifizierungscode an deine Telefonnummer per SMS geschickt. Bitte gib diesen hier ein.',
            },
            per_sie: {
                content: 'Wir haben Ihnen einen Verifizierungscode an Ihre Telefonnummer per SMS geschickt. Bitte geben Sie diesen hier ein.',
            },
        },
    },
    process_section: {
        apply: {
            title: 'Lendo holt Angebote ein',
            text: `Nachdem Sie einen Kreditantrag gestellt haben holt Lendo für Sie innerhalb von 24h (Werktag) Angebote von verschiedenen Banken ein.`,
        },
        collect: {
            title: 'Lendo vergleicht',
            text:
                'Lendo stellt die Angebote übersichtlich in einer Tabelle dar, sodass Sie diese leicht miteinander vergleichen können.',
        },
        compare: {
            title: 'Und Sie wählen aus!',
            text: `Wählen Sie das Angebot, das am besten zu Ihnen passt. Wenn Sie Hilfe benötigen, erreichen Sie uns unter ${
                ContactInfo.PHONE
            }`,
        },
    },
    application_form: {
        button: {
            apply: {
                initial: 'Weiter',
                next_step: 'Weiter',
                finish: 'Zur Bestätigung',
            },
        },
        submit_state: {
            error: {
                text: 'Der Kreditantrag konnte nicht erstellt werden.',
                message: {
                    title: 'Um Ihnen weiterzuhelfen',
                    text: `Bitte kontaktieren Sie unseren Kundenservice unter ${
                        ContactInfo.PHONE
                    }. Wir helfen Ihnen gerne weiter.`,
                },
            },
            pending: {
                text: 'Senden',
            },
            success: {
                text: 'Bestätigung der Telefonnummer notwendig! Bitte den gerade zugeschickten 6-stelligen SMS Verifizierungscode unten in das Feld eingeben.',
                verify_button: 'Abschicken',
                resend_otp_button: 'Ich habe keinen Verifizierungscode erhalten. Neuen Code anfordern.',
                resend_otp_triggered: 'Ein neuer Verifizierungscode wurde verschickt.',
            },
        },
        error: {
            first_name: {
                required: 'Vorname ist erforderlich',
            },
            last_name: {
                required: 'Nachname ist erforderlich',
            },
            basic_terms: {
                required: 'Bitte zustimmen',
            },
            email: {
                required: 'E-Mail ist erforderlich',
                invalid: 'Ungültige E-Mail Adresse',
            },
            phone: {
                required: 'Telefonnummer ist erforderlich',
                invalid: 'Ungültige Telefonnummer',
            },
            nationality: {
                required: 'Angabe der Staatsbürgerschaft ist erforderlich',
            },
            street_address: {
                required: 'Angabe der Straße ist erforderlich',
            },
            street_number: {
                required: 'Angabe der Hausnummer ist erforderlich',
            },
            iban: {
                required: 'Angabe des IBAN ist erforderlich',
                too_long: 'Eingegebener IBAN ist zu lang',
                too_short: 'Eingegebener IBAN ist zu kurz',
                invalid: 'Eingegebener IBAN ist ungültig',
            },
            birth_date: {
                min_18_yo: 'Ein Mindestalter von 18 Jahren ist erforderlich',
                year: {
                    invalid: 'Ungültiges Jahr',
                },
                month: {
                    invalid: 'Ungültiges Monat',
                },
                day: {
                    invalid: 'Ungültiger Tag',
                },
            },
            resident_since: {
                year: {
                    required: 'Jahr ist erforderlich',
                    invalid: 'Jahr ist ungültig',
                },
                month: {
                    required: 'Monat ist erforderlich',
                    invalid: 'Monat ist ungültig',
                },
                min_one_year: {
                    invalid: 'Hauptwohnsitz muss seit mindestens einem Jahr in Österreich sein',
                },
            },
            accommodation: {
                size: {
                    required: 'Größe ist erforderlich',
                    invalid: 'Größe muss eine Zahl sein',
                },
            },
            employment: {
                company: {
                    name: 'Name des Arbeitgebers ist erforderlich',
                    since: {
                        month: {
                            required: 'Monat ist erforderlich',
                            invalid: 'Monat ist ungültig',
                        },
                        year: {
                            required: 'Jahr ist erforderlich',
                            invalid: 'Jahr ist ungültig',
                        },
                        three_months: {
                            invalid: 'Arbeitsverhältnis muss vor mindestens drei Monaten begonnen haben',
                        },
                    },
                },
                monthly_income: {
                    invalid: 'Angabe ist ungültig, bitte eine Zahl eingeben',
                    required: 'Angabe ist erforderlich',
                },
            },
        },
        label: {
            confirm_terms: 'Ich bestätige:',
            data_privacy: (
                <p style={{ margin: '0' }}>
                    Ich habe die <a href="/datenschutz/datenschutzerklaerung">Datenschutzerklärung</a> gelesen und
                    verstanden.
                </p>
            ),
            austrian_citizen_one_year: 'Ich habe meinen Hauptwohnsitz seit mindestens 1 Jahr in Österreich',
            low_income_partner: 'Partner mit niedrigem Einkommen',
            gender: 'Geschlecht',
            title_honorific: 'Anrede',
            title_academic: 'Akademischer Titel',
            nationality: 'Staatsbürgerschaft',
            date_of_birth: 'Geburtsdatum',
            current_address: 'Aktueller Hauptwohnsitz in Österreich',
            zip_code: 'Postleitzahl',
            city: 'Ort',
            street_address: 'Straße',
            street_number: 'Hausnummer',
            net_income: 'Nettoeinkommen (letztes Monat)',
            civil_state: 'Familienstand',
            child_support_no_children: 'Anzahl unterhaltsberechtigter Kinder',
            alimony_cost: 'Monatliche Unterhaltszahlungen',
            monthly_expenses: 'Monatliche Kredit- und Leasingkosten',
            extra_monthly_income: 'Monatliche Einkünfte aus Beihilfen, Mieten, Nebeneinkünften',
            iban: 'IBAN des Auszahlungskontos',
            accommodation: {
                type: 'Wohnsituation',
                size: 'Quadratmeter Wohnfläche',
                since: 'Aktueller Wohnort seit',
                monthly_cost: 'Monatliche Miet- und Immobilienkreditkosten',
                additional_expenses: 'Monatliche Betriebskosten',
            },
            vehicles_amount: 'Auf mich angemeldete Autos',
            employment: {
                terminated: 'Ich bestätige, dass mir keine zukünftige Kündigung bekannt ist',
                type: 'Beschäftigungsverhältnis',
                industry: 'Branche (Arbeitgeber)',
                since: 'Beschäftigt seit',
                company: {
                    name: 'Arbeitgeber',
                    street_address: 'Straße (Arbeitgeber)',
                    zip_code: 'PLZ (Arbeitgeber)',
                    street_number: 'Hausnummer',
                    city: 'Ort (Arbeitgeber)',
                },
                monthly_income: {
                    salary: [
                        'Nettoeinkommen (letztes Monat)',
                        'Nettoeinkommen (vorletztes Monat)',
                        'Nettoeinkommen (vor drei Monaten)',
                    ],
                    special_salary: 'Beinhaltet Sonderzahlungen',
                },
            },
        },
        option: {
            vehicles_amount: ({ number }) => `${number} %{Auto|Autos}`,
            child_support_no_children: ({ number }) => `${number} %{Kind|Kinder}`,
            loan_purpose: {
                vehicle: 'Auto',
                home_improvement: 'Einrichtung/Renovierung',
                holiday: 'Urlaub',
                education: 'Ausbildung',
                health_vacation: 'Gesundheit',
                other: 'Anderer privater Verwendungszweck',
            },
            title_honorific: {
                strict: 'Per Sie',
                non_strict: 'Per Du',
            },
            employment_type: {
                employee: 'Angestellter',
                worker: 'Arbeiter',
                public_servant: 'Beamter',
                pensioner: 'Pensionist',
            },
            employment_industry: {
                agriculture: 'Land- und Forstwirtschaft',
                goods: 'Herstellung von Waren',
                food: 'Herstellung von Nahrungs- und Futtermitteln',
                textiles: 'Herstellung von Textilien',
                clothes: 'Herstellung von Bekleidung',
                creative: 'Druck, Papier, Foto, Ton',
                energy_utilities: 'Energieversorgung',
                water_utilities: 'Wasserversorgung',
                construction: 'Bau',
                commerce: 'Handel',
                motor_vehicle: 'KFZ',
                transport: 'Transport und Logistik',
                accommodation: 'Hotel und Gastronomie',
                publishing: 'Medien',
                information_technology: 'IT',
                finance: 'Finanzen & Versicherung',
                public_administration: 'Administration & Verwaltung',
                education: 'Erziehung und Unterricht',
                health: 'Gesundheits- und Sozialwesen',
                other_services: 'Erbringung von sonst. Dienstleistungen',
                laundry: 'Wäscherei und chemische Reinigung',
                other: 'Sonstige',
            },
            nationality: {
                austria: 'Österreich',
                germany: 'Deutschland',
                italy: 'Italien',
                slovakia: 'Slowakei',
                slovenia: 'Slowenien',
                czech_republic: 'Tschechische Republik',
                hungary: 'Ungarn',
                belgium: 'Belgien',
                bulgaria: 'Bulgarien',
                denmark: 'Dänemark',
                estonia: 'Estland',
                finland: 'Finnland',
                france: 'Frankreich',
                greece: 'Griechenland',
                united_kingdom: 'Großbritannien',
                ireland: 'Irland',
                croatia: 'Kroatien',
                latvia: 'Lettland',
                lithuania: 'Litauen',
                luxembourg: 'Luxemburg',
                malta: 'Malta',
                netherlands: 'Niederlande',
                poland: 'Polen',
                portugal: 'Portugal',
                romania: 'Rumänien',
                sweden: 'Schweden',
                spain: 'Spanien',
                cyprus: 'Zypern',
            },
            civil_state: {
                single: 'Ledig',
                married: 'Verheiratet',
                divorced: 'Geschieden',
                widowed: 'Verwitwet',
                live_together: 'Eingetragene Partnerschaft',
            },
            accommodation: {
                monthly_cost: 'Monatliche Miet- und Immobilienkreditkosten',
                type: {
                    rental: 'Hauptmiete',
                    community_housing: 'Gemeindewohnung',
                    cooperative_society: 'Genossenschaftswohnung',
                    property_flat: 'Wohnungseigentum',
                    property_house: 'Hauseigentum',
                    shared_flat: 'Untermiete, Mitbewohner, bei den Eltern',
                },
            },
            title_gender: {
                man: 'Herr',
                woman: 'Frau',
            },
        },
        placeholder: {
            title_academic: 'Titel eingeben',
            first_name: 'Max',
            last_name: 'Mustermann',
            email: 'max.mustermann@mail.at',
            phone: '+43 664 1234567',
            zip_code: '1234',
            city: 'Musterstadt',
            vehicles_amount: 'Anzahl Autos',
            number_of_children: 'Anzahl Kinder',
            street_address: 'Musterstraße',
            street_number: '16',
            iban: 'AT02 2011 1000 0342 9660',
            alimony_cost: '€',
            monthly_expenses: '€',
            extra_monthly_income: '€',
            nationality: 'Staatsbürgerschaft wählen',
            employment: {
                name: 'Musterfirma',
                industry: 'Branche wählen',
                since: {
                    month: 'MM',
                    year: 'JJJJ',
                },
                monthly_income: {
                    salary: ['€', '€', '€'],
                },
                street_address: 'Mustergasse',
                street_number: '18',
                zip_code: '4321',
                city: 'Musterstadt',
            },
            accommodation: {
                type: 'Wohnsituation wählen',
                size: '0',
                since: {
                    month: 'MM',
                    year: 'JJJJ',
                },
                monthly_cost: '€',
                additional_expenses: '€',
            },
            date_of_birth: {
                day: 'TT',
                month: 'MM',
                year: 'JJJJ',
            },
        },
        help: {
            /* Strict honorific wordings */
            per_sie: {
                title_academic: 'Optional',
                first_name:
                    'Bitte achten Sie darauf, dass die Angabe mit Ihrem Reisepass bzw. Personalausweis übereinstimmt.',
                last_name:
                    'Bitte achten Sie darauf, dass die Angabe mit Ihrem Reisepass bzw. Personalausweis übereinstimmt.',
                email:
                    'Bitte geben Sie Ihre E-Mail Adresse an. Wir brauchen diese, um Sie darüber informieren zu können, wenn neue Kreditangebote eingelangt sind.',
                phone:
                    'Bitte geben Sie Ihre Mobilnummer an. Wir brauchen diese für die Zusendung von Verifizierungscodes.',
                city: 'Bitte geben Sie Ihre gemeldeten Hauptwohnsitz an.',
                iban:
                    'Ihren IBAN finden Sie auf Ihrer Bankomatkarte. Die Angabe ist für die Überweisung des Kredits nötig.',
                vehicles_amount:
                    'Bitte geben Sie die Anzahl Ihrer privaten Autos an. Dienstautos oder gewerbliche Fahrzeuge zählen nicht dazu.',
                monthly_expenses:
                    'Bitte geben Sie Ihre monatlichen Verpflichtungen aus Konsumkrediten (nicht Immobilienkrediten!), Leasing, Ratenzahlung etc. an.',
                child_support_no_children:
                    'Kinder, für die Familienbeihilfe bezogen wird, z.B. unter 18 Jahren oder studierend.',
                alimony_cost: 'Bitte geben Sie an, wieviel Unterhalt Sie pro Monat zahlen.',
                employment: {
                    since: 'Bitte geben Sie an, wann Ihr aktuelles Arbeitsverhältnis begonnen hat.',
                    city: 'Bitte geben Sie hier die Adresse Ihres aktuellen Arbeitgebers an.',
                    monthly_income: {
                        salary:
                            'Bitte geben Sie an, wie hoch Ihr letztes Netto-Gehalt lt. Gehaltsabrechnung war (ohne Spesen!).',
                        special_salary: 'Sonderzahlungen sind z.B. Bonus, Urlaubs- oder Weihnachtsgeld.',
                    },
                },
                accommodation: {
                    size: 'Bitte geben Sie die Größe Ihrer Wohnfläche in m2 an (als Zahl).',
                    monthly_cost:
                        'Bitte geben Sie an, wie hoch Ihre monatliche Miete und/oder Kreditrate für Ihre Wohnung/Haus ist.',
                    additional_expenses: 'Die monatlichen Betriebskosten inkludieren Strom, Heizung, Müll, etc.',
                },
            },
            /* NON-strict honorific wordings */
            per_du: {
                title_academic: 'Optional',
                first_name:
                    'Bitte achte darauf, dass die Angabe mit deinem Reisepass bzw. Personalausweis übereinstimmt.',
                last_name:
                    'Bitte achte darauf, dass die Angabe mit deinem Reisepass bzw. Personalausweis übereinstimmt.',
                email:
                    'Bitte gib deine E-Mail Adresse an. Wir brauchen diese, um dich darüber informieren zu können, wenn neue Kreditangebote eingelangt sind.',
                phone: 'Bitte gib deine Mobilnummer an. Wir brauchen diese für die Zusendung von Verifizierungscodes.',
                city: 'Bitte gib deinen gemeldeten Hauptwohnsitz an.',
                iban:
                    'Deinen IBAN findest du auf deiner Bankomatkarte. Die Angabe ist für die Überweisung des Kredits nötig.',
                vehicles_amount:
                    'Bitte gib die Anzahl deiner privaten Autos an. Dienstautos oder gewerbliche Fahrzeuge zählen nicht dazu.',
                monthly_expenses:
                    'Bitte gib deine monatlichen Verpflichtungen aus Konsumkrediten (nicht Immobilienkrediten!), Leasing, Ratenzahlung etc. an.',
                child_support_no_children:
                    'Kinder, für die Familienbeihilfe bezogen wird, z.B. unter 18 Jahren oder studierend.',
                alimony_cost: 'Bitte gib an, wieviel Unterhalt du pro Monat zahlst.',
                employment: {
                    since: 'Bitte gib an, wann dein aktuelles Arbeitsverhältnis begonnen hat.',
                    city: 'Bitte gib hier die Adresse deines aktuellen Arbeitgebers an.',
                    monthly_income: {
                        salary:
                            'Bitte gib an, wie hoch dein letztes Netto-Gehalt lt. Gehaltsabrechnung war (ohne Spesen!).',
                        special_salary: 'Sonderzahlungen sind z.B. Bonus, Urlaubs- oder Weihnachtsgeld.',
                    },
                },
                accommodation: {
                    size: 'Bitte gib die Größe deiner Wohnfläche in m2 an (als Zahl).',
                    monthly_cost:
                        'Bitte gib an, wie hoch deine monatliche Miete und/oder Kreditrate für deine Wohnung/dein Haus ist.',
                    additional_expenses: 'Die monatlichen Betriebskosten inkludieren Strom, Heizung, Müll, etc.',
                },
            },
        },
        other: {
            communication_info:
                'Mit der Eintragung einer E-Mailadresse und Telefonnummer erkläre ich mich damit einverstanden, Informationen mit Lendo und Lendos Kooperationspartner via E-Mail und/oder Telefon auszutauschen.',
        },
    },
};
