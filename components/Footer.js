import React, { useState } from "react";
import ContactWindow from "./ContactWindow";

const Footer = () => {
  const [contact, setContact] = useState(false);
  return (
    <>
      {contact && <ContactWindow setContact={setContact} />}
      <footer>
        <a
          href="https://github.com/francescoalterio"
          className="fondo"
          target="_blank"
        >
          <img
            src="../images/github.png"
            alt="logo-github"
            className="github"
          />
        </a>
        <button className="btn-contact-footer" onClick={() => setContact(true)}>
          Contact
        </button>
        <a
          href="https://www.linkedin.com/in/francescoalterio"
          className="fondo"
          target="_blank"
        >
          <img
            src="../images/linkedin.png"
            alt="logo-linkedin"
            className="linkedin"
          />
        </a>
      </footer>
      <style jsx>{`
        footer {
          background-color: rgb(26, 25, 25);
          width: 100%;
          height: 100px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .btn-contact-footer {
          background: none;
          border: 5px solid #f0f0f0;
          width: 140px;
          height: 45px;
          border-radius: 50px;
          color: #f0f0f0;
          font-weight: 700;
          cursor: pointer;
          transition: 0.3s;
        }

        .fondo {
          background-color: #f0f0f0;
          border-radius: 200px;
          width: 50px;
          height: 50px;
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 0 30px;
          transition: 0.3s;
        }
        .github {
          width: 80%;
          padding-right: 0px;
          padding-top: 0px;
          flex: 0 0 auto;
        }

        .linkedin {
          width: 100%;
          flex: 0 0 auto;
        }

        .btn-contact-footer:hover {
          background-color: #f0f0f0;
          color: rgb(26, 25, 25);
        }

        .fondo:hover {
          transform: scale(1.1);
        }

        @media (max-width: 480px) {
          .fondo {
            margin: 0 10px;
          }
        }
      `}</style>
    </>
  );
};

export default Footer;
