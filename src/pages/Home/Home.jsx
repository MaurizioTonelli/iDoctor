import React, { useContext, useState, useEffect } from "react";
import styles from "./Home.module.css";
import Whiteboard from "../../components/General/Whiteboard";
import CardContainer from "../../components/General/CardContainer";
import { Link, Redirect } from "react-router-dom";
import {
  FaUsers,
  FaRegAddressBook,
  FaFileMedicalAlt,
  FaUserPlus,
  FaUserMd,
} from "react-icons/fa";
import UserContext from "../../UserContext";
import axios from "axios";
import appData from "../../assets/data/appData";

const ActionCard = ({ title, icon, url }) => {
  return (
    <Link className={styles.actionCard} to={url}>
      <div className={styles.icon}>{icon}</div>
      <h1>{title}</h1>
    </Link>
  );
};

const BienvenidaDoctor = ({ user, rooms }) => {
  return (
    <CardContainer>
      <h1>Bienvenido, doctor</h1>
      <div className={styles.assignment}>
        <h2>
          Consultorio asignado: <strong>{user.consultingRoom}</strong>
        </h2>
      </div>
      <div className={styles.assignment}>
        <h2>
          Habitaciones asignadas:{" "}
          <strong>{rooms.map((room) => room.room).join(",")}</strong>
        </h2>
      </div>
      <div className={styles.actionCards}>
        <ActionCard
          title="Ver mis pacientes"
          icon={<FaUsers />}
          url="/dashboard/pacientes"
        />
        <ActionCard
          title="Ver mis consultas"
          icon={<FaRegAddressBook />}
          url="/dashboard/consultas"
        />
        <ActionCard
          title="Ver examenes médicos"
          icon={<FaFileMedicalAlt />}
          url="/dashboard/examenes"
        />
      </div>
    </CardContainer>
  );
};
const BienvenidaEnfermero = ({ rooms }) => {
  console.log(rooms);
  return (
    <CardContainer>
      <h1>Bienvenido, enfermero</h1>

      <div className={styles.assignment}>
        <h2>
          Habitaciones asignadas:{" "}
          <strong>{rooms.map((room) => room.room).join(",")}</strong>
        </h2>
      </div>
      <div className={styles.actionCards}>
        <ActionCard
          title="Ver mis pacientes"
          icon={<FaUsers />}
          url="/dashboard/pacientes"
        />

        <ActionCard
          title="Ver examenes médicos"
          icon={<FaFileMedicalAlt />}
          url="/dashboard/examenes"
        />
      </div>
    </CardContainer>
  );
};
const BienvenidaLaboratorista = () => {
  return (
    <CardContainer>
      <h1>Bienvenido, laboratorista</h1>
      <div className={styles.actionCards}>
        <ActionCard
          title="Ver examenes médicos"
          icon={<FaFileMedicalAlt />}
          url="/dashboard/examenesagenerar"
        />
      </div>
    </CardContainer>
  );
};
const BienvenidaAdministrador = () => {
  return (
    <CardContainer>
      <h1>Bienvenido, administrador</h1>
      <div className={styles.actionCards}>
        <ActionCard
          title="Pacientes"
          icon={<FaUserPlus />}
          url="/dashboard/pacientes"
        />
        <ActionCard
          title="Personal"
          icon={<FaUserMd />}
          url="/dashboard/personal"
        />
      </div>
    </CardContainer>
  );
};
const Home = () => {
  const user = useContext(UserContext);
  const [rooms, setRooms] = useState([]);
  useEffect(() => {
    axios
      .get(appData.apiUrl + "/assignedRooms/" + user.id, {
        withCredentials: true,
      })
      .then((res) => {
        setRooms(res.data.data);
      })
      .catch((err) => {});
  }, []);
  return (
    <Whiteboard title="iDOCTOR">
      {!user.isLoading && user && user.role === "doctor" && (
        <BienvenidaDoctor user={user} rooms={rooms} />
      )}
      {!user.isLoading && user && user.role === "enfermero" && (
        <BienvenidaEnfermero rooms={rooms} />
      )}
      {!user.isLoading && user && user.role === "laboratorista" && (
        <BienvenidaLaboratorista />
      )}
      {!user.isLoading && user && user.role === "administrador" && (
        <BienvenidaAdministrador />
      )}
    </Whiteboard>
  );
};

export default Home;
