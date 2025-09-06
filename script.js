(function () {
  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

  const yearEl = $('#year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  $('#printPage')?.addEventListener('click', () => window.print());

  // FAQ accordion
  $$('.accordion-trigger').forEach((btn) => {
    btn.addEventListener('click', () => {
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!expanded));
      const panel = btn.nextElementSibling;
      if (panel) {
        panel.hidden = expanded;
      }
    });
  });

  // Readiness checker
  $('#checkReadiness')?.addEventListener('click', () => {
    const q1 = $('input[name="q1"]:checked')?.value;
    const q2 = $('input[name="q2"]:checked')?.value;
    const q3 = $('input[name="q3"]:checked')?.value;
    const result = $('#readinessResult');
    if (!result) return;

    if (!q1 || !q2 || !q3) {
      result.className = 'result warn';
      result.textContent = t('checker_fill_all');
      return;
    }

    if (q1 === 'yes' && q2 === 'yes' && q3 === 'yes') {
      result.className = 'result success';
      result.textContent = t('checker_ready');
    } else if (q1 === 'no') {
      result.className = 'result warn';
      result.innerHTML = `${t('checker_get_aadhaar')} <a target="_blank" rel="noopener" href="https://uidai.gov.in">${t('visit_uidai')}</a>.`;
    } else if (q2 === 'no') {
      result.className = 'result warn';
      result.innerHTML = `${t('checker_seed_bank')} <a target="_blank" rel="noopener" href="https://resident.uidai.gov.in/bank-mapper">${t('check_mapper')}</a>.`;
    } else if (q3 === 'no') {
      result.className = 'result warn';
      result.textContent = t('checker_enable_dbt');
    } else {
      result.className = 'result warn';
      result.textContent = t('checker_follow_steps');
    }
  });

  // i18n
  const STRINGS = {
    en: {
      brand_top: 'Government of India',
      brand_bottom: 'Department of Social Justice & Empowerment',
      lang_toggle: 'हिन्दी',
      print: 'Print',
      nav_about: 'About',
      nav_difference: 'Aadhaar vs DBT',
      nav_steps: 'Enable DBT',
      nav_checker: 'Readiness Check',
      nav_faq: 'FAQ',
      nav_contact: 'Contact',
      hero_title: 'Know Your Aadhaar for Scholarship DBT',
      hero_sub: 'Ensure your bank account is Aadhaar-seeded and DBT-enabled to receive scholarships on time.',
      cta_learn: 'Understand the Difference',
      cta_enable: 'Enable DBT Now',
      note_head: 'Important:',
      note_body: 'Scholarships under Pre-Matric and Post-Matric schemes are paid ONLY via DBT into a DBT-enabled Aadhaar-seeded bank account.',
      diff_title: 'Aadhaar-Linked vs DBT-Enabled Aadhaar-Seeded',
      diff_linked_head: 'Aadhaar-Linked Bank Account',
      diff_linked_1: 'Bank has your Aadhaar for KYC/records.',
      diff_linked_2: 'Does NOT guarantee direct government payments.',
      diff_linked_3: 'May still require seeding and DBT activation.',
      diff_dbt_head: 'DBT-Enabled Aadhaar-Seeded Account',
      diff_dbt_1: 'Aadhaar is seeded in bank’s NPCI mapper.',
      diff_dbt_2: 'DBT enabled for receiving government benefits.',
      diff_dbt_3: 'Required for scholarship disbursement.',
      link_mapper: 'Check Aadhaar–Bank Linking Status',
      link_nsp: 'Go to National Scholarship Portal',
      steps_title: 'How to Enable DBT',
      steps_1_head: 'Ensure Aadhaar is active and updated',
      steps_1_body: 'Update mobile/email/biometrics at the nearest Aadhaar Seva Kendra if needed.',
      steps_1_link: 'Visit UIDAI',
      steps_2_head: 'Seed Aadhaar with your bank account',
      steps_2_body: 'Use your bank’s Aadhaar seeding options (branch, ATM, mobile/online banking).',
      steps_3_head: 'Ask bank to enable DBT (NPCI mapping)',
      steps_3_body: 'Confirm NPCI mapper shows your account as primary for DBT.',
      steps_3_link: 'Check Mapper',
      steps_4_head: 'Verify on NSP during application',
      steps_4_body: 'Ensure the same Aadhaar and bank details are used on the National Scholarship Portal.',
      checker_title: 'Scholarship DBT Readiness Check',
      checker_q1: 'Do you have Aadhaar?',
      checker_q2: 'Is your bank account Aadhaar-seeded?',
      checker_q3: 'Has bank enabled DBT (NPCI mapping) for your account?',
      checker_btn: 'Check',
      yes: 'Yes',
      no: 'No',
      reset: 'Reset',
      checker_fill_all: 'Please answer all questions.',
      checker_ready: 'You are ready to receive scholarship via DBT.',
      checker_get_aadhaar: 'Apply for or update your Aadhaar.',
      visit_uidai: 'Visit UIDAI',
      checker_seed_bank: 'Seed your Aadhaar with your bank account and verify the mapper.',
      check_mapper: 'Check Mapper',
      checker_enable_dbt: 'Request your bank to enable DBT and set your account as primary in NPCI mapper.',
      checker_follow_steps: 'Follow the steps above and use the official links.',
      faq_title: 'Frequently Asked Questions',
      faq_1_q: 'Is Aadhaar-linking the same as DBT enablement?',
      faq_1_a: 'No. Linking is KYC; DBT requires NPCI mapping and bank activation.',
      faq_2_q: 'How do I know if DBT is enabled?',
      faq_2_a: 'Ask your bank and check the Aadhaar–Bank Mapper. The account must be primary for DBT.',
      faq_3_q: 'Which details must match on NSP?',
      faq_3_a: 'Use the same Aadhaar, name, and bank account as seeded and mapped for DBT.',
      contact_title: 'Contact & Support',
      contact_gov_head: 'Government Resources',
      contact_connect_head: 'Connect With Us',
      contact_msg: 'For assistance, email your district nodal officer or raise a grievance.',
      contact_email: 'Email Nodal Officer',
      contact_grievance: 'Raise Grievance on NSP',
      contact_dbt: 'DBT Bharat Portal',
      contact_uidai: 'UIDAI',
      contact_nsp: 'National Scholarship Portal',
      contact_dosje: 'Department of Social Justice & Empowerment',
      disclaimer: 'Disclaimer: This page is for awareness only. No personal data is collected.',
      footer: 'SCD-V Division, DoSJE'
    },
    hi: {
      brand_top: 'भारत सरकार',
      brand_bottom: 'सामाजिक न्याय एवं अधिकारिता विभाग',
      lang_toggle: 'English',
      print: 'प्रिंट',
      nav_about: 'परिचय',
      nav_difference: 'आधार बनाम डीबीटी',
      nav_steps: 'डीबीटी सक्षम करें',
      nav_checker: 'तैयारी जाँच',
      nav_faq: 'प्रश्नोत्तरी',
      nav_contact: 'संपर्क',
      hero_title: 'छात्रवृत्ति डीबीटी के लिए अपना आधार जानें',
      hero_sub: 'समय पर छात्रवृत्ति पाने हेतु आपका बैंक खाता आधार-सीडेड और डीबीटी-सक्षम हो।',
      cta_learn: 'अंतर समझें',
      cta_enable: 'अभी डीबीटी सक्षम करें',
      note_head: 'महत्वपूर्ण:',
      note_body: 'पूर्व-मैट्रिक और पश्च-मैट्रिक योजनाओं की छात्रवृत्ति केवल डीबीटी के माध्यम से डीबीटी-सक्षम आधार-सीडेड बैंक खाते में दी जाती है।',
      diff_title: 'आधार-लिंक्ड बनाम डीबीटी-सक्षम आधार-सीडेड',
      diff_linked_head: 'आधार-लिंक्ड बैंक खाता',
      diff_linked_1: 'बैंक के पास आपके केवाईसी हेतु आधार है।',
      diff_linked_2: 'सरकारी भुगतान की गारंटी नहीं देता।',
      diff_linked_3: 'फिर भी सीडिंग और डीबीटी सक्रियण आवश्यक हो सकता है।',
      diff_dbt_head: 'डीबीटी-सक्षम आधार-सीडेड खाता',
      diff_dbt_1: 'एनपीसीआई मैपर में आधार सीड है।',
      diff_dbt_2: 'सरकारी लाभों हेतु डीबीटी सक्षम है।',
      diff_dbt_3: 'छात्रवृत्ति के वितरण के लिए आवश्यक।',
      link_mapper: 'आधार–बैंक लिंक स्थिति जाँचें',
      link_nsp: 'नेशनल स्कॉलरशिप पोर्टल पर जाएँ',
      steps_title: 'डीबीटी कैसे सक्षम करें',
      steps_1_head: 'आधार सक्रिय और अपडेट रखें',
      steps_1_body: 'आवश्यक हो तो निकटतम आधार सेवा केंद्र में मोबाइल/ईमेल/बायोमैट्रिक्स अपडेट करें।',
      steps_1_link: 'यूआईडीएआई देखें',
      steps_2_head: 'अपने बैंक खाते से आधार सीड करें',
      steps_2_body: 'शाखा, एटीएम, मोबाइल/ऑनलाइन बैंकिंग से आधार सीडिंग कराएँ।',
      steps_3_head: 'बैंक से डीबीटी (एनपीसीआई मैपिंग) सक्षम कराएँ',
      steps_3_body: 'एनपीसीआई मैपर में आपका खाता डीबीटी हेतु प्राइमरी दिखना चाहिए।',
      steps_3_link: 'मैपर जाँचें',
      steps_4_head: 'आवेदन के समय एनएसपी पर सत्यापित करें',
      steps_4_body: 'एनएसपी पर वही आधार और बैंक विवरण दर्ज करें जो सीड और मैप हैं।',
      checker_title: 'छात्रवृत्ति डीबीटी तैयारी जाँच',
      checker_q1: 'क्या आपके पास आधार है?',
      checker_q2: 'क्या आपका बैंक खाता आधार-सीडेड है?',
      checker_q3: 'क्या बैंक ने आपके खाते हेतु डीबीटी सक्षम किया है?',
      checker_btn: 'जाँचें',
      yes: 'हाँ',
      no: 'नहीं',
      reset: 'रीसेट',
      checker_fill_all: 'कृपया सभी प्रश्नों के उत्तर दें।',
      checker_ready: 'आप डीबीटी के माध्यम से छात्रवृत्ति प्राप्त करने के लिए तैयार हैं।',
      checker_get_aadhaar: 'अपना आधार बनवाएँ या अपडेट करें।',
      visit_uidai: 'यूआईडीएआई देखें',
      checker_seed_bank: 'अपने बैंक खाते में आधार सीड करें और मैपर जाँचें।',
      check_mapper: 'मैपर जाँचें',
      checker_enable_dbt: 'अपने बैंक से डीबीटी सक्षम कराएँ और एनपीसीआई मैपर में खाता प्राइमरी सेट कराएँ।',
      checker_follow_steps: 'ऊपर दिए चरणों का पालन करें और आधिकारिक लिंक का उपयोग करें।',
      faq_title: 'अक्सर पूछे जाने वाले प्रश्न',
      faq_1_q: 'क्या आधार-लिंकिंग और डीबीटी सक्षम करना एक ही है?',
      faq_1_a: 'नहीं। लिंकिंग केवाईसी है; डीबीटी हेतु एनपीसीआई मैपिंग और बैंक सक्रियण आवश्यक है।',
      faq_2_q: 'डीबीटी सक्षम है या नहीं, कैसे पता चले?',
      faq_2_a: 'अपने बैंक से पूछें और आधार–बैंक मैपर जाँचें। खाता डीबीटी हेतु प्राइमरी होना चाहिए।',
      faq_3_q: 'एनएसपी पर कौन से विवरण मिलाने चाहिए?',
      faq_3_a: 'वही आधार, नाम और बैंक खाता उपयोग करें जो सीड और मैप है।',
      contact_title: 'संपर्क एवं सहायता',
      contact_gov_head: 'सरकारी संसाधन',
      contact_connect_head: 'हमसे जुड़ें',
      contact_msg: 'सहायता हेतु अपने जिला नोडल अधिकारी को ईमेल करें या शिकायत दर्ज करें।',
      contact_email: 'नोडल अधिकारी को ईमेल',
      contact_grievance: 'एनएसपी पर शिकायत दर्ज करें',
      contact_dbt: 'डीबीटी भारत पोर्टल',
      contact_uidai: 'यूआईडीएआई',
      contact_nsp: 'नेशनल स्कॉलरशिप पोर्टल',
      contact_dosje: 'सामाजिक न्याय एवं अधिकारिता विभाग',
      disclaimer: 'अस्वीकरण: यह पृष्ठ केवल जनजागरूकता के लिए है। कोई व्यक्तिगत डेटा संग्रहीत नहीं होता।',
      footer: 'एससीडी-वी प्रभाग, सामाजिक न्याय एवं अधिकारिता विभाग'
    }
  };

  const langToggle = $('#langToggle');
  const getLang = () => localStorage.getItem('lang') || 'en';
  let currentLang = getLang();

  function applyI18n() {
    const dict = STRINGS[currentLang] || STRINGS.en;
    $$('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (dict[key]) el.textContent = dict[key];
    });
    // Update toggle label to show the other language
    if (langToggle) {
      langToggle.textContent = dict['lang_toggle'] || 'हिन्दी';
      langToggle.setAttribute('aria-pressed', currentLang === 'hi' ? 'true' : 'false');
    }
  }

  function t(key) {
    const dict = STRINGS[currentLang] || STRINGS.en;
    return dict[key] || key;
  }

  langToggle?.addEventListener('click', () => {
    currentLang = currentLang === 'en' ? 'hi' : 'en';
    localStorage.setItem('lang', currentLang);
    applyI18n();
  });

  // Initialize
  applyI18n();
})();
