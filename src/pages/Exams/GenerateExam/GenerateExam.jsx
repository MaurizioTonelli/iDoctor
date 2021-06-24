import React, { useState, useEffect } from "react";
import GenerateExamForm from "../../../components/Exams/GenerateExamForm";
import Whiteboard from "../../../components/General/Whiteboard";
import PatientInfoCard from "../../../components/Patient/PatientInfoCard";
import axios from "axios";
import appData from "../../../assets/data/appData";
import { useParams } from "react-router-dom";

function isEmpty(obj) {
  for (var prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      return false;
    }
  }

  return JSON.stringify(obj) === JSON.stringify({});
}
const GenerateExam = () => {
  const [exam, setExam] = useState({});
  const [patient, setPatient] = useState({});
  const { id } = useParams();

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get(appData.apiUrl + "/exam/" + id, {
        withCredentials: true,
      });
      setExam(res.data.data[0]);
      console.log(res.data.data[0]);
      const patient = await axios.get(
        appData.apiUrl + "/patient/" + res.data.data[0].patientId,
        {
          withCredentials: true,
        }
      );
      setPatient(patient.data.data[0]);
    }
    fetchData();
  }, []);
  return (
    <Whiteboard title="GENERAR RESULTADO DE EXAMEN">
      {!isEmpty(exam) && <GenerateExamForm exam={exam} />}
      {patient && <PatientInfoCard patient={patient} />}
    </Whiteboard>
  );
};

export default GenerateExam;
