import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { BRAND_NAME } from '../config/config'
import { faThumbtack } from '@fortawesome/free-solid-svg-icons/faThumbtack'
import Title from '../components/ui/Title'

function AboutPage() {
  return (
    <section
      className="bg-dark mx-auto max-w-3xl items-center gap-x-10"
      aria-label="Sección sobre mí"
    >
      {/* Texto */}
      <div className="space-y-8 text-center lg:text-left">
        <Title title="Sobre mí" />

        <div className="space-y-6 text-justify leading-relaxed md:leading-loose">
          <p>
            <strong>Desarrolladora Full Stack JavaScript</strong>, actualmente estudiante de
            Ingeniería en Computación e Informática, con una formación interdisciplinaria:
            Bioquímica con grado de Magíster y título en Administración Financiera.
          </p>
          <p>
            En el área tecnológica, he cursado un Bootcamp de Full Stack JavaScript, una
            especialización en Frontend con Vue y un curso de Desarrollo iOS. También he trabajado
            con Python y actualmente desarrollo con React, tanto en una dApp como en una plataforma
            de análisis científico. Lo que más disfruto es resolver problemas a través del
            desarrollo, combinando creatividad, análisis y disciplina. Esta diversidad de
            experiencias me permite abordar proyectos desde múltiples perspectivas y aportar un
            valor agregado real.
          </p>
        </div>
      </div>
    </section>
  )
}

export default AboutPage
