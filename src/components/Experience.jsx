import React from "react";

export const Experience = () => {
  return (
    <>
      <section className="experience background">
        <div className="container">
          <div className="experience-award">
            <div className="award">
              <i className="fa-solid fa-award"></i>
            </div>
            <div className="award-subject">IT</div>
            <div className="award-status">Graduataion</div>
          </div>
          <div className="v-line"></div>
          <div className="experience-award">
            <div className="award">
              <i className="fa-solid fa-award"></i>
            </div>
            <div className="award-subject">2+ Projects</div>
            <div className="award-status">Completed</div>
          </div>
          <div className="v-line"></div>
          <div className="experience-award">
            <div className="award">
              <i className="fa-solid fa-award"></i>
            </div>
            <div className="award-subject">1+ year</div>
            <div className="award-status">Experience</div>
          </div>
        </div>
        <div className="clickTop">
          <a href="#top">^</a>
        </div>
      </section>
    </>
  );
};
