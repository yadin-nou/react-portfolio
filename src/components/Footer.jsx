import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <>
      <footer className="footer background-footer">
        <div className="container">
          <div>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/skills">Skills</Link>
              </li>
              <li>
                <Link to="/projects">Projects</Link>
              </li>
              <li>
                <Link to="/aboutme">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          {/* <div>
            <div className="footer-link">Soical</div>
            <ul>
              <li>
                <a
                  href="https://www.linkedin.com/in/yadin-nou-0040971b"
                  target="_blank"
                >
                  LinkedIN
                </a>
              </li>
              <li>
                <a href="https://github.com/yadin-nou" target="_blank">
                  GitHub
                </a>
              </li>
              <li>
                <a href="#">Youtube</a>
              </li>
              <li>
                <a href="#">Facebook</a>
              </li>
            </ul>
          </div> */}
        </div>
      </footer>
    </>
  );
};
