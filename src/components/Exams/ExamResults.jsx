import React, { useState, useEffect, useContext } from "react";
import CardContainer from "../General/CardContainer";
import styles from "./ExamResults.module.css";
import { IoSend } from "react-icons/io5";
import axios from "axios";
import appData from "../../assets/data/appData";
import moment from "moment";
import { Link } from "react-router-dom";
import UserContext from "../../UserContext";

const ExamResultCard = (props) => {
  return (
    <div className={styles.itemContainer}>
      <div className={styles.date}>{props.date}</div>
      <div className={styles.message}>{props.children}</div>
      <a
        href={appData.apiUrl + "/files/" + props.result}
        target="_blank"
        rel="noreferrer"
      >
        VER PDF
      </a>
    </div>
  );
};
const CommentCard = (props) => {
  return (
    <div className={styles.itemContainer}>
      <div className={styles.date}>{props.date}</div>
      <div className={styles.message}>COMENTARIO: {props.children}</div>
    </div>
  );
};
const AddCommentSection = ({ id, patientId }) => {
  const [comment, setComment] = useState("");
  const validateForm = () => {
    if (comment === "") {
      return false;
    }
    return true;
  };
  const sendComment = (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    const formData = new FormData();
    let date = moment(new Date()).format("YYYY-MM-DD");
    formData.append("examId", id);
    formData.append("comment", comment);
    formData.append("date", date);
    formData.append("patientId", patientId);
    axios
      .post(appData.apiUrl + "/exams/entry/" + id, formData, {
        headers: { authorization: "Bearer " + localStorage.getItem("token") },
      })
      .then((res) => {
        window.location.reload(false);
      })
      .catch((err) => {
        alert("Ocurrió un error");
      });
  };
  return (
    <form action="" className={styles.commentForm}>
      <textarea
        name=""
        id=""
        cols="30"
        rows="10"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      ></textarea>
      <button onClick={sendComment}>
        <IoSend />
      </button>
    </form>
  );
};

const ExamResults = ({ exam }) => {
  const user = useContext(UserContext);
  return (
    <CardContainer>
      <h1>RESULTADOS</h1>
      {user && user.role === "doctor" && (
        <AddCommentSection id={exam.id} patientId={exam.patientId} />
      )}
      {exam.entries &&
        exam.entries.map((entry) => (
          <CommentCard date={moment(entry.date).format("DD/MM/YYYY")}>
            {entry.comment}
          </CommentCard>
        ))}
      {exam.result && (
        <ExamResultCard
          result={exam.result}
          date={moment(exam.dateResolved).format("DD/MM/YYYY")}
        >
          {exam.name}
        </ExamResultCard>
      )}
    </CardContainer>
  );
};

export default ExamResults;
