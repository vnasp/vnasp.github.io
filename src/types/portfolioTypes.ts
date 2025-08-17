import { ReactNode } from 'react'

type SkillItem = {
  name: string
  icon: ReactNode
}

export type SkillCategory = {
  type: 'Frontend' | 'Backend' | 'CMS' | 'Programas'
  list: SkillItem[]
}

export type Project = {
  title: string
  about: string
  tags: string[]
  demo?: string
  github?: string
  image?: string
}
