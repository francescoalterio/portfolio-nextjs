import Link from "next/link";
import React, { useState } from "react";
import {
  IoLogoLinkedin,
  IoLogoGithub,
  IoClipboardOutline,
  IoCloseCircleSharp,
  IoCheckmarkCircleSharp,
} from "react-icons/io5";

const ContactWindow = ({ setContact }) => {
  const [isEmailCopy, setIsEmailCopy] = useState(false);
  const copyEmail = () => {
    if (!navigator.clipboard) {
      alert("Clipboard API not available");
      return;
    } else {
      navigator.clipboard.writeText("francescoalteriog@gmail.com").then(() => {
        setIsEmailCopy(true);
      });
    }
  };

  return (
    <>
      <div className="background">
        <div className="contact-window">
          <button
            className="btn-close-window"
            onClick={() => setContact(false)}
          >
            <IoCloseCircleSharp size={40} color="rgb(34, 34, 34)" />
          </button>
          <h2 className="title">CONTACT</h2>
          <hr className="separator" />
          <div className="email-container">
            <h5>Email: </h5>
            <div className="email-box">
              <input type="text" readOnly value="francescoalteriog@gmail.com" />
              {isEmailCopy ? (
                <button
                  onClick={copyEmail}
                  className="btn-copy-email"
                  style={{ backgroundColor: "#198754" }}
                >
                  <IoCheckmarkCircleSharp size={20} color="rgb(240,240,240)" />
                </button>
              ) : (
                <button onClick={copyEmail} className="btn-copy-email">
                  <IoClipboardOutline size={20} color="rgb(240,240,240)" />
                </button>
              )}
            </div>
          </div>
          <div className="social-container">
            <h5>Social networks:</h5>
            <div className="social-box">
              <a
                href="https://www.linkedin.com/in/francescoalterio/"
                target="__blank"
                className="a-social"
              >
                <IoLogoLinkedin size={40} color="rgb(34, 34, 34)" />
              </a>
              <a
                href="https://github.com/francescoalterio"
                target="__blank"
                className="a-social"
              >
                <IoLogoGithub size={40} color="rgb(34, 34, 34)" />
              </a>
            </div>
          </div>
          <div className="social-container">
            <h5>CV:</h5>
            <div className="social-box">
              <Link href="/cv.pdf">
                <a className="a-cv" target="__blank">
                  Go to CV
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .background {
          width: 100vw;
          height: 100vh;
          background-color: rgba(0, 0, 0, 0.315);
          display: flex;
          justify-content: center;
          align-items: center;
          position: fixed;
          top: 0;
          z-index: 100;
          transition: 1s;
        }

        .contact-window {
          width: 400px;
          height: 350px;
          background-color: rgb(240, 240, 240);
          border-radius: 10px;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 1rem 4rem;
          position: relative;
        }

        .btn-close-window {
          position: absolute;
          right: 20px;
          top: 20px;
          background: none;
          border: none;
          cursor: pointer;
        }

        .title {
          font-weight: 700;
          font-size: 30px;
          color: rgb(34, 34, 34);
        }

        .separator {
          width: 100%;
          background-color: #6e52f5;
          height: 3px;
        }

        .email-container {
          margin-top: 20px;
          width: 100%;
        }

        h5 {
          color: rgb(34, 34, 34);
        }

        .email-box {
          width: 100%;
          display: flex;
          flex-wrap: nowrap;
          margin-top: 5px;
        }

        input {
          display: inline-block;
          padding: 5px;
          flex: 1;
          background-color: #acacad;
          border: none;
          border-radius: 5px;
        }

        .btn-copy-email {
          padding: 5px;
          display: flex;
          justify-content: center;
          align-items: center;
          border: none;
          border-radius: 5px;
          background-color: #6e52f5;
          margin-left: 5px;
          cursor: pointer;
        }

        .social-container {
          margin-top: 20px;
          width: 100%;
        }

        .social-box {
          width: 100%;
          display: flex;
          margin-top: 5px;
        }

        .a-social {
          text-decoration: none;
          margin-right: 10px;
        }

        .a-cv {
          text-decoration: none;
          border-radius: 5px;
          background-color: rgb(34, 34, 34);
          padding: 0.5rem 1rem;
          color: rgb(240, 240, 240);
          font-weight: bold;
        }

        @media (max-width: 768px) {
          .contact-window {
            width: 100%;
            height: 100%;
            padding: 1rem 2rem;
            border-radius: 0;
          }
        } ;
      `}</style>
    </>
  );
};

export default ContactWindow;
