import React from "react";

const MobileNav = ({ mobileMenuDeploy }) => {
  return (
    <>
      <div
        className={
          mobileMenuDeploy ? "nav-mobile agregar-nav-mobile" : "nav-mobile"
        }
      >
        <div className="box-nav-mobile">
          <a href="#proyects" className="a-mobile" id="a-mobile-1">
            Proyects
          </a>
          <a href="#skillset" className="a-mobile" id="a-mobile-2">
            Skillset
          </a>
          <a href="#coretech" className="a-mobile" id="a-mobile-3">
            Core Technology
          </a>
        </div>
      </div>
      <style jsx>{`
        .nav-mobile {
          width: 100%;
          height: 200px;
          background: #f0f0f0;
          position: fixed;
          top: -250px;
          transition: 1s;
          box-shadow: 0 0 10px black;
          display: none;
          z-index: 10;
        }

        .agregar-nav-mobile {
          top: 70px;
        }

        .box-nav-mobile {
          width: 100%;
          height: 200px;
          display: flex;
          flex-flow: column;
          align-items: center;
          justify-content: space-evenly;
        }

        .a-mobile {
          text-decoration: none;
          color: rgb(34, 34, 34);
          padding: 0;
          font-weight: 600;
          transition: 0.4s;
          font-size: 17px;
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 40px;
          transition: 0.3s;
        }

        .a-mobile:hover {
          background-color: #6e52f5;
          color: #f0f0f0;
        }

        .a-mobile:active {
          background-color: #6e52f5;
          color: #f0f0f0;
        }

        @media (max-width: 1024px) {
          .nav-mobile {
            display: block;
          }
        }
      `}</style>
    </>
  );
};

export default MobileNav;
