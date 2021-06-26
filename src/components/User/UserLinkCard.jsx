import React, { useState } from "react";
import styles from "./UserLinkCard.module.css";
import appData from "../../assets/data/appData";
import { FiMoreVertical } from "react-icons/fi";
import { RiDeleteBack2Fill } from "react-icons/ri";
import axios from "axios";

const UserLinkCard = (props) => {
  const [moreMenu, setMoreMenu] = useState(false);
  const deleteUser = () => {
    axios
      .delete(appData.apiUrl + "/user/" + props.id, {
        headers: { authorization: "Bearer " + localStorage.getItem("token") },
      })
      .then((res) => {
        if (res.status === 500) {
          alert("Un error ocurrió al eliminar el usuario");
        }
        //TODO implementar codigo 400
        window.location.reload(false);
      });
  };
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
      <a className={styles.link} href={"#/dashboard/personal/" + props.id}>
        VER MÁS
      </a>
      <div
        className={styles.menuIcon}
        onMouseEnter={(e) => setMoreMenu(true)}
        onMouseLeave={(e) => setMoreMenu(false)}
      >
        <FiMoreVertical className={styles.icon} />
        {moreMenu && (
          <div className={styles.moreMenu}>
            <button onClick={deleteUser}>
              Eliminar <RiDeleteBack2Fill />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserLinkCard;
