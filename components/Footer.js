import React, { useState } from "react";
import ContactWindow from "./ContactWindow";
import { IoLogoLinkedin, IoLogoGithub } from "react-icons/io5";

const Footer = () => {
  const [contact, setContact] = useState(false);
  return (
    <>
      {contact && <ContactWindow setContact={setContact} />}
      <footer>
        <a href="https://github.com/francescoalterio" target="_blank">
          <IoLogoGithub size={40} color="rgb(240, 240, 240)" />
        </a>
        <button className="btn-contact-footer" onClick={() => setContact(true)}>
          Contact
        </button>
        <a href="https://www.linkedin.com/in/francescoalterio" target="_blank">
          <IoLogoLinkedin size={40} color="rgb(240, 240, 240)" />
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

        a {
          margin: 0 15px;
          transition: 0.2s;
        }

        .btn-contact-footer:hover {
          background-color: #f0f0f0;
          color: rgb(26, 25, 25);
        }

        a:hover {
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
