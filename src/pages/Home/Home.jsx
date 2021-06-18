import React from "react";
import styles from "./Home.module.css";
import PatientInfoCard from "../../components/Patient/PatientInfoCard";
import MedicalHistory from "../../components/Patient/MedicalHistory";
import MedicalExams from "../../components/Patient/MedicalExams";
const Home = () => {
  return (
    <>
      <h1 className={styles.title}>PATIENT INFO</h1>
      <div className={styles.whiteBoard}>
        <PatientInfoCard />
        <MedicalHistory />
        <MedicalExams />
      </div>
    </>
  );
};

export default Home;
