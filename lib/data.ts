export const personal = {
  name: "Sayali Rahane",
  title: "Java Backend Engineer",
  subtitle: "Microservices · Distributed Systems · AWS · Node.js",
  tagline:
    "I build reliable, high-throughput backend systems in Java and Node.js — from distributed microservices to event-driven pipelines.",
  email: "sayalipr15@gmail.com",
  phone: "+91 7620870335",
  location: "Pune, India",
  linkedin: "https://linkedin.com/in/sayali-rahane",
  github: "https://github.com/RahaneSayali",
  summary:
    "Java Backend Engineer with ~2 years of experience building scalable microservices and distributed systems serving 50K+ DAU at 99.9% uptime. Key results: 5× API throughput (Redis), 40% latency reduction (Kafka), 35% DB load reduction. Proficient across Java Spring Boot and NestJS/Node.js; experienced in system design (HLD/LLD), Kubernetes, and CI/CD.",
};

export const stats = [
  { value: "50K+", label: "DAU Served" },
  { value: "99.9%", label: "Uptime" },
  { value: "5×", label: "API Throughput" },
  { value: "40%", label: "Latency Reduced" },
];

export const techMarquee = [
  "Java", "Spring Boot", "Apache Kafka", "Redis", "Docker",
  "Kubernetes", "AWS", "NestJS", "Node.js", "PostgreSQL",
  "MongoDB", "MySQL", "GitHub Actions", "Hibernate ORM", "RabbitMQ",
  "Spring Security", "OAuth 2.0", "JWT", "JUnit 5", "Swagger",
  "Microservices", "System Design", "CI/CD", "TypeScript", "Fastify",
];

export const whyHireMe = [
  {
    icon: "Server",
    title: "Backend Systems Expert",
    description:
      "I design microservices that handle real production load — 50K+ DAU, 10K+ events/sec — with circuit breakers, caching, and zero-downtime deployments baked in from day one.",
  },
  {
    icon: "Zap",
    title: "Performance-Obsessed",
    description:
      "I've driven a 5× API throughput gain with Redis, a 40% Kafka latency cut, and a 20× lookup improvement. Performance isn't an afterthought — it's how I design.",
  },
  {
    icon: "Shield",
    title: "Security-First Mindset",
    description:
      "From JWT + OAuth 2.0 to PCI DSS-compliant field encryption and RBAC — I treat security as a core engineering discipline, not a checkbox.",
  },
  {
    icon: "Users",
    title: "Collaborative & Communicative",
    description:
      "I mentor juniors, write ADRs, publish versioned OpenAPI contracts, and have led 10+ community workshops. I make teams faster, not just code.",
  },
];

export const skillCategories = [
  {
    title: "Languages",
    icon: "Code2",
    color: "from-blue-500/20 to-blue-600/5",
    border: "border-blue-500/20",
    skills: ["Java 8/11/17", "TypeScript", "JavaScript", "SQL", "C#"],
  },
  {
    title: "Java / Frameworks",
    icon: "Server",
    color: "from-orange-500/20 to-orange-600/5",
    border: "border-orange-500/20",
    skills: [
      "Spring Boot",
      "Spring MVC",
      "Spring Security",
      "Spring Data JPA",
      "Hibernate ORM",
    ],
  },
  {
    title: "Node.js / Frameworks",
    icon: "Zap",
    color: "from-green-500/20 to-green-600/5",
    border: "border-green-500/20",
    skills: ["NestJS", "Node.js", "Fastify", "Express"],
  },
  {
    title: "Messaging & Cache",
    icon: "Activity",
    color: "from-purple-500/20 to-purple-600/5",
    border: "border-purple-500/20",
    skills: ["Apache Kafka", "Redis", "RabbitMQ", "Pub/Sub", "Event-Driven"],
  },
  {
    title: "Databases",
    icon: "Database",
    color: "from-cyan-500/20 to-cyan-600/5",
    border: "border-cyan-500/20",
    skills: ["MySQL", "PostgreSQL", "MongoDB"],
  },
  {
    title: "Cloud & DevOps",
    icon: "Cloud",
    color: "from-sky-500/20 to-sky-600/5",
    border: "border-sky-500/20",
    skills: ["AWS (EC2, S3, RDS, Lambda, EKS)", "Docker", "Kubernetes", "GitHub Actions", "Jenkins"],
  },
  {
    title: "Testing & Quality",
    icon: "CheckCircle",
    color: "from-emerald-500/20 to-emerald-600/5",
    border: "border-emerald-500/20",
    skills: ["JUnit 5", "Mockito", "Jest", "SonarQube", "TDD", "Swagger / OpenAPI 3.0"],
  },
  {
    title: "Concepts",
    icon: "Layers",
    color: "from-indigo-500/20 to-indigo-600/5",
    border: "border-indigo-500/20",
    skills: ["Microservices", "System Design (HLD/LLD)", "REST API", "SOLID Principles", "Design Patterns", "RBAC", "OAuth 2.0", "DSA"],
  },
];

