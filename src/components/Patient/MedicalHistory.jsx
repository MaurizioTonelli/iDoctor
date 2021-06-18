import React from "react";
import CardContainer from "../General/CardContainer";
import styles from "./MedicalHistory.module.css";

const MedicalHistoryItem = (props) => {
  return (
    <div className={styles.itemContainer}>
      <div className={styles.date}>{props.date}</div>
      <div className={styles.message}>{props.children}</div>
    </div>
  );
};

const MedicalHistory = () => {
  return (
    <CardContainer>
      <h1>HISTORIAL CLINICO</h1>
      <MedicalHistoryItem date="23/06/2019">
        Se realizó estudio de sangre, los resultados indican Hepatitis A
      </MedicalHistoryItem>
      <MedicalHistoryItem date="23/06/2019">
        Se realizó estudio de sangre, los resultados indican Hepatitis A
      </MedicalHistoryItem>
      <MedicalHistoryItem date="23/06/2019">
        Se realizó estudio de sangre, los resultados indican Hepatitis A
      </MedicalHistoryItem>
      <MedicalHistoryItem date="23/06/2019">
        Se realizó estudio de sangre, los resultados indican Hepatitis A
      </MedicalHistoryItem>
    </CardContainer>
  );
};

export default MedicalHistory;
