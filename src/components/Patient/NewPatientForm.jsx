import React, { useState, useEffect } from "react";
import CardContainer from "../General/CardContainer";
import styles from "./NewPatientForm.module.css";
import { TiDelete } from "react-icons/ti";
import { IoAddCircleSharp } from "react-icons/io5";
import axios from "axios";
import appData from "../../assets/data/appData";
import { useHistory } from "react-router-dom";
import moment from "moment";

const PatientForm = ({ patient }) => {
  const [image, setImage] = useState();
  const [name, setName] = useState((patient && patient.name) || "");
  const [birthDate, setBirthDate] = useState(
    (patient && moment(patient.birthDate).format("YYYY-MM-DD")) ||
      moment(new Date()).format("YYYY-MM-DD")
  );
  const [gender, setGender] = useState((patient && patient.gender) || "male");
  const [country, setCountry] = useState((patient && patient.country) || "");
  const [curp, setCurp] = useState((patient && patient.curp) || "");
  const [bloodType, setBloodType] = useState(
    (patient && patient.bloodType) || "opositive"
  );
  const [address, setAddress] = useState((patient && patient.address) || "");
  const [phone, setPhone] = useState((patient && patient.phone) || "");
  const [referenceContactName, setReferenceContactName] = useState(
    (patient && patient.referenceContactName) || ""
  );
  const [referenceContactPhone, setReferenceContactPhone] = useState(
    (patient && patient.referenceContactPhone) || ""
  );
  const [illnessList, setIllnessList] = useState(
    (patient &&
      patient.preexistingConditions &&
      patient.preexistingConditions.split(",")) ||
      []
  );
  const [illness, setIllness] = useState("");
  const [allergyList, setAllergyList] = useState(
    (patient && patient.allergies && patient.allergies.split(",")) || []
  );
  const [allergy, setAllergy] = useState("");
  const [doctorList, setDoctorList] = useState([]);
  const [doctor, setDoctor] = useState("placeholder");
  const [nurseList, setNurseList] = useState([]);
  const [nurse, setNurse] = useState("placeholder");
  const [hospitalized, setHospitalized] = useState(
    (patient && !patient.consultingRoom) || false
  );
  const [room, setRoom] = useState((patient && patient.room) || "");
  const [consultingRoom, setConsultingRoom] = useState(
    (patient && patient.consultingRoom) || ""
  );
  const [errors, setErrors] = useState([]);
  const [countryList, setCountryList] = useState([]);

  const [doctors, setDoctors] = useState([]);
  const [nurses, setNurses] = useState([]);

  let history = useHistory();

  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/all")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        let countryNameList = data.map((country) => country.name);
        setCountryList([...countryNameList]);
      });

    axios
      .get(appData.apiUrl + "/users/doctors", { withCredentials: true })
      .then((res) => {
        setDoctors(res.data.data);
      });
    axios
      .get(appData.apiUrl + "/users/nurses", { withCredentials: true })
      .then((res) => {
        setNurses(res.data.data);
      });
    if (patient && patient.patientDoctors[0]) {
      setDoctorList(patient.patientDoctors[0]);
    }
    if (patient && patient.patientNurses[0]) {
      setNurseList(patient.patientNurses[0]);
    }
  }, []);

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
          <p>{doctor.name}</p>
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
          <p>{nurse.name}</p>
          <button onClick={(e) => handleDeleteNurse(e, i)}>
            <TiDelete />
          </button>
        </li>
      );
    })
  ) : (
    <p>No hay enfermeros asignados</p>
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

  const contains = (arr, item) => {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] == item) {
        return true;
      }
    }
    return false;
  };

  const handleAddDoctor = (e) => {
    e.preventDefault();
    if (doctor === "placeholder") return;
    let doctorSelected = doctors.filter((doc) => doc.id == doctor)[0];

    if (
      contains(
        doctorList.map((doc) => doc.id),
        doctor
      )
    )
      return;

    setDoctorList(doctorList.concat(doctorSelected));
  };
  const handleDeleteDoctor = (e, index) => {
    e.preventDefault();
    let arrayCopy = [...doctorList];
    arrayCopy.splice(index, 1);
    setDoctorList(arrayCopy);
  };

  const handleAddNurse = (e) => {
    e.preventDefault();
    if (nurse === "placeholder") return;
    let nurseSelected = nurses.filter((nur) => nur.id == nurse)[0];
    if (
      contains(
        nurseList.map((nur) => nur.id),
        nurse
      )
    )
      return;
    setNurseList(nurseList.concat(nurseSelected));
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

  const validateForm = () => {
    let formIsValid = true;
    let errorsArray = [];
    setErrors();
    if (name === "") {
      formIsValid = false;
      errorsArray.push("Se requiere un nombre");
    }
    if (country === "") {
      formIsValid = false;
      errorsArray.push(
        "Se requiere un país de origen. Verifique su conexión a internet para obtener la lista"
      );
    }
    if (curp === "") {
      formIsValid = false;
      errorsArray.push("Se requiere un CURP");
    }
    if (address === "") {
      formIsValid = false;
      errorsArray.push("Se requiere una dirección");
    }
    if (phone === "") {
      formIsValid = false;
      errorsArray.push("Se requiere un teléfono");
    }
    if (hospitalized && room === "") {
      formIsValid = false;
      errorsArray.push("Se requiere asignar una habitación");
    }
    if (!hospitalized && consultingRoom === "") {
      formIsValid = false;
      errorsArray.push("Se requiere asignar un consultorio");
    }
    setErrors(errorsArray);
    return formIsValid;
  };

  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
  };
  const handleSelectDoctor = (e) => {
    setDoctor(e.target.value);
  };
  const handleSelectNurse = (e) => {
    setNurse(e.target.value);
  };
  const submitPatient = (e) => {
    e.preventDefault();
    setErrors([]);
    if (!validateForm()) return;
    let preexistingConditions = illnessList.join(",");
    let allergies = allergyList.join(",");
    const formData = new FormData();
    formData.append("image", image);
    formData.append("name", name);
    formData.append("birthDate", birthDate);
    formData.append("gender", gender);
    formData.append("country", country);
    formData.append("curp", curp);
    formData.append("bloodType", bloodType);
    formData.append("preexistingConditions", preexistingConditions);
    formData.append("allergies", allergies);
    formData.append("address", address);
    formData.append("phone", phone);
    formData.append("referenceContactName", referenceContactName);
    formData.append("referenceContactPhone", referenceContactPhone);
    if (hospitalized) {
      formData.append("room", room);
      formData.append("doctorList", JSON.stringify(doctorList));
      formData.append("nurseList", JSON.stringify(nurseList));
    } else {
      formData.append("consultingRoom", consultingRoom);
    }
    if (patient) {
      axios
        .put(appData.apiUrl + "/patient/" + patient.id, formData, {
          withCredentials: true,
        })
        .then((res) => {
          window.location.reload(false);
        })
        .catch((err) => {
          alert(err.response.data.message);
        });
    } else {
      axios
        .post(appData.apiUrl + "/patients", formData, { withCredentials: true })
        .then((res) => {
          console.log(res);
          history.push("/dashboard/pacientes");
        })
        .catch((err) => {
          alert(err.response.data.message);
        });
    }
  };

  return (
    <>
      <form className={styles.patientForm} onSubmit={submitPatient}>
        <label htmlFor="picture">Foto del paciente</label>
        <input
          type="file"
          name="picture"
          id="picture"
          accept="image/*"
          multiple={false}
          onChange={handleFileChange}
        />
        <label htmlFor="name">Nombre completo</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="birthDate">Fecha de nacimiento</label>
        <input
          type="date"
          id="birthDate"
          name="birthDate"
          value={birthDate}
          onChange={(e) => setBirthDate(e.target.value)}
        />
        <fieldset>
          <legend>Sexo</legend>
          <div
            value={gender}
            onChange={(e) => {
              setGender(e.target.value);
            }}
          >
            <input
              type="radio"
              id="male"
              name="gender"
              value="male"
              checked={gender === "male"}
            />
            <label htmlFor="male">Hombre</label>
            <input
              type="radio"
              id="female"
              name="gender"
              value="female"
              checked={gender === "female"}
            />
            <label htmlFor="female">Mujer</label>
            <input
              type="radio"
              id="other"
              name="gender"
              value="other"
              checked={gender === "other"}
            />
            <label htmlFor="other">Otro</label>
          </div>
        </fieldset>
        <label htmlFor="birthCountry">País de nacimiento</label>
        <input
          list="countryList"
          type="text"
          id="birthCountry"
          name="birthCountry"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />
        <datalist id="countryList">
          {countryList &&
            countryList.map((country) => <option value={country} />)}
        </datalist>
        <label htmlFor="curp">CURP</label>
        <input
          type="text"
          id="curp"
          name="curp"
          value={curp}
          onChange={(e) => setCurp(e.target.value)}
        />

        <label htmlFor="bloodType">Grupo sanguíneo</label>
        <select
          name="bloodType"
          id="bloodType"
          value={bloodType}
          onChange={(e) => setBloodType(e.target.value)}
        >
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
        <input
          type="text"
          id="address"
          name="address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <label htmlFor="phone">Teléfono</label>
        <input
          type="text"
          id="phone"
          name="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <label htmlFor="referenceName">Nombre de contacto de referencia</label>
        <input
          type="text"
          id="referenceName"
          name="referenceName"
          value={referenceContactName}
          onChange={(e) => setReferenceContactName(e.target.value)}
        />
        <label htmlFor="referencePhone">
          Teléfono de contacto de referencia
        </label>
        <input
          type="text"
          id="referencePhone"
          name="referencePhone"
          value={referenceContactPhone}
          onChange={(e) => setReferenceContactPhone(e.target.value)}
        />
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
            onChange={handleSelectDoctor}
          >
            <option value="placeholder">Selecciona un doctor...</option>
            {doctors &&
              doctors.map((doctor, i) => (
                <option value={doctor.id} key={i}>
                  {doctor.name}
                </option>
              ))}
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
            onChange={handleSelectNurse}
          >
            <option value="placeholder">Selecciona un enfermero...</option>
            {nurses &&
              nurses.map((nurse, i) => (
                <option value={nurse.id} key={i}>
                  {nurse.name}
                </option>
              ))}
          </select>
          <button onClick={handleAddNurse} disabled={!hospitalized}>
            <IoAddCircleSharp />
          </button>
        </div>
        <fieldset>
          <legend>Enfermeros asignados</legend>
          <ul>{nurseListSection}</ul>
        </fieldset>
        <input type="submit" value="AGREGAR PACIENTE" />
      </form>
      {errors && (
        <div className={styles.errors}>
          {errors.map((error, i) => (
            <div key={i} className={styles.error}>
              {error}
            </div>
          ))}
        </div>
      )}
    </>
  );
};

const NewPatientForm = (props) => {
  return (
    <CardContainer>
      <h1>NUEVO PACIENTE</h1>
      <PatientForm patient={props.patient} />
    </CardContainer>
  );
};

export default NewPatientForm;
