import { useState } from 'react'
import { skillsData } from '../data'
import Title from '../components/ui/Title'

function SkillsPage() {
  const data = skillsData
  const [selected, setSelected] = useState(data[0])

  return (
    <div className="space-y-8">
      <Title title="Habilidades Técnicas" />

      <section className="grid grid-cols-12 gap-x-10">
        {/* Sidebar con categorías */}
        <aside className="col-span-4 flex flex-col gap-6">
          <div className="space-y-6 text-justify leading-relaxed md:leading-loose">
            Siempre en aprendizaje continuo, adaptándome a las necesidades de cada proyecto.
          </div>

          <div className="flex flex-col gap-2">
            {data.map((item, index) => (
              <button
                key={index}
                onClick={() => setSelected(item)}
                className={`group relative rounded-md px-3 py-2 text-left font-medium tracking-wide transition-all duration-300 ease-out ${
                  selected.type === item.type ? 'text-white' : 'text-gray-400 hover:text-white'
                } `}
              >
                <span
                  className={`after:bg-primary relative uppercase after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:transition-all after:duration-300 after:content-[''] group-hover:after:w-full ${selected.type === item.type ? 'text-primary after:w-full' : ''} `}
                >
                  {item.type}
                </span>
              </button>
            ))}
          </div>
        </aside>

        {/* Contenido a la derecha */}
        <div className="col-span-8 space-y-8">
          <div className="flex justify-center">
            <div className="grid min-h-[250px] w-full max-w-3xl grid-cols-5 gap-8 rounded-xl border border-black bg-gray-900/40 p-6 md:min-h-[300px]">
              {selected.list.map((skill) => (
                <div
                  key={skill.name}
                  className="flex h-[90px] transform flex-col items-center justify-between rounded-xl bg-gray-800 p-3 transition hover:scale-105 hover:bg-gray-700"
                  title={skill.name}
                >
                  <div className="text-4xl">{skill.icon}</div>
                  <span className="text-xs font-medium text-gray-300">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default SkillsPage
