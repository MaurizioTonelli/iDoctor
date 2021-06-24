import React from "react";
import CardContainer from "../General/CardContainer";
import styles from "./MedicalHistory.module.css";
import { IoMdAddCircle } from "react-icons/io";
import moment from "moment";

const MedicalHistoryItem = (props) => {
  return (
    <div className={styles.itemContainer}>
      <div className={styles.date}>{props.date}</div>
      <div className={styles.message}>{props.children}</div>
    </div>
  );
};

const MedicalHistory = (props) => {
  return (
    <CardContainer>
      <h1>HISTORIAL CLINICO</h1>
      {props.consultation && (
        <div className={styles.consultationForm}>
          <textarea
            className={styles.consultationComment}
            placeholder="Agregar comentario al historial clínico del paciente"
          ></textarea>
          <button>
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
