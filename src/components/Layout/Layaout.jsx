import React, { useState } from "react";
import Register from "../register/Register";
import { Login } from "../Login/Login";
import "./layout.css";

const Layaout = () => {
  const [register, setRegister] = useState(true);

  return (
    <>
      <div className="layout">
        <div className="layout--img1"></div>
        <div className={register?"layout--container": "layout--container layout--margin"}>
          <div className="layout--container--center">
            <div className="layout--buttons">
              <button
                className={
                  register ? "layout--btn--green" : "layout--btn--gray"
                }
                id="btn-one"
                onClick={() => setRegister(true)}
              >
                Iniciar sesion
              </button>
              <button
                className={
                  register ? "layout--btn--gray" : "layout--btn--green"
                }
                id="btn-two"
                onClick={() => setRegister(false)}
              >
                Registrarme
              </button>
          </div>

          
          </div>
          {register ? <Login /> : <Register />}
        </div>
        <div className="layout--img2"></div>
      </div>
    </>
  );
};

export { Layaout };
