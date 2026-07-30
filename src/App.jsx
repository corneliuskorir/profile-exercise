import { useState } from "react";

import styles from "./App.module.css";

import PlayerAttributes from "./components/PlayerAttributes";

function App() {
  return (
    <div className={styles.profile}>
      <PlayerAttributes />
    </div>
  );
}

export default App;
