import React, { useState } from "react";
import axios from "axios";
import './Modal2.css'
const Modal = ({
  token,
  setOpenModal
}) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState( null)

  

  const taskForm = async( )=>{
    try {
      const res = await axios.post(
        "https://tasks-crud.academlo.com/api/tasks",{
          params:{
            name:"otra tarea",
            description: "descripcion"
          },
          
          headers: { 
            Authorization: `Bearer ${token}`,
            "content-type": 'application/json'  
          },
          
        }
      );
      return res;
    } catch (error) {
      alert(error);
    }
  }
  const validateTask= async(e) =>{
    e.preventDefault()
  
    const params = {name, description}
    const res = await taskForm();
    console.log(res)
   

    if (!name.trim() || !description.trim()) {
      setError("Datos vacíos email!");
      return;
    }
    if (!description.trim()) {
      setError("Datos vacíos pass!");
      return;
    }
    if (res.status === 200) {
      alert("usuario registrado");
      setName("");
      setDescription("");
      setError(null);
     
    }
    
  }

  return (
    <section className="modal">
      <div className="modal--container">
        <header className="modal--header">
           
          <h3 className="modal--title">Crear nueva tarea</h3>
        </header>
        <form className="modal--form" onSubmit={validateTask}>
        {error ? <div className="form-alert form-alert-danger">{error}</div> : null}
          <label className="modal--label">
            Nombre de tarea <br />
            <input
            className="modal--input"
              type="text"
              onChange={(e) => setName(e.target.value)}
              value={name}
             
            />
          </label>
          <br />
          <label className="modal--label">
            Descripcion
            <br />
            <input
            className="modal--input"
              type="text"
              onChange={(e) => setDescription(e.target.value)}
              value={description}

            />
          </label>
          <br />
          <button 
            className="modal--button-closed"
            onClick={()=>setOpenModal(false)}  
          >
            ✖️
          </button>
          <button 
            type="submit"
            className="modal--button-save"
            >
              😊 Crear 
          </button>
        </form>
      </div>
    </section>
  );
};

export { Modal };