export const experiences = [
  {
    role: "Software Engineer — Backend",
    company: "CentraLogic",
    period: "April 2025 – Present",
    location: "Pune, India",
    type: "Full-time",
    highlights: [
      "Architected Java Spring Boot microservices serving 50K+ DAU at 99.9% uptime; applied Resilience4j circuit-breaker and bulkhead patterns across 10+ services to eliminate cascading failures.",
      "Engineered Apache Kafka event pipelines (Producer/Consumer/Streams) at 10K+ events/sec; slashed end-to-end latency by 40% using idempotent consumers and dead-letter queues for exactly-once delivery.",
      "Designed Redis caching layer (write-through, TTL eviction, Pub/Sub invalidation) cutting API response time from 320ms to 60ms — a 5× throughput gain.",
      "Strengthened platform security with JWT + OAuth 2.0 and Spring Security RBAC; authored versioned Swagger/OpenAPI 3.0 contracts accelerating partner integration.",
      "Optimised database performance by 35% via composite indexing, HikariCP connection-pool tuning, and Hibernate N+1 elimination across MySQL, PostgreSQL, and MongoDB.",
      "Containerised services with Docker; orchestrated deployments on AWS EKS with rolling updates, HPA, and health probes — compressing release cycles from 2 days to 30 minutes.",
      "Established GitHub Actions CI/CD pipelines (85%+ test coverage, SonarQube gates). Mentored 2 junior engineers and documented architectural decisions in ADRs.",
    ],
    tags: ["Java", "Spring Boot", "Kafka", "Redis", "AWS EKS", "Docker", "Kubernetes"],
    metrics: [
      { label: "DAU", value: "50K+" },
      { label: "Uptime", value: "99.9%" },
      { label: "Throughput", value: "5×" },
    ],
  },
  {
    role: "Backend Developer Intern",
    company: "CentraLogic",
    period: "Jan 2025 – April 2025",
    location: "Pune, India",
    type: "Internship",
    highlights: [
      "Developed RESTful APIs using Java Spring Boot and NestJS/Node.js; integrated RabbitMQ for async messaging across microservices; contributed to 6 production releases.",
      "Resolved performance bottlenecks via SQL query optimisation and pagination, cutting response time by 25%; wrote JUnit 5 and Jest tests (80%+ coverage).",
    ],
    tags: ["Spring Boot", "NestJS", "RabbitMQ", "JUnit 5", "Swagger"],
    metrics: [
      { label: "Response time", value: "−25%" },
      { label: "Test coverage", value: "80%+" },
      { label: "Prod releases", value: "6" },
    ],
  },
];

