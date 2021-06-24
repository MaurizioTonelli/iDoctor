import React, { useState, useEffect } from "react";
import Whiteboard from "../../../components/General/Whiteboard";
import styles from "./NewConsultation.module.css";
import CardContainer from "../../../components/General/CardContainer";
import axios from "axios";
import appData from "../../../assets/data/appData";
import moment from "moment";
import { useHistory } from "react-router-dom";

const ConsultationForm = (props) => {
  const [patientId, setPatientId] = useState("");
  const [datetime, setDatetime] = useState(
    moment(new Date()).format("YYYY-MM-DDThh:mm")
  );
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState([]);
  const history = useHistory();

  const validateForm = () => {
    setErrors([]);
    let formIsValid = true;
    let errorsArray = [];
    if (isNaN(patientId) || patientId === "") {
      formIsValid = false;
      errorsArray.push("Se requiere un id numérico y válido");
    }
    setErrors([...errorsArray]);
    return formIsValid;
  };
  const createConsultation = (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    const formData = new FormData();
    formData.append("datetime", datetime);
    formData.append("patientId", patientId);
    if (phone !== "") {
      formData.append("phone", phone);
    }
    axios
      .post(appData.apiUrl + "/consultations", formData, {
        withCredentials: true,
      })
      .then((res) => {
        history.push("/dashboard/consultas");
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  };
  return (
    <>
      <form className={styles.patientForm} onSubmit={createConsultation}>
        <label htmlFor="name">* Id del paciente</label>
        <input
          list="patientData"
          type="text"
          id="name"
          name="name"
          value={patientId}
          onChange={(e) => setPatientId(e.target.value)}
        />
        <datalist id="patientData">
          {props.patients.map((patient) => (
            <option value={patient.id}>{patient.name}</option>
          ))}
        </datalist>
        <label htmlFor="datetime">* Fecha y hora de la consulta</label>
        <input
          type="datetime-local"
          id="datetime"
          name="datetime"
          value={datetime}
          onChange={(e) => setDatetime(e.target.value)}
        />

        <label htmlFor="phone">Teléfono de contacto</label>
        <input
          type="text"
          id="phone"
          name="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <input type="submit" value="CREAR CONSULTA" />
      </form>
      {errors && (
        <div className={styles.errors}>
          {errors.map((error) => (
            <div className={styles.error}>{error}</div>
          ))}
        </div>
      )}
    </>
  );
};

const NewConsultation = () => {
  const [patients, setPatients] = useState([]);
  useEffect(() => {
    axios
      .get(appData.apiUrl + "/patients", { withCredentials: true })
      .then((res) => {
        setPatients(res.data.data);
      })
      .catch((err) => {
        alert("Ocurrió un error");
      });
  }, []);
  return (
    <Whiteboard title="NUEVA CONSULTA">
      <CardContainer>
        <h1>DATOS DE LA CONSULTA</h1>
        <ConsultationForm patients={patients} />
      </CardContainer>
    </Whiteboard>
  );
};

export default NewConsultation;
