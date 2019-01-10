// AUSTRIAN GERMAN TRANSLATION FILE
export default {
    general: {
        amount: 'Kreditbetrag',
        amortize_length: 'Laufzeit',
        loan_purpose: 'Darlehenszweck',
        loan_type: 'Kreditart',
        address: 'Adresse',
        email: 'Email',
        your_email: 'Deine Email',
        phone: 'Telefon',
        required: 'This is a required field', // This is the fallback for all validation
        invalid: 'Ungültige Eingabe', // This is the fallback for all validation,
        num_years: ({ years }) => `${years} %{Jahr|Jahre}`,
        num_months: ({ months }) => `${months} %{Monat|Monate}`,
        contact_person_workplace_for: 'Contact person at your workplace',
        internal: 'Internal',
        external: 'External',
        login: 'Anmelden',
        help: 'Hilfe',
        interest_rate: 'Zinssatz',
        interest: 'Zins',
        amortization: 'Amortization',
        total_cost: 'Gesamtkosten',
        social_id: 'Social id',
        work_place: 'Work place',
        email_adress: 'Email-Adresse',
        monthly_income: 'Monthly income',
        accommodation_type: 'Accommodation type',
        mobile_phone_number: 'Mobilnummer',
        other: 'Other',
        more: 'Mehr',
        more_info: 'Weitere Informationen',
        fees: 'Gebühren',
        add: 'Hinzufügen',
    },
    login: {
        header: 'Anmelden',
        sms: 'SMS',
        otp_message: 'A verification code has been sent to your phone, please verify it here when receieved.',
        username_placeholder: 'Lendo ID',
        otp_placeholder: 'One Time Password',
        verify_otp_button: 'Überprüfen',
        submit_button: 'Anmelden',
    },
    application: {
        applied_amount: 'Beantragter Kreditbetrag',
        applied_period: 'Beantragte Kreditlaufzeit',
        accommodation_monthly_cost: 'Accommodation monthly cost',
        civil_state: 'Civil state',
        num_of_children: 'Anzahl Kinder',
        full_time: 'Full time',
        rental: 'Miete',
        no_active_application: 'Keine aktiven Anträge',
        less_than_one_hour: 'weniger als eine Stunde',
        hours: ({ hours }) => `${hours} %{Stunde|Stunden}`,
        time_left: 'Verbleibende Zeit',
        status: {
            [ApplicationsConstants.STATUSES.CREATED]: 'Information is being collected',
            [ApplicationsConstants.STATUSES.PREREQUISITES_COMPLETED]: 'Dein Antrag wird bearbeitet',
            [ApplicationsConstants.STATUSES.APPROVED]: 'Dein Antrag wird bearbeitet',
            [ApplicationsConstants.STATUSES.PRODUCTS_RESPONDED]: 'Dein Antrag wurde bearbeitet',
            [ApplicationsConstants.STATUSES.DENIED]: 'Dein Antrag wurde bearbeitet',
            RESPONSES_EXPIRED: 'Dein Antrag wurde bearbeitet',
        },
        missing_application: {
            header: 'Create an application',
            desc:
                'To view offers you need an active application at Lendo. Click the button below to get to our application.',
            button: 'Create an application',
        },
        all_expired: 'The time for all your offers has expired. To make a new application',
        press_here: 'press here',
    },
    offer: {
        fee: {
            arrangement_fee: 'Teilnahmegebühr',
            administration_fee: 'Bearbeitungsgebühr',
            direct_debit_fee: 'Kontoführungsgebühr',
        },
        cost: {
            monthly_cost: 'Monatliche Rate',
            monthly_cost_first: 'Monatliche Kosten zuerst',
            monthly_cost_last: 'Monatliche Kosten zuletzt',
            monthly_cost_average: 'Durchschnittliche monatliche Kosten',
            short: {
                monthly_cost: 'Rate',
            },
        },
        interest: {
            effective: 'Effektivzinssatz',
            nominal: 'Nomineller Zinssatz',
            short: {
                effective: 'Eff.zinssatz',
                nominal: 'Nom. Zinssatz',
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
        fixed: 'Fixed',
        variable: 'Variable',
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
                header: 'Du hast leider keine Kreditangebote bekommen',
                desc: 'Bitte wende dich an den Lendo Kundenservice, wir helfen Ihnen gerne weiter.',
            },
            per_sie: {
                header: 'Sie haben leider keine Kreditangebote bekommen',
                desc: 'Bitte wenden Sie sich an den Lendo Kundenservice, wir helfen Ihnen gerne weiter.',
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
    requirement: {
        signing_method: {
            label: 'Signing method',
            placeholder: 'Select signing method',
            option: {
                customer_visits_bank: 'Customer visits bank',
                bank_contacts_customer: 'Bank contacts customer',
                post_identification: 'PostId',
            },
        },
    },
    accepted: {
        this_happens_now: 'So geht es nun weiter:',
        you_have_choosen: ({ bankName }) => `Du hast dich für einen Kredit bei der ${bankName} entschieden`,
        add_after: 'The following services can be added later on',
        texts: {
            general: ({ bankName }) => [
                `Innerhalb von 24 Stunden erhältst du eine E-Mail von der ${bankName} an deine E-Mail-Adresse mit weiteren Informationen zu deinem Kreditangebot. Den unterzeichneten Kreditvertrag übermittelst du bitte an die Bank.`,
                'Sobald die Bank alle Unterlagen und Angaben erhalten hat, erfolgt die Zahlung auf das angegebene Bankkonto.',
                `Du erhältst den gegengezeichneten Kreditvertrag von ${bankName} innerhalb weniger Tage retour.`,
            ],
            acceptance_url: ({ bankName }) => [
                `You need to follow the link below and fill in required data at ${bankName} to proceed with your application.`,
            ],
        },
        finalize_application_button: 'Finialize your application here',
    },
    ui: {
        loading_application: 'Fetching application',
        loading_offer: 'Fetching offer',
        offers: 'Angebote',
        my_offers: 'Meine Angebote',
        my_information: 'My information',
        additional_reqs_from_bank: 'Zusätzliche Anforderungen der Bank',
        complete_application: {
            header: 'Deinen Antrag fertigstellen',
            text:
                <p>Durch Klicken auf „Antrag fertigstellen“ erkläre ich mich damit einverstanden, dass jenes Kreditinstitut, mit dem ich in Verhandlungen zum Abschluss eines Kreditvertrages trete, folgende Daten an LENDO übermittelt: Vorname, Nachname, Geburtsdatum, ausgezahlte Kreditsumme. Dies gilt sowohl für den Fall, dass es zum Abschluss eines Kreditvertrages kommt, als auch für den Fall, dass die Verhandlungen nicht zu einem Abschluss führen. <br /><br /> Auf Basis Ihrer Angaben ist das Angebot bis heute 24:00 Uhr verbindlich. Danach kann sich die Kondition ändern. Bitte beachten Sie, dass der Kreditantrag mit den angebotenen Konditionen nur einmal durchgeführt werden kann.</p>,
            button: 'Antrag fertigstellen',
        },
        fill_out_information_below: 'Beantworte noch die folgenden Fragen, um den Antrag fertigzustellen.',
        log_out: 'Abmelden',
        select_language: 'Sprache wählen',
        select_bankname: ({ bankName }) => `${bankName} wählen`,
        contact_customer_support: 'Kundensupport',
        customer_support: 'Any further questions, please contact our customer service.',
        about_lendo: 'Über Lendo',
        safety_insurance: 'Safety insurance',
        back_to_landing: 'Zurück zu Lendo.at',
        details: 'Details',
        cookies: 'Cookies',
        cookies_desc:
            'Cookies are a type of file stored on your device. Lendo uses this file to enhance your experience on our site. Options such as language settings and the like are saved in this file so that you will not be able to set them every time you visit us. Cookies are harmless to you and your computer, since no type of code can be stored in them, no advertisements or programs can be saved here. The files also do not significantly affect your system in terms of speed. Only the site that puts a cookie can read it, with this no other website can read this information.',
        we_use_cookies: 'Lendo are storing session-cookies',
        close: 'Close',
        done: 'Done',
        update_application: 'Update application',
        application_updated: 'Your application has been updated',
        page_not_found_header: 'Whoops, nothing to see here',
        page_not_found_desc: 'The page you were looking for could not be found',
        no_accepting_banks: {
            per_du: {
                header: 'Du hast leider keine Kreditangebote bekommen',
                desc: 'Bitte wende dich an den Lendo Kundenservice, wir helfen Ihnen gerne weiter.',
                text:
                    'Es kann verschiedene Gründe haben, dass keinen Bank dir einen Kredit gewähren möchte. Wende dich an den Lendo Kundenservice, um mehr darüber zu erfahren.',
            },
            per_sie: {
                header: 'Sie haben leider keine Kreditangebote bekommen',
                desc: 'Bitte wenden Sie sich an den Lendo Kundenservice, wir helfen Ihnen gerne weiter.',
                text:
                    'Es kann verschiedene Gründe haben, dass keinen Bank Ihnen einen Kredit gewähren möchte. Wenden Sie sich an den Lendo Kundenservice, um mehr darüber zu erfahren.',
            },
            header: 'Right now no lender can grant you any loan',
            header_sub: 'Contact us and we will help you further',
            desc: 'Usual cases',
            reasons_left: [
                'Missing tax income', // Add reasons why banks might not accept your application
            ],
            reasons_right: ['Recently changed civil state'], // Add reasons why banks might not accept your application
        },
    },
    errors: {
        'Did not get any jwt token cookie': 'You are no longer logged in',
        unknown: 'An unknown error occured when fetching data',
    },
    validation: {
        required: 'Dies ist ein Pflicht-Feld',
        email: 'Ungültige EMail-Adresse',
        required_select: 'Bitte triff eine Wahl',
        account_length: ({ bankName, accountLength }) =>
            `${bankName} requires account numbers with the length of ${accountLength}`,
        min_lenth: ({ minLength }) => `Needs to be at least ${minLength} characters`,
    },
    consent: {
        files_title: 'Please review these files before you consent.',
        ready_consent_button: 'Consent',
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
            other: 'Other',
            placeholder: 'Choose loan purpose',

            private_vehicle: 'Buy vehicle',
            private_home_improvement: 'Renovate at home, buy appliances or furniture',
            private_health_vacation: 'Health vaction travel',
            private_other: 'Other consumption',
        },
    },
};