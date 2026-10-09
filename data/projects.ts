export interface Project {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  highlights: string[];
  technologies: string[];
  metrics: { label: string; value: string }[];
  image: string;
  secondaryImages?: string[];
  githubUrl: string;
  liveUrl?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "policy-rag",
    number: "01",
    title: "Multi-Tenant Company Policy RAG Chatbot",
    subtitle: "Enterprise-grade isolated knowledge retrieval and compliance engine",
    category: "ENTERPRISE RAG · MULTI-TENANT ARCHITECTURE",
    description:
      "Architected and deployed an end-to-end multi-tenant Generative AI RAG chatbot enabling organizations to securely upload, index, and query company policy handbooks and compliance documents with context-aware responses and strict tenant isolation.",
    highlights: [
      "Tenant-level vector isolation using Qdrant and metadata filtering",
      "PDF and OCR document chunking with SentenceTransformers embeddings",
      "Sub-100ms FAISS/Qdrant vector search latency with hybrid retrieval",
      "JWT authentication, role-based access control (Admin & Employee), and AI guardrails",
      "Audited source citations with direct page references and similarity confidence scoring"
    ],
    technologies: [
      "Python",
      "FastAPI",
      "Next.js",
      "TypeScript",
      "Qdrant",
      "MongoDB",
      "PostgreSQL",
      "LangChain",
      "Docker",
      "JWT"
    ],
    metrics: [
      { label: "Search Latency", value: "<100ms" },
      { label: "Tenant Isolation", value: "100%" },
      { label: "Document Ingestion", value: "PDF & OCR" },
      { label: "Guardrail Filtering", value: "Strict" }
    ],
    image: "/projects/policyrag-chat.png",
    secondaryImages: [
      "/projects/policyrag-dashboard.png",
      "/projects/policyrag-hero.png"
    ],
    githubUrl: "https://github.com/sajja-suneel/Multi-tenant-chatbot",
    liveUrl: "https://policyrag-ai.vercel.app",
    featured: true
  },
  {
    id: "financial-intelligence",
    number: "02",
    title: "Financial News & Regulatory Intelligence Platform",
    subtitle: "Real-time market sentiment, regulatory impact analysis, and multi-agent RAG",
    category: "FINANCIAL AI · MULTI-AGENT PIPELINE",
    description:
      "Built a production-oriented Generative AI financial intelligence engine integrating live news and regulatory filings from RBI, NSE, and BSE. Implements multi-agent ingestion, semantic deduplication, and automated company/sector impact analysis.",
    highlights: [
      "Multi-agent AI pipeline for live feeds scraping, deduplication, and sentiment analysis",
      "Entity extraction graph with spaCy mapping company and regulatory dependencies",
      "RAG retrieval pipeline with query expansion and LLM synthesis",
      "Cached vector indexing with Qdrant, PostgreSQL persistence, and Redis pub/sub",
      "Company, sector, and regulatory impact scoring with confidence metrics"
    ],
    technologies: [
      "Python",
      "FastAPI",
      "LangGraph",
      "Next.js",
      "React",
      "TypeScript",
      "Qdrant",
      "Redis",
      "PostgreSQL",
      "spaCy"
    ],
    metrics: [
      { label: "Sources Integrated", value: "RBI · NSE · BSE" },
      { label: "Pipeline", value: "Multi-Agent" },
      { label: "Entity Extraction", value: "spaCy Graph" },
      { label: "Cache Layer", value: "Redis Speed" }
    ],
    image: "/projects/financial-intelligence.png",
    githubUrl: "https://github.com/sajja-suneel/AI-Powered-Financial-News-Intelligence-System",
    liveUrl: "https://finsight-intel.vercel.app",
    featured: true
  },
  {
    id: "healthcare-rag",
    number: "03",
    title: "Healthcare Clinical RAG Assistant",
    subtitle: "High-precision document QA and clinical knowledge retrieval system",
    category: "HEALTHCARE AI · CLINICAL RAG",
    description:
      "Developed a document-based clinical question-answering assistant designed to ingest medical research, EHR guidelines, and patient handbooks. Delivers grounded clinical synthesis with medical document viewing and verified citations.",
    highlights: [
      "Document QA pipeline retrieving guidelines with verified citation badges",
      "Contextual clinical synthesis with differential diagnosis management framework",
      "Similarity-threshold filtering to minimize medical hallucinations",
      "Interactive medical document viewer with side-by-side guideline references",
      "FastAPI microservice backend integrated with modern Next.js/React clinical portal"
    ],
    technologies: [
      "Python",
      "FastAPI",
      "React",
      "Next.js",
      "TypeScript",
      "Qdrant",
      "Sentence Transformers",
      "LLMs",
      "Tailwind CSS"
    ],
    metrics: [
      { label: "Citation Accuracy", value: "Verified [1][2]" },
      { label: "Hallucination Control", value: "Threshold Filtered" },
      { label: "Document Viewer", value: "Side-by-side" },
      { label: "Architecture", value: "FastAPI + RAG" }
    ],
    image: "/projects/healthcare-rag.png",
    githubUrl: "https://github.com/sajja-suneel/medical-chatbot",
    liveUrl: "https://mediguide-ai.vercel.app",
    featured: true
  }
];
