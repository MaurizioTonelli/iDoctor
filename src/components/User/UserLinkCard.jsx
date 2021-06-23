import React from "react";
import styles from "./UserLinkCard.module.css";
import appData from "../../assets/data/appData";
const UserLinkCard = (props) => {
  return (
    <div className={styles.cardContainer}>
      <img
        className={styles.image}
        src={appData.apiUrl + "/images/" + props.image}
        alt="patient"
      />

      <h2>{props.name}</h2>
      <h2 className={styles.role}>ROL: {props.role}</h2>

      <h2 className={styles.username}>USUARIO: {props.username}</h2>
      <a className={styles.link} href={"/dashboard/personal/" + props.id}>
        VER MÁS
      </a>
    </div>
  );
};

export default UserLinkCard;
