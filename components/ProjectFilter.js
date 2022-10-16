import React from "react";

function ProjectFilter({ children }) {
  return (
    <>
      <div>{children}</div>
      <style jsx>{`
        div {
          padding: 10px 30px;
          background-color: #b0b0b0;
          display: flex;
          gap: 30px;
          border-radius: 100px;
        }

        @media (max-width: 420px) {
          div {
            gap: 20px;
          }
        }
      `}</style>
    </>
  );
}

export default ProjectFilter;
