import i18n from "i18next";
import { initReactI18next } from "react-i18next";

export const languageOptions = [
  { code: "en", label: "English" },
  { code: "as", label: "Assamese" },
  { code: "bn", label: "Bengali" },
  { code: "brx", label: "Bodo" },
  { code: "doi", label: "Dogri" },
  { code: "gu", label: "Gujarati" },
  { code: "hi", label: "Hindi" },
  { code: "kn", label: "Kannada" },
  { code: "ks", label: "Kashmiri" },
  { code: "kok", label: "Konkani" },
  { code: "mai", label: "Maithili" },
  { code: "ml", label: "Malayalam" },
  { code: "mni", label: "Manipuri" },
  { code: "mr", label: "Marathi" },
  { code: "ne", label: "Nepali" },
  { code: "or", label: "Odia" },
  { code: "pa", label: "Punjabi" },
  { code: "sa", label: "Sanskrit" },
  { code: "sat", label: "Santali" },
  { code: "sd", label: "Sindhi" },
  { code: "ta", label: "Tamil" },
  { code: "te", label: "Telugu" },
  { code: "ur", label: "Urdu" },
  { code: "zh", label: "Chinese" },
] as const;

export type LanguageCode = (typeof languageOptions)[number]["code"];

const supportedLanguages = languageOptions.map((language) => language.code);

type Translation = typeof en;
type RegionalCopy = {
  brand: [string, string, string, string];
  header: [string, string, string, string, string, string, string, string, string];
  language: string;
  common: [string, string, string, string, string];
  hero: [string, string, string, string];
  trust: [string, string, string];
  services: [string, string];
  serviceCards: Array<[string, string]>;
  process: [string, string];
  processSteps: Array<[string, string]>;
  about: [string, string, string, string];
  stats: Array<[string, string]>;
  guide: [string, string, string, string, string];
  footer: [string, string, string, string, string, string, string, string, string, string, string];
  footerServices: [string, string, string, string, string, string];
};

const en = {
  brand: {
    homeLabel: "Sarvam Corporation home",
    name: "Sarvam",
    company: "Corporation",
    tagline: "Simple & Reliable China Import Solution",
  },
  header: {
    navLabel: "Primary navigation",
    home: "Home",
    about: "About Us",
    services: "Services",
    process: "Import Process",
    guide: "Import Guide",
    contact: "Contact Us",
    quote: "Quote",
    getQuote: "Get a Quote",
  },
  language: {
    label: "Language",
  },
  common: {
    whatsapp: "WhatsApp Now",
    call: "Call Now",
    quote: "Get Quote",
    china: "China",
    india: "India",
  },
  home: {
    heroEyebrow: "China to India Import Services",
    heroTitleStart: "Import From China",
    heroTitleHighlight: "Made Easy & Reliable",
    heroDescription:
      "End-to-end import solution from China to India. We handle shipping, customs, documentation, and delivery so you can focus on growing your business.",
    trust: {
      safe: "Safe Shipping",
      price: "Competitive Price",
      delivery: "On-time Delivery",
    },
    servicesEyebrow: "Our Services",
    servicesTitle: "Complete Import Solutions",
    serviceCards: {
      air: {
        title: "Air Cargo",
        description: "Fast and secure air cargo from China to India for urgent shipments.",
      },
      sea: {
        title: "Sea Freight",
        description: "FCL and LCL sea freight services with practical, competitive options.",
      },
      door: {
        title: "Door to Door",
        description: "Complete pickup, shipping, customs, and delivery support across India.",
      },
      customs: {
        title: "Customs Clearance",
        description: "Hassle-free customs clearance guidance and documentation support.",
      },
      handling: {
        title: "Safe Handling",
        description: "Careful loading, unloading, warehousing, and cargo movement.",
      },
      support: {
        title: "Support",
        description: "Dedicated support throughout your import journey from inquiry to delivery.",
      },
    },
    processEyebrow: "Our Process",
    processTitle: "Simple Steps, Smooth Import",
    processSteps: {
      share: {
        title: "Share Details",
        description: "Send your product details, supplier link, quantity, and delivery city.",
      },
      plan: {
        title: "We Plan",
        description: "We verify the requirement and suggest the best shipping solution.",
      },
      shipping: {
        title: "Shipping",
        description: "Your cargo moves from China by air or sea based on the plan.",
      },
      customs: {
        title: "Customs",
        description: "We support clearance, documentation, and import handling in India.",
      },
      delivery: {
        title: "Delivery",
        description: "Your shipment is delivered safely to your doorstep or warehouse.",
      },
    },
    aboutEyebrow: "Why Choose Us",
    aboutTitle: "Your Trusted Import Partner",
    aboutDescription:
      "With practical import experience and customer-first support, Sarvam Corporation helps beginners and businesses import products from China with a clearer, safer, and more dependable process.",
    learnMore: "Learn More About Us",
    stats: {
      experience: {
        value: "6+",
        label: "Years of Experience",
      },
      customers: {
        value: "2000+",
        label: "Happy Customers",
      },
      india: {
        value: "Pan India",
        label: "All India Service",
      },
      pricing: {
        value: "Best Price",
        label: "Competitive Pricing",
      },
    },
    guideEyebrow: "Import Guide",
    guideTitle: "New to China Import? Start With the Right Plan.",
    guideItems: {
      supplier: "Understand product and supplier details before shipment.",
      cargo: "Choose air or sea cargo based on urgency and volume.",
      docs: "Keep documentation clear for customs and delivery.",
    },
  },
  footer: {
    ctaTitle: "Ready to Import From China?",
    ctaText: "Get a free consultation and best quote for your import requirements.",
    quickLinks: "Quick Links",
    services: "Our Services",
    contact: "Contact Us",
    follow: "Follow Us",
    followText: "Follow us on Instagram for updates and more.",
    instagram: "Follow on Instagram",
    copyright: "© 2026 Sarvam Corporation. All Rights Reserved.",
    privacy: "Privacy Policy",
    terms: "Terms & Conditions",
    serviceItems: {
      air: "Air Cargo",
      sea: "Sea Freight (FCL/LCL)",
      door: "Door to Door Delivery",
      customs: "Customs Clearance",
      warehousing: "Warehousing",
      sourcing: "Product Sourcing",
    },
  },
};

