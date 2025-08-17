import { useEffect } from 'react'
import { skillsData } from '../data'

function Skills() {
  const data = skillsData

  useEffect(() => {
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css'
    document.head.appendChild(link)

    return () => {
      document.head.removeChild(link)
    }
  }, [])

  return (
    <main className="main">
      <section className="skills__photo w-2/5">
        <img src="./assets/img/skills.webp" alt="Full Stack Developer Chile" />
      </section>
      <section className="skills">
        {data.map((item, index) => (
          <div key={index} className="mx-4">
            <label className="skills__type--name">{item.type}</label>
            <div className="skills__type--list">
              {item.list.map((skill) => (
                <div key={skill.name} className="skills__skill">
                  <p className="skills__skill--icon">{skill.icon}</p>
                  <label className="skills__skill--name">{skill.name}</label>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
      <section></section>
    </main>
  )
}

export default Skills
