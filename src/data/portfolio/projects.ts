import { 
  SiReact, 
  SiNextdotjs, 
  SiSupabase, 
  SiTypescript, 
  SiTailwindcss, 
  SiReactrouter,
  SiLangchain,
  SiGooglegemini,
  SiRedis,
  SiFastapi,
  SiPrisma,
  SiShadcnui,
  SiPytorch
} from "@icons-pack/react-simple-icons"
import { IconType } from "@icons-pack/react-simple-icons";

export type ProjectTech = {
  icon: IconType
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
    image: "/projects_images/mybuddy.png",
    github: "https://github.com/Favourfisayo/my-buddy",
    live: "https://my-buddy-liart.vercel.app/",
    tech: [
      { icon: SiNextdotjs, name: "React" },
      { icon: SiLangchain, name: "Langchain.js"},
      { icon: SiSupabase, name: "Supabase" },
      { icon: SiGooglegemini, name: "Gemini"},
      { icon: SiRedis, name: "Redis"},
      { icon: SiTailwindcss, name: "Tailwind CSS"},
      { icon: SiShadcnui, name: "ShadCN UI"},
    ]
  },
    {
      name: "Markdown Magic",
      category: "A web app for markdown lovers with real-time collaboration!",
      status: "paused",
      image: "/projects_images/markdown-editor.png",
      github: "https://github.com/Favourfisayo/markdown-magic",
      live: "https://markdown-magic-sigma.vercel.app/",
      tech: [
        { icon: SiReact, name: "React" },
        { icon: SiSupabase, name: "Supabase" },
        { icon: SiTypescript, name: "TypeScript"},
        { icon: SiTailwindcss, name: "Tailwind CSS"},
        { icon: SiReactrouter, name: "React Router"}
      ]
    },
    {
      name: "Form Helper",
      category: "An AI/ML Powered application that allows users fill forms on the go with live audio.",
      status: "completed",
      image: "/projects_images/form-helper.png",
      github: "https://github.com/Favourfisayo/formhelper",
      live: "https://formhelper.vercel.app/",
      tech: [
        { icon: SiNextdotjs, name: "Nextjs"},
        { icon: SiFastapi, name: "FastAPI"},
        { icon: SiPrisma, name: "Prisma"},
        { icon: SiGooglegemini, name: "Google's Gemini APIs"},
        { icon: SiRedis, name: "Redis"},
        { icon: SiPytorch, name: "Pytorch"},
      ]
    }
  ]