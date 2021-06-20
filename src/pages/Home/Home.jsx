import React from "react";
import styles from "./Home.module.css";
import Whiteboard from "../../components/General/Whiteboard";
import CardContainer from "../../components/General/CardContainer";
import { Link } from "react-router-dom";
import {
  FaUsers,
  FaRegAddressBook,
  FaFileMedicalAlt,
  FaUserPlus,
  FaUserMd,
} from "react-icons/fa";

const ActionCard = ({ title, icon, url }) => {
  return (
    <Link className={styles.actionCard} to={url}>
      <div className={styles.icon}>{icon}</div>
      <h1>{title}</h1>
    </Link>
  );
};

const BienvenidaDoctor = () => {
  return (
    <CardContainer>
      <h1>Bienvenido, doctor</h1>
      <div className={styles.assignment}>
        <h2>
          Consultorio asignado: <strong>34</strong>
        </h2>
      </div>
      <div className={styles.assignment}>
        <h2>
          Habitaciones asignadas: <strong>1,3,5,6</strong>
        </h2>
      </div>
      <div className={styles.actionCards}>
        <ActionCard
          title="Ver mis pacientes"
          icon={<FaUsers />}
          url="/pacientes"
        />
        <ActionCard
          title="Ver mis consultas"
          icon={<FaRegAddressBook />}
          url="/consultas"
        />
        <ActionCard
          title="Ver examenes médicos"
          icon={<FaFileMedicalAlt />}
          url="/examenes"
        />
      </div>
    </CardContainer>
  );
};
const BienvenidaEnfermero = () => {
  return (
    <CardContainer>
      <h1>Bienvenido, enfermero</h1>

      <div className={styles.assignment}>
        <h2>
          Habitaciones asignadas: <strong>1,3,5,6</strong>
        </h2>
      </div>
      <div className={styles.actionCards}>
        <ActionCard
          title="Ver mis pacientes"
          icon={<FaUsers />}
          url="/pacientes"
        />

        <ActionCard
          title="Ver examenes médicos"
          icon={<FaFileMedicalAlt />}
          url="/examenes"
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
          url="/examenesagenerar"
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
        <ActionCard title="Pacientes" icon={<FaUserPlus />} url="/pacientes" />
        <ActionCard title="Personal" icon={<FaUserMd />} url="/personal" />
      </div>
    </CardContainer>
  );
};
const Home = () => {
  return (
    <Whiteboard title="iDOCTOR">
      <BienvenidaDoctor />
      <BienvenidaEnfermero />
      <BienvenidaLaboratorista />
      <BienvenidaAdministrador />
    </Whiteboard>
  );
};

export default Home;
