import React, { useState, useEffect } from "react";
import PatientInfoCard from "../../../components/Patient/PatientInfoCard";
import MedicalHistory from "../../../components/Patient/MedicalHistory";
import MedicalExams from "../../../components/Patient/MedicalExams";
import Whiteboard from "../../../components/General/Whiteboard";
import axios from "axios";
import appData from "../../../assets/data/appData";
import { useParams, useHistory } from "react-router-dom";
import NewPatientForm from "../../../components/Patient/NewPatientForm";

function isEmpty(obj) {
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) return false;
  }
  return true;
}

const Patient = () => {
  const [patient, setPatient] = useState({});
  const [history, setHistory] = useState([]);
  const [exams, setExams] = useState([]);

  const { id } = useParams();
  useEffect(() => {
    async function fetchData() {
      const patient = await axios.get(appData.apiUrl + "/patient/" + id, {
        withCredentials: true,
      });
      setPatient(patient.data.data[0]);
      const exams = await axios.get(appData.apiUrl + "/patient/exams/" + id, {
        withCredentials: true,
      });
      setExams(exams.data.data);
      const history = await axios.get(
        appData.apiUrl + "/patient/history/" + id,
        { withCredentials: true }
      );
      setHistory(history.data.data);
    }
    fetchData();
  }, []);
  return (
    <Whiteboard title="INFORMACIÓN DE PACIENTE">
      {patient && <PatientInfoCard patient={patient} />}
      {history && <MedicalHistory history={history} />}
      {exams && <MedicalExams exams={exams} />}
      {!isEmpty(patient) && <NewPatientForm patient={patient} />}
    </Whiteboard>
  );
};

export default Patient;
