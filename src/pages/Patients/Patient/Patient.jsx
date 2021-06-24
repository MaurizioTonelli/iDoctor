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
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(appData.apiUrl + "/patient/" + id, { withCredentials: true })
      .then((res) => {
        setPatient(res.data.data[0]);
        console.log(res.data.data[0]);
      });
  }, []);
  return (
    <Whiteboard title="INFORMACIÓN DE PACIENTE">
      {patient && <PatientInfoCard patient={patient} />}
      <MedicalHistory />
      <MedicalExams />
      {!isEmpty(patient) && <NewPatientForm patient={patient} />}
    </Whiteboard>
  );
};

export default Patient;