export const projects = [
  {
    title: "EventFlow — Kafka Pipeline Engine",
    description:
      "A high-throughput event processing engine built with Apache Kafka and Spring Boot. Handles 10K+ events/sec with idempotent consumers, dead-letter queues, retry policies, and a real-time monitoring dashboard.",
    longDescription:
      "Engineered for exactly-once delivery semantics using Kafka Streams with transactional producers. Includes a custom backpressure strategy and consumer lag alerting via Prometheus + Grafana.",
    tech: ["Java", "Spring Boot", "Apache Kafka", "PostgreSQL", "Docker", "Prometheus"],
    metrics: { label: "Latency reduction", value: "40%" },
    gradient: "from-violet-600/30 via-purple-600/20 to-indigo-600/10",
    accent: "#7c3aed",
    github: "https://github.com/RahaneSayali",
    live: null,
    category: "Distributed Systems",
    status: "Production",
  },
  {
    title: "CacheLayer — Redis Optimization Service",
    description:
      "A generic Redis caching layer library for Spring Boot microservices. Implements write-through, read-through, and Pub/Sub cache invalidation patterns with TTL management.",
    longDescription:
      "Reduced API response time from 320ms to 60ms across the platform. Includes distributed lock support via Redisson, cache warmup strategies, and hit-rate monitoring.",
    tech: ["Java", "Redis", "Spring Boot", "MySQL", "Redisson"],
    metrics: { label: "API throughput", value: "5×" },
    gradient: "from-red-600/30 via-rose-600/20 to-pink-600/10",
    accent: "#dc2626",
    github: "https://github.com/RahaneSayali",
    live: null,
    category: "Performance",
    status: "Open Source",
  },
  {
    title: "SecureGate — Auth Microservice",
    description:
      "A production-grade authentication and authorisation microservice with JWT, OAuth 2.0, Spring Security RBAC, and versioned OpenAPI contracts for seamless third-party integrations.",
    longDescription:
      "Implements refresh token rotation, session revocation, and multi-tenant RBAC. Integrates with Keycloak for enterprise SSO and provides audit logging for all auth events.",
    tech: ["Java", "Spring Security", "OAuth 2.0", "JWT", "Keycloak", "Swagger"],
    metrics: { label: "Security incidents", value: "Zero" },
    gradient: "from-emerald-600/30 via-green-600/20 to-teal-600/10",
    accent: "#059669",
    github: "https://github.com/RahaneSayali",
    live: null,
    category: "Security",
    status: "Production",
  },
  {
    title: "NestAPI — Scalable REST Service",
    description:
      "A fully-featured RESTful microservice built with NestJS and TypeScript. Includes RabbitMQ async messaging, request validation, Jest test suite at 80%+ coverage, and full Swagger docs.",
    longDescription:
      "Follows clean architecture principles with domain-driven design. Features a custom interceptor pipeline, centralized error handling, and automated API contract testing.",
    tech: ["NestJS", "Node.js", "TypeScript", "RabbitMQ", "PostgreSQL", "Jest"],
    metrics: { label: "Response time", value: "−25%" },
    gradient: "from-sky-600/30 via-blue-600/20 to-cyan-600/10",
    accent: "#0284c7",
    github: "https://github.com/RahaneSayali",
    live: null,
    category: "Node.js",
    status: "Open Source",
  },
];

export const testimonials = [
  {
    name: "Sanjay Navgale",
    role: "CEO",
    company: "CentraLogic",
    avatar: "SN",
    avatarColor: "from-blue-500 to-cyan-500",
    quote:
      "Sayali is one of the sharpest backend engineers I've worked with. She redesigned our Kafka pipeline and the results were immediate — 40% latency drop overnight. Her understanding of distributed systems goes well beyond her experience level.",
  },
  {
    name: "Pablo Veramendi",
    role: "Director",
    company: "Microsoft for Startups",
    avatar: "PV",
    avatarColor: "from-blue-600 to-sky-400",
    quote:
      "What sets Sayali apart is how she thinks about systems end-to-end. She didn't just write the code — she documented the ADRs, wrote the OpenAPI contracts, and mentored the junior devs. The Redis caching layer she built is still in production with zero issues.",
  },
  {
    name: "Arjun Deshmukh",
    role: "Engineering Manager",
    company: "Product Startup, Pune",
    avatar: "AD",
    avatarColor: "from-orange-500 to-red-500",
    quote:
      "I hired Sayali as an intern and she was writing production-level Spring Boot code within the first month. Her instinct for performance optimisation — indexing strategies, connection pooling, N+1 elimination — is something you rarely see at this stage of a career.",
  },
  {
    name: "Nikita Gandhi",
    role: "Technical Program Manager",
    company: "Google",
    avatar: "NG",
    avatarColor: "from-red-500 to-yellow-400",
    quote:
      "Worked with Sayali on the security revamp project. She implemented the entire OAuth 2.0 + RBAC layer from scratch — clean, testable, and compliant. Also incredibly patient when explaining complex auth flows to the team.",
  },
];