function makeTranslation(copy: RegionalCopy): Translation {
  return {
    brand: {
      homeLabel: copy.brand[0],
      name: copy.brand[1],
      company: copy.brand[2],
      tagline: copy.brand[3],
    },
    header: {
      navLabel: copy.header[0],
      home: copy.header[1],
      about: copy.header[2],
      services: copy.header[3],
      process: copy.header[4],
      guide: copy.header[5],
      contact: copy.header[6],
      quote: copy.header[7],
      getQuote: copy.header[8],
    },
    language: {
      label: copy.language,
    },
    common: {
      whatsapp: copy.common[0],
      call: copy.common[1],
      quote: copy.common[2],
      china: copy.common[3],
      india: copy.common[4],
    },
    home: {
      heroEyebrow: copy.hero[0],
      heroTitleStart: copy.hero[1],
      heroTitleHighlight: copy.hero[2],
      heroDescription: copy.hero[3],
      trust: {
        safe: copy.trust[0],
        price: copy.trust[1],
        delivery: copy.trust[2],
      },
      servicesEyebrow: copy.services[0],
      servicesTitle: copy.services[1],
      serviceCards: {
        air: { title: copy.serviceCards[0][0], description: copy.serviceCards[0][1] },
        sea: { title: copy.serviceCards[1][0], description: copy.serviceCards[1][1] },
        door: { title: copy.serviceCards[2][0], description: copy.serviceCards[2][1] },
        customs: { title: copy.serviceCards[3][0], description: copy.serviceCards[3][1] },
        handling: { title: copy.serviceCards[4][0], description: copy.serviceCards[4][1] },
        support: { title: copy.serviceCards[5][0], description: copy.serviceCards[5][1] },
      },
      processEyebrow: copy.process[0],
      processTitle: copy.process[1],
      processSteps: {
        share: { title: copy.processSteps[0][0], description: copy.processSteps[0][1] },
        plan: { title: copy.processSteps[1][0], description: copy.processSteps[1][1] },
        shipping: { title: copy.processSteps[2][0], description: copy.processSteps[2][1] },
        customs: { title: copy.processSteps[3][0], description: copy.processSteps[3][1] },
        delivery: { title: copy.processSteps[4][0], description: copy.processSteps[4][1] },
      },
      aboutEyebrow: copy.about[0],
      aboutTitle: copy.about[1],
      aboutDescription: copy.about[2],
      learnMore: copy.about[3],
      stats: {
        experience: { value: copy.stats[0][0], label: copy.stats[0][1] },
        customers: { value: copy.stats[1][0], label: copy.stats[1][1] },
        india: { value: copy.stats[2][0], label: copy.stats[2][1] },
        pricing: { value: copy.stats[3][0], label: copy.stats[3][1] },
      },
      guideEyebrow: copy.guide[0],
      guideTitle: copy.guide[1],
      guideItems: {
        supplier: copy.guide[2],
        cargo: copy.guide[3],
        docs: copy.guide[4],
      },
    },
    footer: {
      ctaTitle: copy.footer[0],
      ctaText: copy.footer[1],
      quickLinks: copy.footer[2],
      services: copy.footer[3],
      contact: copy.footer[4],
      follow: copy.footer[5],
      followText: copy.footer[6],
      instagram: copy.footer[7],
      copyright: copy.footer[8],
      privacy: copy.footer[9],
      terms: copy.footer[10],
      serviceItems: {
        air: copy.footerServices[0],
        sea: copy.footerServices[1],
        door: copy.footerServices[2],
        customs: copy.footerServices[3],
        warehousing: copy.footerServices[4],
        sourcing: copy.footerServices[5],
      },
    },
  };
}

