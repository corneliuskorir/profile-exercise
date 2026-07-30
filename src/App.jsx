import { useState } from "react";

import "./App.css";
import PlayerAttribtes from "./components/PlayerAttributes";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <PlayerAttribtes />
    </>
  );
}

export default App;
