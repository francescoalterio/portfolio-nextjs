import React from "react";
import Link from "next/link";

const CV = () => {
  return (
    <>
      <section className="capacidad">
        <h3>Download my CV!</h3>
        <Link href="/cv.pdf">
          <a target="__black">Go to CV</a>
        </Link>
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
          font-size: 25px
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
      `}</style>
    </>
  );
};

export default CV;
