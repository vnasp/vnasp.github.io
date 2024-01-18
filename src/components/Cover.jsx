
const Cover = () => {
  return (
    <>
      <div className="flex flex-col border-b-8 sides justify-center md:justify-evenly items-center md:flex-row md:px-3">
        <div className="mt-6 md:mt-0">
          <h3 className="text-3xl md:text-6xl text-center">Transformo ideas en <br />
          <span className="text-4xl md:text-6xl">&#123;</span>
          <span className="cover-text text-4xl md:text-6xl"> realidad digital </span>
          <span className="text-4xl md:text-6xl">&#125;</span>
        </h3></div>
        <div id="cover" className="h-44 w-screen md:w-2/4 md:h-64 mt-4 "></div>
      </div>
    </>
  )
}

export default Cover