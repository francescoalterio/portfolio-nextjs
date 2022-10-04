import React from "react";

function CardTech({ content }) {
  return (
    <>
      <div>{content}</div>
      <style jsx>{`
        div {
          padding: 5px 10px;
          background-color: #b3b3b3;
          color: #292929;
          font-weight: bold;
          border-radius: 10px;
          font-size: 12px;
        }
      `}</style>
    </>
  );
}

export default CardTech;
