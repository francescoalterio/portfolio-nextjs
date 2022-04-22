import React from "react";
import Image from "next/image";

const Skill = ({ src, href, alt }) => {
  return (
    <>
      <a href={href} className="tecnologia" target="_blank">
        <div>
          <img
            className="img-skillset"
            src={src}
            alt={alt}
            width={120}
            height={120}
          />
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

        .tecnologia:hover {
          transform: scale(1.2);
        }
      `}</style>
    </>
  );
};

export default Skill;
