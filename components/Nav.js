import Link from "next/link";
import React, { useState } from "react";
import MobileNav from "../components/MobileNav";
import ContactWindow from "./ContactWindow";

const Nav = () => {
  const [contact, setContact] = useState(false);
  const [mobileMenuDeploy, setMobileMenuDeploy] = useState(false);

  const handleClickMenu = () => {
    mobileMenuDeploy ? setMobileMenuDeploy(false) : setMobileMenuDeploy(true);
  };

  return (
    <>
      {contact && <ContactWindow setContact={setContact} />}
      <MobileNav mobileMenuDeploy={mobileMenuDeploy} />
      <nav className="navegation">
        <div className="box-logo">
          <a href="#" className="a-logo ">
            <img
              className="yo-logo"
              src="../images/yo-blanco.jpg"
              alt="francesco-alterio-caricatura"
            />
          </a>
        </div>
        <div className="box-nombre">
          <h1 className="nombre">Francesco Alterio</h1>
        </div>
        <div className="ampliador"></div>
        <div className="box-links">
          <Link href="#proyects" scroll={false}>
            <a className="a">Proyects</a>
          </Link>
          <Link href="#skillset">
            <a className="a">Skillset</a>
          </Link>
          <Link href="#coretech">
            <a className="a">Core Technology</a>
          </Link>
        </div>
        <button className="btn-contacto" onClick={() => setContact(true)}>
          Contact
        </button>
        <button className="mobile-menu" onClick={handleClickMenu}>
          <svg
            className="menu-icon"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="45"
            height="45"
            viewBox="0 0 172 172"
            style={{ fill: "#000000" }}
          >
            <g
              fill="none"
              fill-rule="nonzero"
              stroke="none"
              stroke-width="1"
              stroke-linecap="butt"
              stroke-linejoin="miter"
              stroke-miterlimit="10"
              stroke-dasharray=""
              stroke-dashoffset="0"
              font-family="none"
              font-weight="none"
              font-size="none"
              text-anchor="none"
              style={{ mixBlendMode: "normal" }}
            >
              <path d="M0,172v-172h172v172z" fill="none"></path>
              <g id="original-icon" fill="#6e52f5">
                <path d="M21.5,37.625v10.75h129v-10.75zM21.5,80.625v10.75h129v-10.75zM21.5,123.625v10.75h129v-10.75z"></path>
              </g>
            </g>
          </svg>
        </button>
      </nav>
      <style jsx>{`
        .navegation {
          background-color: rgb(240, 240, 240);
          width: 100%;
          height: 70px;
          position: sticky;
          top: 0;
          display: flex;
          /* box-shadow: 0 3px 10px #181818; */
          z-index: 10;
          align-items: center;
        }

        .ampliador {
          flex: 1 1 auto;
        }

        .box-logo {
          display: flex;
          align-items: center;
          justify-content: center;
          margin-left: 60px;
          background-color: #6e52f5;
          width: 50px;
          height: 50px;
          border-radius: 50px;
        }

        .a-logo {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .yo-logo {
          width: 36px;
          height: 36px;
          border-radius: 100px;
        }

        .a {
          text-decoration: none;
          color: rgb(34, 34, 34);
          padding: 25px;
          height: 100%;
          font-weight: 600;
          transition: 0.4s;
          font-size: 17px;
        }

        .btn-contacto {
          margin: auto;
          justify-content: center;
          display: flex;
          align-items: center;
          text-align: center;
          color: rgb(238, 238, 238);
          width: 140px;
          height: 45px;
          border-radius: 50px;
          font-weight: 700;
          transition: 0.2s;
          background-color: #6e52f5;
          margin-right: 60px;
          flex: 0 0 auto;
          cursor: pointer;
          border: none;
          font-size: 17px;
        }

        .mobile-menu {
          margin-right: 60px;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
          border: none;
          background: none;
          display: none;
          outline: none;
          -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
          transition: 0.5s;
        }

        .mobile-menu:active {
          transform: scale(1.1);
        }

        .a:nth-child(6) {
          margin-right: 20px;
        }

        .a:hover {
          color: #6e52f5;
        }

        .btn-contacto:hover {
          background-color: #5432ff;
        }

        .box-nombre {
          margin-left: 10px;
        }

        .nombre {
          color: #000000;
        }

        @media (max-width: 1024px) {
          .box-links {
            display: none;
          }

          .btn-contacto {
            display: none;
          }

          .mobile-menu {
            display: block;
          }
        }

        @media (max-width: 480px) {
          .box-logo {
            margin-left: 20px;
          }

          .mobile-menu {
            margin-right: 20px;
          }

          .nombre {
            font-size: 18px;
          }
        }

        @media (max-width: 320px) {
          .box-logo {
            margin-left: 10px;
          }

          .mobile-menu {
            margin-right: 10px;
          }

          .nombre {
            font-size: 16px;
          }
        }
      `}</style>
    </>
  );
};

export default Nav;
