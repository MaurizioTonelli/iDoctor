import React, { useState } from "react";
import styles from "./User.module.css";
import Whiteboard from "../../../components/General/Whiteboard";
import CardContainer from "../../../components/General/CardContainer";

const UserInfoCard = () => {
  return (
    <CardContainer>
      <h1>DATOS GENERALES DEL USUARIO</h1>
      <div className={styles.card}>
        <img
          className={styles.patientProfile}
          src="/assets/images/doctor_profile1.jpg"
          alt="patient"
        />
        <div className={styles.info}>
          <h1>NOMBRE</h1>
          <p>JUAN CARLOS GONZALEZ MARTINEZ</p>
          <h1>ROL</h1>
          <p>DOCTOR</p>
        </div>
        <div className={styles.info}>
          <h1>USUARIO</h1>
          <p>martinezg123</p>
          <h1>CONTRASEÑA</h1>
          <p>*******</p>
        </div>
        <div className={styles.info}>
          <h1>CONSULTORIO</h1>
          <p>13</p>
          <h1>HABITACIONES ASIGNADAS</h1>
          <p>1,2,5,6</p>
        </div>
      </div>
    </CardContainer>
  );
};

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
      <input type="submit" value="ACTUALIZAR USUARIO" />
    </form>
  );
};
const User = () => {
  return (
    <Whiteboard title="USUARIO">
      <UserInfoCard />
      <CardContainer>
        <h1>ACTUALIZAR USUARIO</h1>
        <UserForm />
      </CardContainer>
    </Whiteboard>
  );
};

export default User;
