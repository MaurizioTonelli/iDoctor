import React, { useState, useEffect } from "react";
import styles from "./Users.module.css";
import Whiteboard from "../../components/General/Whiteboard";
import CardContainer from "../../components/General/CardContainer";
import UserLinkCard from "../../components/User/UserLinkCard";
import { Link } from "react-router-dom";
import axios from "axios";
import appData from "../../assets/data/appData";
const Users = () => {
  const [doctors, setDoctors] = useState([]);
  const [nurses, setNurses] = useState([]);
  const [labUsers, setLabUsers] = useState([]);
  const [admins, setAdmins] = useState([]);

  useEffect(() => {
    axios
      .get(appData.apiUrl + "/users", {
        headers: { authorization: "Bearer " + localStorage.getItem("token") },
      })
      .then((res) => {
        let doctorArray = res.data.data.filter(
          (user) => user.role === "doctor"
        );
        let nurseArray = res.data.data.filter(
          (user) => user.role === "enfermero"
        );
        let labArray = res.data.data.filter(
          (user) => user.role === "laboratorista"
        );
        let adminArray = res.data.data.filter(
          (user) => user.role === "administrador"
        );
        setDoctors([...doctorArray]);
        setNurses([...nurseArray]);
        setLabUsers([...labArray]);
        setAdmins([...adminArray]);
      });
  }, []);
  return (
    <Whiteboard title="PERSONAL">
      <div className={styles.center}>
        <Link to="/dashboard/personal/nuevo" className={styles.newUser}>
          NUEVO USUARIO
        </Link>
      </div>
      <CardContainer>
        <h1>DOCTORES</h1>
        {doctors && (
          <div className={styles.personalCards}>
            {doctors.map((doctor, i) => (
              <UserLinkCard
                key={i}
                id={doctor.id}
                image={doctor.profileImage}
                role={doctor.role}
                name={doctor.name}
                username={doctor.username}
              />
            ))}
          </div>
        )}
      </CardContainer>
      <CardContainer>
        <h1>ENFERMEROS</h1>
        {nurses && (
          <div className={styles.personalCards}>
            {nurses.map((nurse, i) => (
              <UserLinkCard
                key={i}
                id={nurse.id}
                image={nurse.profileImage}
                role={nurse.role}
                name={nurse.name}
                username={nurse.username}
              />
            ))}
          </div>
        )}
      </CardContainer>
      <CardContainer>
        <h1>LABORATORISTAS</h1>
        {labUsers && (
          <div className={styles.personalCards}>
            {labUsers.map((labUser, i) => (
              <UserLinkCard
                key={i}
                id={labUser.id}
                image={labUser.profileImage}
                role={labUser.role}
                name={labUser.name}
                username={labUser.username}
              />
            ))}
          </div>
        )}
      </CardContainer>
      <CardContainer>
        <h1>ADMINISTRADORES</h1>
        {admins && (
          <div className={styles.personalCards}>
            {admins.map((admin, i) => (
              <UserLinkCard
                id={admin.id}
                key={i}
                image={admin.profileImage}
                role={admin.role}
                name={admin.name}
                username={admin.username}
              />
            ))}
          </div>
        )}
      </CardContainer>
    </Whiteboard>
  );
};

export default Users;
