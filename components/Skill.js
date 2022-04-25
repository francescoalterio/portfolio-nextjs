import React, { useState } from "react";

const Skill = ({ src, href, alt, technology }) => {
  const [hover, setHover] = useState(false);

  return (
    <>
      <a href={href} className="tecnologia" target="_blank">
        <div
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          <img
            className="img-skillset"
            src={src}
            alt={alt}
            width={120}
            height={120}
          />
          <span>{technology}</span>
        </div>
      </a>
      <style jsx>{`
        .tecnologia {
          width: 120px;
          height: 120px;
          margin: 25px 25px;
          transition: 0.2s;
          text-decoration: none;
          color: white;
          display: flex;
          flex-flow: column;
          align-items: center;
          background-color: #383838;
          border-radius: 40px;
        }

        .img-skillset {
          border-radius: 40px;
          box-shadow: 1px 0.5px 20px rgb(61, 61, 61);
        }

        div {
          position: relative;
        }

        /**/

        span {
          display: ${hover ? "inline-block" : "none"};
          position: absolute;
          width: 100%;
          text-align: center;
          top: -40px;
          left: 0;
          background-color: #383838;
          border-radius: 50px;
          transition: 2s;
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

        .tecnologia:hover {
          transform: scale(1.2);
        }
      `}</style>
    </>
  );
};

export default Skill;
