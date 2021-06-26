import React, { useState, useEffect, useContext } from "react";
import Whiteboard from "../../../components/General/Whiteboard";
import CardContainer from "../../../components/General/CardContainer";
import styles from "./SolicitExam.module.css";
import axios from "axios";
import appData from "../../../assets/data/appData";
import moment from "moment";
import { useHistory } from "react-router-dom";
import UserContext from "../../../UserContext";

const ExamForm = () => {
  const [name, setName] = useState("");
  const [patientId, setPatientId] = useState("");
  const [patients, setPatients] = useState([]);
  const [errors, setErrors] = useState([]);
  const user = useContext(UserContext);

  const history = useHistory();

  const validateForm = () => {
    setErrors([]);
    let errorArray = [];
    let formIsValid = true;
    if (isNaN(patientId) || patientId === "") {
      formIsValid = false;
      errorArray.push("Se requiere un id numérico válido");
    }
    if (name === "") {
      formIsValid = false;
      errorArray.push("Se requiere un nombre de examen");
    }
    setErrors([...errorArray]);
    return formIsValid;
  };

  const addExam = (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    let now = moment(new Date()).format("YYYY-MM-DD");
    let formData = new FormData();
    formData.append("id", patientId);
    formData.append("name", name);
    formData.append("date", now);

    axios
      .post(appData.apiUrl + "/exams", formData, {
        headers: { authorization: "Bearer " + localStorage.getItem("token") },
      })
      .then((res) => {
        history.push("/dashboard/examenes");
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  };

  useEffect(() => {
    axios
      .get(appData.apiUrl + "/assignedPatients/" + user.id, {
        headers: { authorization: "Bearer " + localStorage.getItem("token") },
      })
      .then((res) => {
        setPatients(res.data.data);
      })
      .catch((res) => {
        console.log("Ocurrió un error");
      });
  }, []);
  return (
    <CardContainer>
      <h1>DATOS DE NUEVO EXAMEN</h1>
      <form action="" className={styles.examForm} onSubmit={addExam}>
        <label for="patient">Id del Paciente</label>
        <input
          list="patientList"
          type="text"
          id="patient"
          name="patientName"
          value={patientId}
          onChange={(e) => setPatientId(e.target.value)}
        />
        <datalist id="patientList">
          {patients.map((patient) => (
            <option value={patient.id}>{patient.name}</option>
          ))}
        </datalist>
        <label for="exam">Examen solicitado</label>
        <input
          type="text"
          id="exam"
          name="exam"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input type="submit" value="SOLICITAR EXAMEN" />
      </form>
      {errors && (
        <div className={styles.errors}>
          {errors.map((error, i) => (
            <div key={i} className={styles.error}>
              {error}
            </div>
          ))}
        </div>
      )}
    </CardContainer>
  );
};
const SolicitExam = () => {
  return (
    <Whiteboard title="EXAMENES MÉDICOS / NUEVO EXAMEN">
      <ExamForm></ExamForm>
    </Whiteboard>
  );
};

export default SolicitExam;
