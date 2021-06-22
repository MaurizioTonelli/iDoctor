import React from "react";
import styles from "./UserLinkCard.module.css";

const UserLinkCard = () => {
  return (
    <div className={styles.cardContainer}>
      <img
        className={styles.image}
        src="/assets/images/doctor_profile1.jpg"
        alt="patient"
      />
      <h1>JUAN JOSÉ </h1>
      <h2>GONZALES MARTÍNEZ</h2>
      <h2 className={styles.role}>ROL: DOCTOR</h2>

      <h2 className={styles.username}>USUARIO: martinezg123</h2>
      <a className={styles.link} href="/dashboard/personal/23">
        VER MÁS
      </a>
    </div>
  );
};

export default UserLinkCard;
