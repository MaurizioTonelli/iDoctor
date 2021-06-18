import React from "react";
import PatientInfoCard from "../../../components/Patient/PatientInfoCard";
import MedicalHistory from "../../../components/Patient/MedicalHistory";
import MedicalExams from "../../../components/Patient/MedicalExams";
import Whiteboard from "../../../components/General/Whiteboard";
const Patient = () => {
  return (
    <Whiteboard title="INFORMACIÓN DE PACIENTE">
      <PatientInfoCard />
      <MedicalHistory />
      <MedicalExams />
    </Whiteboard>
  );
};

export default Patient;
