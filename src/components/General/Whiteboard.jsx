import React from "react";
import styles from "./Whiteboard.module.css";
const Whiteboard = (props) => {
  return (
    <>
      <h1 className={styles.title}>{props.title}</h1>
      <div className={styles.whiteBoard}>{props.children}</div>
    </>
  );
};

export default Whiteboard;
