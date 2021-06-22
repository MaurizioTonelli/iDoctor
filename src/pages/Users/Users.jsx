import React from "react";
import styles from "./Users.module.css";
import Whiteboard from "../../components/General/Whiteboard";
import CardContainer from "../../components/General/CardContainer";
import UserLinkCard from "../../components/User/UserLinkCard";
import { Link } from "react-router-dom";
const Users = () => {
  return (
    <Whiteboard title="PERSONAL">
      <div className={styles.center}>
        <Link to="/dashboard/personal/nuevo" className={styles.newUser}>
          NUEVO USUARIO
        </Link>
      </div>
      <CardContainer>
        <h1>DOCTORES</h1>
        <div className={styles.personalCards}>
          <UserLinkCard />
          <UserLinkCard />
          <UserLinkCard />
          <UserLinkCard />
          <UserLinkCard />
        </div>
      </CardContainer>
      <CardContainer>
        <h1>ENFERMEROS</h1>
        <div className={styles.personalCards}>
          <UserLinkCard />
          <UserLinkCard />
          <UserLinkCard />
          <UserLinkCard />
          <UserLinkCard />
        </div>
      </CardContainer>
      <CardContainer>
        <h1>LABORATORISTAS</h1>
        <div className={styles.personalCards}>
          <UserLinkCard />
          <UserLinkCard />
          <UserLinkCard />
          <UserLinkCard />
          <UserLinkCard />
        </div>
      </CardContainer>
      <CardContainer>
        <h1>ADMINISTRADORES</h1>
        <div className={styles.personalCards}>
          <UserLinkCard />
          <UserLinkCard />
          <UserLinkCard />
          <UserLinkCard />
          <UserLinkCard />
        </div>
      </CardContainer>
    </Whiteboard>
  );
};

export default Users;
