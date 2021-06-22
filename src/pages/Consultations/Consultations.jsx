import React from "react";
import ConsultationLinkCard from "../../components/Consultations/ConsultationLinkCard";
import Whiteboard from "../../components/General/Whiteboard";
import styles from "./Consultations.module.css";
import { Link } from "react-router-dom";
import { IoIosAddCircle } from "react-icons/io";

const AddConsultationCard = () => {
  return (
    <Link className={styles.cardContainer} to="/dashboard/consultas/nueva">
      <div className={styles.icon}>
        <IoIosAddCircle />
      </div>
      <h1>NUEVA CONSULTA </h1>
    </Link>
  );
};

const Consultations = () => {
  return (
    <Whiteboard title="CONSULTAS">
      <div className={styles.consultationCards}>
        <AddConsultationCard />
        <ConsultationLinkCard />
        <ConsultationLinkCard />
        <ConsultationLinkCard />
      </div>
    </Whiteboard>
  );
};

export default Consultations;
