import React from "react";

export const Footer = () => {
  return (
    <>
      <footer className="footer background-footer">
        <div className="container">
          <div>
            <div className="footer-link">Links</div>
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#skill">Skills</a>
              </li>
              <li>
                <a href="#project">Projects</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
          <div>
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
          </div>
        </div>
      </footer>
    </>
  );
};
