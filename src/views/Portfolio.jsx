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
          <div id="projects" key={project.id} className="bg-violet-900 md:flex">
            <div className="border-b-8 sides text-center md:w-2/4"><img alt={project.name} src={project.img} /></div>
            <div className="md:w-2/4">
              <div className="p-2 uppercase text-center"><h3>{project.type} - {project.name}</h3></div>
              <div className="p-4 font-light tracking-wider text-justify">{project.description} </div>
              <div className="p-4 font-light tracking-wider text-justify">Habilidades: {project.skills.map((skill, index) => (
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