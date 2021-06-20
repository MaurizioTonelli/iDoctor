import React, { useState } from "react";
import CardContainer from "../../../components/General/CardContainer";
import Whiteboard from "../../../components/General/Whiteboard";
import styles from "./NewUser.module.css";

const UserForm = () => {
  const [role, setRole] = useState("doctor");

  return (
    <form className={styles.patientForm}>
      <label htmlFor="picture">Foto de perfil</label>
      <input type="file" name="picture" id="picture" />
      <label htmlFor="userType">Rol de usuario</label>
      <select
        name="userType"
        id="userType"
        onChange={(e) => setRole(e.target.value)}
      >
        <option value="doctor">Doctor</option>
        <option value="enfermero">Enfermero</option>
        <option value="laboratorista">Laboratorista</option>
        <option value="administrador">Administrador</option>
      </select>
      <label htmlFor="name">Nombre completo</label>
      <input type="text" id="name" name="name" />
      <label htmlFor="username">Nombre de usuario</label>
      <input type="text" id="username" name="username" />
      {role === "doctor" && (
        <>
          <label htmlFor="consultingRoom">Consultorio</label>
          <input type="text" id="consultingRoom" name="consultingRoom" />
        </>
      )}
      <label htmlFor="password">Contraseña</label>
      <input type="password" id="password" name="password" />
      <label htmlFor="confirmPassword">Confirmar Contraseña</label>
      <input type="password" id="confirmPassword" name="confirmPassword" />
      <input type="submit" value="CREAR USUARIO" />
    </form>
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
