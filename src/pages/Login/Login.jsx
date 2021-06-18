import React from "react";
import styles from "./Login.module.css";
const Login = () => {
  return (
    <div className={styles.container}>
      <div className={styles.loginContainer}>
        <h1 className={styles.appTitle}>iDOCTOR</h1>
        <p className={styles.info}>
          Para utilizar el sistema utiliza tus datos de usuario para iniciar
          sesión, si tienes problemas contacta a soporte
        </p>
        <form action="" className={styles.form}>
          <input type="text" placeholder="Usuario" />
          <input type="text" placeholder="Contraseña" />
          <input type="submit" value="Iniciar Sesión" />
        </form>
      </div>
    </div>
  );
};

export default Login;
