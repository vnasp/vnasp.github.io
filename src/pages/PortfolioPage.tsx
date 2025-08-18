import { useMemo, useState } from 'react'
import Projects from '../components/Projects'
import { projectsData, skillsData } from '../data'
import Tags from '../components/Tags'
import type { Project } from '../types/portfolioTypes'
import Title from '../components/ui/Title'

type TagCounts = Record<string, number>

function PortfolioPage() {
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null)

  const countTags = (projects: ReadonlyArray<Project>): TagCounts => {
    const tagCount: TagCounts = {}
    projects.forEach((project) => {
      project.tags.forEach((tag) => {
        tagCount[tag] = (tagCount[tag] || 0) + 1
      })
    })
    return tagCount
  }

  const tagsUsageCount = useMemo(() => countTags(projectsData), [])

  const handleSkillSelect = (skill: string | null) => {
    setSelectedSkill(skill)
  }

  const filteredProjects: ReadonlyArray<Project> = useMemo(
    () =>
      selectedSkill
        ? projectsData.filter((project) => project.tags.includes(selectedSkill))
        : projectsData,
    [selectedSkill]
  )

  return (
    <>
      <div className="space-y-8">
        <Title title="Portafolio" />

        <section className="grid grid-cols-12 gap-x-10">
          <Tags
            data={skillsData}
            tagCounts={tagsUsageCount}
            onSkillSelect={handleSkillSelect}
            selectedSkill={selectedSkill}
          />

          <Projects data={filteredProjects} />
        </section>
      </div>
    </>
  )
}

export default PortfolioPage
