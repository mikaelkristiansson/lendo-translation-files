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
        error: {
            404: 'Verifizierungscode konnte nicht erstellt werden',
            401: 'Die Seite konnte nicht geöffnet werden. Bitte versuchen Sie es nocheinmal.',
            400: 'Der Verifizierungscode wurde nicht erkannt',
        },
    },
    otp: {
        sent: {
            title: 'Ein Verifizierungscode wurde an Ihr Telefon gesandt.',
            content: 'Wir haben Ihnen einen Verifizierungscode geschickt. Bitte geben Sie diesen hier ein.',
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
            RESPONSES_EXPIRED: 'Das Angebot ist abgelaufen',
        },
        missing_application: {
            header: 'Kreditanfrage stellen',
            desc:
                'Um Kreditangebote zu bekommen muss eine Kreditanfrage gestellt werden. Button unten klicken, um Kreditanfrage zu vervollständigen.',
            button: 'Kreditanfrage stellen',
        },
        all_expired: 'Deine Kreditangebote sind abgelaufen. Um eine neue Kreditanfrage zu stellen',
        press_here: 'bitte hier klicken',
    },
    offer: {
        fee: {
            setup_fee: 'Bearbeitungsgebühr (einmalig)',
            administration_fee: 'Kontoführungsentgelt (monatlich)',
            autogiro_fee: '',
        },
        cost: {
            monthly_cost: 'Monatliche Rate',
            monthly_cost_first: 'Monatliche Rate',
            monthly_cost_last: 'Letzte Monatliche Rate',
            monthly_cost_last_short: 'Letzte Rate',
            monthly_cost_average: 'Durchschnittliche monatliche Rate',
            short: {
                monthly_cost: 'Rate',
            },
        },
        interest: {
            effective: 'Effektivzinssatz p.a.',
            nominal: 'Sollzinssatz p.a.',
            short: {
                effective: 'Eff.zinssatz p.a.',
                nominal: 'Sollzinssatz p.a.',
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
        annuity: 'Annuität',
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
        effective_interest: 'Effektivzinssatz p.a.',
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
            remove_field_button: 'Feld entfernen',
        },
        copy_of_id: {
            label: 'Kopie von Reisepass oder Personalausweis (Vorder- und Rückseite)',
        },
        copy_of_bank_card: {
            label: 'Kopie der Maestro-/Bankomatkarte (Name und IBAN müssen sichtbar sein)',
        },
        signing_method: {
            label: 'Art der Legitimierung',
            placeholder: 'Bitte eine Art der Legitimierung auswählen',
            option: {
                customer_visits_bank: 'in einer Filiale',
                bank_contacts_customer: 'via InternetBanking (nur für Bank Austria Kunden mit InternetBanking)',
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
                santander: [
                    'Ein Mitarbeiter der Santander Consumer Bank wird dich so schnell wie möglich kontaktieren und ein telefonisches Beratungsgespräch mit dir vereinbaren bei dem du alle erforderlichen Informationen erhältst.',
                    'Den unterzeichneten Kreditantrag kannst du dann gesichert im Tool der Santander Consumer Bank ganz einfach als Foto oder Scan hochladen.',
                    'Sobald die Bank alle Unterlagen und Angaben erhalten hat, erfolgt die Auszahlung auf das angegebene Bankkonto.',
                ],
                tf_bank: [
                    'Nach Prüfung deiner eingereichten Dokumente (ID, die letzten 3 Gehaltsnachweise) erhälts du den Kreditvertrag per Post zugestellt. Bitte sende uns diesen unterschrieben auf dem Postweg zurück.',
                    'Zusätzlich benötigen wir zur Verifizierung deines Bankkontos eine Testüberweisung von 0,01€ an die folgende Bankverbindung:',
                    'IBAN: DE34512202000070508206, BIC: ESSEDEFFXXX, Verwendungszweck: Vor- und Nachname',
                    'Sobald wir deinen unterschriebenen Kreditvertrag erhalten und du dein Bankkonto durch die Überweisung von 0,01€ verifiziert hast, wird die Kreditsumme ausgezahlt.',
                ],
                erste_bank: [
                    'Bitte nimm dir noch 15 Minuten Zeit um den Antrag fertigzustellen. Der Kreditantrag kann mit den angebotenen Konditionen nur einmal durchgeführt werden. Mit Klick auf den untenstehenden Button wirst du direkt auf das Erste Bank Portal weitergeleitet um die restlichen Schritte zu erledigen:',
                    <p>
                        {' '}
                        - Überprüfung deiner Angaben und des IBANs deines Auszahlungskontos <br />
                        - Hochladen deiner Ausweisdokumente <br />
                        - Zeichnung des Kreditvertrags mittels SMS Code (den Vertrag erhältst du per Email)
                        <br />
                        - Hochladen deiner Einkommensnachweise der letzten 3 Monate <br />- Identitätsprüfung per Video-
                        oder EPS-Legitimierung{' '}
                    </p>,
                    'Nach positiver, finaler Prüfung durch die Erste Bank und Sparkasse wird dein Kreditbetrag auf dein angegebenes Konto ausbezahlt. Die Auszahlung erfolgt an Bankwerktagen binnen 24 Stunden. Du erhältst zusätzlich dazu eine Bestätigungs-Email. Bei Fragen wende dich an den Lendo Kundenservice.',
                ],
                cashpresso: [
                    'Nach Klick auf den untenstehenden Button wirst du auf das cashpresso Portal weitergeleitet um deinen Antrag fertigzustellen.',
                    'Halte bitte folgenden Dokumente und Information bereit: Reisepass oder Personalausweis, IBAN deines Bankkontos.',
                    'Nach positiver Prüfung deiner Unterlagen kann der Betrag auf dein Konto ausgezahlt werden.',
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
                santander: [
                    'Ein Mitarbeiter der Santander Consumer Bank wird Sie so schnell wie möglich kontaktieren und ein telefonisches Beratungsgespräch mit Ihnen vereinbaren bei dem Sie alle erforderlichen Informationen erhalten.',
                    'Den unterzeichneten Kreditantrag können Sie dann gesichert im Tool der Santander Consumer Bank ganz einfach als Foto oder Scan hochladen.',
                    'Sobald die Bank alle Unterlagen und Angaben erhalten hat, erfolgt die Auszahlung auf das angegebene Bankkonto.',
                ],
                tf_bank: [
                    'Nach Prüfung Ihrer eingereichten Dokumente (ID, die letzten 3 Gehaltsnachweise) erhalten Sie den Kreditvertrag per Post zugestellt. Bitte senden Sie uns diesen unterschrieben auf dem Postweg zurück.',
                    'Zusätzlich benötigen wir zur Verifizierung Ihres Bankkontos eine Testüberweisung von 0,01€ an die folgende Bankverbindung:',
                    'IBAN: DE34512202000070508206, BIC: ESSEDEFFXXX, Verwendungszweck: Vor- und Nachname',
                    'Sobald wir Ihren unterschriebenen Kreditvertrag erhalten und Sie Ihr Bankkonto durch die Überweisung von 0,01€ verifiziert haben, wird die Kreditsumme ausgezahlt.',
                ],
                erste_bank: [
                    'Bitte nehmen Sie sich noch 15 Minuten Zeit um den Antrag fertigzustellen. Der Kreditantrag kann mit den angebotenen Konditionen nur einmal durchgeführt werden. Mit Klick auf den untenstehenden Button werden Sie direkt auf das Erste Bank Portal weitergeleitet um die restlichen Schritte zu erledigen:',
                    <p>
                        {' '}
                        - Überprüfung Ihrer Angaben und des IBANs Ihres Auszahlungskontos <br />
                        - Hochladen Ihrer Ausweisdokumente
                        <br />
                        - Zeichnung des Kreditvertrags mittels SMS Code (den Vertrag erhalten Sie per Email)
                        <br />
                        - Hochladen Ihrer Einkommensnachweise der letzten 3 Monate <br />- Identitätsprüfung per Video-
                        oder EPS-Legitimierung{' '}
                    </p>,
                    'Nach positiver, finaler Prüfung durch die Erste Bank und Sparkasse wird Ihr Kreditbetrag auf Ihr angegebenes Konto ausbezahlt. Die Auszahlung erfolgt an Bankwerktagen binnen 24 Stunden. Sie erhalten zusätzlich dazu eine Bestätigungs-Email. Bei Fragen wenden Sie sich an den Lendo Kundenservice.',
                ],
                cashpresso: [
                    'Nach Klick auf den untenstehenden Button werden Sie auf das cashpresso Portal weitergeleitet um Ihren Antrag fertigzustellen.',
                    'Halten Sie bitte folgenden Dokumente und Information bereit: Reisepass oder Personalausweis, IBAN Ihres Bankkontos.',
                    'Nach positiver Prüfung Ihrer Unterlagen kann der Betrag auf Ihr Konto ausgezahlt werden.',
                ],
                default: ({ bankName }) => [
                    `Innerhalb von 24 Stunden erhalten Sie eine E-Mail von ${bankName} an Ihre E-Mail-Adresse mit weiteren Informationen zu Ihrem Kreditangebot. Den unterzeichneten Kreditvertrag übermittelen Sie bitte an die Bank.`,
                    'Sobald die Bank alle Unterlagen und Angaben erhalten hat, erfolgt die Zahlung auf das angegebene Bankkonto.',
                    `Sie erhalten den gegengezeichneten Kreditvertrag von ${bankName} innerhalb weniger Tage retour.`,
                ],
            },
        },
        you_have_choosen: ({ bankName }) => `Der Finanzierungsvorschlag von ${bankName} wurde ausgewählt`,
        add_after: 'Folgende Zusatzleistungen können später noch ausgewählt werden',
        acceptance_url:
            'Bitte auf den Button klicken, um den Prozess im Portal unseres Partners abzuschließen.',
        finalize_application_button: 'Kreditanfrage fertigstellen',
    },
    ui: {
        loading_application: 'Antrag wird geladen',
        loading_offer: 'Angebot wird geladen',
        offers: 'Angebote',
        my_offers: 'Meine Angebote',
        my_information: 'Meine Informationen',
        additional_reqs_from_bank:
            'Bitte die letzten 3 Gehaltszettel oder den Pensionsbescheid hochladen (Dateien können einzeln oder gesammelt hochgeladen werden).',
        fill_out_information_below: 'Eine Kreditprüfung durch die Bank erfolgt nur unter der Voraussetzung, dass alle erforderlichen Unterlagen vollständig hochgeladen wurden!',
        log_out: 'Abmelden',
        select_language: 'Sprache wählen',
        select_bankname: ({ bankName }) => `${bankName} wählen`,
        contact_customer_support: 'Kundenservice',
        customer_support: 'Der Lendo Kundenservice steht gerne bei Fragen zur Verfügung.',
        about_lendo: 'Über Lendo',
        safety_insurance: 'Versicherung',
        back_to_landing: 'Zurück zur Startseite',
        details: 'Finanzierungsvorschlag (vorbehaltlich positiver Kreditentscheidung)',
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
        older_active_offers: 'Vorherige Angebote',
    },
    errors: {
        title: 'Ein Fehler ist aufgetreten',
        contact_us: 'Leider ist ein Fehler aufgetreten. Bitte kontaktieren Sie unseren Kundenservice.',
        'Did not get any jwt token cookie': 'Du bist nicht mehr angemeldet',
        unknown: 'Ein unbekannter Fehler ist aufgetreten',
        unauthed: 'You are unauthorized to access the page, please try log in again',
    },
    validation: {
        required: 'Dies ist ein Pflicht-Feld',
        email: 'Ungültige E-Mail-Adresse',
        required_select: 'Bitte triff eine Wahl',
        required_checkbox: 'Bitte zustimmen',
        required_dropdown: 'Auswahl ist erforderlich',
        account_length: ({ bankName, accountLength }) =>
            `${bankName} requires account numbers with the length of ${accountLength}`,
        min_lenth: ({ minLength }) => `Needs to be at least ${minLength} characters`,
    },
    consent: {
        files_title: 'Kreditvermittlungsvollmacht',
        files_text:
            'Bitte lesen Sie den Kreditvermittlungsauftrag durch und stimmen Sie diesem zu. Wir brauchen Ihre Zustimmung, um in Ihrem Auftrag Kreditangebote für Sie von Banken einholen zu können. Für das Einholen der Angebote entstehen Ihnen keinerlei Kosten oder Verpflichtungen. Um die Kreditvermittlungsvollmacht anzuzeigen oder zu speichern klicken Sie bitte auf den Button.',
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