const hi = makeTranslation({
  brand: ["सरवम कॉर्पोरेशन होम", "सरवम", "कॉर्पोरेशन", "सरल और भरोसेमंद चीन आयात समाधान"],
  header: ["मुख्य नेविगेशन", "होम", "हमारे बारे में", "सेवाएं", "आयात प्रक्रिया", "आयात गाइड", "संपर्क करें", "कोटेशन", "कोटेशन पाएं"],
  language: "भाषा",
  common: ["WhatsApp करें", "कॉल करें", "कोटेशन पाएं", "चीन", "भारत"],
  hero: ["चीन से भारत आयात सेवाएं", "चीन से आयात", "आसान और भरोसेमंद", "चीन से भारत तक एंड-टू-एंड आयात समाधान। हम शिपिंग, कस्टम्स, दस्तावेज और डिलीवरी संभालते हैं ताकि आप अपने व्यवसाय पर ध्यान दे सकें।"],
  trust: ["सुरक्षित शिपिंग", "प्रतिस्पर्धी कीमत", "समय पर डिलीवरी"],
  services: ["हमारी सेवाएं", "पूर्ण आयात समाधान"],
  serviceCards: [
    ["एयर कार्गो", "जरूरी शिपमेंट के लिए चीन से भारत तेज और सुरक्षित एयर कार्गो।"],
    ["समुद्री माल ढुलाई", "व्यावहारिक और प्रतिस्पर्धी विकल्पों के साथ FCL और LCL समुद्री माल ढुलाई।"],
    ["डोर टू डोर", "भारत भर में पिकअप, शिपिंग, कस्टम्स और डिलीवरी का पूरा सहयोग।"],
    ["कस्टम्स क्लियरेंस", "कस्टम्स क्लियरेंस मार्गदर्शन और दस्तावेज सहायता।"],
    ["सुरक्षित हैंडलिंग", "लोडिंग, अनलोडिंग, वेयरहाउसिंग और कार्गो मूवमेंट में सावधानी।"],
    ["सहायता", "पूरी आयात यात्रा में पूछताछ से डिलीवरी तक समर्पित सहायता।"],
  ],
  process: ["हमारी प्रक्रिया", "सरल चरण, आसान आयात"],
  processSteps: [
    ["विवरण भेजें", "अपने प्रोडक्ट विवरण, सप्लायर लिंक, मात्रा और डिलीवरी शहर भेजें।"],
    ["हम योजना बनाते हैं", "हम आवश्यकता जांचते हैं और बेहतर शिपिंग समाधान बताते हैं।"],
    ["शिपिंग", "आपका कार्गो योजना के अनुसार हवाई या समुद्री मार्ग से चलता है।"],
    ["कस्टम्स", "हम भारत में क्लियरेंस, दस्तावेज और आयात हैंडलिंग में सहायता करते हैं।"],
    ["डिलीवरी", "आपकी शिपमेंट सुरक्षित रूप से आपके दरवाजे या वेयरहाउस तक पहुंचती है।"],
  ],
  about: ["हमें क्यों चुनें", "आपका भरोसेमंद आयात पार्टनर", "व्यावहारिक आयात अनुभव और ग्राहक-प्रथम सहायता के साथ, सरवम कॉर्पोरेशन शुरुआती लोगों और व्यवसायों को चीन से साफ, सुरक्षित और भरोसेमंद प्रक्रिया में आयात करने में मदद करता है।", "हमारे बारे में जानें"],
  stats: [["6+", "वर्षों का अनुभव"], ["2000+", "संतुष्ट ग्राहक"], ["पूरे भारत में", "ऑल इंडिया सेवा"], ["बेहतर कीमत", "प्रतिस्पर्धी मूल्य"]],
  guide: ["आयात गाइड", "चीन आयात में नए हैं? सही योजना से शुरुआत करें।", "शिपमेंट से पहले प्रोडक्ट और सप्लायर विवरण समझें।", "जरूरत और वॉल्यूम के आधार पर एयर या सी कार्गो चुनें।", "कस्टम्स और डिलीवरी के लिए दस्तावेज साफ रखें।"],
  footer: ["चीन से आयात करने के लिए तैयार हैं?", "अपनी आयात जरूरतों के लिए मुफ्त सलाह और बेहतर कोटेशन पाएं।", "त्वरित लिंक", "हमारी सेवाएं", "संपर्क करें", "हमें फॉलो करें", "अपडेट और अधिक जानकारी के लिए Instagram पर हमें फॉलो करें।", "Instagram पर फॉलो करें", "© 2026 सरवम कॉर्पोरेशन। सर्वाधिकार सुरक्षित।", "गोपनीयता नीति", "नियम और शर्तें"],
  footerServices: ["एयर कार्गो", "समुद्री माल ढुलाई (FCL/LCL)", "डोर टू डोर डिलीवरी", "कस्टम्स क्लियरेंस", "वेयरहाउसिंग", "प्रोडक्ट सोर्सिंग"],
});

