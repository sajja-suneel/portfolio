export interface SkillElement {
  number: number;
  symbol: string;
  name: string;
  category: "languages" | "ai-ml" | "backend" | "databases" | "frontend" | "tools";
  categoryLabel: string;
  level: "Advanced" | "Proficient" | "Core";
  description: string;
  usedIn: string[];
}

export interface SkillCategory {
  id: "all" | "languages" | "ai-ml" | "backend" | "databases" | "frontend" | "tools";
  label: string;
  color: string;
  accent: string;
}

export const skillCategories: SkillCategory[] = [
  { id: "all", label: "All Elements", color: "bg-[#FF7E36] text-white", accent: "#FF7E36" },
  { id: "ai-ml", label: "AI & ML", color: "bg-emerald-700 text-white", accent: "#047857" },
  { id: "languages", label: "Languages", color: "bg-amber-600 text-white", accent: "#D97706" },
  { id: "backend", label: "Backend", color: "bg-blue-700 text-white", accent: "#1D4ED8" },
  { id: "databases", label: "Databases & Vector", color: "bg-purple-700 text-white", accent: "#7E22CE" },
  { id: "frontend", label: "Frontend", color: "bg-rose-600 text-white", accent: "#E11D48" },
  { id: "tools", label: "DevOps & Tools", color: "bg-slate-700 text-white", accent: "#334155" }
];

