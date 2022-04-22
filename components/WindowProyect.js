import React from "react";

const WindowProyect = ({
  name,
  src,
  alt,
  description,
  preview,
  repo,
  setViewProyect,
}) => {
  return (
    <>
      <div className="pantalla-proyecto">
        <div className="box-pantalla-proyecto">
          <div className="box-img-proyecto">
            <img className="img-ventana-proyecto" src={src} alt={alt} />
          </div>
          <div className="box-title-x__proyecto">
            <div className="box-title-proyecto">
              <h3 className="title-proyecto">{name}</h3>
            </div>
            <div className="box-x-proyecto">
              <button
                className="btn-x-proyecto"
                onClick={() => setViewProyect(false)}
              >
                <img
                  className="x-proyecto"
                  src="../images/letra-x.svg"
                  alt=""
                />
              </button>
            </div>
          </div>
          <hr className="separator" />
          <div className="box-descripcion">
            <p className="descripcion">{description}</p>

            <div className="box-a">
              <a href={preview} className="redireccion" target="_blank">
                Visit Page
              </a>
              <a href={repo} className="redireccion" target="_blank">
                Repository
              </a>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .pantalla-proyecto {
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

        .aparecer-des-proyecto {
          display: flex;
          visibility: visible;
        }

        .box-pantalla-proyecto {
          width: 600px;
          height: 600px;
          background-color: #f0f0f0;
          border-radius: 20px;
        }

        .box-title-x__proyecto {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          width: 100%;
          margin-bottom: 20px;
          margin-top: 20px;
        }

        .box-title-proyecto {
          margin-left: 30px;
          width: 100%;
        }

        .title-proyecto {
          font-size: 25px;
          font-weight: 800;
          color: rgb(31, 31, 31);
        }

        .box-x-proyecto {
          width: 30px;
          height: 30px;
          margin-right: 30px;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .btn-x-proyecto {
          width: 20px;
          height: 30px;
          display: flex;
          justify-content: center;
          align-items: center;
          background: none;
          border: none;
          cursor: pointer;
          outline: none;
          -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        }

        .x-proyecto {
          width: 20px;
          height: 30px;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .img-ventana-proyecto {
          width: 100%;
          border-radius: 20px 20px 0 0;
          border-bottom: 2px solid #6e52f5;
        }

        .box-descripcion {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-evenly;
        }

        .descripcion {
          text-align: center;
          padding: 10px 20px 0px 20px;
          color: #494949;
          font-size: 20px;
        }

        .status {
          text-align: center;
          padding-bottom: 0px;
          color: #494949;
        }

        .box-a {
          width: 100%;
          display: flex;
          justify-content: space-evenly;
          padding: 20px;
        }

        .redireccion {
          text-decoration: none;
          color: #f0f0f0;
          background-color: #6e52f5;
          border-radius: 5px;
          width: 150px;
          height: 45px;
          font-size: 20px;
          font-weight: 600;
          border: 1px solid #5432ff;
          display: flex;
          justify-content: center;
          align-items: center;
          transition: 0.3s;
          margin: 0 5px;
        }

        .redireccion:hover {
          background-color: #5432ff;
        }

        @media (max-height: 620px) and (min-height: 0px) {
          .box-pantalla-proyecto {
            width: 200px;
            height: 200px;
          }
        }

        @media (max-width: 1024px) {
          .box-pantalla-proyecto {
            height: 95vh;
            width: 600px;
          }
        }

        @media (max-width: 480px) {
          .box-pantalla-proyecto {
            border-radius: 0px;
            width: 100vw;
            height: 100vh;
          }

          .box-comentario {
            width: 90%;
          }

          .box {
            width: 90%;
          }

          .img-ventana-proyecto {
            border-radius: 0;
            border-bottom: 2px solid #6e52f5;
          }
        }
      `}</style>
    </>
  );
};

export default WindowProyect;
