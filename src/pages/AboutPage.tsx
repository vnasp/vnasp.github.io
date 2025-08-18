import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { BRAND_NAME } from '../config/config'
import { faThumbtack } from '@fortawesome/free-solid-svg-icons/faThumbtack'
import Title from '../components/ui/Title'

function AboutPage() {
  return (
    <section
      className="grid grid-cols-1 items-start gap-x-10 lg:grid-cols-12"
      aria-label="Sección sobre mí"
    >
      {/* Imagen con pin */}
      <div className="relative mx-auto mb-8 inline-block rotate-[-3deg] lg:col-span-4 lg:mb-0">
        <FontAwesomeIcon
          icon={faThumbtack}
          className="absolute -top-6 left-4 rotate-[-20deg] text-4xl text-gray-300 drop-shadow-md"
          aria-hidden="true"
        />
        <img
          src="./src/assets/img/about.webp"
          alt={`Foto de ${BRAND_NAME}`}
          className="aspect-square h-[360px] rounded-xl object-cover shadow-lg"
        />
      </div>

      {/* Texto */}
      <div className="space-y-8 lg:col-span-8">
        <Title title="Sobre mí" />

        <div className="space-y-6 text-justify leading-relaxed md:leading-loose">
          <p>
            <strong>Desarrolladora Full Stack JavaScript</strong>, actualmente estudiante de
            Ingeniería en Computación e Informática, con una formación interdisciplinaria:
            Bioquímica con grado de Magíster y título en Administración de Empresas.
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