const gu = makeTranslation({
  brand: ["સરવમ કોર્પોરેશન હોમ", "સરવમ", "કોર્પોરેશન", "સરળ અને વિશ્વસનીય ચાઇના આયાત સોલ્યુશન"],
  header: ["મુખ્ય નેવિગેશન", "હોમ", "અમારા વિશે", "સેવાઓ", "આયાત પ્રક્રિયા", "આયાત માર્ગદર્શિકા", "સંપર્ક કરો", "ક્વોટ", "ક્વોટ મેળવો"],
  language: "ભાષા",
  common: ["WhatsApp કરો", "કોલ કરો", "ક્વોટ મેળવો", "ચાઇના", "ભારત"],
  hero: ["ચાઇના થી ભારત આયાત સેવાઓ", "ચાઇના થી આયાત", "સરળ અને વિશ્વસનીય", "ચાઇના થી ભારત સુધી એન્ડ-ટુ-એન્ડ આયાત સોલ્યુશન. અમે શિપિંગ, કસ્ટમ્સ, દસ્તાવેજો અને ડિલિવરી સંભાળીએ છીએ જેથી તમે તમારા બિઝનેસ પર ધ્યાન આપી શકો."],
  trust: ["સુરક્ષિત શિપિંગ", "સ્પર્ધાત્મક કિંમત", "સમયસર ડિલિવરી"],
  services: ["અમારી સેવાઓ", "પૂર્ણ આયાત સોલ્યુશન્સ"],
  serviceCards: [
    ["એર કાર્ગો", "તાત્કાલિક શિપમેન્ટ માટે ચાઇના થી ભારત ઝડપી અને સુરક્ષિત એર કાર્ગો."],
    ["સી ફ્રેઇટ", "વ્યવહારુ અને સ્પર્ધાત્મક વિકલ્પો સાથે FCL અને LCL સી ફ્રેઇટ સેવાઓ."],
    ["ડોર ટુ ડોર", "ભારતભરમાં પિકઅપ, શિપિંગ, કસ્ટમ્સ અને ડિલિવરીનો સંપૂર્ણ સપોર્ટ."],
    ["કસ્ટમ્સ ક્લિયરન્સ", "કસ્ટમ્સ ક્લિયરન્સ માર્ગદર્શન અને દસ્તાવેજ સહાય."],
    ["સુરક્ષિત હેન્ડલિંગ", "લોડિંગ, અનલોડિંગ, વેરહાઉસિંગ અને કાર્ગો મૂવમેન્ટમાં કાળજી."],
    ["સપોર્ટ", "પૂરી આયાત યાત્રા દરમિયાન પૂછપરછથી ડિલિવરી સુધી સમર્પિત સપોર્ટ."],
  ],
  process: ["અમારી પ્રક્રિયા", "સરળ પગલાં, સરળ આયાત"],
  processSteps: [
    ["વિગતો મોકલો", "તમારી પ્રોડક્ટ વિગતો, સપ્લાયર લિંક, માત્રા અને ડિલિવરી શહેર મોકલો."],
    ["અમે યોજના બનાવીએ", "અમે જરૂરિયાત તપાસીએ છીએ અને શ્રેષ્ઠ શિપિંગ સોલ્યુશન સૂચવીએ છીએ."],
    ["શિપિંગ", "તમારું કાર્ગો યોજના મુજબ એર અથવા સી માર્ગે આગળ વધે છે."],
    ["કસ્ટમ્સ", "અમે ભારતમાં ક્લિયરન્સ, દસ્તાવેજો અને આયાત હેન્ડલિંગમાં સપોર્ટ કરીએ છીએ."],
    ["ડિલિવરી", "તમારું શિપમેન્ટ સુરક્ષિત રીતે તમારા દરવાજે અથવા વેરહાઉસ સુધી પહોંચે છે."],
  ],
  about: ["અમને કેમ પસંદ કરો", "તમારા વિશ્વસનીય આયાત પાર્ટનર", "વ્યવહારુ આયાત અનુભવ અને ગ્રાહક-પ્રથમ સપોર્ટ સાથે, સરવમ કોર્પોરેશન નવા ગ્રાહકો અને બિઝનેસને ચાઇના થી સ્પષ્ટ, સુરક્ષિત અને વિશ્વસનીય પ્રક્રિયામાં આયાત કરવામાં મદદ કરે છે.", "અમારા વિશે વધુ જાણો"],
  stats: [["6+", "વર્ષોનો અનુભવ"], ["2000+", "સંતુષ્ટ ગ્રાહકો"], ["સમગ્ર ભારત", "ઓલ ઇન્ડિયા સેવા"], ["સારી કિંમત", "સ્પર્ધાત્મક કિંમત"]],
  guide: ["આયાત માર્ગદર્શિકા", "ચાઇના આયાતમાં નવા છો? યોગ્ય યોજનાથી શરૂઆત કરો.", "શિપમેન્ટ પહેલા પ્રોડક્ટ અને સપ્લાયર વિગતો સમજો.", "તાત્કાલિકતા અને વોલ્યુમ આધારે એર અથવા સી કાર્ગો પસંદ કરો.", "કસ્ટમ્સ અને ડિલિવરી માટે દસ્તાવેજો સ્પષ્ટ રાખો."],
  footer: ["ચાઇના થી આયાત કરવા તૈયાર છો?", "તમારી આયાત જરૂરિયાતો માટે મફત સલાહ અને શ્રેષ્ઠ ક્વોટ મેળવો.", "ઝડપી લિંક્સ", "અમારી સેવાઓ", "સંપર્ક કરો", "અમને ફોલો કરો", "અપડેટ્સ અને વધુ માહિતી માટે Instagram પર અમને ફોલો કરો.", "Instagram પર ફોલો કરો", "© 2026 સરવમ કોર્પોરેશન. સર્વ અધિકાર સુરક્ષિત.", "ગોપનીયતા નીતિ", "નિયમો અને શરતો"],
  footerServices: ["એર કાર્ગો", "સી ફ્રેઇટ (FCL/LCL)", "ડોર ટુ ડોર ડિલિવરી", "કસ્ટમ્સ ક્લિયરન્સ", "વેરહાઉસિંગ", "પ્રોડક્ટ સોર્સિંગ"],
});

