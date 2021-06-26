import React, { useState, useContext } from "react";
import styles from "./PatientLinkCard.module.css";
import { BsThreeDotsVertical } from "react-icons/bs";
import axios from "axios";
import appData from "../../assets/data/appData";
import UserContext from "../../UserContext";

const PatientLinkCard = (props) => {
  const user = useContext(UserContext);
  const [options, setOptions] = useState(false);

  const handleOpenOptions = () => {
    setOptions(true);
  };
  const handleCloseOptions = () => {
    setOptions(false);
  };
  const deletePatient = () => {
    axios
      .delete(appData.apiUrl + "/patient/" + props.id, {
        headers: { authorization: "Bearer " + localStorage.getItem("token") },
      })
      .then(() => {
        window.location.reload(false);
      })
      .catch((res) => {
        alert("Ocurrió un error");
      });
  };
  return (
    <div className={styles.cardContainer}>
      <img
        className={styles.image}
        src={appData.apiUrl + "/images/" + props.image}
        alt="patient"
      />

      <h2>{props.name}</h2>
      <h2 className={styles.diagnosis}>DIAGNÓSTICO:</h2>
      <h2 className={styles.diagnosisResult}>
        {props.diagnosis || "Sin diagnóstico"}
      </h2>
      {props.room && (
        <h2 className={styles.roomNumber}>HABITACION {props.room}</h2>
      )}
      {props.consultingRoom && (
        <h2 className={styles.roomNumber}>
          CONSULTORIO {props.consultingRoom}
        </h2>
      )}
      <a className={styles.link} href={"#/dashboard/pacientes/" + props.id}>
        VER HISTORIAL
      </a>
      {user && (user.role === "doctor" || user.role === "administrador") && (
        <div
          className={styles.options}
          onMouseEnter={handleOpenOptions}
          onMouseLeave={handleCloseOptions}
        >
          <div className={styles.icon}>
            <BsThreeDotsVertical />
          </div>
          {options && (
            <div className={styles.actions}>
              {user && user.role === "administrador" && (
                <div className={styles.action}>
                  <button onClick={deletePatient}>Eliminar</button>
                </div>
              )}
              <div className={styles.action}>
                <button onClick={() => props.openDiagnose(props.id)}>
                  Asignar diagnóstico
                </button>
              </div>
              {props.room && (
                <div className={styles.action}>
                  <button onClick={() => props.openTransfer(props.id)}>
                    Transferir
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default PatientLinkCard;
