// React & libraries
import { Route, Routes } from 'react-router'

// Flowbite UI

// Internal helpers

// Components / pages
import HeaderSection from './components/HeaderSection'
import FooterSection from './components/FooterSection'
import NavSection from './components/NavSection'
import HomePage from './pages/HomePage'
import About from './pages/AboutPage'
import PortfolioPage from './pages/PortfolioPage'
import SkillsPage from './pages/SkillsPage'
import NotFound from './pages/NotFound'

// Assets

function App() {
  return (
    <>
      <HeaderSection />
      <main className="flex flex-1 flex-col justify-center px-4 lg:justify-center">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <FooterSection />
      <NavSection />
    </>
  )
}

export default App