const zh = makeTranslation({
  brand: ["Sarvam Corporation 首页", "Sarvam", "Corporation", "简单可靠的中国进口解决方案"],
  header: ["主导航", "首页", "关于我们", "服务", "进口流程", "进口指南", "联系我们", "报价", "获取报价"],
  language: "语言",
  common: ["WhatsApp 咨询", "立即致电", "获取报价", "中国", "印度"],
  hero: ["中国到印度进口服务", "从中国进口", "简单可靠", "中国到印度的一站式进口解决方案。我们处理运输、清关、文件和配送，让您专注于业务增长。"],
  trust: ["安全运输", "有竞争力的价格", "准时交付"],
  services: ["我们的服务", "完整进口解决方案"],
  serviceCards: [
    ["空运货物", "适合紧急货物的中国到印度快速安全空运。"],
    ["海运货物", "提供实用且有竞争力的 FCL 和 LCL 海运方案。"],
    ["门到门服务", "覆盖印度的提货、运输、清关和配送支持。"],
    ["清关支持", "提供顺畅的清关指导和文件支持。"],
    ["安全装卸", "谨慎处理装卸、仓储和货物转运。"],
    ["客户支持", "从咨询到交付，全程提供专属支持。"],
  ],
  process: ["我们的流程", "简单步骤，顺畅进口"],
  processSteps: [
    ["分享详情", "发送产品详情、供应商链接、数量和配送城市。"],
    ["制定方案", "我们核实需求并建议合适的运输方案。"],
    ["运输", "您的货物按方案通过空运或海运运输。"],
    ["清关", "我们支持印度清关、文件和进口处理。"],
    ["交付", "货物安全送达您的地址或仓库。"],
  ],
  about: ["为什么选择我们", "您值得信赖的进口伙伴", "凭借实际进口经验和客户优先的支持，Sarvam Corporation 帮助新手和企业用更清晰、安全、可靠的流程从中国进口。", "了解更多"],
  stats: [["6+", "年经验"], ["2000+", "满意客户"], ["印度全境", "全印度服务"], ["优惠价格", "有竞争力的定价"]],
  guide: ["进口指南", "第一次从中国进口？从正确计划开始。", "发货前了解产品和供应商详情。", "根据紧急程度和体积选择空运或海运。", "保持文件清晰，便于清关和配送。"],
  footer: ["准备从中国进口了吗？", "获取免费咨询和适合您进口需求的报价。", "快捷链接", "我们的服务", "联系我们", "关注我们", "在 Instagram 关注我们获取更多更新。", "关注 Instagram", "© 2026 Sarvam Corporation. 版权所有。", "隐私政策", "条款和条件"],
  footerServices: ["空运货物", "海运货物 (FCL/LCL)", "门到门配送", "清关支持", "仓储", "产品采购"],
});

