import { useNavigate } from 'react-router-dom'
import { BRAND_NAME } from '../config/config'
import { Button } from 'flowbite-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbtack } from '@fortawesome/free-solid-svg-icons/faThumbtack'
import Title from '../components/ui/Title'

function HomePage() {
  const navigate = useNavigate()

  return (
    <section
      className="bg-dark grid grid-cols-1 items-center gap-x-10 lg:grid-cols-12"
      aria-label="Sección principal de bienvenida"
    >
      {/* Imagen con pin */}
      <div className="relative mx-auto mb-8 inline-block rotate-[-3deg] lg:col-span-4 lg:mb-0">
        <FontAwesomeIcon
          icon={faThumbtack}
          className="absolute -top-6 left-4 rotate-[-20deg] text-4xl text-gray-300 drop-shadow-md"
          aria-hidden="true"
        />
        <img
          src="/assets/img/home.webp"
          alt={`Retrato de ${BRAND_NAME}`}
          className="aspect-square h-[360px] rounded-xl object-cover shadow-lg"
        />
      </div>

      {/* Texto */}
      <div className="space-y-8 text-center lg:col-span-8 lg:text-left">
        <Title title="Orientada a objetivos" />

        <p className="text-justify leading-relaxed text-gray-200 md:leading-loose">
          Convierto requerimientos en código limpio y funcional, siempre enfocada en cumplir
          objetivos y aportar valor real. Con experiencia en React, Python, Vue e iOS, combino mi
          formación en ciencia y negocios con la programación para resolver problemas desde
          múltiples perspectivas.
        </p>

        <div className="text-center">
          <Button
            color="default"
            size="lg"
            onClick={() => navigate('/portfolio')}
            aria-label="Explorar portafolio"
            className="bg-primary inline-block rounded-md border-0 px-8 py-3 text-black transition-transform hover:scale-110 hover:bg-[#26f171]"
          >
            Explorar Portafolio
          </Button>
        </div>
      </div>
    </section>
  )
}

export default HomePage
