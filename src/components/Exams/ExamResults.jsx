import React from "react";
import CardContainer from "../General/CardContainer";
import styles from "./ExamResults.module.css";
import { IoSend } from "react-icons/io5";

const ExamResultCard = (props) => {
  return (
    <div className={styles.itemContainer}>
      <div className={styles.date}>{props.date}</div>
      <div className={styles.message}>{props.children}</div>
      <button>VER PDF</button>
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
const AddCommentSection = () => {
  return (
    <form action="" className={styles.commentForm}>
      <textarea name="" id="" cols="30" rows="10"></textarea>
      <button>
        <IoSend />
      </button>
    </form>
  );
};

const ExamResults = () => {
  return (
    <CardContainer>
      <h1>RESULTADOS</h1>
      <AddCommentSection />
      <CommentCard date="26/06/2018">
        EL EXAMEN DIÓ POSITIVO A HEPATITIS A
      </CommentCard>
      <ExamResultCard date="26/06/2018">EXAMEN DE SANGRE</ExamResultCard>
    </CardContainer>
  );
};

export default ExamResults;