export const skillElements: SkillElement[] = [
  // Row 1: Languages & AI
  {
    number: 1,
    symbol: "Py",
    name: "Python",
    category: "languages",
    categoryLabel: "Languages",
    level: "Advanced",
    description: "Core language for AI/ML pipelines, FastAPI microservices, LangChain, embeddings, and data analysis.",
    usedIn: ["PolicyRAG", "Financial Intelligence", "AI Email Agent", "DataLabs Corp"]
  },
  {
    number: 2,
    symbol: "Lc",
    name: "LangChain",
    category: "ai-ml",
    categoryLabel: "AI & ML",
    level: "Advanced",
    description: "Building production RAG chains, prompt templates, output parsers, and multi-tenant document retrieval.",
    usedIn: ["PolicyRAG Chatbot", "Healthcare Assistant", "DataLabs Corp"]
  },
  {
    number: 3,
    symbol: "Lg",
    name: "LangGraph",
    category: "ai-ml",
    categoryLabel: "AI & ML",
    level: "Advanced",
    description: "Stateful multi-agent workflows, cyclic reasoning graphs, and autonomous inbox triage pipelines.",
    usedIn: ["Financial Intelligence", "AI Email Agent"]
  },
  {
    number: 4,
    symbol: "Lm",
    name: "LLMs & GenAI",
    category: "ai-ml",
    categoryLabel: "AI & ML",
    level: "Advanced",
    description: "OpenAI, Azure OpenAI, open-source models (Llama, Mistral), prompt engineering, and guardrails.",
    usedIn: ["All Featured Projects", "Model Evaluation"]
  },
  {
    number: 5,
    symbol: "St",
    name: "Sentence Transformers",
    category: "ai-ml",
    categoryLabel: "AI & ML",
    level: "Advanced",
    description: "Dense vector embeddings, semantic deduplication, cosine similarity, and passage retrieval tuning.",
    usedIn: ["PolicyRAG", "Financial News Platform"]
  },
  {
    number: 6,
    symbol: "Qd",
    name: "Qdrant",
    category: "databases",
    categoryLabel: "Databases & Vector",
    level: "Advanced",
    description: "Vector database for high-dimensional embedding storage, payload filtering, and tenant data isolation.",
    usedIn: ["PolicyRAG", "Financial Intel", "Email Agent"]
  },

  // Row 2: Backend & Databases
  {
    number: 7,
    symbol: "Fa",
    name: "FastAPI",
    category: "backend",
    categoryLabel: "Backend",
    level: "Advanced",
    description: "High-performance async REST APIs, Pydantic schemas, dependency injection, and SSE streaming.",
    usedIn: ["All Backend Services", "DataLabs Corp"]
  },
  {
    number: 8,
    symbol: "Pg",
    name: "PostgreSQL",
    category: "databases",
    categoryLabel: "Databases & Vector",
    level: "Advanced",
    description: "Relational persistence, ACID transactions, complex SQL queries, and metadata audit tables.",
    usedIn: ["PolicyRAG", "Financial Intel", "Email Agent"]
  },
  {
    number: 9,
    symbol: "Mg",
    name: "MongoDB",
    category: "databases",
    categoryLabel: "Databases & Vector",
    level: "Advanced",
    description: "Document storage for tenant metadata, unstructured chat logs, and configuration state.",
    usedIn: ["PolicyRAG Chatbot", "DataLabs Corp"]
  },
  {
    number: 10,
    symbol: "Re",
    name: "Redis",
    category: "databases",
    categoryLabel: "Databases & Vector",
    level: "Proficient",
    description: "In-memory caching for LLM responses, pub/sub queues, and rate-limiting session caches.",
    usedIn: ["Financial Intelligence Platform"]
  },
  {
    number: 11,
    symbol: "Sq",
    name: "SQL",
    category: "languages",
    categoryLabel: "Languages",
    level: "Advanced",
    description: "Relational query optimization, indexing, aggregations, window functions, and analytics joins.",
    usedIn: ["Innomatics Labs", "DataLabs Corp", "MCA"]
  },
  {
    number: 12,
    symbol: "Jw",
    name: "JWT & Auth",
    category: "backend",
    categoryLabel: "Backend",
    level: "Advanced",
    description: "Stateless security tokens, RBAC permissions, tenant claim verification, and OAuth 2.0 flow.",
    usedIn: ["PolicyRAG", "AI Email Agent"]
  },

  // Row 3: Frontend
  {
    number: 13,
    symbol: "Nx",
    name: "Next.js",
    category: "frontend",
    categoryLabel: "Frontend",
    level: "Advanced",
    description: "Full-stack React framework with App Router, Server Components, API routes, and SSR/SSG.",
    usedIn: ["Portfolio", "PolicyRAG Portal", "Financial UI"]
  },
  {
    number: 14,
    symbol: "Rc",
    name: "React.js",
    category: "frontend",
    categoryLabel: "Frontend",
    level: "Advanced",
    description: "Component-driven architecture, custom hooks, context state, and interactive UI engineering.",
    usedIn: ["All Frontend Systems", "DataLabs Corp"]
  },
  {
    number: 15,
    symbol: "Ts",
    name: "TypeScript",
    category: "frontend",
    categoryLabel: "Frontend",
    level: "Advanced",
    description: "Strict static typing, interfaces, generics, and bulletproof frontend/backend type contracts.",
    usedIn: ["Next.js Applications", "API Integration"]
  },
  {
    number: 16,
    symbol: "Js",
    name: "JavaScript",
    category: "languages",
    categoryLabel: "Languages",
    level: "Advanced",
    description: "Modern ES6+ syntax, asynchronous programming, DOM APIs, and dynamic interactive logic.",
    usedIn: ["Frontend Engineering", "Full-Stack Web"]
  },
  {
    number: 17,
    symbol: "Tw",
    name: "Tailwind CSS",
    category: "frontend",
    categoryLabel: "Frontend",
    level: "Advanced",
    description: "Utility-first design systems, responsive typography, custom theme tokens, and clean layout grids.",
    usedIn: ["Portfolio", "Enterprise Dashboards"]
  },
  {
    number: 18,
    symbol: "Fm",
    name: "Framer Motion",
    category: "frontend",
    categoryLabel: "Frontend",
    level: "Proficient",
    description: "Fluid declarative animations, scroll-triggered reveals, spring physics, and layout animations.",
    usedIn: ["Interactive Portfolio", "Micro-interactions"]
  },

  // Row 4: Data & DevOps
  {
    number: 19,
    symbol: "Dk",
    name: "Docker",
    category: "tools",
    categoryLabel: "DevOps & Tools",
    level: "Advanced",
    description: "Containerization of FastAPI microservices, Qdrant vectors, MongoDB, and reproducible dev environments.",
    usedIn: ["PolicyRAG Deployment", "DataLabs Corp"]
  },
  {
    number: 20,
    symbol: "Gt",
    name: "Git & GitHub",
    category: "tools",
    categoryLabel: "DevOps & Tools",
    level: "Advanced",
    description: "Version control, branching workflows, PR reviews, CI/CD automation, and open-source collaboration.",
    usedIn: ["All Projects", "Team Collaboration"]
  },
  {
    number: 21,
    symbol: "Pd",
    name: "Pandas & NumPy",
    category: "ai-ml",
    categoryLabel: "AI & ML",
    level: "Advanced",
    description: "High-performance data wrangling, feature engineering, matrix math, and dataset preprocessing.",
    usedIn: ["Innomatics Labs", "Financial Datasets"]
  },
  {
    number: 22,
    symbol: "Pb",
    name: "Power BI",
    category: "tools",
    categoryLabel: "DevOps & Tools",
    level: "Proficient",
    description: "Business intelligence dashboards, DAX queries, trend reporting, and executive visualization.",
    usedIn: ["Certified Skill Course", "Innomatics"]
  },
  {
    number: 23,
    symbol: "N8",
    name: "n8n Workflows",
    category: "tools",
    categoryLabel: "DevOps & Tools",
    level: "Proficient",
    description: "Low-code workflow automation nodes, webhook triggers, and autonomous agent orchestration.",
    usedIn: ["AI Email Agent System"]
  },
  {
    number: 24,
    symbol: "Mo",
    name: "MLOps & Eval",
    category: "ai-ml",
    categoryLabel: "AI & ML",
    level: "Proficient",
    description: "RAG triad evaluation (faithfulness, answer relevance, context precision), guardrails, and monitoring.",
    usedIn: ["DataLabs Corp", "PolicyRAG"]
  }
];
