import { Children } from "react";
import styles from "./PlayerAttributes.module.css";

function PlayerAttribtes({ children }) {
  return (
    <div className={styles.playerAttribute}>
      <h2>Desisive Moves Specialist</h2>
      {children}
    </div>
  );
}

export default PlayerAttribtes;
