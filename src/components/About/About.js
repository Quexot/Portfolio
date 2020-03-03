import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import data from "../../dataEN";



class About extends Component {
  
  render() {
    return (
      <div className="About main">
        <h2 className="About main-header">
          <Fade bottom cascade>
            {data.aboutTitle}
          </Fade>
        </h2>
        <div className="About main-body">
          <div className="about-content">
            <Fade bottom>
              <p>{data.abouttext}</p>
            </Fade>
          </div>
          {data.ShowAboutImage ? (
            <img src={data.aboutImage} alt="aboutimage"></img>
          ) : null}
        </div>
      </div>
    );
  }
}

export default About;