export const faqs = [
  {
    question: "What kinds of roles are you looking for?",
    answer:
      "I’m open to Backend Engineer, Java Developer, Node.js Developer, Full-Stack Developer, and DevOps-focused roles where I can work on scalable applications, APIs, microservices, cloud infrastructure, and modern web technologies. I’m particularly interested in opportunities where I can work across Java, Node.js, Next.js, DevOps, distributed systems, and cloud platforms while solving real-world engineering problems.",
  },
  {
  question: "How much experience do you have with Backend Development?",
  answer:
    "About 2 years of hands-on production experience developing backend services with Java, Spring Boot, and Node.js. My experience includes building REST APIs and microservices, Spring Security, Spring Data JPA, Hibernate, database integrations, asynchronous and event-driven processing, and backend system design. I’ve also worked with Next.js, Azure, CI/CD, Docker, and DevOps workflows to build and deploy production applications."
  },
  {
    question: "Are you comfortable with system design?",
    answer:
      "Yes — I've applied HLD/LLD in practice at CentraLogic. I've designed event-driven pipelines, Redis caching strategies, API gateway patterns, and multi-service auth flows. I'm confident discussing trade-offs around CAP theorem, eventual consistency, and distributed locking.",
  },
  {
  question: "What's your experience with cloud and DevOps?",
  answer:
    "I have hands-on experience with AWS and Azure, Docker, Kubernetes, and CI/CD. I’ve worked with services such as EC2, S3, RDS, Lambda, and EKS, containerised backend applications, managed Kubernetes deployments, and built GitHub Actions pipelines with SonarQube quality gates."
},
  {
    question: "Can you work with Node.js / NestJS as well?",
    answer:
      "Absolutely. I've built REST APIs with NestJS/Node.js and Fastify in production, integrated RabbitMQ messaging, and written Jest test suites. I'm comfortable context-switching between Java and Node.js depending on what the service needs.",
  },
  {
    question: "When can you start?",
    answer:
      "I can discuss availability based on the role and notice period. Feel free to reach out via the contact form and I'll get back to you within 24 hours.",
  },
];

export const githubStats = {
  totalCommits: 847,
  thisYear: 612,
  repositories: 23,
  pullRequests: 94,
  codeReviews: 67,
  streak: 34,
  topLanguages: [
    { name: "Java", percent: 58, color: "#f89820" },
    { name: "TypeScript", percent: 24, color: "#3178c6" },
    { name: "JavaScript", percent: 12, color: "#f7df1e" },
    { name: "SQL", percent: 6, color: "#336791" },
  ],
};

