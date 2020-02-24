import React, { Component } from "react";
import Project from "./project";
import data from "../../dataEN";

class Works extends Component {
  state = {};
  render() {
    return (
      <div className='projects'>
        <h1 className="heading">
            Projects
        </h1>
        <div className="projects-content">
          {data.projects.map(project => (
            <Project
              key={project.id}
              title={project.title}
              service={project.service}
              imageSrc={project.imageSrc}
              url={project.url}
            ></Project>
          ))}
        </div>
      </div>
    );
  }
}

export default Works;
