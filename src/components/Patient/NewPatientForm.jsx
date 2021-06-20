import React, { useState } from "react";
import CardContainer from "../General/CardContainer";
import styles from "./NewPatientForm.module.css";
import { TiDelete } from "react-icons/ti";
import { IoAddCircleSharp } from "react-icons/io5";
const PatientForm = () => {
  const [illnessList, setIllnessList] = useState([]);
  const [illness, setIllness] = useState("");
  const [allergyList, setAllergyList] = useState([]);
  const [allergy, setAllergy] = useState("");
  const [doctorList, setDoctorList] = useState([]);
  const [doctor, setDoctor] = useState("");
  const [nurseList, setNurseList] = useState([]);
  const [nurse, setNurse] = useState("");
  const [hospitalized, setHospitalized] = useState(false);
  const [room, setRoom] = useState("");
  const [consultingRoom, setConsultingRoom] = useState("");

  const illnessListSection = illnessList.length ? (
    illnessList.map((illness, i) => {
      return (
        <li key={i}>
          <p>{illness}</p>
          <button onClick={(e) => handleDeleteIllness(e, i)}>
            <TiDelete />
          </button>
        </li>
      );
    })
  ) : (
    <p>No hay enfermedades preexistentes</p>
  );
  const allergyListSection = allergyList.length ? (
    allergyList.map((allergy, i) => {
      return (
        <li key={i}>
          <p>{allergy}</p>
          <button onClick={(e) => handleDeleteAllergy(e, i)}>
            <TiDelete />
          </button>
        </li>
      );
    })
  ) : (
    <p>No hay alergias</p>
  );

  const doctorListSection = doctorList.length ? (
    doctorList.map((doctor, i) => {
      return (
        <li key={i}>
          <p>{doctor}</p>
          <button onClick={(e) => handleDeleteDoctor(e, i)}>
            <TiDelete />
          </button>
        </li>
      );
    })
  ) : (
    <p>No hay doctores asignados</p>
  );

  const nurseListSection = nurseList.length ? (
    nurseList.map((nurse, i) => {
      return (
        <li key={i}>
          <p>{nurse}</p>
          <button onClick={(e) => handleDeleteNurse(e, i)}>
            <TiDelete />
          </button>
        </li>
      );
    })
  ) : (
    <p>No hay doctores asignados</p>
  );

  const handleAddIllness = (e) => {
    e.preventDefault();
    setIllnessList(illnessList.concat(illness));
  };
  const handleDeleteIllness = (e, index) => {
    e.preventDefault();
    let arrayCopy = [...illnessList];
    arrayCopy.splice(index, 1);
    setIllnessList(arrayCopy);
  };

  const handleAddAllergy = (e) => {
    e.preventDefault();
    setAllergyList(allergyList.concat(allergy));
  };
  const handleDeleteAllergy = (e, index) => {
    e.preventDefault();
    let arrayCopy = [...allergyList];
    arrayCopy.splice(index, 1);
    setAllergyList(arrayCopy);
  };

  const handleAddDoctor = (e) => {
    e.preventDefault();
    setDoctorList(doctorList.concat(doctor));
  };
  const handleDeleteDoctor = (e, index) => {
    e.preventDefault();
    let arrayCopy = [...doctorList];
    arrayCopy.splice(index, 1);
    setDoctorList(arrayCopy);
  };

  const handleAddNurse = (e) => {
    e.preventDefault();
    setNurseList(nurseList.concat(nurse));
  };
  const handleDeleteNurse = (e, index) => {
    e.preventDefault();
    let arrayCopy = [...nurseList];
    arrayCopy.splice(index, 1);
    setNurseList(arrayCopy);
  };
  const handleHospitalizedChange = (e) => {
    setHospitalized((status) => !status);
    setDoctorList([]);
    setNurseList([]);
    setRoom("");
    setConsultingRoom("");
  };

  return (
    <>
      <form className={styles.patientForm}>
        <label htmlFor="name">Nombre completo</label>
        <input type="text" id="name" name="name" />
        <label htmlFor="birthDate">Fecha de nacimiento</label>
        <input type="date" id="birthDate" name="birthDate" />
        <fieldset>
          <legend>Sexo</legend>
          <input type="radio" id="male" name="gender" value="male" />
          <label htmlFor="male">Hombre</label>
          <input type="radio" id="female" name="gender" value="female" />
          <label htmlFor="female">Mujer</label>
          <input type="radio" id="other" name="gender" value="other" />
          <label htmlFor="other">Otro</label>
        </fieldset>
        <label htmlFor="birthCountry">País de nacimiento</label>
        <input type="text" id="birthCountry" name="birthCountry" />
        <label htmlFor="curp">CURP</label>
        <input type="text" id="curp" name="curp" />

        <label htmlFor="bloodType">Grupo sanguíneo</label>
        <select name="bloodType" id="bloodType">
          <option value="opositive">O+</option>
          <option value="onegative">O-</option>
          <option value="apositive">A+</option>
          <option value="anegative">A-</option>
          <option value="bpositive">B+</option>
          <option value="bnegative">B-</option>
          <option value="abpositive">AB+</option>
          <option value="abnegative">AB-</option>
        </select>
        <div className={styles.conditions}>
          <label htmlFor="illness">Añadir enfermedad preexistente</label>
          <input
            type="text"
            name="illness"
            id="illness"
            value={illness}
            onChange={(e) => setIllness(e.target.value)}
          />
          <button onClick={handleAddIllness}>
            {" "}
            <IoAddCircleSharp />
          </button>
        </div>
        <fieldset>
          <legend>Enfermedades preexistentes</legend>
          <ul>{illnessListSection}</ul>
        </fieldset>
        <div className={styles.conditions}>
          <label htmlFor="allergy"> Añadir alergia</label>
          <input
            type="text"
            name="allergy"
            id="allergy"
            value={allergy}
            onChange={(e) => setAllergy(e.target.value)}
          />
          <button onClick={handleAddAllergy}>
            {" "}
            <IoAddCircleSharp />
          </button>
        </div>
        <fieldset>
          <legend>Alergias</legend>
          <ul>{allergyListSection}</ul>
        </fieldset>
        <label htmlFor="address">Direccion</label>
        <input type="text" id="address" name="address" />
        <label htmlFor="phone">Teléfono</label>
        <input type="text" id="phone" name="phone" />
        <label htmlFor="referenceName">Nombre de contacto de referencia</label>
        <input type="text" id="referenceName" name="referenceName" />
        <label htmlFor="referencePhone">
          Teléfono de contacto de referencia
        </label>
        <input type="text" id="referencePhone" name="referencePhone" />
        <div className={styles.hospitalized}>
          <label htmlFor="hospitalized">Paciente internado</label>
          <input
            type="checkbox"
            id="hospitalized"
            checked={hospitalized}
            onChange={handleHospitalizedChange}
          />
        </div>
        <label htmlFor="room">Habitación</label>
        <input
          type="text"
          id="room"
          name="room"
          disabled={!hospitalized}
          value={room}
          onChange={(e) => setRoom(e.target.value)}
        />
        <label htmlFor="room">Consultorio</label>
        <input
          type="text"
          id="room"
          name="room"
          disabled={hospitalized}
          value={consultingRoom}
          onChange={(e) => setConsultingRoom(e.target.value)}
        />
        <div className={styles.conditions}>
          <label htmlFor="doctor">Añadir doctor</label>
          <select
            disabled={!hospitalized}
            name="doctor"
            id="doctor"
            value={doctor}
            onChange={(e) => setDoctor(e.target.value)}
          >
            <option value="">Selecciona doctor...</option>
            <option value="1">Dr Manuel Serrano</option>
            <option value="2">Dr Manuel Soriano</option>
            <option value="3">Dr Eduardo Camote</option>
          </select>
          <button onClick={handleAddDoctor} disabled={!hospitalized}>
            <IoAddCircleSharp />
          </button>
        </div>
        <fieldset>
          <legend>Doctores asignados</legend>
          <ul>{doctorListSection}</ul>
        </fieldset>
        <div className={styles.conditions}>
          <label htmlFor="nurse">Añadir enfermero</label>
          <select
            disabled={!hospitalized}
            name="nurse"
            id="nurse"
            value={nurse}
            onChange={(e) => setNurse(e.target.value)}
          >
            <option value="">Selecciona enfermero...</option>
            <option value="1">Enfermero Manuel</option>
            <option value="2">Enfermero Luis</option>
            <option value="3">Enfermera Luisa</option>
          </select>
          <button onClick={handleAddNurse} disabled={!hospitalized}>
            <IoAddCircleSharp />
          </button>
        </div>
        <fieldset>
          <legend>Doctores asignados</legend>
          <ul>{nurseListSection}</ul>
        </fieldset>
        <input type="submit" value="AGREGAR PACIENTE" />
      </form>
    </>
  );
};

const NewPatientForm = () => {
  return (
    <CardContainer>
      <h1>NUEVO PACIENTE</h1>
      <PatientForm />
    </CardContainer>
  );
};

export default NewPatientForm;
