import React, { useState, useEffect } from "react";
import Whiteboard from "../../../components/General/Whiteboard";
import styles from "./Consultation.module.css";
import PatientInfoCard from "../../../components/Patient/PatientInfoCard";
import MedicalHistory from "../../../components/Patient/MedicalHistory";
import MedicalExams from "../../../components/Patient/MedicalExams";
import { useParams } from "react-router-dom";
import axios from "axios";
import appData from "../../../assets/data/appData";
import { useHistory } from "react-router-dom";

const Consultation = () => {
  const { id } = useParams();
  const [exams, setExams] = useState([]);
  const [patient, setPatient] = useState([]);
  const [consultation, setConsultation] = useState([]);
  const [history, setHistory] = useState([]);

  let routerHistory = useHistory();

  useEffect(() => {
    async function fetchData() {
      const consultation = await axios.get(
        appData.apiUrl + "/consultation/" + id,
        { withCredentials: true }
      );
      setConsultation(consultation.data.data[0]);
      const patient = await axios.get(
        appData.apiUrl + "/patient/" + consultation.data.data[0].patientId,
        { withCredentials: true }
      );
      setPatient(patient.data.data[0]);
      const exams = await axios.get(
        appData.apiUrl + "/patient/exams/" + patient.data.data[0].id,
        { withCredentials: true }
      );
      setExams(exams.data.data);
      const history = await axios.get(
        appData.apiUrl + "/patient/history/" + patient.data.data[0].id,
        { withCredentials: true }
      );
      setHistory(history.data.data);
    }
    fetchData();
  }, [id]);

  const deleteConsultation = () => {
    axios
      .delete(appData.apiUrl + "/consultation/" + consultation.id, {
        withCredentials: true,
      })
      .then((res) => {
        routerHistory.push("/dashboard/consultas");
      })
      .catch((err) => {
        alert("Ocurrió un error");
      });
  };

  return (
    <Whiteboard title="INFORMACIÓN DE PACIENTE">
      {patient && <PatientInfoCard patient={patient} />}
      <MedicalHistory consultation history={history} patient={patient} />
      <MedicalExams exams={exams} />
      <div className={styles.buttonContainer}>
        <button className={styles.delete} onClick={deleteConsultation}>
          Finalizar consulta
        </button>
      </div>
    </Whiteboard>
  );
};

export default Consultation;
