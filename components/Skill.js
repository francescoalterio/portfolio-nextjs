import React, { useState } from "react";

const Skill = ({ src, href, alt, technology, size, needPadding }) => {
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
            width={size}
            height={size}
          />
          <span>{technology}</span>
        </div>
      </a>
      <style jsx>{`
        .tecnologia {
          width: ${size}px;
          height: ${size}px;
          margin: ${size < 120 ? "10px" : "25px 25px"};
          transition: 0.2s;
          text-decoration: none;
          color: white;
          display: flex;
          flex-flow: column;
          align-items: center;
          background-color: #383838;
          border-radius: 20px;
        }

        .img-skillset {
          border-radius: 20px;
          box-shadow: 1px 0.5px 20px rgb(61, 61, 61);
          padding: ${needPadding ? "10px" : undefined};
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
          border-radius: 5px;
          transition: 2s;
          font-size: ${size < 120 ? 10 : 15}px;
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
