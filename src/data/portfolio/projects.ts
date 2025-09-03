import { 
  SiReact, 
  SiNextdotjs, 
  SiSupabase, 
  SiTypescript, 
  SiTailwindcss, 
  SiReactrouter,
  SiFigma,
  SiFramer,
  SiLangchain,
  SiGooglegemini,
  SiRedis
} from "react-icons/si"
import type { ComponentType } from "react"

export type TechIconComponent = ComponentType<{ title?: string; className?: string }>

export type ProjectTech = {
  icon: TechIconComponent
  name: string
  className?: string
}

export type PortfolioProject = {
  name: string
  category: string
  status: "completed" | "paused" | "in-progress"
  image: string
  github: string
  live: string
  tech: ProjectTech[]
}

export const portfolioProjects: PortfolioProject[] = [
  {
    name: "My Buddy",
    category: "A personalised learning plan generator powered by AI",
    status: "completed",
    image: "https://res.cloudinary.com/dnyiepskw/image/upload/v1756903924/mybuddy_gvpy9e.png",
    github: "https://github.com/Favourfisayo/my-buddy",
    live: "https://my-buddy-liart.vercel.app/",
    tech: [
      { icon: SiNextdotjs, name: "React", className: "text-[#61DAFB]" },
      { icon: SiLangchain, name: "Langchain.js", className: "text-[#38BDF8]" },
      { icon: SiSupabase, name: "Supabase", className: "text-[#3ECF8E]" },
      { icon: SiGooglegemini, name: "Gemini", className: "text-[#38BDF8]" },
      { icon: SiRedis, name: "Redis", className: "text-[#38BDF8]" },
      { icon: SiTailwindcss, name: "Tailwind CSS", className: "text-[#38BDF8]" },
    ]
  },
    {
      name: "Markdown Magic",
      category: "A web app for markdown lovers with real-time collaboration!",
      status: "completed",
      image: "https://res.cloudinary.com/dnyiepskw/image/upload/v1753536744/1_wcwutn.png",
      github: "https://github.com/Favourfisayo/markdown-magic",
      live: "https://markdown-magic-sigma.vercel.app/",
      tech: [
        { icon: SiReact, name: "React", className: "text-[#61DAFB]" },
        { icon: SiSupabase, name: "Supabase", className: "text-[#3ECF8E]" },
        { icon: SiTypescript, name: "TypeScript", className: "text-[#3178C6]" },
        { icon: SiTailwindcss, name: "Tailwind CSS", className: "text-[#38BDF8]" },
        { icon: SiReactrouter, name: "React Router", className: "text-[#CA4245]" }
      ]
    },
    {
      name: "Pharma Landing page",
      category: "Figma AI-designed page recreated from scratch with React.",
      status: "completed",
      image: "https://res.cloudinary.com/dnyiepskw/image/upload/v1753539037/3_mmzjpu.png",
      github: "https://github.com/Favourfisayo/pharma-landing-page",
      live: "https://pharma-landing-page.vercel.app/",
      tech: [
        { icon: SiReact, name: "React", className: "text-[#61DAFB]" },
        { icon: SiTypescript, name: "TypeScript", className: "text-[#3178C6]" },
        { icon: SiTailwindcss, name: "Tailwind CSS", className: "text-[#38BDF8]" },
        { icon: SiFigma, name: "Figma", className: "text-[#F24E1E]" },
        { icon: SiFramer, name: "Framer", className: "text-[#0055FF]" },
        
      ]
    }
  ]