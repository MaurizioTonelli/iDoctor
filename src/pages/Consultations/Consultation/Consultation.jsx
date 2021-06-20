import React from "react";
import Whiteboard from "../../../components/General/Whiteboard";
import styles from "./Consultation.module.css";
import PatientInfoCard from "../../../components/Patient/PatientInfoCard";
import MedicalHistory from "../../../components/Patient/MedicalHistory";
import MedicalExams from "../../../components/Patient/MedicalExams";

const Consultation = () => {
  return (
    <Whiteboard title="INFORMACIÓN DE PACIENTE">
      <PatientInfoCard />
      <MedicalHistory consultation />
      <MedicalExams />
    </Whiteboard>
  );
};

export default Consultation;
