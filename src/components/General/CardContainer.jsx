import React from "react";
import styles from "./CardContainer.module.css";

const CardContainer = (props) => {
  return <div className={styles.cardContainer}>{props.children}</div>;
};

export default CardContainer;
