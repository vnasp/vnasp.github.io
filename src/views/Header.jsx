import { useState, useEffect } from "react"
import Navigation from "../components/Navigation.jsx"
import Cover from "../components/Cover.jsx"


const Header = () => {
  let [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    if (darkMode) {
      document.getElementById("header").classList.add('dark')
      document.getElementById("portfolio").classList.add('dark')

    }
    else {
      document.getElementById("header").classList.remove('dark')
      document.getElementById("portfolio").classList.remove('dark')

    }
  }, [darkMode])
  return (
    <div id="header" className="flex flex-col">
      <div className="flex items-center mt-10">
        <div className="absolute left-2 logo logo-animation ps-3">
          <a href="">
            <h1>Valentina Muñoz</h1>
            <h2>Frontend Developer</h2>
          </a>
        </div>
        <div className="absolute right-2">
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