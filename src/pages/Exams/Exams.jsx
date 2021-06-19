import React from "react";
import styles from "./Exams.module.css";
import WhiteBoard from "../../components/General/Whiteboard";
import CardContainer from "../../components/General/CardContainer";
import SolicitedExams from "../../components/Exams/SolicitedExams";

const Exams = () => {
  return (
    <WhiteBoard title="EXÁMENES MÉDICOS">
      <SolicitedExams />
    </WhiteBoard>
  );
};

export default Exams;
