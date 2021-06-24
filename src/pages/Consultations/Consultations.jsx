import React, { useState, useEffect } from "react";
import ConsultationLinkCard from "../../components/Consultations/ConsultationLinkCard";
import Whiteboard from "../../components/General/Whiteboard";
import styles from "./Consultations.module.css";
import { Link } from "react-router-dom";
import { IoIosAddCircle } from "react-icons/io";
import axios from "axios";
import appData from "../../assets/data/appData";

const AddConsultationCard = () => {
  return (
    <Link className={styles.cardContainer} to="/dashboard/consultas/nueva">
      <div className={styles.icon}>
        <IoIosAddCircle />
      </div>
      <h1>NUEVA CONSULTA </h1>
    </Link>
  );
};

const Consultations = () => {
  const [consultations, setConsultations] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const consultations = await axios.get(appData.apiUrl + "/consultations", {
        withCredentials: true,
      });
      setConsultations(consultations.data.data);
      console.log(consultations.data.data);
    }
    fetchData();
  }, []);
  return (
    <Whiteboard title="CONSULTAS">
      <div className={styles.consultationCards}>
        <AddConsultationCard />
        {consultations &&
          consultations.map((consultation, i) => (
            <ConsultationLinkCard key={i} consultation={consultation} />
          ))}
      </div>
    </Whiteboard>
  );
};

export default Consultations;
