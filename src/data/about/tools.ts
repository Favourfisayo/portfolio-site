import {
  siHtml5, siCss, siTypescript, siJavascript,
  siReact, siNextdotjs, siTailwindcss, siGit,
  siGithub, siOpenai, siSupabase, siPostgresql,
  siC, siPython, SimpleIcon,
  siLangchain,
  siPrisma,
  siGooglegemini,
  siGithubcopilot
} from "simple-icons"

export type ToolIcon = SimpleIcon
export type ToolItem = { name: string; icon: ToolIcon }
export type ToolCategory = { category: string; tools: ToolItem[] }

export const tools: ToolCategory[] = [
    {
      category: "Languages",
      tools: [
        {
          name: "HTML",
          icon: siHtml5
        },
        {
          name: "CSS",
          icon: siCss
        },
        {
          name: "Python",
          icon: siPython
        },
        {
          name: "TypeScript",
          icon: siTypescript
        },
        {
          name: "Javascript",
          icon: siJavascript
        },
        {
          name: "C",
          icon: siC
        },
        
      ]
    },

    {
      category: "Frameworks",
      tools: [
        {
          name: "React",
          icon: siReact
        },
        {
          name: "Nextjs",
          icon: siNextdotjs
        },
        {
          name: "TailwindCSS",
          icon: siTailwindcss
        },
        {
          name: "LangChain.js",
          icon: siLangchain
        },
      ]
    },
        {
      category: "AI",
      tools: [
        {
          name: "OpenAI",
          icon: siOpenai
        },
        {
          name: "Gemini",
          icon: siGooglegemini
        },
        {
          name: "Copilot",
          icon: siGithubcopilot
        },
      ]
    },

    {
      category: "Tools",
      tools: [
        {
          name: "Git",
          icon: siGit
        },
        {
          name: "Github",
          icon: siGithub
        },
      ]
    },
    {
      category: "Databases",
      tools: [
        {
          name: "Supabase",
          icon: siSupabase
        },
        {
          name: "PostgreSQL",
          icon: siPostgresql
        },
        {
          name: "Prisma",
          icon: siPrisma
        },
      ]
    }
  ]