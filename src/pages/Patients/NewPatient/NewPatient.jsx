import React from "react";
import Whiteboard from "../../../components/General/Whiteboard";
import NewPatientForm from "../../../components/Patient/NewPatientForm";

const NewPatient = () => {
  return (
    <Whiteboard title="AÑADIR NUEVO PACIENTE">
      <NewPatientForm />
    </Whiteboard>
  );
};

export default NewPatient;
