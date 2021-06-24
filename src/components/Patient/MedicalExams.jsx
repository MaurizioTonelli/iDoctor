import React from "react";
import CardContainer from "../General/CardContainer";
import styles from "./MedicalExams.module.css";
import moment from "moment";

const MedicalExamItem = (props) => {
  return (
    <div className={styles.itemContainer}>
      <div className={styles.date}>{props.date}</div>
      <div className={styles.invoice}>FOLIO: {props.invoice}</div>
      <div className={styles.message}>{props.children}</div>
      <div
        className={`${styles.status} ${
          props.result ? styles.delivered : styles.pending
        }`}
      >
        {props.result ? "ENTREGADO" : "PENDIENTE"}
      </div>
    </div>
  );
};

const MedicalExams = ({ exams }) => {
  return (
    <CardContainer>
      <h1>EXÁMENES MÉDICOS</h1>
      {exams &&
        exams.map((exam) => (
          <MedicalExamItem
            date={
              exam.dateResolved
                ? moment(exam.dateResolved).format("DD/MM/YYYY")
                : moment(exam.dateRequested).format("DD/MM/YYYY")
            }
            invoice={exam.id}
            result={exam.result}
          >
            {exam.name}
          </MedicalExamItem>
        ))}
    </CardContainer>
  );
};

export default MedicalExams;
