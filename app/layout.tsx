import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#FBF9F5"
};

export const metadata: Metadata = {
  title: "Suneel Sajja | AI/ML Engineer & Full-Stack Developer",
  description:
    "Portfolio of Suneel Sajja - AI/ML Engineer specializing in Generative AI, RAG Systems, Multi-Tenant Architectures, FastAPI, and Next.js.",
  keywords: [
    "Suneel Sajja",
    "AI Engineer",
    "Machine Learning",
    "Generative AI",
    "RAG",
    "FastAPI",
    "Next.js",
    "Qdrant",
    "LangChain",
    "LangGraph"
  ],
  authors: [
    { name: "Suneel Sajja", url: "https://www.linkedin.com/in/suneel-sajja-071b08316/" },
    { name: "Suneel Sajja", url: "https://github.com/sajja-suneel" }
  ],
  openGraph: {
    title: "Suneel Sajja | AI/ML Engineer & Full-Stack Developer",
    description: "Building Intelligent Experiences - Generative AI, RAG Systems & Modern Web.",
    url: "https://suneelsajja.dev",
    siteName: "Suneel Sajja Portfolio",
    locale: "en_US",
    type: "website"
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-[#FBF9F5] text-[#18181B] antialiased selection:bg-[#EA580C] selection:text-white">
        {children}
      </body>
    </html>
  );
}
