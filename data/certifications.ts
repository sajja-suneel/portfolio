export interface Certification {
  id: string;
  number: string;
  title: string;
  issuer: string;
  date?: string;
  category: string;
  description: string;
  skills: string[];
  link?: string;
}

export const certifications: Certification[] = [
  {
    id: "salesforce-ai",
    number: "01",
    title: "AI Associate Certification",
    issuer: "Salesforce",
    category: "Artificial Intelligence",
    description: "Certified in core AI concepts, ethical generative AI implementations, CRM AI workflows, and machine learning fundamentals.",
    skills: ["AI Fundamentals", "Generative AI", "Responsible AI", "Model Safety"]
  },
  {
    id: "nasscom-ada",
    number: "02",
    title: "Advanced Data Analysis",
    issuer: "Nasscom",
    category: "Data Science & Analytics",
    description: "Rigorous curriculum covering advanced statistical inference, data wrangling, regression analysis, and industry data pipelines.",
    skills: ["Advanced Analytics", "Data Modeling", "Feature Engineering", "Python"]
  },
  {
    id: "innomatics-cda",
    number: "03",
    title: "Certification in Data Analysis",
    issuer: "Innomatics Research Labs",
    category: "Analytics & ML",
    description: "Comprehensive hands-on industry certification covering exploratory data analysis, machine learning algorithms, and real-world datasets.",
    skills: ["Exploratory Data Analysis", "Scikit-Learn", "Predictive Analytics"]
  },
  {
    id: "power-bi-course",
    number: "04",
    title: "Power BI Micro Course",
    issuer: "Skill Course",
    date: "Dec 2025",
    category: "Business Intelligence",
    description: "Mastery of enterprise dashboard architecture, DAX calculated measures, data transformation, and visual reporting.",
    skills: ["Power BI", "DAX", "Data Modeling", "Executive Dashboards"]
  },
  {
    id: "innomatics-eda",
    number: "05",
    title: "Exploratory Data Analysis",
    issuer: "Innomatics Research Labs",
    category: "Data Science",
    description: "In-depth specialization in detecting data anomalies, feature distributions, missing data imputation, and statistical visualization.",
    skills: ["Data Cleaning", "Matplotlib", "Seaborn", "Hypothesis Testing"]
  }
];

export interface AchievementMetric {
  number: string;
  label: string;
  sublabel: string;
  category: string;
  iconName: string;
}

export const achievementMetrics: AchievementMetric[] = [
  {
    number: "280+",
    label: "Problems Solved",
    sublabel: "Across GeeksforGeeks & LeetCode data structures & algorithms tracks",
    category: "ALGORITHMS & DS",
    iconName: "Code"
  },
  {
    number: "20+",
    label: "Stars & Badges",
    sublabel: "Earned across HackerRank skill assessments and Python tracks",
    category: "HACKERRANK",
    iconName: "Star"
  },
  {
    number: "80%",
    label: "MCA First Class",
    sublabel: "Distinction grade at Siddharth Institute of Engineering & Technology",
    category: "ACADEMIC EXCELLENCE",
    iconName: "Trophy"
  },
  {
    number: "3+",
    label: "Deployed AI Systems",
    sublabel: "Production-grade RAG pipelines, FastAPI backends, and Next.js portals",
    category: "PRODUCTION SHIPPED",
    iconName: "Cpu"
  }
];
