export interface TimelineItem {
  id: string;
  type: "experience" | "education";
  year: string;
  period: string;
  title: string;
  organization: string;
  location: string;
  score?: string;
  badge?: string;
  description: string[];
  skills: string[];
}

export const timelineItems: TimelineItem[] = [
  {
    id: "datalabs-intern",
    type: "experience",
    year: "2026",
    period: "May 2026 – Present",
    title: "AI & ML Intern",
    organization: "DataLabs Corporation",
    location: "Hyderabad, Telangana",
    badge: "Current Role",
    description: [
      "Developed, tested, and deployed Generative AI and LLM-powered applications using Python and FastAPI, building end-to-end AI workflows covering data ingestion, preprocessing, document processing, RAG, response generation, evaluation, and deployment.",
      "Built and optimized Retrieval-Augmented Generation (RAG) pipelines using LangChain, embeddings, Qdrant, semantic/vector search, document chunking, indexing, and prompt engineering to deliver context-aware and reliable AI responses.",
      "Developed multi-tenant AI chatbot systems with JWT authentication, tenant-level data isolation, MongoDB, PostgreSQL, and Qdrant, implementing secure REST APIs and backend services for organization-specific knowledge retrieval.",
      "Evaluated and improved AI model performance by implementing guardrails, similarity-threshold filtering, context validation, prompt optimization, retrieval tuning, and systematic troubleshooting of response-quality.",
      "Collaborated on frontend-backend integration using React.js, Next.js, TypeScript, and Docker within production-oriented deployment workflows."
    ],
    skills: ["Python", "FastAPI", "Generative AI", "LangChain", "Qdrant", "RAG", "Next.js", "Docker", "MLOps"]
  },
  {
    id: "innomatics-intern",
    type: "experience",
    year: "2025",
    period: "October 2025 – March 2026",
    title: "Data Analytics Intern",
    organization: "Innomatics Research Labs",
    location: "Hyderabad, Telangana",
    badge: "Completed",
    description: [
      "Conducted exploratory data analysis (EDA), statistical modeling, and data preprocessing across complex commercial datasets using Python, Pandas, and NumPy.",
      "Built predictive models, regression pipelines, and classification algorithms with Scikit-learn, optimizing hyperparameters and validation metrics.",
      "Engineered automated data visualization reports and interactive dashboards using Power BI and Matplotlib/Seaborn for actionable business insights."
    ],
    skills: ["Python", "Pandas", "NumPy", "EDA", "Power BI", "Data Modeling", "Statistical Analysis"]
  },
  {
    id: "mca-education",
    type: "education",
    year: "2025",
    period: "10/2023 – 06/2025",
    title: "Master of Computer Applications (MCA)",
    organization: "Siddharth Institute of Engineering & Technology",
    location: "Puttur, Andhra Pradesh",
    score: "80%",
    badge: "First Class with Distinction",
    description: [
      "Graduated with 80% First Class with Distinction, specializing in advanced data structures, algorithms, cloud computing, database systems, and software engineering.",
      "Completed hands-on capstone engineering in distributed systems and intelligent enterprise applications.",
      "Active participant in technical symposiums, hackathons, and algorithmic problem-solving communities."
    ],
    skills: ["Data Structures & Algorithms", "Database Management Systems", "Software Architecture", "OOP", "Web Technologies"]
  },
  {
    id: "bsc-education",
    type: "education",
    year: "2023",
    period: "07/2020 – 09/2023",
    title: "Bachelor of Science (BSc)",
    organization: "S.G.S Arts College",
    location: "Tirupati, Andhra Pradesh",
    score: "70%",
    badge: "Graduated",
    description: [
      "Built strong foundations in computer science principles, mathematical modeling, discrete mathematics, and programming methodologies.",
      "Completed academic projects in database querying, object-oriented software design, and analytical problem solving."
    ],
    skills: ["Computer Science Fundamentals", "Mathematics", "Database Querying", "Problem Solving"]
  }
];
