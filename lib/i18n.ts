export type Lang = "en" | "hi" | "de" | "fr" | "es";

export const languages: { code: Lang; label: string; native: string; flag: string }[] = [
  { code: "en", label: "English", native: "English", flag: "GB" },
  { code: "hi", label: "Hindi", native: "हिन्दी", flag: "IN" },
  { code: "de", label: "German", native: "Deutsch", flag: "DE" },
  { code: "fr", label: "French", native: "Français", flag: "FR" },
  { code: "es", label: "Spanish", native: "Español", flag: "ES" },
];

export const t: Record<Lang, Record<string, string>> = {
  en: {
    /* ── Navbar ── */
    "nav.about": "About", "nav.skills": "Skills", "nav.experience": "Experience",
    "nav.projects": "Projects", "nav.blog": "Blog", "nav.contact": "Contact", "nav.hire": "Hire me",

    /* ── Hero ── */
    "hero.badge": "Available for Backend roles · Java · Node.js",
    "hero.title.prefix": "Hi, I'm",
    "hero.role": "Backend Engineer",
    "hero.tagline": "I build reliable, high-throughput backend systems in Java and Node.js — from distributed microservices and event-driven Kafka pipelines to Redis-cached APIs and Kubernetes deployments on AWS.",
    "hero.cta.work": "View my work", "hero.cta.contact": "Get in touch", "hero.cta.resume": "Resume",
    "hero.scroll": "scroll",
    "hero.metric.throughput.label": "API Throughput", "hero.metric.latency.label": "Latency Reduced", "hero.metric.dau.label": "DAU Served",

    /* ── About ── */
    "about.label": "About", "about.heading": "Who I am",
    "about.badge": "Backend Developer",
    "about.tagline1": "Diligent with a get-it-done attitude",
    "about.tagline2": "Think deeply. Build clean. Ship confidently.",
    "about.bio1": "I'm a Backend Engineer with ~2 years of hands-on production experience building microservices, event-driven pipelines, and cloud-native infrastructure using Java (Spring Boot), Node.js (NestJS / Fastify), and Next.js. I've worked on systems serving 50K+ daily active users at 99.9% uptime — driving a 5× API throughput gain with Redis, cutting Kafka pipeline latency by 40%, and compressing release cycles from 2 days to 30 minutes with Docker and AWS EKS.",
    "about.bio2": "I thrive in backend systems — whether it's designing fault-tolerant Kafka pipelines with dead-letter queues, tuning HikariCP connection pools, or securing multi-service architectures with JWT + OAuth 2.0 and Spring Security RBAC. My north star: systems that are fast, resilient, and maintainable at scale.",
    "about.bio3": "Outside of code, I lead developer communities — I ran 10+ technical workshops as GDSC Chapter Lead and mentored 50+ students into their first engineering roles. I believe great engineers make the people around them better too.",
    "about.current": "Current role", "about.education": "Education", "about.location": "Location",
    "about.open": "Open to remote & on-site opportunities",

    /* ── Why Hire Me ── */
    "why.label": "Why me", "why.heading": "Why work with me?",
    "why.sub": "What sets me apart isn't just technical depth — it's how I think about systems, communicate trade-offs, and make teams move faster.",

    /* ── Skills ── */
    "skills.label": "Skills", "skills.heading": "Technical toolkit",

    /* ── Experience ── */
    "exp.label": "Experience", "exp.heading": "Where I've worked",
    "exp.fulltime": "Full-time", "exp.internship": "Internship",
    "exp.tags": "Stack",

    /* ── Projects ── */
    "projects.label": "Projects", "projects.heading": "Things I've built",
    "projects.sub": "Backend systems I've engineered — click any card to see the full story.",
    "projects.more": "Read more", "projects.less": "Hide details",
    "projects.github": "View all on GitHub",

    /* ── GitHub ── */
    "github.label": "GitHub Activity", "github.heading": "Consistent contributor",
    "github.year": "This year", "github.year.sub": "contributions in 2025",
    "github.langs": "Top Languages", "github.activity": "Contribution Activity",
    "github.less": "Less", "github.more": "More",
    "github.commits": "Total Commits", "github.prs": "Pull Requests",
    "github.repos": "Repositories", "github.streak": "Day Streak",

    /* ── Testimonials ── */
    "testimonials.label": "Testimonials", "testimonials.heading": "What people say",

    /* ── Leadership ── */
    "leadership.label": "Community", "leadership.heading": "Leadership & community",

    /* ── FAQ ── */
    "faq.label": "FAQ", "faq.heading": "Frequently asked",
    "faq.sub": "Common questions from recruiters and hiring managers. Can't find what you need?",
    "faq.sub.cta": "Just ask me directly.",

    /* ── Blog ── */
    "blog.label": "Blog", "blog.heading": "Thoughts & Write-ups",
    "blog.sub": "I write about Backend Engineering, System Design, Cloud, DevOps, Emerging Technologies, and the trends shaping the software industry.",
    "blog.read": "Read article", "blog.min": "min read", "blog.medium": "View all on Medium",

    /* ── Contact ── */
    "contact.label": "Contact", "contact.heading": "Let's work together",
    "contact.sub": "I'm open to Java Backend, Node.js, and general Backend Engineer roles. Drop me a message and I'll reply within 24 hours.",
    "contact.name": "Name", "contact.email": "Email", "contact.message": "Message",
    "contact.name.placeholder": "Your name",
    "contact.email.placeholder": "your@email.com",
    "contact.msg.placeholder": "Tell me about the role or project…",
    "contact.send": "Send message", "contact.sending": "Sending…",
    "contact.success.title": "Message sent!",
    "contact.success.body": "Thanks for reaching out. I'll get back to you within 24–48 hours.",
    "contact.success.again": "Send another message",
    "contact.available.title": "Available for roles",
    "contact.available.body": "Actively looking for Backend Engineer positions in Java or Node.js. Typical response within 24 hours.",
    "contact.open": "Open to remote",
    "contact.interests": "Java / Spring Boot microservices|Event-driven systems (Kafka, RabbitMQ)|Cloud-native (AWS, Docker, Kubernetes)|Node.js / NestJS APIs",

    /* ── Footer ── */
    /* ── Testimonials content ── */
    "t0.quote": "Sayali joined CentraLogic as an intern and rapidly grew into one of our most impactful backend engineers. She took complete ownership of critical systems — from the Kafka pipeline to the Redis caching layer — and the results were immediate and measurable. Her engineering rigour and collaborative spirit are exceptional for her experience level.",
    "t0.role": "CEO · CentraLogic",
    "t1.quote": "Sayali was one of the most initiative-driven Microsoft Learn Student Ambassadors I've worked with. She organised cloud workshops, hackathons, and how-to sessions that drew hundreds of students, and consistently went beyond program requirements to create meaningful learning experiences. The kind of ambassador who elevates the entire program.",
    "t1.role": "Director · Microsoft for Startups",
    "t2.quote": "I hired Sayali as an intern and she was writing production-level Spring Boot code within the first month. Her instinct for performance optimisation — indexing strategies, connection pooling, N+1 elimination — is something you rarely see at this stage of a career.",
    "t2.role": "Engineering Manager · Product Startup, Pune",
    "t3.quote": "As a GDSC Chapter Lead, Sayali built one of the most engaged developer communities in her region — growing membership 3× in a single year. She led technically rigorous sessions, mentored dozens of students into engineering roles, and brought real energy to everything she organised. Exactly the kind of leader the GDSC program is designed to cultivate.",
    "t3.role": "Technical Program Manager · Google",

    "footer.built": "Built with Next.js, Tailwind CSS & Framer Motion",
  },

  hi: {
    "nav.about": "परिचय", "nav.skills": "कौशल", "nav.experience": "अनुभव",
    "nav.projects": "प्रोजेक्ट", "nav.blog": "ब्लॉग", "nav.contact": "संपर्क", "nav.hire": "काम पर रखें",

    "hero.badge": "Backend भूमिकाओं के लिए उपलब्ध · Java · Node.js",
    "hero.title.prefix": "नमस्ते, मैं हूँ",
    "hero.role": "Backend इंजीनियर",
    "hero.tagline": "मैं Java और Node.js में भरोसेमंद, उच्च-थ्रूपुट बैकएंड सिस्टम बनाती हूं — माइक्रोसर्विसेज़, Kafka पाइपलाइन, Redis-कैश API और AWS पर Kubernetes डिप्लॉयमेंट तक।",
    "hero.cta.work": "मेरा काम देखें", "hero.cta.contact": "संपर्क करें", "hero.cta.resume": "रेज़्यूमे",
    "hero.scroll": "स्क्रॉल करें",
    "hero.metric.throughput.label": "API थ्रूपुट", "hero.metric.latency.label": "लेटेंसी कम हुई", "hero.metric.dau.label": "DAU सेवित",

    "about.label": "परिचय", "about.heading": "मैं कौन हूं",
    "about.badge": "बैकएंड डेवलपर",
    "about.tagline1": "मेहनती और काम पूरा करने के दृढ़ संकल्प के साथ",
    "about.tagline2": "गहराई से सोचो। स्वच्छ बनाओ। आत्मविश्वास से शिप करो।",
    "about.bio1": "मैं एक Backend इंजीनियर हूं जिसे ~2 साल का प्रोडक्शन अनुभव है — Java (Spring Boot), Node.js (NestJS/Fastify) और Next.js का उपयोग करके माइक्रोसर्विसेज़, इवेंट-ड्रिवन पाइपलाइन और क्लाउड-नेटिव इन्फ्रास्ट्रक्चर बनाने में। मैंने 50K+ DAU वाले सिस्टम पर काम किया है जो 99.9% अपटाइम पर चलते हैं।",
    "about.bio2": "Redis से 5× API थ्रूपुट, Kafka से 40% लेटेंसी कटौती, और Docker + AWS EKS से रिलीज़ साइकिल 2 दिन से 30 मिनट। मेरा लक्ष्य हमेशा एक ही है: तेज़, मजबूत और maintainable सिस्टम।",
    "about.bio3": "कोड के बाहर, मैंने GDSC Chapter Lead के रूप में 10+ वर्कशॉप चलाईं और 50+ छात्रों को उनकी पहली इंजीनियरिंग नौकरी दिलाने में मदद की।",
    "about.current": "वर्तमान भूमिका", "about.education": "शिक्षा", "about.location": "स्थान",
    "about.open": "रिमोट और ऑन-साइट दोनों के लिए उपलब्ध",

    "why.label": "क्यों मैं", "why.heading": "मेरे साथ क्यों काम करें?",
    "why.sub": "मेरी खासियत सिर्फ तकनीकी गहराई नहीं है — बल्कि यह है कि मैं सिस्टम के बारे में कैसे सोचती हूं और टीम को तेज़ बनाती हूं।",

    "skills.label": "कौशल", "skills.heading": "तकनीकी टूलकिट",

    "exp.label": "अनुभव", "exp.heading": "मेरे कार्यस्थल",
    "exp.fulltime": "पूर्णकालिक", "exp.internship": "इंटर्नशिप", "exp.tags": "स्टैक",

    "projects.label": "प्रोजेक्ट", "projects.heading": "मेरे प्रोजेक्ट",
    "projects.sub": "मेरे द्वारा बनाए गए बैकएंड सिस्टम — पूरी जानकारी के लिए कार्ड पर क्लिक करें।",
    "projects.more": "और पढ़ें", "projects.less": "छुपाएं",
    "projects.github": "GitHub पर सभी देखें",

    "github.label": "GitHub गतिविधि", "github.heading": "नियमित योगदानकर्ता",
    "github.year": "इस वर्ष", "github.year.sub": "2025 में योगदान",
    "github.langs": "शीर्ष भाषाएं", "github.activity": "योगदान गतिविधि",
    "github.less": "कम", "github.more": "अधिक",
    "github.commits": "कुल Commits", "github.prs": "Pull Requests",
    "github.repos": "Repositories", "github.streak": "दिन की Streak",

    "testimonials.label": "प्रशंसापत्र", "testimonials.heading": "लोग क्या कहते हैं",

    "leadership.label": "समुदाय", "leadership.heading": "नेतृत्व और समुदाय",

    "faq.label": "सामान्य प्रश्न", "faq.heading": "अक्सर पूछे जाने वाले प्रश्न",
    "faq.sub": "भर्तीकर्ताओं के सामान्य प्रश्न। जो न मिले?",
    "faq.sub.cta": "सीधे पूछें।",

    "blog.label": "ब्लॉग", "blog.heading": "विचार और लेख",
    "blog.sub": "मैं Java बैकएंड पैटर्न, सिस्टम डिज़ाइन और प्रोडक्शन से मिले सबक पर लिखती हूं।",
    "blog.read": "लेख पढ़ें", "blog.min": "मिनट पढ़ें", "blog.medium": "Medium पर सभी देखें",

    "contact.label": "संपर्क", "contact.heading": "मिलकर काम करें",
    "contact.sub": "मैं Java Backend, Node.js और Backend Engineer भूमिकाओं के लिए उपलब्ध हूं।",
    "contact.name": "नाम", "contact.email": "ईमेल", "contact.message": "संदेश",
    "contact.name.placeholder": "आपका नाम",
    "contact.email.placeholder": "your@email.com",
    "contact.msg.placeholder": "भूमिका या प्रोजेक्ट के बारे में बताएं…",
    "contact.send": "संदेश भेजें", "contact.sending": "भेजा जा रहा है…",
    "contact.success.title": "संदेश भेजा गया!",
    "contact.success.body": "संपर्क करने के लिए धन्यवाद। मैं 24–48 घंटों में जवाब दूंगी।",
    "contact.success.again": "दूसरा संदेश भेजें",
    "contact.available.title": "भूमिकाओं के लिए उपलब्ध",
    "contact.available.body": "Java या Node.js में Backend Engineer पदों की तलाश। आमतौर पर 24 घंटे में जवाब।",
    "contact.open": "रिमोट के लिए खुली",
    "contact.interests": "Java / Spring Boot माइक्रोसर्विसेज़|इवेंट-ड्रिवन सिस्टम (Kafka, RabbitMQ)|क्लाउड-नेटिव (AWS, Docker, Kubernetes)|Node.js / NestJS API",

    /* ── Testimonials content ── */
    "t0.quote": "सायली CentraLogic में intern के रूप में आईं और जल्दी ही हमारी सबसे प्रभावशाली backend engineers में से एक बन गईं। Kafka pipeline से Redis caching layer तक — उन्होंने critical systems की पूरी जिम्मेदारी ली और परिणाम तुरंत व मापने योग्य थे। इस अनुभव स्तर पर उनकी engineering कठोरता और सहयोग की भावना असाधारण है।",
    "t0.role": "CEO · CentraLogic",
    "t1.quote": "सायली सबसे initiative-driven Microsoft Learn Student Ambassadors में से एक थीं। उन्होंने cloud workshops, hackathons और sessions organize किए जिनमें सैकड़ों students आए, और program requirements से आगे बढ़कर meaningful learning experiences बनाती रहीं। वह ऐसी ambassador हैं जो पूरे program को बेहतर बनाती हैं।",
    "t1.role": "डायरेक्टर · Microsoft for Startups",
    "t2.quote": "मैंने सायली को इंटर्न के रूप में काम पर रखा और वो पहले महीने में ही प्रोडक्शन-लेवल Spring Boot कोड लिख रही थीं। परफॉर्मेंस ऑप्टिमाइज़ेशन की उनकी सहज समझ — इंडेक्सिंग, कनेक्शन पूलिंग, N+1 एलिमिनेशन — इस करियर स्टेज पर दुर्लभ है।",
    "t2.role": "इंजीनियरिंग मैनेजर · प्रोडक्ट स्टार्टअप, पुणे",
    "t3.quote": "GDSC Chapter Lead के रूप में, सायली ने अपने region की सबसे engaged developer communities में से एक बनाई — एक वर्ष में membership 3× बढ़ाई। उन्होंने तकनीकी sessions lead किए, dozens of students को engineering roles में mentor किया, और GDSC mission के प्रति उनकी प्रतिबद्धता असाधारण थी।",
    "t3.role": "टेक्निकल प्रोग्राम मैनेजर · Google",

    "footer.built": "Next.js, Tailwind CSS और Framer Motion से बनाया गया",
  },

  de: {
    "nav.about": "Über mich", "nav.skills": "Fähigkeiten", "nav.experience": "Erfahrung",
    "nav.projects": "Projekte", "nav.blog": "Blog", "nav.contact": "Kontakt", "nav.hire": "Einstellen",

    "hero.badge": "Offen für Backend-Stellen · Java · Node.js",
    "hero.title.prefix": "Hallo, ich bin",
    "hero.role": "Backend-Ingenieurin",
    "hero.tagline": "Ich entwickle zuverlässige, hochdurchsatzfähige Backend-Systeme in Java und Node.js — von verteilten Microservices und Kafka-Pipelines bis hin zu Redis-gecachten APIs und Kubernetes-Deployments auf AWS.",
    "hero.cta.work": "Meine Arbeit ansehen", "hero.cta.contact": "Kontakt", "hero.cta.resume": "Lebenslauf",
    "hero.scroll": "scrollen",
    "hero.metric.throughput.label": "API-Durchsatz", "hero.metric.latency.label": "Latenz reduziert", "hero.metric.dau.label": "DAU bedient",

    "about.label": "Über mich", "about.heading": "Wer ich bin",
    "about.badge": "Backend-Entwicklerin",
    "about.tagline1": "Gewissenhaft mit einer Hands-on-Mentalität",
    "about.tagline2": "Tief denken. Sauber bauen. Sicher liefern.",
    "about.bio1": "Ich bin Backend-Ingenieurin mit ~2 Jahren Produktionserfahrung im Aufbau von Microservices, ereignisgesteuerten Pipelines und Cloud-nativer Infrastruktur mit Java (Spring Boot), Node.js (NestJS/Fastify) und Next.js — für Systeme mit 50K+ täglich aktiven Nutzern bei 99,9% Verfügbarkeit.",
    "about.bio2": "5× API-Durchsatz mit Redis, 40% Latenzreduktion mit Kafka, Release-Zyklen von 2 Tagen auf 30 Minuten mit Docker + AWS EKS. Ziel: Systeme, die schnell, robust und wartbar sind.",
    "about.bio3": "Außerhalb des Codes leitete ich als GDSC-Chapter-Lead 10+ technische Workshops und begleitete 50+ Studierende in ihre erste Engineering-Stelle.",
    "about.current": "Aktuelle Stelle", "about.education": "Ausbildung", "about.location": "Standort",
    "about.open": "Offen für Remote und Vor-Ort",

    "why.label": "Warum ich", "why.heading": "Warum mit mir arbeiten?",
    "why.sub": "Was mich auszeichnet, ist nicht nur technische Tiefe, sondern wie ich über Systeme denke und Teams schneller mache.",

    "skills.label": "Fähigkeiten", "skills.heading": "Technisches Toolkit",

    "exp.label": "Erfahrung", "exp.heading": "Wo ich gearbeitet habe",
    "exp.fulltime": "Vollzeit", "exp.internship": "Praktikum", "exp.tags": "Stack",

    "projects.label": "Projekte", "projects.heading": "Was ich gebaut habe",
    "projects.sub": "Backend-Systeme, die ich entwickelt habe — klicken Sie für Details.",
    "projects.more": "Mehr lesen", "projects.less": "Ausblenden",
    "projects.github": "Alle auf GitHub ansehen",

    "github.label": "GitHub-Aktivität", "github.heading": "Regelmäßiger Beitragender",
    "github.year": "Dieses Jahr", "github.year.sub": "Beiträge in 2025",
    "github.langs": "Top-Sprachen", "github.activity": "Beitragsaktivität",
    "github.less": "Weniger", "github.more": "Mehr",
    "github.commits": "Commits gesamt", "github.prs": "Pull Requests",
    "github.repos": "Repositories", "github.streak": "Tage-Streak",

    "testimonials.label": "Referenzen", "testimonials.heading": "Was andere sagen",

    "leadership.label": "Community", "leadership.heading": "Führung & Community",

    "faq.label": "FAQ", "faq.heading": "Häufige Fragen",
    "faq.sub": "Häufige Fragen von Recruitern. Nicht gefunden?",
    "faq.sub.cta": "Fragen Sie mich direkt.",

    "blog.label": "Blog", "blog.heading": "Gedanken & Artikel",
    "blog.sub": "Ich schreibe über Java-Backend-Muster, System-Design und Lektionen aus der Produktion.",
    "blog.read": "Artikel lesen", "blog.min": "Min. Lesezeit", "blog.medium": "Alle auf Medium ansehen",

    "contact.label": "Kontakt", "contact.heading": "Zusammenarbeiten",
    "contact.sub": "Ich bin offen für Java Backend-, Node.js- und allgemeine Backend-Positionen.",
    "contact.name": "Name", "contact.email": "E-Mail", "contact.message": "Nachricht",
    "contact.name.placeholder": "Ihr Name",
    "contact.email.placeholder": "ihre@email.com",
    "contact.msg.placeholder": "Erzählen Sie mir von der Stelle oder dem Projekt…",
    "contact.send": "Nachricht senden", "contact.sending": "Wird gesendet…",
    "contact.success.title": "Nachricht gesendet!",
    "contact.success.body": "Danke für Ihre Nachricht. Ich melde mich innerhalb von 24–48 Stunden.",
    "contact.success.again": "Weitere Nachricht senden",
    "contact.available.title": "Verfügbar für Stellen",
    "contact.available.body": "Aktiv auf der Suche nach Backend-Positionen in Java oder Node.js.",
    "contact.open": "Remote möglich",
    "contact.interests": "Java / Spring Boot Microservices|Event-Driven Systeme (Kafka, RabbitMQ)|Cloud-nativ (AWS, Docker, Kubernetes)|Node.js / NestJS APIs",

    /* ── Testimonials content ── */
    "t0.quote": "Sayali kam als Praktikantin zu CentraLogic und wurde schnell eine unserer wirkungsvollsten Backend-Entwicklerinnen. Von der Kafka-Pipeline bis zur Redis-Caching-Schicht übernahm sie vollständige Verantwortung für kritische Systeme — die Ergebnisse waren sofort und messbar. Ihr Engineering-Anspruch und kollaborativer Geist sind für ihr Erfahrungsniveau außergewöhnlich.",
    "t0.role": "CEO · CentraLogic",
    "t1.quote": "Sayali war eine der initiativreichsten Microsoft Learn Student Ambassadors, mit denen ich je zusammengearbeitet habe. Sie organisierte Cloud-Workshops, Hackathons und Sessions, die Hunderte von Studierenden anzogen, und übertraf stets die Programmanforderungen. Genau die Art von Ambassador, die das Programm für alle besser macht.",
    "t1.role": "Direktor · Microsoft for Startups",
    "t2.quote": "Ich habe Sayali als Praktikantin eingestellt und sie schrieb bereits im ersten Monat produktionsreifen Spring Boot Code. Ihr Instinkt für Performance-Optimierung — Indexierungsstrategien, Connection Pooling, N+1-Elimination — ist auf diesem Karrierelevel selten.",
    "t2.role": "Engineering Manager · Product Startup, Pune",
    "t3.quote": "Als GDSC Chapter Lead baute Sayali eine der engagiertesten Entwickler-Communities ihrer Region auf — die Mitgliederzahl verdreifachte sich innerhalb eines Jahres. Sie leitete technisch anspruchsvolle Sessions, begleitete Dutzende Studierende auf dem Weg in die Technik und brachte echte Energie in alles, was sie organisierte.",
    "t3.role": "Technical Program Manager · Google",

    "footer.built": "Erstellt mit Next.js, Tailwind CSS & Framer Motion",
  },

  fr: {
    "nav.about": "À propos", "nav.skills": "Compétences", "nav.experience": "Expérience",
    "nav.projects": "Projets", "nav.blog": "Blog", "nav.contact": "Contact", "nav.hire": "M'embaucher",

    "hero.badge": "Disponible pour des rôles Backend · Java · Node.js",
    "hero.title.prefix": "Bonjour, je suis",
    "hero.role": "Ingénieure Backend",
    "hero.tagline": "Je construis des systèmes backend fiables et performants en Java et Node.js — des microservices distribués aux pipelines Kafka, en passant par les APIs Redis-cachées et les déploiements Kubernetes sur AWS.",
    "hero.cta.work": "Voir mon travail", "hero.cta.contact": "Me contacter", "hero.cta.resume": "CV",
    "hero.scroll": "défiler",
    "hero.metric.throughput.label": "Débit API", "hero.metric.latency.label": "Latence réduite", "hero.metric.dau.label": "DAU servis",

    "about.label": "À propos", "about.heading": "Qui je suis",
    "about.badge": "Développeuse Backend",
    "about.tagline1": "Rigoureuse avec une attitude orientée résultats",
    "about.tagline2": "Penser profondément. Construire proprement. Livrer avec confiance.",
    "about.bio1": "Je suis ingénieure backend avec ~2 ans d'expérience en production — microservices, pipelines événementiels et infrastructure cloud-native avec Java (Spring Boot), Node.js (NestJS/Fastify) et Next.js, pour des systèmes servant 50K+ utilisateurs actifs quotidiens à 99,9% de disponibilité.",
    "about.bio2": "5× de débit API avec Redis, 40% de réduction de latence avec Kafka, cycles de release de 2 jours à 30 minutes avec Docker + AWS EKS. Mon objectif : des systèmes rapides, résilients et maintenables.",
    "about.bio3": "En dehors du code, j'ai animé 10+ ateliers techniques en tant que responsable du chapitre GDSC et j'ai accompagné 50+ étudiants vers leur premier poste d'ingénieur.",
    "about.current": "Poste actuel", "about.education": "Formation", "about.location": "Localisation",
    "about.open": "Ouverte au télétravail et au présentiel",

    "why.label": "Pourquoi moi", "why.heading": "Pourquoi travailler avec moi ?",
    "why.sub": "Ce qui me distingue, c'est non seulement ma profondeur technique, mais aussi ma façon de penser les systèmes et de rendre les équipes plus efficaces.",

    "skills.label": "Compétences", "skills.heading": "Boîte à outils technique",

    "exp.label": "Expérience", "exp.heading": "Mes expériences professionnelles",
    "exp.fulltime": "Temps plein", "exp.internship": "Stage", "exp.tags": "Stack",

    "projects.label": "Projets", "projects.heading": "Ce que j'ai construit",
    "projects.sub": "Systèmes backend que j'ai conçus — cliquez sur une carte pour les détails.",
    "projects.more": "Lire plus", "projects.less": "Masquer",
    "projects.github": "Tout voir sur GitHub",

    "github.label": "Activité GitHub", "github.heading": "Contributrice régulière",
    "github.year": "Cette année", "github.year.sub": "contributions en 2025",
    "github.langs": "Langages principaux", "github.activity": "Activité de contribution",
    "github.less": "Moins", "github.more": "Plus",
    "github.commits": "Commits totaux", "github.prs": "Pull Requests",
    "github.repos": "Repositories", "github.streak": "Jours consécutifs",

    "testimonials.label": "Témoignages", "testimonials.heading": "Ce que disent les autres",

    "leadership.label": "Communauté", "leadership.heading": "Leadership & communauté",

    "faq.label": "FAQ", "faq.heading": "Questions fréquentes",
    "faq.sub": "Questions courantes des recruteurs. Pas trouvé ce que vous cherchez ?",
    "faq.sub.cta": "Demandez-moi directement.",

    "blog.label": "Blog", "blog.heading": "Réflexions & articles",
    "blog.sub": "J'écris sur les patterns Java backend, le system design et les leçons tirées de la production.",
    "blog.read": "Lire l'article", "blog.min": "min de lecture", "blog.medium": "Voir tout sur Medium",

    "contact.label": "Contact", "contact.heading": "Travaillons ensemble",
    "contact.sub": "Je suis disponible pour des postes Java Backend, Node.js et Backend Engineer en général.",
    "contact.name": "Nom", "contact.email": "E-mail", "contact.message": "Message",
    "contact.name.placeholder": "Votre nom",
    "contact.email.placeholder": "votre@email.com",
    "contact.msg.placeholder": "Parlez-moi du poste ou du projet…",
    "contact.send": "Envoyer", "contact.sending": "Envoi en cours…",
    "contact.success.title": "Message envoyé !",
    "contact.success.body": "Merci de m'avoir contactée. Je vous répondrai dans les 24–48 heures.",
    "contact.success.again": "Envoyer un autre message",
    "contact.available.title": "Disponible pour des postes",
    "contact.available.body": "À la recherche de postes d'ingénieure backend en Java ou Node.js.",
    "contact.open": "Télétravail accepté",
    "contact.interests": "Microservices Java / Spring Boot|Systèmes événementiels (Kafka, RabbitMQ)|Cloud-native (AWS, Docker, Kubernetes)|APIs Node.js / NestJS",

    "t0.quote": "Sayali a rejoint CentraLogic comme stagiaire et est rapidement devenue l'une de nos ingénieures backend les plus impactantes. Du pipeline Kafka à la couche de cache Redis, elle a pris en charge des systèmes critiques avec des résultats immédiats et mesurables. Sa rigueur technique et son esprit collaboratif sont remarquables pour son niveau d'expérience.",
    "t0.role": "CEO · CentraLogic",
    "t1.quote": "Sayali était l'une des Microsoft Learn Student Ambassadors les plus proactives avec qui j'ai travaillé. Elle a organisé des ateliers cloud, des hackathons et des sessions qui ont attiré des centaines d'étudiants, dépassant constamment les exigences du programme pour créer de véritables expériences d'apprentissage.",
    "t1.role": "Directeur · Microsoft for Startups",
    "t2.quote": "J'ai recruté Sayali comme stagiaire et elle écrivait du code Spring Boot prêt pour la production dès le premier mois. Son instinct pour l'optimisation des performances — stratégies d'indexation, connection pooling, élimination des N+1 — est rare à ce stade de carrière.",
    "t2.role": "Engineering Manager · Product Startup, Pune",
    "t3.quote": "En tant que responsable de chapitre GDSC, Sayali a construit l'une des communautés de développeurs les plus engagées de sa région — triplant le nombre de membres en un an. Elle a animé des sessions rigoureuses, guidé de nombreux étudiants vers des rôles techniques et s'est pleinement investie dans la mission GDSC.",
    "t3.role": "Technical Program Manager · Google",

    "footer.built": "Conçu avec Next.js, Tailwind CSS & Framer Motion",
  },

  es: {
    "nav.about": "Acerca de", "nav.skills": "Habilidades", "nav.experience": "Experiencia",
    "nav.projects": "Proyectos", "nav.blog": "Blog", "nav.contact": "Contacto", "nav.hire": "Contratarme",

    "hero.badge": "Disponible para roles Backend · Java · Node.js",
    "hero.title.prefix": "Hola, soy",
    "hero.role": "Ingeniera Backend",
    "hero.tagline": "Construyo sistemas backend confiables y de alto rendimiento en Java y Node.js — desde microservicios distribuidos y pipelines Kafka hasta APIs con caché Redis y despliegues Kubernetes en AWS.",
    "hero.cta.work": "Ver mi trabajo", "hero.cta.contact": "Contactarme", "hero.cta.resume": "Currículum",
    "hero.scroll": "desplazar",
    "hero.metric.throughput.label": "Rendimiento API", "hero.metric.latency.label": "Latencia reducida", "hero.metric.dau.label": "DAU atendidos",

    "about.label": "Acerca de", "about.heading": "Quién soy",
    "about.badge": "Desarrolladora Backend",
    "about.tagline1": "Diligente con actitud de hacer que las cosas sucedan",
    "about.tagline2": "Pensar profundo. Construir limpio. Entregar con confianza.",
    "about.bio1": "Soy ingeniera backend con ~2 años de experiencia en producción construyendo microservicios, pipelines orientados a eventos e infraestructura cloud-native con Java (Spring Boot), Node.js (NestJS/Fastify) y Next.js — para sistemas que atienden a más de 50K usuarios activos diarios al 99,9% de disponibilidad.",
    "about.bio2": "5× de rendimiento API con Redis, 40% de reducción de latencia con Kafka, ciclos de lanzamiento de 2 días a 30 minutos con Docker + AWS EKS. Mi objetivo: sistemas rápidos, resilientes y mantenibles.",
    "about.bio3": "Fuera del código, dirigí 10+ talleres técnicos como líder del capítulo GDSC y orienté a 50+ estudiantes hacia su primer puesto de ingeniería.",
    "about.current": "Puesto actual", "about.education": "Educación", "about.location": "Ubicación",
    "about.open": "Abierta a remoto y presencial",

    "why.label": "Por qué yo", "why.heading": "¿Por qué trabajar conmigo?",
    "why.sub": "Lo que me distingue no es solo la profundidad técnica, sino cómo pienso los sistemas y hago que los equipos avancen más rápido.",

    "skills.label": "Habilidades", "skills.heading": "Kit de herramientas técnicas",

    "exp.label": "Experiencia", "exp.heading": "Dónde he trabajado",
    "exp.fulltime": "Tiempo completo", "exp.internship": "Pasantía", "exp.tags": "Stack",

    "projects.label": "Proyectos", "projects.heading": "Lo que he construido",
    "projects.sub": "Sistemas backend que he desarrollado — haz clic en una tarjeta para ver los detalles.",
    "projects.more": "Leer más", "projects.less": "Ocultar",
    "projects.github": "Ver todo en GitHub",

    "github.label": "Actividad en GitHub", "github.heading": "Contribuidora constante",
    "github.year": "Este año", "github.year.sub": "contribuciones en 2025",
    "github.langs": "Lenguajes principales", "github.activity": "Actividad de contribución",
    "github.less": "Menos", "github.more": "Más",
    "github.commits": "Commits totales", "github.prs": "Pull Requests",
    "github.repos": "Repositorios", "github.streak": "Racha de días",

    "testimonials.label": "Testimonios", "testimonials.heading": "Lo que dicen otros",

    "leadership.label": "Comunidad", "leadership.heading": "Liderazgo y comunidad",

    "faq.label": "Preguntas frecuentes", "faq.heading": "Preguntas frecuentes",
    "faq.sub": "Preguntas comunes de reclutadores. ¿No encuentras lo que buscas?",
    "faq.sub.cta": "Pregúntame directamente.",

    "blog.label": "Blog", "blog.heading": "Ideas y artículos",
    "blog.sub": "Escribo sobre patrones Java backend, diseño de sistemas y lecciones aprendidas en producción.",
    "blog.read": "Leer artículo", "blog.min": "min de lectura", "blog.medium": "Ver todo en Medium",

    "contact.label": "Contacto", "contact.heading": "Trabajemos juntos",
    "contact.sub": "Estoy disponible para puestos de Java Backend, Node.js y Backend Engineer en general.",
    "contact.name": "Nombre", "contact.email": "Correo", "contact.message": "Mensaje",
    "contact.name.placeholder": "Tu nombre",
    "contact.email.placeholder": "tu@correo.com",
    "contact.msg.placeholder": "Cuéntame sobre el puesto o proyecto…",
    "contact.send": "Enviar mensaje", "contact.sending": "Enviando…",
    "contact.success.title": "¡Mensaje enviado!",
    "contact.success.body": "Gracias por contactarme. Te responderé en 24–48 horas.",
    "contact.success.again": "Enviar otro mensaje",
    "contact.available.title": "Disponible para puestos",
    "contact.available.body": "Buscando activamente puestos de ingeniería backend en Java o Node.js.",
    "contact.open": "Abierta a remoto",
    "contact.interests": "Microservicios Java / Spring Boot|Sistemas orientados a eventos (Kafka, RabbitMQ)|Cloud-native (AWS, Docker, Kubernetes)|APIs Node.js / NestJS",

    "t0.quote": "Sayali se incorporó a CentraLogic como pasante y rápidamente se convirtió en una de nuestras ingenieras backend más impactantes. Desde el pipeline de Kafka hasta la capa de caché Redis, asumió plena responsabilidad de sistemas críticos con resultados inmediatos y medibles. Su rigor técnico y espíritu colaborativo son excepcionales para su nivel de experiencia.",
    "t0.role": "CEO · CentraLogic",
    "t1.quote": "Sayali fue una de las Microsoft Learn Student Ambassadors más proactivas con las que he trabajado. Organizó talleres en la nube, hackathons y sesiones que atrajeron a cientos de estudiantes, superando constantemente los requisitos del programa para crear experiencias de aprendizaje significativas.",
    "t1.role": "Director · Microsoft for Startups",
    "t2.quote": "Contraté a Sayali como pasante y ya en el primer mes escribía código Spring Boot listo para producción. Su instinto para la optimización del rendimiento — estrategias de indexación, connection pooling, eliminación de N+1 — es poco común a este nivel de carrera.",
    "t2.role": "Engineering Manager · Product Startup, Pune",
    "t3.quote": "Como líder del capítulo GDSC, Sayali construyó una de las comunidades de desarrolladores más activas de su región — triplicando el número de miembros en un año. Dirigió sesiones técnicamente rigurosas, mentorizó a docenas de estudiantes hacia roles de ingeniería y aportó energía real a todo lo que organizó.",
    "t3.role": "Technical Program Manager · Google",

    "footer.built": "Construido con Next.js, Tailwind CSS & Framer Motion",
  },
};
