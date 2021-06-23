import React, { useState } from "react";
import CardContainer from "../../../components/General/CardContainer";
import Whiteboard from "../../../components/General/Whiteboard";
import styles from "./NewUser.module.css";
import axios from "axios";
import { useHistory } from "react-router-dom";
import appData from "../../../assets/data/appData";
const UserForm = () => {
  const [role, setRole] = useState("doctor");
  const [image, setImage] = useState();
  const [name, setName] = useState("");
  const [consultingRoom, setConsultingRoom] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const history = useHistory();

  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
  };

  const validateForm = () => {
    let formIsValid = true;
    let errorArray = [];
    setErrors();
    if (name === "") {
      errorArray.push("Se require un nombre");
      formIsValid = false;
    }
    if (role === "doctor" && consultingRoom === "") {
      errorArray.push("Se requiere asignar un número de consultorio");
      formIsValid = false;
    }
    if (username === "") {
      errorArray.push("Se requiere un nombre de usuario");
      formIsValid = false;
    }
    if (password === "") {
      errorArray.push("Se requiere una contraseña");
      formIsValid = false;
    }
    if (password !== confirmPassword) {
      errorArray.push("Las contraseñas deben coincidir");
      formIsValid = false;
    }
    setErrors([...errorArray]);

    return formIsValid;
  };

  const registerUser = async (e) => {
    e.preventDefault();
    setErrors([]);
    if (!validateForm()) return;
    const formData = new FormData();
    formData.append("image", image);
    formData.append("name", name);
    formData.append("username", username);
    formData.append("password", password);
    formData.append("role", role);

    if (role === "doctor") {
      formData.append("consultingRoom", consultingRoom);
    }

    axios
      .post(appData.apiUrl + "/users", formData, {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res);
        history.push("/dashboard/personal");
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  };
  return (
    <>
      <form
        className={styles.patientForm}
        onSubmit={registerUser}
        encType="multipart/form-data"
      >
        <label htmlFor="picture">Foto de perfil</label>
        <input
          type="file"
          name="picture"
          id="picture"
          onChange={handleFileChange}
        />
        <label htmlFor="userType">Rol de usuario</label>
        <select
          name="userType"
          id="userType"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="doctor">Doctor</option>
          <option value="enfermero">Enfermero</option>
          <option value="laboratorista">Laboratorista</option>
          <option value="administrador">Administrador</option>
        </select>
        <label htmlFor="name">Nombre completo</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="username">Nombre de usuario</label>
        <input
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        {role === "doctor" && (
          <>
            <label htmlFor="consultingRoom">Consultorio</label>
            <input
              type="number"
              id="consultingRoom"
              name="consultingRoom"
              value={consultingRoom}
              onChange={(e) => setConsultingRoom(e.target.value)}
            />
          </>
        )}
        <label htmlFor="password">Contraseña</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label htmlFor="confirmPassword">Confirmar Contraseña</label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <input type="submit" value="CREAR USUARIO" />
      </form>
      {errors && (
        <div className={styles.errors}>
          {errors.map((error, i) => (
            <div key={i} className={styles.error}>
              {error}
            </div>
          ))}
        </div>
      )}
    </>
  );
};

const NewUser = () => {
  return (
    <Whiteboard title="CREAR NUEVO PERSONAL">
      <CardContainer>
        <h1>DATOS DEL PERSONAL</h1>
        <UserForm />
      </CardContainer>
    </Whiteboard>
  );
};

export default NewUser;
