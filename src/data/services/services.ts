import { BookText, Globe, Rocket, Database } from "lucide-react";
import { ComponentType } from "react";

export type ServiceItem = {
  icon: ComponentType<{ size?: number; strokeWidth?: number }>
  title: string,
  description: string
}

export const servicesData: ServiceItem[] = [
  {
    title: "Web Application Development",
    description: 
      "I specialize in building modern, responsive, and scalable web applications using Next.js, React, and Tailwind CSS. From landing pages to full-stack SaaS apps, I deliver fast-loading, SEO-friendly, and user-focused solutions tailored to your needs.",
    icon: Globe
  },
  {
    title: "Full-Stack Integration with Supabase & PostgreSQL",
    description: 
      "I have hands-on experience working with Supabase and PostgreSQL to power authentication, real-time features, and data management. I design secure and scalable workflows that make applications production-ready.",
    icon: Database
  },
  {
    title: "AI & API Workflows with Python and Langchain.js",
    description: 
      "Beyond frontend development, I have integrated AI/ML workflows into applications, with LangChain, and Pytorch, and exposed APIs using FastAPI. This includes working with LLMs, caching with Redis, and building endpoints that support real-time and intelligent features.",
    icon: Rocket
  },
  {
    title: "Documentation & Code Optimization",
    description: 
      "I create clear technical documentation for projects and contribute to cleaner, maintainable codebases. I also refactor and optimize existing code to improve performance and scalability for long-term growth.",
    icon: BookText
  }
]
