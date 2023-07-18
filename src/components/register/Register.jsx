import React, { useState } from "react";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPassword] = useState("");
  const [error, setError] = useState(null);

  const processData = (e) => {
    e.preventDefault();
    if (!email.trim() || !pass.trim()) {
      console.log("Datos vacíos email!");
      setError("Datos vacíos email!");
      return;
    }
    if (!pass.trim()) {
      console.log("Datos vacíos pass!");
      setError("Datos vacíos pass!");
      return;
    }
    if (pass.length < 6) {
      console.log("6 o más carácteres");
      setError("6 o más carácteres en pass");
      return;
    }
    console.log("correcto...");
    setError(null);
  };

  return (
    <>
      <h2 className="form--title">Registro</h2>
      <form 
        className="form--body"
        onSubmit={processData}>
          {error ? <div className="alert alert-danger">{error}</div> : null}
          <div>
            <label>
              Nombre <br />
              <input
                className="form--input"
                placeholder=" Escribe tu nombre"
                type="text"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
              
            </label>
          </div>
          <br />
          <div>
            <label>
              Correo Electronico
              <br />
              <input
                className="form--input"
                placeholder="Escribe tu correo electronico"
                type="text"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </label>
          </div>
          <br />
          <div>
            <label>
              Contraseña
              <br />
              <input
                className="form--input"
                placeholder="Escribe tu contraseña"
                type="text"
                onChange={(e) => setPassword(e.target.value)}
                value={email}
              />
            </label>
          </div>
          <div>
            <br />
            <label>
              Repite Contraseña
              <br />
              <input
                className="form--input"
                placeholder="Escribe tu contraseña"
                type="text"
                onChange={(e) => setPassword(e.target.value)}
                value={email}
              />
              
            </label>
          </div>
          <br />
          <button 
            className="form--button" 
            type="submit">
            Aceptar
          </button>
       
        <br />
      </form>
    </>
  );
};

export default Register;
