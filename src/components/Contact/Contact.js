import React, { Component } from "react";
import data from "../../dataEN";

class Contact extends Component {
  state = {};
  render() {
    return (
      <div>
        <h2>{data.contacts}</h2>

        <div className="contact-content">
          <ul>
            {data.social.map((link, index) => (
              <li key={index}>
                <a target="_blank" rel="noopener noreferrer" href={link.url}>
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <span className="footer">
          Made by Quexot
        </span>
      </div>
    );
  }
}

export default Contact;
