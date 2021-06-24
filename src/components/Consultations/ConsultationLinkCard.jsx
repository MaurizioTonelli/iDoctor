import React, { useState, useEffect } from "react";
import styles from "./ConsultationLinkCard.module.css";
import { BsThreeDotsVertical } from "react-icons/bs";
import axios from "axios";
import appData from "../../assets/data/appData";
import moment from "moment";

const ConsultationLinkCard = ({ consultation }) => {
  const [patient, setPatient] = useState({});
  useEffect(() => {
    axios
      .get(appData.apiUrl + "/patient/" + consultation.patientId, {
        withCredentials: true,
      })
      .then((res) => {
        setPatient(res.data.data[0]);
        console.log(res.data.data[0]);
      })
      .catch((err) => {
        alert("Ocurrió un error");
      });
  }, []);
  return (
    <div className={styles.cardContainer}>
      <img
        className={styles.image}
        src={appData.apiUrl + "/images/" + patient.profileImage}
        alt="patient"
      />

      <h2>{patient.name}</h2>
      <h2 className={styles.dateTime}>FECHA Y HORA:</h2>
      <h2 className={styles.dateTimeResult}>
        {moment(consultation.datetime).format("DD/MM/YYYY hh:mm")}
      </h2>
      <h2 className={styles.roomNumber}>
        CONSULTORIO {patient.consultingRoom}
      </h2>
      <a
        className={styles.link}
        href={"/dashboard/consultas/" + consultation.id}
      >
        REALIZAR CONSULTA
      </a>
      <div className={styles.options}>
        <BsThreeDotsVertical />
      </div>
    </div>
  );
};

export default ConsultationLinkCard;
