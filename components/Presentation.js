import React from "react";
import BgPresentation from "./BgPresentation";

const Presentation = () => {
  return (
    <>
      <BgPresentation>
        <div className="marco-yo">
          <img
            src="/images/yo-blanco.jpg"
            style={{ borderRadius: "9999px" }}
            height={225}
            width={225}
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
          border-radius: 9999px;
        }

        .marco-yo:hover {
          transform: scale(1.1);
        }
      `}</style>
    </>
  );
};

export default Presentation;
