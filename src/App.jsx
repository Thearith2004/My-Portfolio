
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import SkillsSection from "./pages/SkillsSection"
import ProjectsSection from "./pages/ProjectsSection"
import ContactSection from "./pages/ContactSection"
import AboutSection from "./pages/AboutSection"
import Navbar from "../components/Navbar"

function App() {

  return (
    <div>
      <Navbar/>
      <div>
        <BrowserRouter>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path="/skill" element={<SkillsSection/>}/>
          <Route path="/project" element={<ProjectsSection/>}/>
          <Route path="/contact" element={<ContactSection/>}/>
          <Route path="/about" element={<AboutSection/>}/>
        </Routes>
      </BrowserRouter>
      </div>
    </div>
  )
}

export default App
