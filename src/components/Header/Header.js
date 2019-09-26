import React, { Component } from "react";
import { Fragment } from "react";
import Fade from "react-reveal/Fade";
import data from "../../dataEN";

class Header extends Component {
  state = {};

  render() {
    return (
      <Fragment>
        <h1 className="heading-background">Web-Dev</h1>
        <header className='header'>
          <h1>
            <Fade bottom cascade>
              {data.name}
            </Fade>
          </h1>
        </header>
        <Fade bottom>
          <div className="header-title">
            <p>{data.headerTagline[0]}</p>
            <button>
              <a href={`mailto:${data.contactEmail}`} rel="noopener noreferrer">
                Contact
              </a>
            </button>
          </div>
        </Fade>
      </Fragment>
    );
  }
}

export default Header;
