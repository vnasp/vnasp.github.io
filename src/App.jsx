import { Route, Routes } from "react-router-dom"
import Header from "./views/Header.jsx"
import About from "./views/About.jsx"
import Portfolio from "./views/Portfolio.jsx"
import Footer from "./views/Footer.jsx"
import NotFound from "./views/NotFound.jsx"
import Home from "./views/Home.jsx"
import Skills from "./views/Skills.jsx"
import Navigation from "./components/Navigation.jsx";


function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
          <Route
          path="/sobre-mi"
          element={<About />}
        />
          <Route
          path="/portafolio"
          element={<Portfolio />}
        />
          <Route
          path="/habilidades"
          element={<Skills />}
        />
        <Route
          path="*"
          element={<NotFound />}
        />
      </Routes>
      <Footer />
      <Navigation />
    </>
  )
}

export default App
