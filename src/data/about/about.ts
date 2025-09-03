import { CodeXml, GraduationCap, Book } from "lucide-react"
import type { ComponentType } from "react"

export type AboutItem = {
  icon: ComponentType<{ size?: number; strokeWidth?: number }>
  section: string
  details: string
  width?: number
  height?: number
}

export const aboutMeData: AboutItem[] = [
  {
    icon: CodeXml,
    section: "Languages",
    details: "HTML, CSS, JavaScript, C, SQL, Python, TypeScript",
    width: 22,
    height: 20.83
  },
  {
    icon: GraduationCap,
    section: "Education",
    details: "B.Tech in Computer Science (2027).",
    width: 28,
    height: 24
  },
  {
    icon: Book,
    section: "Projects",
    details: "Built 5+ projects including AI-Integrated Projects.",
    width: 24,
    height: 21.8
  }
]