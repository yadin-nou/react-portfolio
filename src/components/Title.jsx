import React from "react";

export const Title = ({ title, col }) => {
  return (
    <>
      <div className="title" style={{ color: col }}>
        {title}
      </div>
    </>
  );
};
