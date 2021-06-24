import React, { useEffect, useState } from "react";
import PatientLinkCard from "../../components/Patient/PatientLinkCard";
import styles from "./Patients.module.css";
import Whiteboard from "../../components/General/Whiteboard";
import { Link } from "react-router-dom";
import { IoIosAddCircle } from "react-icons/io";
import axios from "axios";
import appData from "../../assets/data/appData";
import OutsideClickHandler from "react-outside-click-handler";

const AddPatientCard = () => {
  return (
    <Link className={styles.cardContainer} to="/dashboard/pacientes/nuevo">
      <div className={styles.icon}>
        <IoIosAddCircle />
      </div>
      <h1>NUEVO PACIENTE </h1>
    </Link>
  );
};

const DiagnosticModal = (props) => {
  const [diagnosis, setDiagnosis] = useState("");
  const validateForm = () => {
    if (diagnosis === "") {
      return false;
    }
    return true;
  };

  const diagnoseUser = () => {
    if (!validateForm()) return;
    const formData = new FormData();
    formData.append("diagnosis", diagnosis);
    axios
      .put(appData.apiUrl + "/patient/diagnose/" + props.id, formData, {
        withCredentials: true,
      })
      .then((res) => {
        window.location.reload(false);
      })
      .catch((res) => {
        alert("Ocurrió un error");
      });
  };
  return (
    <div className={styles.cardInside}>
      <h1>Asignar diagnóstico</h1>
      <input
        type="text"
        placeholder="Ingresa un diagnóstico..."
        value={diagnosis}
        onChange={(e) => setDiagnosis(e.target.value)}
      />
      <button onClick={diagnoseUser}>Asignar</button>
    </div>
  );
};
const TransferModal = (props) => {
  const [room, setRoom] = useState("");
  const validateForm = () => {
    if (room === "") {
      return false;
    }
    return true;
  };

  const transferUser = () => {
    if (!validateForm()) return;
    const formData = new FormData();
    formData.append("room", room);
    axios
      .put(appData.apiUrl + "/patient/transfer/" + props.id, formData, {
        withCredentials: true,
      })
      .then((res) => {
        window.location.reload(false);
      })
      .catch((res) => {
        alert("Ocurrió un error");
      });
  };
  return (
    <div className={styles.cardInside}>
      <h1>Transferir paciente</h1>
      <input
        type="number"
        placeholder="Ingresar habitación..."
        value={room}
        onChange={(e) => setRoom(e.target.value)}
      />
      <button onClick={transferUser}>Asignar</button>
    </div>
  );
};

const ModalScreen = (props) => {
  let screenShown =
    props.action === "diagnose" ? (
      <DiagnosticModal id={props.id} />
    ) : (
      <TransferModal id={props.id} />
    );

  return (
    <div className={styles.modalBackground}>
      <OutsideClickHandler onOutsideClick={props.closeModalScreen}>
        <div className={styles.modalCard}>{screenShown}</div>
      </OutsideClickHandler>
    </div>
  );
};
const Patients = () => {
  const [patients, setPatients] = useState([]);
  const [modalScreen, setModalScreen] = useState(false);
  const [selectedId, setSelectedId] = useState(0);
  const [action, setAction] = useState("");

  const closeModalScreen = () => {
    setModalScreen(false);
  };
  const openDiagnose = (sid) => {
    setAction("diagnose");
    setModalScreen(true);
    setSelectedId(sid);
  };
  const openTransfer = (sid) => {
    setAction("transfer");
    setModalScreen(true);
    setSelectedId(sid);
  };

  useEffect(() => {
    axios
      .get(appData.apiUrl + "/patients", { withCredentials: true })
      .then((res) => {
        setPatients(res.data.data);
      });
  }, []);
  return (
    <Whiteboard title="MIS PACIENTES">
      <div className={styles.patients}>
        <AddPatientCard />
        {patients &&
          patients.map((patient) => (
            <PatientLinkCard
              name={patient.name}
              room={patient.room}
              consultingRoom={patient.consultingRoom}
              image={patient.profileImage}
              diagnosis={patient.diagnosis}
              id={patient.id}
              openDiagnose={openDiagnose}
              openTransfer={openTransfer}
            />
          ))}
      </div>
      {modalScreen && (
        <ModalScreen
          action={action}
          closeModalScreen={closeModalScreen}
          id={selectedId}
        />
      )}
    </Whiteboard>
  );
};

export default Patients;
