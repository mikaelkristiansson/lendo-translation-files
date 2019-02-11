// AUSTRIAN GERMAN TRANSLATION FILE
export default {
    general: {
        amount: 'Kreditbetrag',
        amortize_length: 'Laufzeit',
        loan_purpose: 'Kreditzweck',
        loan_type: 'Zinssatzart',
        address: 'Adresse',
        email: 'Email',
        your_email: 'Deine Email',
        phone: 'Telefon',
        required: 'Eingabe ist erforderlich', // This is the fallback for all validation
        invalid: 'Ungültige Eingabe', // This is the fallback for all validation,
        num_years: ({ years }) => `${years} %{Jahr|Jahre}`,
        num_months: ({ months }) => `${months} %{Monat|Monate}`,
        contact_person_workplace_for: 'Ansprechperson beim Arbeitgeber',
        internal: 'Intern',
        external: 'Extern',
        login: 'Anmelden',
        help: 'Hilfe',
        interest_rate: 'Zinssatz',
        interest: 'Zins',
        amortization: 'Laufzeit',
        total_cost: 'Gesamter Rückzahlungsbetrag',
        social_id: 'ID',
        work_place: 'Arbeitgeber',
        email_adress: 'Email-Adresse',
        monthly_income: 'Monatliches Nettogehalt',
        accommodation_type: 'Wohnsituation',
        mobile_phone_number: 'Mobilnummer',
        other: 'Sonstiges',
        more: 'Mehr',
        more_info: 'Weitere Informationen',
        fees: 'Gebühren',
        add: 'Hinzufügen',
    },
    login: {
        header: 'Anmelden',
        // sms: 'SMS',
        // otp_message: 'Der Verifizierungscode wurde per SMS verschickt. Bitte diesen hier eingeben.',
        username_placeholder: 'Lendo ID',
        otp_placeholder: 'Verifizierungscode',
        verify_otp_button: 'Überprüfen',
        submit_button: 'Anmelden',
        resend_otp_button: 'Neuen Verifizierungscode senden',
    },
    otp: {
        sent: {
            title: 'Ein Verifizierungscode wurde an ihr Telefon gesandt.',
            content: 'Wir haben Ihnen einen Bestätigungscode geschickt. Bitte geben Sie diesen hier ein.',
        },
    },
    application: {
        applied_amount: 'Beantragter Kreditbetrag',
        applied_period: 'Beantragte Kreditlaufzeit',
        accommodation_monthly_cost: 'Monatliche Wohnkosten',
        civil_state: 'Familienstand',
        num_of_children: 'Anzahl Kinder',
        full_time: 'Vollzeit',
        rental: 'Miete',
        no_active_application: 'Keine aktiven Anträge',
        less_than_one_hour: 'weniger als eine Stunde',
        hours: ({ hours }) => `${hours} %{Stunde|Stunden}`,
        time_left: 'Verbleibende Zeit',
        status: {
            [ApplicationsConstants.STATUSES.CREATED]: 'Dein Antrag wurde erstellt',
            [ApplicationsConstants.STATUSES.PREREQUISITES_COMPLETED]: 'Dein Antrag wird bearbeitet',
            [ApplicationsConstants.STATUSES.APPROVED]: 'Dein Antrag wird bearbeitet',
            [ApplicationsConstants.STATUSES.PRODUCTS_RESPONDED]: 'Dein Antrag wurde bearbeitet',
            [ApplicationsConstants.STATUSES.DENIED]: 'Dein Antrag wurde bearbeitet',
            RESPONSES_EXPIRED: 'Dein Antrag wurde bearbeitet',
        },
        missing_application: {
            header: 'Kreditanfrage stellen',
            desc:
                'Um Kreditangebote zu bekommen muss eine Kreditanfrage gestellt werden. Button unten klicken, um Kreditanfrage zu vervollständigen.',
            button: 'Kreditanfrage stellen',
        },
        all_expired: 'Deine Kreditangebote sind abgelaufen. Um einen neuen Kreditanfrage zu stellen',
        press_here: 'klicke hier',
    },
    offer: {
        fee: {
            setup_fee: 'Kontoführungsentgelt',
            administration_fee: 'Bearbeitungsgebühr',
            autogiro_fee: '',
        },
        cost: {
            monthly_cost: 'Monatliche Rate',
            monthly_cost_first: 'Monatliche Rate',
            monthly_cost_last: 'Letzte Monatliche Rate',
            monthly_cost_average: 'Durchschnittliche monatliche Rate',
            short: {
                monthly_cost: 'Rate',
            },
        },
        interest: {
            effective: 'Effektivzinssatz',
            nominal: 'Sollzinssatz',
            short: {
                effective: 'Eff.zinssatz',
                nominal: 'Sollzinssatz',
            },
        },
        private_loan: 'Private loan',
        safety_insurance: 'Safety insurance',
        requires_settlement: 'Required Settlement',
        requires_settlement_short: 'Req. Settlement',
        internal_settlement_text: 'The bank want to use a part of the loan to settle existing loans at the bank.',
        external_settlement_text: 'The bank want to use a part of the loan to settle existing loans at other banks.',
        straight: 'Fix',
        straight_description:
            'Ein Konsumkredit ist ein Abstattungskredit. Das bedeutet, dass ein bestimmter Betrag zur Verfügung gestellt wird und monatlich in gleichbleibenden Raten zurückbezahlt wird.',
        straight_description_short:
            'Bei jeder Zahlung wird der gleiche Betrag rückgeführt. Der Zinsenanteil sinkt daher mit der Tilgung des Darlehens, da der Kreditbetrag zunehmend kleiner wird.',
        annuity: 'Annuity',
        fixed: 'Fix',
        variable: 'Variabel',
        lower_accepted_amount: 'The amount granted is lower than the amount applied.',
        early_redemption:
            "If the loan is paid back before the repayment time is over, the applicant will still be debited the total repayment time's interest fee.",
        early_redemption_capcito:
            'If the loan is paid back before the repayment time is over, the applicant will be debited 2% fee on the prepayed amount.',
        early_redemption_header: 'Early redemption',
        complements: 'Complements',
        complement_short: 'Compl.',
        pep_checkbox_label: "I verify that I'm NOT a politically exposed person (PEP)",
        pep_short_info:
            'A politically exposed person, PEP, have or have had a higher political post or government position. If you are a close co-worker or familymember of such person you should also uncheck this box.',
        no_offer: {
            per_du: {
                header: 'Du hast noch keine Kreditangebote bekommen.',
                desc: 'Bei Fragen steht der Lendo Kundenservice gerne zur Verfügung.',
            },
            per_sie: {
                header: 'Sie haben noch keine Kreditangebote bekommen.',
                desc: 'Bei Fragen steht der Lendo Kundenservice gerne zur Verfügung.',
            },
        },
        // no_offer_header: 'Du hast derzeit keine Angebote',
        // no_offer_desc: 'Wenn ein Angebot einlangt, wird es hier angezeigt.',
        effective_interest: 'Effective interest',
        signing_complement: 'When signing the debenture the bank want wants you to attach the following',
        annuity_text: {
            header: 'Annuity',
            desc:
                'With an annuity, the total monthly cost is fixed, it is sufficient for both the interest rate on the debt and the amortization. If the interest rate does not change, the total monthly cost will be the same at each payment date.',
        },
        complements_bank: 'The bank needs these complements',
        complement: {
            pay_slips: ({ value }) => `${value} payment slips`,
            id_copy: 'Copy of your passport or drivers license',
        },
    },
    details_page: {
        complete_application: {
            header: 'Antrag fertigstellen',
            button: 'Antrag fertigstellen',
        },
    },
    requirement: {
        file_input: {
            browse_files:
                'Die gewünschte Datei per Drag & Drop hierhin ziehen oder <span class="filepond--label-action"> Durchsuchen </span>',
            file_to_large: 'Datei ist zu groß',
            max_file_size: 'Die maximale Dateigröße ist {filesize}',
        },
        payslip: {
            label: ({ number }) => `Gehaltszettel #${number} bzw. Pensionsbescheid`,
            add_field_button: 'Weiteren Gehaltszettel hochladen',
        },
        copy_of_id: {
            label: 'Ausweiskopie',
        },
        signing_method: {
            label: 'Art der Legitimierung',
            placeholder: 'Wählen Sie bitte eine Art der Legitimierung',
            option: {
                customer_visits_bank: 'in einer Filiale',
                bank_contacts_customer: 'via InternetBanking',
                post_identification: 'per PostIdent-Brief',
            },
        },
    },
    accepted: {
        what_happens_now_title: 'So geht es nun weiter:',
        what_happens_now_text: {
            per_du: {
                raiffeisen_bank: [
                    'Auf Basis deiner Angaben bereiten wir die Unterlagen zur Unterschrift für dich vor.',
                    'Für die Identitätsprüfung und Unterschrift bitten wir dich in eine unserer Filialen zu kommen.',
                    'Nach positiver Prüfung erfolgt die Auszahlung direkt auf dein angegebenes Girokonto.',
                ],
                bank_austria: [
                    'Auf Basis deiner Angaben bereiten wir die Unterlagen zur Unterschrift für dich vor.',
                    'Je nach gewählter Art der Legitimierung kontaktiert dich einer unserer Mitarbeiter zur Terminvereinbarung.',
                    'Nach positiver Prüfung erfolgt die Auszahlung innerhalb weniger Werktage direkt auf das angegebene Girokonto.',
                ],
                default: ({ bankName }) => [
                    `Innerhalb von 24 Stunden erhältst du eine E-Mail von ${bankName} an deine E-Mail-Adresse mit weiteren Informationen zu deinem Kreditangebot. Den unterzeichneten Kreditvertrag übermittelst du bitte an die Bank.`,
                    'Sobald die Bank alle Unterlagen und Angaben erhalten hat, erfolgt die Zahlung auf das angegebene Bankkonto.',
                    `Du erhältst den gegengezeichneten Kreditvertrag von ${bankName} innerhalb weniger Tage retour.`,
                ],
            },
            per_sie: {
                raiffeisen_bank: [
                    'Auf Basis Ihrer Angaben bereiten wir die Unterlagen zur Unterschrift für Sie vor.',
                    'Nach positiver Prüfung erfolgt die Auszahlung direkt auf Ihr angegebenes Girokonto.',
                    'Für die Identitätsprüfung und Unterschrift bitten wir Sie in eine unserer Filialen zu kommen.',
                ],
                bank_austria: [
                    'Auf Basis Ihrer Angaben bereiten wir die Unterlagen zur Unterschrift für Sie vor.',
                    'Je nach gewählter Art der Legitimierung kontaktiert Sie einer unserer Mitarbeiter zur Terminvereinbarung.',
                    'Nach positiver Prüfung erfolgt die Auszahlung innerhalb weniger Werktage direkt auf das angegebene Girokonto.',
                ],
                default: ({ bankName }) => [
                    `Innerhalb von 24 Stunden erhältst du eine E-Mail von ${bankName} an deine E-Mail-Adresse mit weiteren Informationen zu deinem Kreditangebot. Den unterzeichneten Kreditvertrag übermittelst du bitte an die Bank.`,
                    'Sobald die Bank alle Unterlagen und Angaben erhalten hat, erfolgt die Zahlung auf das angegebene Bankkonto.',
                    `Du erhältst den gegengezeichneten Kreditvertrag von ${bankName} innerhalb weniger Tage retour.`,
                ],
            },
        },
        you_have_choosen: ({ bankName }) => `Du hast dich für einen Kredit bei ${bankName} entschieden`,
        add_after: 'Folgende Zusatzleistungen können später noch ausgewählt werden',
        acceptance_url:
            'Um den Antrag fertigzustellen, klicken Sie auf das untenstehende Feld und folgen Sie den Antragsprozessschritten. Bitte beachten Sie, dass der Kreditantrag mit den angebotenen Konditionen nur einmal durchgeführt werden kann.',
        finalize_application_button: 'Kreditanfrage fertigstellen',
    },
    ui: {
        loading_application: 'Antrag wird geladen',
        loading_offer: 'Angebot wird geladen',
        offers: 'Angebote',
        my_offers: 'Meine Angebote',
        my_information: 'Meine Informationen',
        additional_reqs_from_bank: 'Bitte die letzten 3 Gehaltszettel oder den Pensionsbescheid hochladen (Dateien können einzeln oder gesammelt hochgeladen werden).',
        fill_out_information_below: 'Folgende Informationen werden noch benötigt',
        log_out: 'Abmelden',
        select_language: 'Sprache wählen',
        select_bankname: ({ bankName }) => `${bankName} wählen`,
        contact_customer_support: 'Kundenservice',
        customer_support: 'Der Lendo Kundenservice steht gerne bei Fragen zur Verfügung.',
        about_lendo: 'Über Lendo',
        safety_insurance: 'Versicherung',
        back_to_landing: 'Zurück zu Lendo.at',
        details: 'Details',
        cookies: 'Cookies',
        cookies_desc:
            'Wir verwenden sogenannte Cookies, um unsere Website zu optimieren. Ein Cookie ist eine kleine Textdatei, die von den jeweiligen Servern beim Besuch einer Internetseite verschickt und auf Ihrer Festplatte zwischengespeichert wird. Dies ermöglicht uns Ihren Browser wiederzuerkennen. Cookies enthalten keine personenbezogenen Daten wie Name oder Adresse, sondern lediglich Informationen über Ihren Browser und Ihr Nutzerverhalten.',
        we_use_cookies: 'Lendo verwendet Cookies',
        close: 'Schließen',
        done: 'Fertig',
        update_application: 'Antrag aktualisieren',
        application_updated: 'Dein Antrag wurde aktualisiert.',
        page_not_found_header: 'Oje, etwas ist schiefgelaufen.',
        page_not_found_desc: 'Die Seite konnte nicht gefunden werden',
        no_accepting_banks: {
            per_du: {
                header: 'Du hast leider keine Kreditangebote bekommen',
                desc: 'Bitte wende dich an den Lendo Kundenservice, wir helfen dir gerne weiter.',
                text:
                    'Es kann verschiedene Gründe geben, dass keine Bank dir einen Kredit gewähren möchte. Wende dich an den Lendo Kundenservice, um mehr darüber zu erfahren.',
            },
            per_sie: {
                header: 'Sie haben leider keine Kreditangebote bekommen',
                desc: 'Bitte wenden Sie sich an den Lendo Kundenservice, wir helfen Ihnen gerne weiter.',
                text:
                    'Es kann verschiedene Gründe haben, dass keine Bank Ihnen einen Kredit gewähren möchte. Wenden Sie sich an den Lendo Kundenservice, um mehr darüber zu erfahren.',
            },
            header: 'Derzeit gewährt dir leider keine Bank einen Kredit',
            header_sub: 'Kontaktiere uns. Wir helfen dir gerne weiter',
            desc: 'Häufige Ablehnungsgründe',
            reasons_left: [
                'Zu geringes Einkommen', // Add reasons why banks might not accept your application
            ],
            reasons_right: ['Zu schlechte Kreditwürdigkeit'], // Add reasons why banks might not accept your application
        },
        older_active_offers: 'Vorherige Angebote'
    },
    errors: {
        title: 'Ein Fehler ist aufgetreten',
        'Did not get any jwt token cookie': 'Du bist nicht mehr angemeldet',
        unknown: 'Ein unbekannter Fehler ist aufgetreten',
        unauthed: 'You are unauthorized to access the page, please try log in again',
    },
    validation: {
        required: 'Dies ist ein Pflicht-Feld',
        email: 'Ungültige E-Mail-Adresse',
        required_select: 'Bitte triff eine Wahl',
        account_length: ({ bankName, accountLength }) =>
            `${bankName} requires account numbers with the length of ${accountLength}`,
        min_lenth: ({ minLength }) => `Needs to be at least ${minLength} characters`,
    },
    consent: {
        files_title: 'Kreditvermittlungsvollmacht',
        files_text:
            'Bitte lesen Sie den Kreditvermittlungsauftrag durch und stimmen Sie diesem zu. Wir brauchen Ihre Zustimmung, um in Ihrem Auftrag Kreditangebote für Sie von Banken einholen zu können. Für das Einholen der Angebote entstehen Ihnen keinerlei Kosten oder Verpflichtungen. Um die Kreditvermittlungsvollmacht zu speichern klicken Sie bitte auf den Button.',
        ready_consent_button: 'Ich stimme zu',
        creating_validation: 'Creating validation',
        error: {
            consent_get: 'Der Verifizierungscode konnte nicht verifiziert werden. Bitte einen neuen anfordern.',
            otp_generate: 'Der Verifizierungscode konnte nicht gesendet werden. Bitte einen neuen anfordern.',
            otp_validate:
                'Der Verifizierungscode wurde nicht erkannt. Bitte nocheinmal eingeben oder einen neuen anfordern.',
            default: 'Leider ist ein Fehler aufgetreten. Bitte einen neuen Veifizierungscode anfordern.',
        },
    },
    other: {
        loan_tip_header: 'Tipps',
        loan_tips: ['Du kannst jederzeit höhere Raten zahlen', 'Du kannst den Kredit jederzeit vorzeitig zurückzahlen'],
        pep_header: 'Politisch exponierte Person (PEP)',
        pep_info_message:
            'Eine politisch exponierte Person ist eine Person, die wichtige öffentliche Funktionen in einem Staat oder in einer internationalen Organisation hat oder hatte.',
        pep_example_header: 'Beispiele von politisch exponierten Personen',
        pep_example_list: [
            'Staats- und Regierungschefs',
            'Staatssekretäre und Parlamentsmitglieder',
            'Minister und deren Stellvertreter',
            'Richter und Mitlieder des Obersten Gerichtshofs und des Obersten Verwaltungsgerichts',
            'Botschafter',
            'Führungsetagen staatlicher Behörden wie Rechnungshöfe oder Zentralbanken',
            'Hochrangige Offiziere',
            'Führungspersonen staatlicher Unternehmen',
            'Verantwortliche einer internationalen Organisation (Vorstandsmitglieder, Generalsekretäre etc)',
            'Hochrangige Mitglieder Politischer Parteien',
        ], // Fill up the list with relevant PEP examples
        pep_sub_header: 'Familienmitglieder und Angehörige zählen ebenso dazu',
        pep_sub_desc:
            'Die Bank muss auch darüber informiert werden, wenn du ein Verwandter oder Angehöriger einer politisch exponierten Person bist.',
        pep_sub_list: [
            'Ehemann/Ehefrau, eingetragene/r Partner/in, Lebensgemeinschaft',
            'Kinder und deren Ehepartner, eingetragene Partner oder zusammenlebende Partner',
            'Eltern',
        ],
    },
    loan: {
        reasons: {
            other: 'Sonstiges',
            placeholder: 'Wofür nützt du den Kredit?',

            private_vehicle: 'Auto kaufen',
            private_home_improvement: 'Renovieren/Einrichten',
            private_health_vacation: 'Urlaub',
            private_other: 'Sonstiger privater Verwendungszweck',
        },
    },
};
