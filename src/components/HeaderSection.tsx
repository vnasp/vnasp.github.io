import HeaderLinks from './HeaderLinks'

function HeaderSection() {
  return (
    <header
      role="banner"
      aria-label="Encabezado principal con nombre y enlaces de contacto"
      className="flex w-full flex-row items-center justify-between px-4 py-6 lg:py-8"
    >
      <article className="header__logo flex flex-col space-y-1">
        <h1 className="text-primary text-2xl font-semibold tracking-tight uppercase">
          Valentina Muñoz
        </h1>
        <p
          className="tracking-extra-widest header__subtitle--animation inline-block overflow-hidden text-center text-xs whitespace-nowrap text-white uppercase"
          role="doc-subtitle"
        >
          Full Stack Developer
        </p>
      </article>

      <nav aria-label="Enlaces de contacto">
        <HeaderLinks />
      </nav>
    </header>
  )
}

export default HeaderSection
