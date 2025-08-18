function FooterSection() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full border-t border-gray-700 py-6 text-center text-sm text-gray-400">
      <p>© {currentYear} Valentina Muñoz. Todos los derechos reservados.</p>
      <p className="mt-1 text-xs text-gray-500">Construido con React, TypeScript & TailwindCSS</p>
    </footer>
  )
}

export default FooterSection
