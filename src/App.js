import React, { useEffect } from "react";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Works from "./components/project/Work";
import Contact from "./components/Contact/Contact";
import Navbar from "./components/Navbar/Navbar";
import "./components/Navbar/Navbar.scss";
import "./components/Header/Header.scss";
import "./components/About/About.scss";
import "./components/project/project.scss";
import "./components/Contact/Contact.scss";
import "./App.css";
import Menu from "./images/layout.png";

function App() {
  const [menuActive, setState] = React.useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
    }, 4000);
  })
  return (
    <div
      className={`App rotate-left ${menuActive ? "perspective" : ""} ${
        menuActive ? "rotate-left--animate" : ""
      }`}
    >
      <div className={`menu`}>
        <button onClick={() => setState(!menuActive)} className="btn-menu">
          <img src={Menu} height="18px" width="16px" alt="Hamburger-ico" />
        </button>

        <div className="App-header">
          <Header />
        </div>
        {/* 
        <div className="About">
          <About />
        </div>
        <div className="Work">
          <Works />
        </div>
        <div className="contact">
          <Contact />
        </div> */}
      </div>
      <Navbar classes={`${menuActive ? "isActive" : ""}`} />
    </div>
  );
}

export default App;
