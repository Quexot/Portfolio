import React from "react";
import data from "../../dataEN";

export const Contact = () => {
    return (
      <div className="contact">
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


