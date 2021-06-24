import React, { useState } from "react";
import CardContainer from "../General/CardContainer";
import styles from "./GenerateExamForm.module.css";
import axios from "axios";
import appData from "../../assets/data/appData";
import moment from "moment";
import { useParams } from "react-router-dom";
import SolicitExam from "../../pages/Exams/SolicitExam/SolicitExam";

const GenerateExamForm = (props) => {
  const [file, setFile] = useState(null);
  const { id } = useParams();

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };
  const validateForm = () => {
    if (!file) {
      return false;
    }
    return true;
  };
  const uploadResult = (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    const formData = new FormData();
    let date = moment(new Date()).format("YYYY-MM-DD");
    formData.append("file", file);
    formData.append("dateResolved", date);
    axios
      .put(appData.apiUrl + "/exam/" + id, formData, { withCredentials: true })
      .then((res) => {
        window.location.reload(false);
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  };
  return (
    <CardContainer>
      <h1>SUBIR RESULTADO DE EXAMEN / FOLIO 12323</h1>
      <h2>EXAMEN DE SANGRE</h2>

      <form action="" className={styles.resultForm} onSubmit={uploadResult}>
        <label for="resultFile">Resultado del examen (PDF)</label>
        <input
          type="file"
          id="resultFile"
          accept="application/pdf"
          multiple={false}
          onChange={handleFileChange}
        />
        <input type="submit" value="SUBIR EXAMEN" />
      </form>
      {props.exam.result && (
        <a
          className={styles.results}
          href={appData.apiUrl + "/files/" + props.exam.result}
          target="_blank"
          rel="noreferrer"
        >
          VER RESULTADO DEL EXAMEN
        </a>
      )}
    </CardContainer>
  );
};

export default GenerateExamForm;
