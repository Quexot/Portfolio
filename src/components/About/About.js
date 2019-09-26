import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import data from "../../dataEN";

class About extends Component {
  state = {};
  render() {
    return (
      <div className="About main">
        <h2 className="main-header">
          <Fade bottom cascade>
            {data.aboutTitle}
          </Fade>
        </h2>
        <div className="main-body">
          <div className="about-content">
            <Fade bottom>
              <p>{data.abouttext}</p>
            </Fade>
          </div>
          {data.ShowAboutImage ? (
            <img src={data.aboutImage} alt="about iamge"></img>
          ) : null}
        </div>
      </div>
    );
  }
}

export default About;
