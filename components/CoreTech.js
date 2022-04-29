import React from "react";

const CoreTech = () => {
  return (
    <>
      <section className="coretech" id="coretech">
        <div className="box-title-coretech">
          <h2 className="title">CORE TECHNOLOGY</h2>
        </div>
        <hr className="separator" />
        <div className="box-coretech">
          <div className="box-texto">
            <h3 className="title-texto-coretech">React</h3>
            <p className="texto-coretech">
              React is an open source Javascript library designed to create user
              interfaces with the goal of making it easy to develop single-page
              applications. It is maintained by Facebook and the free software
              community. In the project there are more than a thousand free
              developers.
            </p>
            <a
              href="https://reactjs.org/"
              className="enlace-coretech"
              target="_blank"
            >
              Documentation
            </a>
          </div>
          <div className="logo-coretech">
            <img
              className="img-coretech"
              src="http://www.inos.cl/images/programas/react.png"
              alt="logo-react.js"
            />
          </div>
        </div>
      </section>
      <style jsx>{`
        .title {
          font-weight: 700;
          font-size: 40px;
          color: rgb(34, 34, 34);
          margin: 0 10px;
        }
        .coretech {
          background-color: rgb(240, 240, 240);
          width: 100%;
        }

        .separator {
          background-image: linear-gradient(
            to right,
            transparent,
            #f5f9fa,
            transparent
          );

          height: 0.1rem;
          max-width: 100%;
          border: 0;
          background-image: -webkit-gradient(
            linear,
            left top,
            right top,
            from(transparent),
            color-stop(#5432ff),
            to(transparent)
          );
          background-image: -webkit-linear-gradient(
            left,
            transparent,
            #5432ff,
            transparent
          );
          background-image: -o-linear-gradient(
            left,
            transparent,
            #5432ff,
            transparent
          );
          background-image: linear-gradient(
            to right,
            transparent,
            #5432ff,
            transparent
          );

          -webkit-box-sizing: content-box;
          -moz-box-sizing: content-box;
          box-sizing: content-box;
        }

        .box-title-coretech {
          background-color: rgb(240, 240, 240);
          align-items: flex-end;
          display: flex;
          justify-content: center;
          height: 120px;
        }

        .title-coretech {
          color: rgb(240, 240, 240);
          font-weight: 700;
          font-size: 40px;
        }

        .box-coretech {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .logo-coretech {
          width: 50%;
          height: 100%;
          display: flex;
          padding: 0 50px 0 0;
          justify-content: center;
          align-items: center;
        }

        .img-coretech {
          width: 450px;
          border-radius: 1000px;
          transition: 0.5s;
        }

        .box-texto {
          width: 50%;
          display: flex;
          height: 100%;
          align-items: flex-start;
          flex-flow: column;
          justify-content: center;
          padding: 0 0 0 150px;
        }

        .title-texto-coretech {
          color: rgb(44, 44, 44);
          font-size: 40px;
          font-weight: 800;
          margin: 20px 0 10px 0;
        }

        .texto-coretech {
          color: rgb(68, 68, 68);
          font-size: 17px;
          font-weight: 600;
          margin: 20px 0 20px 0;
        }

        .enlace-coretech {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: #f0f0f0;
          background-color: #6e52f5;
          box-shadow: 0px 0px 5px #5432ff;
          border-radius: 50px;
          width: 230px;
          height: 60px;
          font-weight: 700;
          font-size: 20px;
          transition: 0.2s;
          margin: 20px 0 20px 0;
        }

        .img-coretech:hover {
          transform: scale(1.1);
        }

        .enlace-coretech:hover {
          background-color: #5432ff;
        }

        @media (max-width: 1024px) {
          .box-coretech {
            flex-direction: column-reverse;
            justify-content: center;
            align-items: center;
          }

          .logo-coretech {
            padding: 0;
          }

          .box-texto {
            padding: 0;
            align-items: center;
          }

          .texto-coretech {
            text-align: center;
          }
        }

        @media (max-width: 480px) {
          .img-coretech {
            width: 100vw;
          }

          .box-texto {
            width: 90vw;
          }

          .title {
            text-align: center;
          }
        }

        @media (max-width: 320px) {
          .title {
            text-align: center;
            font-size: 35px;
          }
        }
      `}</style>
    </>
  );
};

export default CoreTech;
