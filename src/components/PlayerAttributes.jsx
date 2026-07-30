import { Children } from "react";
import styles from "./PlayerAttributes.module.css";

function PlayerAttribute({ title, children }) {
  return (
    <div className={styles.playerAttribute}>
      <h2>{title.toUpperCase()}</h2>
      {children}
    </div>
  );
}

export default PlayerAttribute;
