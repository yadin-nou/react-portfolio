import React from "react";

export const Card = ({ imgPath, gitLink, proLink, title, description }) => {
  return (
    <>
      <div className="card">
        <img src={imgPath} width="100%" alt="calculator" />
        <div className="git-link">
          <span>
            <a href={gitLink} target="_blank">
              <i
                className="fa-brands fa-github"
                style={{
                  color: "rgb(36,85,159)",
                  fontSize: "1rem !important",
                }}
              ></i>
            </a>
          </span>
          <span>
            <a href={proLink} target="_blank">
              <i
                className="fa-solid fa-link"
                style={{
                  color: "rgb(36,85,159)",
                  fontSize: "1rem !important",
                }}
              ></i>
            </a>
          </span>
        </div>
        <div className="pro-title">
          <h4>{title}</h4>
          <div> {description}</div>
        </div>
      </div>
    </>
  );
};
