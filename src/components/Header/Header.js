import React, { useState, useEffect } from "react";
import data from "../../dataEN";

const useMousePosition = () => {
  const [coords, setCoords] = useState({
    offset: 0,
    x: 0,
    y: 0
  });
  useEffect(() => {
    const setMousePosition = e => {
      setCoords({
        x: e.clientX,
        y: e.clientY
      });
    };

    window.addEventListener("mousemove", setMousePosition);
    return () => {
      window.removeEventListener("mousemove", setMousePosition);
    };
  }, []);
  return coords;
};

export const Header = props => {
  const [showContacts, setState] = useState(false);
  const coords = useMousePosition();
  const x = coords.x;
  const y = coords.y;
  return (
    <>
      <div className="App-header">
        <div className="nav-return"></div>
        <div className='App-main'>
        <div
          className="heading-background"
          style={{
            backgroundPositionY: y / -50,
            backgroundPositionX: x / -50
          }}
        ></div>
          {props.children}
          <div className="Wrapper">
            <div
              className={`header-title ${
                showContacts ? "contactsVisible" : ""
              }`}
            >
              <section className="header-main">
                <h2 className="header-words">{data.headerTagline[0]}</h2>
                <button onClick={() => setState(!showContacts)}>
                  Get in touch
                </button>
              </section>
              <section className={`contacts`}>Vk Telegram HH</section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
