import React from "react";
import Whiteboard from "../../../components/General/Whiteboard";
import CardContainer from "../../../components/General/CardContainer";
import styles from "./SolicitExam.module.css";

const ExamForm = () => {
  return (
    <CardContainer>
      <h1>DATOS DE NUEVO EXAMEN</h1>
      <form action="" className={styles.examForm}>
        <label for="patient">Nombre del Paciente</label>
        <input type="text" id="patient" name="patientName" />
        <label for="exam">Examen solicitado</label>
        <input type="text" id="exam" name="exam" />
        <input type="submit" value="SOLICITAR EXAMEN" />
      </form>
    </CardContainer>
  );
};
const SolicitExam = () => {
  return (
    <Whiteboard title="EXAMENES MÉDICOS / NUEVO EXAMEN">
      <ExamForm></ExamForm>
    </Whiteboard>
  );
};

export default SolicitExam;
