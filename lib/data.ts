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
    "Software Engineer with ~2 years of experience building scalable microservices, distributed systems, and full-stack applications serving 50K+ DAU. Key results: 5× API throughput (Redis), 40% latency reduction (Kafka). Proficient across Java Spring Boot, Node.js, Next.js; experienced in system design, cloud infrastructure, and CI/CD.",
};

export const stats = [
  { value: "50K+", label: "Daily Users" },
  { value: "10K+", label: "Events / Sec" },
  { value: "40%",  label: "Lower Latency" },
];

export const techMarquee = [
  "Java", "Spring Boot", "Apache Kafka", "Redis", "Docker",
  "Kubernetes", "AWS", "Node.js", "PostgreSQL",
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
    skills: ["Node.js", "Express", "Fastify"],
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
    role: "Software Engineer — Backend / Full Stack",
    company: "CentraLogic",
    period: "April 2025 – Present",
    location: "Pune, India",
    type: "Full-time",
    highlights: [
      "Architected and maintained Java Spring Boot and Node.js microservices supporting 50K+ daily active users, with resilience patterns, structured logging, health checks, and fault-tolerant service communication.",
      "Built REST APIs and event-driven services using Spring Boot, Node.js, Express, Apache Kafka, and RabbitMQ, improving asynchronous processing and reducing end-to-end request latency.",
      "Developed scalable Next.js applications and backend integrations, connecting frontend workflows with REST APIs, authentication, role-based access control, and real-time service operations.",
      "Engineered Redis caching with TTL, eviction, write-through caching, and Pub/Sub invalidation, reducing frequently accessed API response times and database load.",
      "Optimised MySQL, PostgreSQL, and MongoDB queries through indexing, pagination, connection-pool tuning, and ORM optimisation, improving overall API performance.",
      "Implemented secure application flows using JWT, OAuth 2.0, and Spring Security, with RBAC and versioned Swagger/OpenAPI contracts for reliable service integration.",
      "Containerised applications using Docker and deployed services through AWS, Kubernetes, and Amazon EKS, using rolling deployments, health probes, autoscaling, and environment-based configuration.",
      "Built and maintained CI/CD pipelines with GitHub Actions, incorporating automated testing, SonarQube quality gates, Docker builds, and deployment workflows to streamline production releases.",
      "Worked across the complete development lifecycle — API design, database architecture, frontend integration, cloud deployment, monitoring, debugging, and production support.",
      "Mentored junior engineers and documented technical decisions, API contracts, deployment processes, and architectural patterns to improve team development standards.",
    ],
    tags: ["Java", "Spring Boot", "Node.js", "Next.js", "TypeScript", "Kafka", "RabbitMQ", "Redis", "PostgreSQL", "MySQL", "MongoDB", "Docker", "Kubernetes", "AWS", "EKS", "GitHub Actions", "OAuth 2.0", "JWT"],
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
      "Developed REST APIs and backend services using Java Spring Boot and Node.js, integrating them with frontend workflows and internal microservices.",
      "Built application features using Next.js, React, TypeScript, and REST APIs, contributing to end-to-end feature development from UI to backend.",
      "Integrated RabbitMQ and asynchronous messaging for communication between distributed services and contributed to multiple production releases.",
      "Improved API performance through SQL query optimisation, indexing, pagination, and backend refactoring, reducing response times by 25%.",
      "Containerised development services with Docker and worked with AWS/Kubernetes-based deployment workflows across development and production environments.",
      "Added JUnit, Jest, and API tests, achieving 80%+ test coverage and improving release confidence.",
      "Participated in GitHub-based CI/CD workflows, code reviews, debugging, production issue resolution, and release management.",
    ],
    tags: ["Java", "Spring Boot", "Node.js", "Next.js", "TypeScript", "React", "PostgreSQL", "MySQL", "RabbitMQ", "Docker", "AWS", "Kubernetes", "GitHub Actions", "Jest", "JUnit"],
    metrics: [
      { label: "Faster APIs", value: "25%" },
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
    title: "NodeAPI — Scalable REST Service",
    description:
      "A fully-featured RESTful microservice built with Node.js and TypeScript. Includes RabbitMQ async messaging, request validation, Jest test suite at 80%+ coverage, and full Swagger docs.",
    longDescription:
      "Follows clean architecture principles with domain-driven design. Features a custom interceptor pipeline, centralized error handling, and automated API contract testing.",
    tech: ["Node.js", "TypeScript", "RabbitMQ", "PostgreSQL", "Jest"],
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
    question: "Can you work with Node.js as well?",
    answer:
      "Absolutely. I've built REST APIs with Node.js and Express in production, integrated RabbitMQ messaging, and written Jest test suites. I'm comfortable context-switching between Java and Node.js depending on what the service needs.",
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
