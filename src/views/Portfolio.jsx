import { useState, useEffect } from "react"

const Portfolio = () => {
  const API_URL = "/projects.json"
  const [projects, setProjects] = useState([])

  try {
    const getProjects = async () => {
      const response = await fetch(API_URL)
      if (response.status != 200) {
        throw new Error
      }
      const data = await response.json()
      const dataFilter = data.filter((project) => project.display == true)
      const dataOrderBy = dataFilter.sort((x, y) => y.id - x.id)
      setProjects(dataOrderBy)
    }
    useEffect(() => {
      getProjects()
    }, [])
  }
  catch (Error) {
    alert(JSON.stringify(Error))
  }

  return (
    <div id="portfolio" className="h-auto p-8 text-white">
      <div className="flex flex-col gap-3">
        {projects.map((project) => (
          <div id="projects" key={project.id} className="bg-indigo-400 md:flex">
            <div className="border-b-8 sides text-center md:w-2/4"><img alta={project.name} src={project.img} /></div>
            <div className="md:w-2/4">
              <div className="p-2 uppercase text-center">{project.type} - {project.name}</div>
              <div className="pb-2 px-2 font-light tracking-wider text-justify">{project.description}. {project.skills.map((skill, index) => (
                <span key={index} className="me-1">{skill}</span>
              ))}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Portfolio