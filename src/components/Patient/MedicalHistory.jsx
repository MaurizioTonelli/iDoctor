import React, { useState } from "react";
import CardContainer from "../General/CardContainer";
import styles from "./MedicalHistory.module.css";
import { IoMdAddCircle } from "react-icons/io";
import moment from "moment";
import axios from "axios";
import appData from "../../assets/data/appData";

const MedicalHistoryItem = (props) => {
  return (
    <div className={styles.itemContainer}>
      <div className={styles.date}>{props.date}</div>
      <div className={styles.message}>{props.children}</div>
    </div>
  );
};

const MedicalHistory = (props) => {
  const [entry, setEntry] = useState("");
  const validateForm = () => {
    if (entry === "") return false;
    return true;
  };
  const addEntry = () => {
    if (!validateForm()) return;
    const formData = new FormData();
    formData.append("date", moment(new Date()).format("YYYY-MM-DD"));
    formData.append("comment", entry);
    axios
      .post(appData.apiUrl + "/patient/history/" + props.patient.id, formData, {
        withCredentials: true,
      })
      .then((res) => {
        window.location.reload(false);
      })
      .catch((err) => {
        alert("Ocurrió un error");
      });
  };
  return (
    <CardContainer>
      <h1>HISTORIAL CLINICO</h1>
      {props.consultation && (
        <div className={styles.consultationForm}>
          <textarea
            className={styles.consultationComment}
            placeholder="Agregar comentario al historial clínico del paciente"
            value={entry}
            onChange={(e) => setEntry(e.target.value)}
          ></textarea>
          <button onClick={addEntry}>
            <IoMdAddCircle />
          </button>
        </div>
      )}
      {props.history &&
        props.history.map((item) => (
          <MedicalHistoryItem date={moment(item.date).format("DD/MM/YYYY")}>
            {item.entry}
          </MedicalHistoryItem>
        ))}
    </CardContainer>
  );
};

export default MedicalHistory;
