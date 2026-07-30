import { Children } from "react";
import styles from "./PlayerAttribute.module.css";

function PlayerAttribute({ title, children }) {
  return (
    <div key={title} className={styles.playerAttribute}>
      <h2>{title.toUpperCase()}</h2>
      {children}
    </div>
  );
}

export default PlayerAttribute;
