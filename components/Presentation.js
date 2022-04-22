import React from "react";
import BgPresentation from "./BgPresentation";

const Presentation = () => {
  return (
    <>
      <BgPresentation>
        <div className="marco-yo">
          <img
            className="yo"
            src="../images/yo-blanco.jpg"
            alt="francesco-alterio-caricatura"
          />
        </div>
      </BgPresentation>
      <style jsx>{`
        .marco-yo {
          width: 300px;
          height: 300px;
          border-radius: 200px;
          background-color: #6e52f5;
          display: flex;
          justify-content: center;
          align-items: center;
          transition: 0.4s;
          box-shadow: 0 0 10px #6e52f5;
        }

        .yo {
          width: 225px;
          height: 225px;
          border-radius: 200px;
        }

        .marco-yo:hover {
          transform: scale(1.1);
        }
      `}</style>
    </>
  );
};

export default Presentation;
