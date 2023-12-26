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
      setProjects(data)
    }
    useEffect(() => {
      getProjects()
    }, [])
  }
  catch (Error) {
    alert(JSON.stringify(Error))
  }

  return (
    <div id="portfolio" className="h-auto p-4">
      <h3 className="">Mi Portafolio</h3>
      <div className="flex flex-col gap-3">
        {projects.map((project) => (
          <div id="projects" key={project.id}>
            <span>{project.name}</span>
            <div>
              {project.skills.map((skill, index) => (
                <span className="bg-indigo-400 text-white rounded-lg py-1 px-3 me-1" key={index}> {skill}</span>
              ))}
            </div></div>
        ))}
      </div>
    </div>
  )
}

export default Portfolio