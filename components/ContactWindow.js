import React from "react";

const ContactWindow = ({ handleContact }) => {
  return (
    <>
      <div className="pantalla-contacto">
        <div className="box-pantalla-contacto">
          <div className="box-title-x__contacto">
            <div className="box-title-contacto">
              <h3 className="title-contacto">Contact</h3>
            </div>
            <div className="box-x">
              <button className="btn-x" onClick={handleContact}>
                <img className="x" src="../images/letra-x.svg" alt="" />
              </button>
            </div>
          </div>
          <hr className="separator" />
          <form
            className="box-formulario"
            action="https://formsubmit.co/francescoalteriog@gmail.com"
            method="POST"
          >
            <div className="box">
              <input
                type="text"
                required
                name="name"
                id=""
                className="input"
                placeholder="Name"
              />
            </div>
            <div className="box">
              <input
                type="email"
                required
                name="email"
                id="input2"
                className="input"
                placeholder="Email"
              />
            </div>
            <div className="box-comentario">
              <textarea
                className="comentario"
                required
                name="comentary"
                id=""
                cols="30"
                rows="10"
                placeholder="Comentary"
              ></textarea>
            </div>
            <div className="box-submit">
              <input type="submit" value="Submit" className="btn-submit" />
            </div>
          </form>
        </div>
      </div>
      <style jsx>{`
        .pantalla-contacto {
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

        .aparecer-des-contacto {
          display: flex;
          visibility: visible;
        }

        .box-pantalla-contacto {
          width: 40vw;
          height: 80vh;
          background-color: #f0f0f0;
          border-radius: 20px;
          padding-top: 20px;
        }

        .box-title-x__contacto {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          width: 100%;
          margin-bottom: 20px;
        }

        .box-title-contacto {
          margin-left: 60px;
          display: flex;
          justify-content: center;
          width: 100%;
        }

        .title-contacto {
          font-size: 30px;
          font-weight: 800;
          color: rgb(31, 31, 31);
        }

        .box-x {
          width: 30px;
          height: 30px;
          margin-right: 30px;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .btn-x {
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

        .x {
          width: 20px;
          height: 30px;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .box-formulario {
          width: 100%;
          height: 65vh;
          display: flex;
          flex-flow: column;
          justify-content: space-evenly;
          align-items: center;
        }

        .box {
          background-color: #f0f0f0;
          border-radius: 100px;
          width: 60%;
          height: 40px;
          display: flex;
          align-items: center;
          padding-left: 20px;
          border: 2px solid #6e52f5;
        }

        .box-comentario {
          width: 59%;
          border: 2px solid #6e52f5;
          border-radius: 10px;
        }

        textarea {
          resize: none;
          color: #494949;
          border: none;
          background: none;
          text-decoration: none;
          outline: none;
          width: 100%;
          padding: 5px 10px;
        }

        .input {
          background: none;
          border: none;
          text-decoration: none;
          outline: none;
          color: #494949;
          width: 95%;
        }

        .btn-submit {
          background: #6e52f5;
          border: 1px solid #5432ff;
          width: 120px;
          height: 40px;
          color: #f0f0f0;
          font-weight: 600;
          border-radius: 5px;
          cursor: pointer;
          transition: 0.3s;
        }

        .btn-submit:hover {
          background: #5432ff;
        }

        @media (max-width: 1024px) {
          .box-pantalla-contacto {
            width: 80vw;
            height: 90vh;
          }
        }

        @media (max-width: 480px) {
          .box-pantalla-contacto {
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
        }
      `}</style>
    </>
  );
};

export default ContactWindow;