export const leadership = [
  {
    role: "Chapter Lead",
    org: "Google Developer Student Club (GDSC)",
    period: "Jul 2023 – Jun 2024",
    location: "MET Bhujbal Knowledge City, Nashik",
    cert: "Google (Certificate)",
    highlights: [
      "Serving as GDSC Lead with a team of 5 members, building and nurturing a developer community at MET Bhujbal Knowledge City, Nashik, Maharashtra.",
      "Led 10+ technical workshops on Cloud, Backend, and Web Development — 100+ attendees per session, grew membership 3×.",
      "Actively contributing to projects and working collaboratively with multiple teams to drive innovation within the community.",
    ],
  },
  {
    role: "Student Ambassador (Alpha & Beta)",
    org: "Microsoft Learn Student Ambassador",
    period: "Jan 2024 – Dec 2024",
    location: "Remote",
    cert: "Microsoft (Certificate)",
    highlights: [
      "Contributing to club initiatives and raising awareness about Microsoft courses and services within a student community of 600+ members.",
      "Participated in organising 5+ events — seminars, workshops, hackathons, and how-to sessions — as a core member of the college Coding Club.",
      "Represented Microsoft to help students learn and innovate using Microsoft technologies and cloud tools.",
    ],
  },
  {
    role: "Campus Expert",
    org: "Coding Ninjas",
    period: "Jan 2024 – Dec 2024",
    location: "Remote",
    cert: "Coding Ninjas (Certificate)",
    highlights: [
      "Conducted workshops and training sessions on programming languages, algorithms, and data structures for students.",
      "Mentored and coached students in problem-solving techniques, debugging strategies, and code optimisation methods.",
      "Collaborated with industry professionals and guest speakers to provide insights into real-world applications of coding principles.",
    ],
  },
];

export const education = {
  degree: "Bachelor of Engineering (B.E.) — Computer Engineering",
  institution: "MET Institute of Engineering, Nashik",
  period: "2020 – 2024",
  cgpa: "8.10 / 10.00",
};

export const blogPosts = [
  {
    slug: "what-is-gemini",
    title: "What is Gemini? Everything you should know about Google's new AI model",
    excerpt:
      "Google's Gemini is a multimodal AI system capable of processing text, code, images, audio, video, and 3D models. A deep look at how it compares to GPT-4 and what makes it stand apart on academic benchmarks.",
    date: "2023-12-10",
    readTime: 5,
    tags: ["AI", "Google", "LLM", "Gemini"],
    accent: "#4285f4",
    category: "AI & ML",
    url: "https://medium.com/@sayalipr15/what-is-gemini-everything-you-should-know-about-googles-new-ai-model-c813d5dd0ea8",
  },
  {
    slug: "cloud-service-models-iaas-paas-saas",
    title: "Service Models in Cloud Computing — IaaS, PaaS, SaaS",
    excerpt:
      "A comprehensive breakdown of the three cloud service models — from the raw flexibility of IaaS to the developer-friendly PaaS to the plug-and-play simplicity of SaaS, with real-world provider examples.",
    date: "2023-08-04",
    readTime: 7,
    tags: ["Cloud", "AWS", "Azure", "GCP"],
    accent: "#f89820",
    category: "Cloud Computing",
    url: "https://medium.com/@sayalipr15/service-models-in-cloud-computing-environment-iaas-paas-saas-c7a1fde7185c",
  },
  {
    slug: "twitter-vs-threads",
    title: "The battle between Twitter and Threads is already heating up!",
    excerpt:
      "Cage fight or not — Meta's Threads has already shaken Twitter's dominance. A feature-by-feature comparison: character limits, video duration, privacy controls, and where each platform wins.",
    date: "2023-07-11",
    readTime: 4,
    tags: ["Twitter", "Threads", "Meta", "Tech"],
    accent: "#6366f1",
    category: "Tech Industry",
    url: "https://medium.com/@sayalipr15/cage-fight-may-never-happen-but-battle-between-twitter-and-threads-is-already-heating-up-aa04be377a2e",
  },
  {
    slug: "aws-vs-azure-vs-gcp",
    title: "Cloud Computing — AWS vs Azure vs GCP: Which is Best for You?",
    excerpt:
      "AWS leads in market share, Azure integrates deeply with Microsoft, GCP shines on data analytics. A practical guide to choosing the right cloud platform based on your team's needs.",
    date: "2023-07-04",
    readTime: 6,
    tags: ["AWS", "Azure", "GCP", "Cloud"],
    accent: "#10b981",
    category: "Cloud Computing",
    url: "https://medium.com/@sayalipr15/cloud-computing-aws-vs-azure-vs-gcp-which-is-the-best-platform-for-you-d257ef3083",
  },
];
