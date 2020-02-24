import React, { Component } from "react";

class Project extends Component {
  state = {};
  render() {
    return (
        <div className="project">
          <a className="image" href={this.props.url}>
            <img src={this.props.imageSrc} alt={this.props.title}></img>
          </a>
          <p>{this.props.title}</p>
          <span>{this.props.service}</span>
        </div>
    );
  }
}

export default Project;
