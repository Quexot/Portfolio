import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import data from "../../dataEN";
import Scroll from 'react-scroll';

var Events = Scroll.Events;
var scrollSpy = Scroll.scrollSpy;

class Navbar extends Component {
  state = {};

  scrollToTop = () => {
    scroll.scrollToTop();
  };

  componentDidMount() {
    Events.scrollEvent.register('begin', function(){
      console.log('begin', arguments);
    })

    Events.scrollEvent.register('end', function(){
      console.log('end', arguments);
    })
    
    scrollSpy.update();
  }
  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }
  
  render() {
    return (
      <nav>
        <ul>
          <li>
            <Link
              className="link"
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={this.scrollToTop}
            >
              {data.home}
            </Link>
          </li>
          <li>
            <Link
              className="link"
              activeClass="active"
              to="About"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              {data.about}
            </Link>
          </li>
          <li>
            <Link
              className="link"
              activeClass="active"
              to="Work"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              {data.work}
            </Link>
          </li>
          <li>
            <Link
              className="link"
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              {data.contact}
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
