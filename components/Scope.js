import React from "react";

const Scope = () => {
  return (
    <>
      <section className="capacidad">
        <div className="box-frontend">
          <h4 className="title-capacidad">Frontend Developer</h4>
        </div>
        <div className="box-frontend">
          <h4 className="title-capacidad">Mobile Developer</h4>
        </div>
      </section>
      <style jsx>{`
        .capacidad {
          background-color: #6e52f5;
          width: 100%;
          height: 200px;
          display: flex;
          flex-flow: row nowrap;
          justify-content: center;
        }

        .box-frontend {
          width: 200px;
          height: 100%;
          margin: 0 10px 0 10px;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .box-backend {
          width: 200px;
          height: 100%;
          margin: 0 20px 0 20px;
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 0 40px 0 40px;
        }

        .title-capacidad {
          display: flex;
          align-items: center;
          text-align: center;
          color: #f0f0f0;
          border: 7px solid #f0f0f0;
          border-radius: 150px;
          width: 150px;
          height: 150px;
          font-size: 20px;
          font-weight: 700;
          transition: 0.5s;
          flex: 0 0 auto;
          cursor: default;
        }

        .title-capacidad:hover {
          background-color: #f0f0f0;
          color: #2c2c2c;
          border: 12px solid #9f8fff;
        }
      `}</style>
    </>
  );
};

export default Scope;
