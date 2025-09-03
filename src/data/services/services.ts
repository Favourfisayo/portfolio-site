import { BookText, Globe, Rocket, Server } from "lucide-react";
import { ComponentType } from "react";

export type ServiceItem = {
    icon: ComponentType<{ size?: number; strokeWidth?: number }>
    title: string,
    description: string
  }
export const servicesData: ServiceItem[] = [
    {
      title: "Web Application Development",
      description: "I build modern, responsive, and scalable web applications using technologies like React, Next.js, and Tailwind CSS. Whether it's a landing page, dashboard, or full-stack SaaS product, I deliver fast-loading, SEO-friendly, and user-centric solutions tailored to your business needs.",
      icon: Globe
    },
    {
      title: "Custom API & Backend Integration",
      description: "Need more than just a frontend? I can develop robust backends using Node.js and integrate them with powerful databases like Supabase or Firebase. From user authentication to custom REST APIs, I ensure secure and scalable server-side logic that supports your app's functionality.",
      icon: Server
    },
    {
      title: "Technical Documentation & Code Optimization",
      description: "I help development teams or solo founders create clear and concise technical documentation for their projects. I can also refactor legacy codebases, improve performance, or debug tricky issues in frontend or backend projects for better maintainability and scalability.",
      icon: BookText
    },
    {
      title: " Freelance Collaboration & MVP Prototyping",
      description: "Got a startup idea? I work with early-stage founders and solo entrepreneurs to bring MVPs (Minimum Viable Products) to life. From brainstorming to building the first version of your product, I help turn ideas into usable prototypes that can attract users or investors.",
      icon: Rocket
    }
  ]