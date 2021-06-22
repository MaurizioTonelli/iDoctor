import React from "react";
import { Link } from "react-router-dom";
import styles from "./ExamsToGenerate.module.css";
import CardContainer from "../General/CardContainer";

const SolicitedExamItem = (props) => {
  return (
    <Link className={styles.itemContainer} to="/dashboard/examenesagenerar/123">
      <div className={styles.date}>{props.date}</div>
      <div className={styles.invoice}>FOLIO: {props.invoice}</div>
      <div className={styles.examName}>{props.children}</div>
      <div className={styles.patientName}>({props.patientName})</div>
      <div
        className={`${styles.status} ${
          props.delivered ? styles.delivered : styles.pending
        }`}
      >
        {props.delivered ? "ENTREGADO" : "PENDIENTE"}
      </div>
    </Link>
  );
};

const ExamsToGenerate = () => {
  return (
    <CardContainer>
      <h1>EXÁMENES SOLICITADOS</h1>

      <SolicitedExamItem
        date="23/06/2019"
        invoice="3434"
        patientName="Martin Morales Gudiño"
      >
        EXAMEN DE SANGRE
      </SolicitedExamItem>
      <SolicitedExamItem
        date="23/06/2019"
        invoice="3434"
        patientName="Martin Morales Gudiño"
      >
        EXAMEN DE SANGRE
      </SolicitedExamItem>
      <SolicitedExamItem
        date="23/06/2019"
        invoice="3434"
        patientName="Martin Morales Gudiño"
      >
        EXAMEN DE SANGRE
      </SolicitedExamItem>
      <SolicitedExamItem
        date="23/06/2019"
        invoice="3434"
        patientName="Martin Morales Gudiño"
      >
        EXAMEN DE SANGRE
      </SolicitedExamItem>
    </CardContainer>
  );
};

export default ExamsToGenerate;
