import React from "react";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Works from "./components/project/projects";
import Contact from "./components/Contact/Contact";
import Navbar from "./components/Navbar/Navbar";
import './components/Navbar/Navbar.scss'
import './components/About/About.scss'
import './components/project/project.scss'
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="App-header">
        <Header />
      </div>

      <div className="About">
        <About />
      </div>
      <div className="Work">
        <Works />
      </div>
      <div className="contact">
        <Contact />
      </div>
    </div>
  );
}

export default App;
