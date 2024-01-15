import { useState, useEffect } from "react"
import Navigation from "../components/Navigation.jsx"
import Cover from "../components/Cover.jsx"


const Header = () => {
  let [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    if (darkMode) {
      document.getElementById("header").classList.add('bg-zinc-800','text-white')
      document.getElementById("portfolio").classList.add('bg-zinc-800')
      document.getElementById("portfolio").classList.remove('text-white')
      document.getElementById("about").classList.remove('text-white')
      document.getElementById("badges").classList.remove('invert','brightness-50','contrast-200')

    }
    else {
      document.getElementById("header").classList.remove('bg-zinc-800','text-white')
      document.getElementById("portfolio").classList.remove('bg-zinc-800')
      document.getElementById("portfolio").classList.add('text-white')
      document.getElementById("about").classList.add('text-white')
      document.getElementById("badges").classList.add('invert','brightness-50','contrast-200')

    }
  }, [darkMode])
  return (
    <div id="header" className="flex flex-col">
      <div className="flex justify-between items-center mt-10 mx-10">
        <div className="logo logo-animation">
          <a href="#">
            <h1 className="text-4xl md:text-5xl">Valentina Muñoz</h1>
            <h2 className="text-xs md:text-base">Frontend Developer</h2>
          </a>
        </div>
        <div className="right-2">
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" onClick={() => { setDarkMode(!darkMode) }} className="sr-only peer" />
            <div className="w-11 h-6 bg-sky-200 border-2 border-white rounded-full peer-focus:ring-4  
          after:bg-yellow-400 after:border-orange-500 after:border after:rounded-full after:h-5 after:w-5 after:transition-all
          peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full 
          after:content-[''] after:absolute after:top-[2px] after:start-[2px] dark:border-white dark:after:bg-slate-200 dark:after:border-slate-700 peer-checked:bg-sky-900"></div>
          </label>
        </div>       
      </div>
      <Cover />
      <Navigation />
    </div>
  )
}

export default Header