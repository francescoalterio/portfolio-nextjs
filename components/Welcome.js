import React from "react";
import Link from "next/link";

const Welcome = () => {
  return (
    <>
      <section className="capacidad">
        <h3>Hi, I'm Francesco Alterio, Fullstack Developer, Welcome to my portfolio!</h3>
        
      </section>
      <style jsx>{`
        section {
          background-color: #6e52f5;
          width: 100%;
          height: 150px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-evenly;
        }

        h3 {
          color: rgb(240, 240, 240);
          font-weight: 700;
          font-size: 25px;
          padding: 0 100px;
          text-align: center;
        }

        a {
          text-decoration: none;
          background-color: #6e52f5;
          color: rgb(240, 240, 240);;
          padding: 0.5rem 1rem;
          border: 3px solid rgb(240, 240, 240);;
          border-radius: 0.5rem;
          font-weight: bold;
          transition: background-color .5s ease-out
        }

        a:hover {
          background-color: rgb(240, 240, 240);
          color: #000000;
        }

        @media (max-width: 530px) {
          h3 {
            font-size: 20px;
            padding: 0 50px;
          }
        }

        @media (max-width: 350px) {
          h3 {
            font-size: 20px;
            padding: 0 25px;
          }
        }
      `}</style>
    </>
  );
};

export default Welcome;
