import React, { useState } from "react";

function ButtonProjectFilter({ icon, name, setLanguage }) {
  const [hover, setHover] = useState(false);
  const namePascalCase = name
    .split("")
    .map((x, i) => (i === 0 ? x.toUpperCase() : x.toLowerCase()))
    .join("");
  return (
    <>
      <button
        onClick={() => setLanguage(name)}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        {icon}
        <span>{namePascalCase}</span>
      </button>

      <style jsx>{`
        button {
          background: none;
          border: none;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
          transition: 0.1s;
          color: #292929;
        }

        button:hover {
          transform: scale(1.1);
        }

        span {
          display: ${hover ? "inline-block" : "none"};
          position: absolute;
          padding: 0px 10px 0 10px;
          text-align: center;
          top: -25px;
          left: 30;
          background-color: #383838;
          border-radius: 5px;
          transition: 2s;
          font-size: 10px;
          color: #ffffff;
        }

        span::after {
          border: 5px solid transparent;
          border-top-color: #383838;
          content: "";
          left: 50%;
          margin-left: -5px;
          position: absolute;
          top: 100%;
        }
      `}</style>
    </>
  );
}

export default ButtonProjectFilter;
