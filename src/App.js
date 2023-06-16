import './App.css';
import Home from './Home/Home';
import About from './About/About';
import Contact from './Contact/Contact';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Skills from './Skills';
import Info from './Info';
import Projects from './Projects/Projects';
import After from './After';
function App() {


  return (
    <BrowserRouter>
      <switch>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/info" element={<Info/>} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/contact/after" element={<After/>} />
          <Route path="/About/projects" element={<Projects/>} />    
        </Routes>
      </switch>
    </BrowserRouter>
  );
}

export default App;