const resources: Record<LanguageCode, { translation: Translation }> = {
  en: { translation: en },
  as: { translation: hi },
  bn: { translation: hi },
  brx: { translation: hi },
  doi: { translation: hi },
  gu: { translation: gu },
  hi: { translation: hi },
  kn: { translation: hi },
  ks: { translation: hi },
  kok: { translation: hi },
  mai: { translation: hi },
  ml: { translation: hi },
  mni: { translation: hi },
  mr: { translation: hi },
  ne: { translation: hi },
  or: { translation: hi },
  pa: { translation: hi },
  sa: { translation: hi },
  sat: { translation: hi },
  sd: { translation: hi },
  ta: { translation: hi },
  te: { translation: hi },
  ur: { translation: hi },
  zh: { translation: zh },
};

export function resolvePreferredLanguage(): LanguageCode {
  if (typeof window === "undefined") {
    return "en";
  }

  const savedLanguage = window.localStorage.getItem("language");
  if (savedLanguage && supportedLanguages.includes(savedLanguage as LanguageCode)) {
    return savedLanguage as LanguageCode;
  }

  const browserLanguage = window.navigator.language.split("-")[0] as LanguageCode;
  return supportedLanguages.includes(browserLanguage) ? browserLanguage : "en";
}

if (!i18n.isInitialized) {
  void i18n.use(initReactI18next).init({
    resources,
    lng: "en",
    fallbackLng: "en",
    supportedLngs: supportedLanguages,
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
  });
}

export default i18n;
