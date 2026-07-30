import { useState } from "react";

import styles from "./App.module.css";

import PlayerAttributes from "./components/PlayerAttributes";
import PlayerProfile from "./components/PlayerProfile";

function App() {
  return (
    <div className={styles.profile}>
      <PlayerProfile />
      <PlayerAttributes />
    </div>
  );
}

export default App;
