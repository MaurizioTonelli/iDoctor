import React from "react";
import styles from "./ConsultationLinkCard.module.css";
import { BsThreeDotsVertical } from "react-icons/bs";

const ConsultationLinkCard = () => {
  return (
    <div className={styles.cardContainer}>
      <img
        className={styles.image}
        src="/assets/images/doctor_profile1.jpg"
        alt="patient"
      />
      <h1>JUAN JOSÉ </h1>
      <h2>GONZALES MARTÍNEZ</h2>
      <h2 className={styles.dateTime}>FECHA Y HORA:</h2>
      <h2 className={styles.dateTimeResult}>18:00</h2>
      <h2 className={styles.roomNumber}>CONSULTORIO 33</h2>
      <a className={styles.link} href="/consultas/23">
        REALIZAR CONSULTA
      </a>
      <div className={styles.options}>
        <BsThreeDotsVertical />
      </div>
    </div>
  );
};

export default ConsultationLinkCard;
