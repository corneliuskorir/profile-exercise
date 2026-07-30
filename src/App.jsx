import { useState } from "react";

import styles from "./App.module.css";
import Player from "./components/Player";
import data from "./data/playerData";

function App() {
  return (
    <div key="app" className={styles.app}>
      {data.map((player) => (
        <Player key={player.id} playerData={player} />
      ))}
    </div>
  );
}

export default App;
