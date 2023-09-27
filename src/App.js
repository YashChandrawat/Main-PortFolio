import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import About from "./Components/About/About";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Contact from "./Components/Contact/Contact";
// import Education from "./Components/Education/Education";
// import Skills from "./Components/Skills/Skills";
import Skills from "./Components/Skills/Skills";
import Project from "./Components/Projects/Project";

function App() {
  return (
    <>
      <Router>
          <Navbar/>
          <Routes>
              <Route path="/" element={<Home/>}></Route></Routes>
              {/* <Route path="/about" element={<About/>}></Route> */}
          

          <About/>
          <Project/>
          <Skills/>
          <Contact/>
          <Footer/>
      </Router>
    </>
  );
}

export default App;
