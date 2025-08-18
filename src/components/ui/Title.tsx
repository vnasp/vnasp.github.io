interface Props {
  title: string
}

function Title({ title }: Props) {
  return (
    <h2 className="flex items-center justify-center gap-4 text-center text-2xl font-bold uppercase md:text-5xl">
      <span aria-hidden="true" className="text-primary text-3xl md:text-4xl">
        {'{'}
      </span>
      <span className="to-primary bg-gradient-to-r from-[#26f171] bg-clip-text px-2 text-transparent">
        {title}
      </span>
      <span aria-hidden="true" className="text-primary text-3xl md:text-4xl">
        {'}'}
      </span>
    </h2>
  )
}

export default Title
