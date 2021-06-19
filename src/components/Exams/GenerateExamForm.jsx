import React from "react";
import CardContainer from "../General/CardContainer";
import styles from "./GenerateExamForm.module.css";

const GenerateExamForm = () => {
  return (
    <CardContainer>
      <h1>SUBIR RESULTADO DE EXAMEN / FOLIO 12323</h1>
      <h2>EXAMEN DE SANGRE</h2>
      <form action="" className={styles.resultForm}>
        <label for="resultFile">Resultado del examen (PDF)</label>
        <input type="file" id="resultFile" />
        <input type="submit" value="SUBIR EXAMEN" />
      </form>
    </CardContainer>
  );
};

export default GenerateExamForm;
