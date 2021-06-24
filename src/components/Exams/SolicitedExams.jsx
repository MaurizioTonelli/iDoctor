import React, { useState, useEffect } from "react";
import CardContainer from "../General/CardContainer";
import { IoMdAddCircle } from "react-icons/io";
import styles from "./SolicitedExams.module.css";
import { Link } from "react-router-dom";
import axios from "axios";
import appData from "../../assets/data/appData";
import moment from "moment";

const SolicitedExamItem = (props) => {
  const [patient, setPatient] = useState({});
  useEffect(() => {
    axios
      .get(appData.apiUrl + "/patient/" + props.patientId, {
        withCredentials: true,
      })
      .then((res) => {
        setPatient(res.data.data[0]);
      });
  }, []);
  return (
    <Link
      className={styles.itemContainer}
      to={"/dashboard/examenes/" + props.invoice}
    >
      <div className={styles.date}>{props.date}</div>
      <div className={styles.invoice}>FOLIO: {props.invoice}</div>
      <div className={styles.examName}>{props.children}</div>
      <div className={styles.patientName}>({patient && patient.name})</div>
      <div
        className={`${styles.status} ${
          props.result ? styles.delivered : styles.pending
        }`}
      >
        {props.result ? "ENTREGADO" : "PENDIENTE"}
      </div>
    </Link>
  );
};

const SolicitedExams = () => {
  const [exams, setExams] = useState([]);

  useEffect(() => {
    axios
      .get(appData.apiUrl + "/exams", { withCredentials: true })
      .then((res) => {
        setExams(res.data.data);
      })
      .catch((err) => {
        alert("Ocurrió un error");
      });
  }, []);
  return (
    <CardContainer>
      <h1>EXÁMENES SOLICITADOS</h1>
      <Link to="examenes/nuevo" className={styles.newExam}>
        <IoMdAddCircle />
        SOLICITAR NUEVO EXAMEN
      </Link>
      {exams &&
        exams.map((exam) => (
          <SolicitedExamItem
            date={moment(exam.dateRequested).format("DD/MM/YYYY")}
            invoice={exam.id}
            patientId={exam.patientId}
            result={exam.result}
          >
            {exam.name}
          </SolicitedExamItem>
        ))}
    </CardContainer>
  );
};

export default SolicitedExams;
