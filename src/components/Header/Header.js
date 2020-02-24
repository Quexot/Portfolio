import React, { Component } from "react";
import { Fragment } from "react";
import data from "../../dataEN";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      offset: 0,
      x: 0,
      y: 0
    };
  }
  componentDidMount() {
    window.addEventListener("scroll", this.parallaxShift);
    window.addEventListener('onPointerMove', this.parallaxMouseMove);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.parallaxShift);
    window.removeEventListener('onPointerMove', this.parallaxMouseMove);
  }

  parallaxShift = () => {
    this.setState({
      offset: window.pageYOffset
    });
  };
  parallaxMouseMove = (e) => {
    this.setState({
      x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY,
    });
  }
  render() {
    const {x,y} = this.state;
    return (
      <Fragment>
        <div
          className="heading-background"
          style={{ 
            backgroundPositionY: this.state.y/-50,
            backgroundPositionX: this.state.x/-50,
          }}
          onMouseMove={this.parallaxMouseMove}
        >
        
         
        </div>
        {/* <header className="header">
          <h1>
            <Fade bottom cascade>
              {data.name}
            </Fade>
          </h1>
        </header> */}

        <div className="header-title" style={{ 
          bottom: this.state.offset / 2 
          }}>
          <p className="header-words"
    
          >{data.headerTagline[0]}</p>
          <button>Contact</button>
        </div>
      </Fragment>
    );
  }
}

export default Header;
