import React, { useState, useEffect } from "react";
import styles from "./User.module.css";
import Whiteboard from "../../../components/General/Whiteboard";
import CardContainer from "../../../components/General/CardContainer";
import axios from "axios";
import appData from "../../../assets/data/appData";
import { useParams, useHistory } from "react-router-dom";

function isEmpty(obj) {
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) return false;
  }
  return true;
}

const UserInfoCard = (props) => {
  return (
    <CardContainer>
      <h1>DATOS GENERALES DEL USUARIO</h1>
      <div className={styles.card}>
        {props.image && (
          <img
            className={styles.patientProfile}
            src={appData.apiUrl + "/images/" + props.image}
            alt="patient"
          />
        )}
        <div className={styles.info}>
          <h1>NOMBRE</h1>
          <p>{props.name}</p>
          <h1>ROL</h1>
          <p>{props.role}</p>
        </div>
        <div className={styles.info}>
          <h1>USUARIO</h1>
          <p>{props.username}</p>
          {props.role === "doctor" && (
            <div>
              <h1>CONSULTORIO</h1>
              <p>{props.consultingRoom}</p>
            </div>
          )}
        </div>
      </div>
    </CardContainer>
  );
};

const UserForm = (props) => {
  const [image, setImage] = useState();
  const [role, setRole] = useState(props.role);
  const [name, setName] = useState(props.name);
  const [username, setUsername] = useState(props.username);
  const [consultingRoom, setConsultingRoom] = useState(props.consultingRoom);
  const [changePassword, setChangePassword] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const history = useHistory();

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
    if (changePassword) {
      if (password === "") {
        errorArray.push("Se requiere una contraseña");
        formIsValid = false;
      }
      if (password !== confirmPassword) {
        errorArray.push("Las contraseñas deben coincidir");
        formIsValid = false;
      }
    }
    setErrors([...errorArray]);

    return formIsValid;
  };

  const updateUser = (e) => {
    e.preventDefault();
    setErrors([]);
    if (!validateForm()) return;

    const formData = new FormData();
    formData.append("image", image);
    formData.append("name", name);
    formData.append("username", username);
    formData.append("role", role);
    if (changePassword) {
      formData.append("password", password);
    }
    if (role === "doctor") {
      formData.append("consultingRoom", consultingRoom);
    }

    axios
      .put(appData.apiUrl + "/user/" + props.id, formData, {
        headers: { authorization: "Bearer " + localStorage.getItem("token") },
      })
      .then((res) => {
        console.log(res);
        window.location.reload(false);
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  };

  const handleChangePicture = (e) => {
    setImage(e.target.files[0]);
  };
  const handlePasswordChange = () => {
    setChangePassword((prev) => !prev);
    setPassword("");
    setConfirmPassword("");
  };
  const handleRoleChange = (e) => {
    setRole(e.target.value);
    setConsultingRoom("");
  };
  return (
    <>
      <form className={styles.patientForm} onSubmit={updateUser}>
        <label htmlFor="picture">Foto de perfil</label>
        <input
          type="file"
          name="picture"
          id="picture"
          onChange={handleChangePicture}
        />
        <label htmlFor="userType">Rol de usuario</label>
        <select
          name="userType"
          id="userType"
          value={role}
          onChange={handleRoleChange}
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
        <div className={styles.checkboxGroup}>
          <label htmlFor="changePassword">Cambiar contraseña</label>
          <input
            id="changePassword"
            type="checkbox"
            value={changePassword}
            onChange={handlePasswordChange}
          />
        </div>
        {changePassword && (
          <div className={styles.changePassword}>
            <label htmlFor="password">Nueva contraseña</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label htmlFor="confirmPassword">Confirmar nueva contraseña</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
        )}
        <input type="submit" value="ACTUALIZAR USUARIO" />
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
const User = () => {
  const [user, setUser] = useState({});
  let { id } = useParams();
  useEffect(() => {
    console.log(id);
    axios
      .get(appData.apiUrl + "/user/" + id, {
        headers: { authorization: "Bearer " + localStorage.getItem("token") },
      })
      .then((res) => {
        console.log(res.data.data[0]);
        setUser(res.data.data[0]);
      });
  }, []);
  return (
    <Whiteboard title="USUARIO">
      {!isEmpty(user) && (
        <UserInfoCard
          name={user.name}
          role={user.role}
          image={user.profileImage}
          username={user.username}
          consultingRoom={user.consultingRoom}
        />
      )}
      <CardContainer>
        <h1>ACTUALIZAR USUARIO</h1>
        {!isEmpty(user) && (
          <UserForm
            name={user.name}
            role={user.role}
            username={user.username}
            consultingRoom={user.consultingRoom}
            id={id}
          />
        )}
      </CardContainer>
    </Whiteboard>
  );
};

export default User;
