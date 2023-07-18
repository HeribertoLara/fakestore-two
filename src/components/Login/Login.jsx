import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import './login.css'
/* import { withRouter } from "react-router-dom"; */

const Login = (props) => {
 
  const navigate = useNavigate() 
  
  const [users, setUsers] = useState([]);
  const [userName, setUserName] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState(null);

  const sendForm = async (userName, password) => {
    try {
      const res = await axios.post(
        "https://fakestoreapi.com/auth/login",
        {
          username:userName,
          password:password,
        }
      );
      console.log(res)
      return res;
    } catch (error) {
      alert(error);
    }
  }; 

  useEffect(()=>{
  const getUsers = async () => {
    try {
      const res = await axios.get(
        "https://fakestoreapi.com/users"   
      );
   
    setUsers(res.data)
    console.log(users)
    return res;
    } catch (error) {
      alert(error);
    }
  };

    getUsers()
  }, [users])


  const processData = async (e) => {
    e.preventDefault();
    const res = await sendForm(userName, pass);
    console.log(res)
   

    if (!userName.trim() || !pass.trim()) {
      setError("Datos vacíos userName!");
      return;
    }
    if (!pass.trim()) {
      setError("Datos vacíos pass!");
      return;
    }
    if (res.status === 200) {
      alert("usuario registrado");
      setUserName("");
      setPass("");
      setError(null);
      navigate(`/home`) 
    }
   
  };
  

  return (
    <>
      <h2 className="form--title">Inicio de sesion</h2>
      <form className="form--body" onSubmit={processData}>
        
          <div>
            {error ? <div className="form-alert form-alert-danger">{error}</div> : null}

            <label>
              Username
              <br />
              <input
                className="form--input"
                placeholder="user name"
                type="text"
                onChange={(e) => setUserName(e.target.value)}
                value={userName}
              />
            </label>
          </div>
          <br />
          <div>
            <label>
              password
              <br />
              <input
              className="form--input"
              placeholder="Escribe tu contraseña"
              type="password"
                onChange={(e) => setPass(e.target.value)}
                value={pass}
                />
            </label>
          </div>
          
        
          <br />
          <button className="form--button" type="submit">
            Aceptar
          </button>
        
        <br />
      </form>
    </>
  );
};

export { Login };
