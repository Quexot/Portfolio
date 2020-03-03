import React, { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import MenuIco from "./images/layout.png";
import Navbar from "./components/Navbar/Navbar";
import { Contact } from "./components/Contact/Contact";
import "./components/Navbar/Navbar.scss";
import "./components/Header/Header.scss";
import "./components/About/About.scss";
import "./components/project/project.scss";
import "./components/Contact/Contact.scss";
import "./App.scss";
import Projects from "./components/project/Work";

function MenuState (prop) {
  const [menuActive, setMenu] = useState(false);
  setMenu(prop);

  return menuActive;  
}
// function HOC(WrappedComponent) {
//   return class extends React.Component {
//     componentWillReceiveProps(nextProps){}
//       render() {
//         return <WrappedComponent {...this.props} />;
//       }
//     }
//   }



const App = () => {
  const isActive  = MenuState()
  return (
    <div
      className={`App container rotate-left ${
        isActive ? "perspective" : ""
      } ${isActive ? "rotate-left--animate" : ""}`}
    >
      <Header>
        <div className="header">
          <button className="btn-menu" onClick={() => MenuState(!isActive)}>
            <img src={MenuIco} alt="menuico"></img>
          </button>
        </div>
        <About />
        <Projects />
        <Contact />
      </Header>
      <Navbar classes={`menu ${isActive ? "isActive" : ""}`} />
    </div>
  );
};

export default App;
