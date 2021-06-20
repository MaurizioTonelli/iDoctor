import React, { useState } from "react";
import Whiteboard from "../../../components/General/Whiteboard";
import styles from "./NewConsultation.module.css";
import CardContainer from "../../../components/General/CardContainer";
const ConsultationForm = () => {
  return (
    <form className={styles.patientForm}>
      <label htmlFor="name">Nombre del paciente</label>
      <input type="text" id="name" name="name" />
      <label htmlFor="datetime">Fecha y hora de la consulta</label>
      <input type="datetime-local" id="datetime" name="datetime" />

      <label htmlFor="phone">Teléfono de contacto</label>
      <input type="text" id="phone" name="phone" />
      <label htmlFor="studiesSolicited">Estudios solicitados</label>

      <input type="submit" value="CREAR CONSULTA" />
    </form>
  );
};

const NewConsultation = () => {
  return (
    <Whiteboard title="NUEVA CONSULTA">
      <CardContainer>
        <h1>DATOS DE LA CONSULTA</h1>
        <ConsultationForm />
      </CardContainer>
    </Whiteboard>
  );
};

export default NewConsultation;
