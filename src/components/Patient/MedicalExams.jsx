import React from "react";
import CardContainer from "../General/CardContainer";
import styles from "./MedicalExams.module.css";

const MedicalExamItem = (props) => {
  return (
    <div className={styles.itemContainer}>
      <div className={styles.date}>{props.date}</div>
      <div className={styles.invoice}>FOLIO: {props.invoice}</div>
      <div className={styles.message}>{props.children}</div>
      <div
        className={`${styles.status} ${
          props.delivered ? styles.delivered : styles.pending
        }`}
      >
        {props.delivered ? "ENTREGADO" : "PENDIENTE"}
      </div>
    </div>
  );
};

const MedicalExams = () => {
  return (
    <CardContainer>
      <h1>EXÁMENES MÉDICOS</h1>
      <MedicalExamItem date="23/06/2019" invoice="3434">
        Se realizó estudio de sangre, los resultados indican Hepatitis A
      </MedicalExamItem>
      <MedicalExamItem date="23/06/2019" delivered>
        Se realizó estudio de sangre, los resultados indican Hepatitis A
      </MedicalExamItem>
      <MedicalExamItem date="23/06/2019">
        Se realizó estudio de sangre, los resultados indican Hepatitis A
      </MedicalExamItem>
      <MedicalExamItem date="23/06/2019">
        Se realizó estudio de sangre, los resultados indican Hepatitis A
      </MedicalExamItem>
    </CardContainer>
  );
};

export default MedicalExams;
