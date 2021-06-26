import React, { useState, useEffect } from "react";
import styles from "./Exam.module.css";
import Whiteboard from "../../../components/General/Whiteboard";
import PatientInfoCard from "../../../components/Patient/PatientInfoCard";
import ExamResults from "../../../components/Exams/ExamResults";
import axios from "axios";
import appData from "../../../assets/data/appData";
import { useParams } from "react-router-dom";

const Exam = () => {
  const [exam, setExam] = useState({});
  const [patient, setPatient] = useState({});
  const { id } = useParams();

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get(appData.apiUrl + "/exam/" + id, {
        headers: { authorization: "Bearer " + localStorage.getItem("token") },
      });
      setExam(res.data.data[0]);
      console.log(res.data.data[0]);
      const patient = await axios.get(
        appData.apiUrl + "/patient/" + res.data.data[0].patientId,
        {
          headers: { authorization: "Bearer " + localStorage.getItem("token") },
        }
      );
      setPatient(patient.data.data[0]);
    }
    fetchData();
  }, []);
  return (
    <Whiteboard title={"EXÁMENES MÉDICOS/ FOLIO " + exam.id}>
      {exam && <ExamResults exam={exam} />}
      {patient && <PatientInfoCard patient={patient} />}
    </Whiteboard>
  );
};

export default Exam;
