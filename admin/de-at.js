// AUSTRIAN GERMAN TRANSLATION FILE
export default {
    // If translation is missing from any of the translation sub object, the translator will look in general
    general: {
        amount: 'Betrag',
        loan_type: 'Art des Darlehens',
        amortize_length: 'Laufzeit',
        loan_purpose: 'Darlehen Zweck',
        nominal_interest_rate: 'Nomineller Zinssatz',
        effective_interest_rate: 'Effektiver Zinssatz',
        monthly_cost: 'monatliche Rate',
        administration_fee: 'Verwaltungsgebühr',
        direct_debit_fee: 'Kontoführungsgebühr',
        setup_fee: 'Einrichtungsgebühr',
        monthly_cost_last: 'letzte monatliche Rate',
        monthly_cost_first: 'Monatliche Kosten im ersten Monat',
        repayment_type: 'Rückzahlungsart',
        address: 'Adresse',
        accepted_at: 'Akzeptiert um',
        accepted_offer: 'Angebot angenommen',
        offer_sent_at: 'Angebot gesendet um',
        employment: 'Beschäftigung',
        personal_information: 'Persönliche Informationen',
        full_name: 'Vollständiger Name',
        politically_exposed_person: 'Politisch exponierte person',
        email: 'Email',
        phone: 'Telefon',
        first_name: 'Vorname',
        last_name: 'Nachname',
        main_applicant: 'Hauptantragsteller',
        time_left: 'Übrige Zeit',
        product_type: 'Produktart',
        offer: 'Angebot',
        integration: 'Integration',
        created_at: 'Hergestellt in',
        status: 'Status',
        birth_date: 'Geburtsdatum',
        years: ({ number }) => `${number} %{Jahr|Jahre}`,
        months: ({ number }) => `${number} %{Monat|Monate}`,
        days: ({ number }) => `${number} %{Tag|Tage}`,
        hours: ({ number }) => `${number} %{Stunde|Stunden}`,
        minutes: ({ number }) => `${number} %{Minute|Minuten}`,
        seconds: ({ number }) => `${number} %{Sekunde|Sekunden}`,
        yes: 'Ja',
        no: 'Nein'
    },
    treat: {
        revision_history: 'Versionsgeschichte',
        application_created: 'Anwendung erstellt am',
        form: {
            form_prefilled_from_settings: 'Das Formular ist bereits mit den Produkteinstellungen gefüllt', // The form is prefilled with the product's settings
            withdraw_before_new_offer:
                'Das aktive Angebot muss zurückgezogen werden, bevor ein neues Angebot abgegeben wird',
            application_denied_cannot_leave_offer:
                'Sie haben die Bewerbung bereits abgelehnt und können der aktuellen Überarbeitung keine neue Antwort geben',
            loan_details: {
                finalize_acceptance_url: 'URL für die letzten Schritte',
                header: 'Kreditdetails' // Loan details
            },
            rates: {
                header: 'Preise und Gebühren',
                visible_to_customer: 'Sichtbar für den Kunden'
            },
            complements: {
                header: ''
            },
            button: {
                leave_offer: 'Angebot verlassen',
                deny: 'Verweigern'
            }
        },
        steps: {
            untreated: {
                title: 'Unbehandelt',
                desc: 'Die aktuelle Version benötigt eine Antwort'
            },
            offer_given: {
                title: 'Angebot gegeben',
                desc: 'Der Bewerber hat Ihr Angebot erhalten'
            },
            user_accepted: {
                title: 'Benutzer akzeptiert',
                desc: 'Der Nutzer hat Ihr Angebot angenommen'
            },
            bill_of_debt_sent: {
                title: 'Rechnung verschickt',
                desc: 'Sie haben den gesendeten Schuldschein markiert'
            },
            paid_out: {
                title: 'Darlehen ausgezahlt',
                desc: 'Das Darlehen wurde ausgezahlt'
            },
            application_denied: {
                title: 'Bewerbung abgelehnt',
                desc: 'Die Anwendung wurde abgelehnt'
            }
        }
    },
    application_form: {
        button: {
            apply: {
                initial: 'Bewerben Sie sich jetzt - kostenlos!',
                next_step: 'Weiter',
                finish: 'Fertig!'
            }
        },
        label: {
            austrian_citizen_one_year: 'Ich habe meinen Hauptwohnsitz seit mindestens 1 Jahr in Österreich',
            low_income_partner: 'Partner mit niedrigem Einkommen',
            gender: 'Geschlecht',
            academic_title: 'Akademischer Titel',
            nationality: 'Staatsbürgerschaft',
            date_of_birth: 'Geburtsdatum',
            current_address: 'Aktueller Wohnsitz',
            zip_code: 'Postleitzahl',
            city: 'Ort',
            street_address: 'Straße',
            street_number: 'Hausnummer',
            net_income: 'Nettoeinkommen (letztes Monat)',
            civil_state: 'Familienstand',
            child_support_no_children: 'Unterhaltsberechtigte Kinder',
            alimony_cost: 'Unterhalt',
            monthly_expenses: 'Monatliche Kredit- und Leasingkosten',
            extra_monthly_income: 'Monatliche Einkünfte aus Beihilfen, Mieten, Nebeneinkünften',
            accommodation: {
                type: 'Wohnsituation',
                size: 'Quadratmeter Wohnfläche',
                since: 'Aktueller Wohnort seit',
                monthly_cost: 'Monatliche Miet- und Immobilienkreditkosten',
                additional_expenses: 'Monatliche Betriebskosten'
            },
            vehicles_amount: 'Anzahl Autos im Haushalt',
            employment: {
                terminated: 'Ich bestätige, dass mir keine zukünftige Kündigung bekannt ist', //NEW
                type: 'Beschäftigungsverhältnis',
                name: 'Arbeitgeber',
                since: 'Beschäftigt seit',
                monthly_income: {
                    salary: [
                        'Nettoeinkommen (letztes Monat)',
                        'Nettoeinkommen (vorletztes Monat)',
                        'Nettoeinkommen (vor drei Monaten)'
                    ],
                    special_salary: 'Beinhaltet Sonderzahlungen'
                }
            },
            credit_data: {
                registered_name: 'Name',
                birth_date: 'Geburtsdatum',
                registered_address: 'Adresse',
                ksv_number: 'KSV ID'
            }
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
                other: 'Anderer privater Verwendungszweck'
            },
            title_honorific: {
                strict: 'Per Du',
                non_strict: 'Per Sie'
            },
            employment_type: {
                employee: 'Angestellter',
                worker: 'Arbeiter',
                public_worker: 'Beamter',
                pensioner: 'Pensionist'
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
                other: 'Sonstige'
            },
            nationality: {
                austria: 'Österreich',
                belgium: 'Belgien',
                bulgaria: 'Bulgarien',
                croatia: 'Kroatien',
                cyprus: 'Zypern',
                czech_republic: 'Tschechische Republik',
                denmark: 'Dänemark',
                estonia: 'Estland',
                finland: 'Finnland',
                france: 'Frankreich',
                germany: 'Deutschland',
                greece: 'Griechenland',
                hungary: 'Ungarn',
                italy: 'Italien',
                ireland: 'Irland',
                latvia: 'Lettland',
                lithuania: 'Litauen',
                luxembourg: 'Luxemburg',
                malta: 'Malta',
                netherlands: 'Niederlande',
                poland: 'Polen',
                portugal: 'Portugal',
                romania: 'Rumänien',
                sweden: 'Schweden',
                slovakia: 'Slowakei',
                slovenia: 'Slowenien',
                spain: 'Spanien',
                united_kingdom: 'Großbritannien'
            },
            civil_state: {
                single: 'Ledig',
                married: 'Verheiratet',
                divorced: 'Geschieden',
                widowed: 'Verwitwet',
                registered_cohabitation: 'Eingetragene Partnerschaft'
            },
            accommodation: {
                monthly_cost: 'Monatliche Miet- und Immobilienkreditkosten',
                type: {
                    rental: 'Hauptmiete',
                    community_housing: 'Gemeindewohnung',
                    cooperative_society: 'Genossenschaftswohnung',
                    property_flat: 'Wohnungseigentum',
                    property_house: 'Hauseigentum',
                    shared_flat: 'Untermiete, Mitbewohner, bei den Eltern'
                }
            },
            title_gender: {
                mr: 'Herr',
                mrs: 'Frau'
            }
        },
        placeholder: {
            title_academic: 'Fakultativer akademischer titel',
            first_name: 'Ihr vorname',
            last_name: 'Ihr nachname',
            email: 'Deine emailadresse',
            phone: 'Deine telefonnummer',
            zip_code: 'Deine postleitzahl',
            city: 'Deine ort',
            street_address: 'Deine straße',
            street_number: 'Deine hausnummer',
            iban: 'Ihre IBAN',
            alimony_cost: '€€€',
            monthly_expenses: '€€€',
            extra_monthly_income: '€€€',
            employment: {
                type: 'Beschäftigungsverhältnis',
                name: 'Arbeitgeber',
                since: {
                    month: 'MM',
                    year: 'YYYY'
                },
                monthly_income: {
                    salary: ['Letztes Monat', 'Vorletztes Monat', 'Vor drei Monaten']
                },
                street_address: 'Die Adresse Ihres Arbeitgebers',
                street_number: 'Hausnummer',
                zip_code: 'Ihre Arbeitgeber Postleitzahl',
                city: 'Ihre arbeitgeberstadt'
            },
            accommodation: {
                size: 'Quadratmeter',
                since: {
                    month: 'MM',
                    year: 'YYYY'
                },
                monthly_cost: '€',
                additional_expenses: '€'
            },
            date_of_birth: {
                day: 'DD',
                month: 'MM',
                year: 'YYYY'
            }
        }
    },
    user: {
        role: {
            ROLE_ADMIN_ADMIN: 'Admin',
            ROLE_ADMIN_CUSTOMER_SALES: 'Customer Sales',
            ROLE_ADMIN_CUSTOMER_SALES_PLUS: 'Customer Sales Plus',
            ROLE_ADMIN_CUSTOMER_SERVICE: 'Customer Service',
            ROLE_ADMIN_CUSTOMER_SERVICE_PLUS: 'Customer Service Plus',
            ROLE_ADMIN_SUPERUSER: 'Super User',
            ROLE_PARTNER_ADMIN: 'Partner Admin',
            ROLE_PARTNERAPI_USER: 'Partner Api',
            ROLE_PARTNER_USER: 'Partner'
        }
    }
};
