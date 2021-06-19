import React from "react";
import styles from "./Exam.module.css";
import Whiteboard from "../../../components/General/Whiteboard";
import PatientInfoCard from "../../../components/Patient/PatientInfoCard";
import ExamResults from "../../../components/Exams/ExamResults";
const Exam = () => {
  return (
    <Whiteboard title="EXÁMENES MÉDICOS/ FOLIO 1232">
      <ExamResults />
      <PatientInfoCard />
    </Whiteboard>
  );
};

export default Exam;
