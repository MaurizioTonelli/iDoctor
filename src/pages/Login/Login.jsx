import React, { useState } from "react";
import styles from "./Login.module.css";
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const login = (e) => {
    e.preventDefault();
    alert("TO IMPLEMENT: Log in user");
  };
  return (
    <div className={styles.container}>
      <div className={styles.loginContainer}>
        <h1 className={styles.appTitle}>iDOCTOR</h1>
        <p className={styles.info}>
          Para utilizar el sistema utiliza tus datos de usuario para iniciar
          sesión, si tienes problemas contacta a soporte
        </p>
        <form action="" className={styles.form} onSubmit={login}>
          <input
            type="text"
            placeholder="Usuario"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="text"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input type="submit" value="Iniciar Sesión" />
        </form>
      </div>
    </div>
  );
};

export default Login;
