import React from "react";
import GenerateExamForm from "../../../components/Exams/GenerateExamForm";
import Whiteboard from "../../../components/General/Whiteboard";
import PatientInfoCard from "../../../components/Patient/PatientInfoCard";

const GenerateExam = () => {
  return (
    <Whiteboard title="GENERAR RESULTADO DE EXAMEN">
      <GenerateExamForm />
      <PatientInfoCard />
    </Whiteboard>
  );
};

export default GenerateExam;
