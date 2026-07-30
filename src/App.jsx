import { useState } from "react";

import "./App.css";
import PlayerAttribute from "./components/PlayerAttributes";
import Attribute from "./components/Attribute";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <PlayerAttribute title="desicive moves specialist">
        <Attribute title="Strength">
          <p>Strategic Vision & Quick Decision-Making & 3-Point Shooting</p>
        </Attribute>
        <Attribute title="Expertise">
          <p>
            Reading the game, making decisive moves, excellent 3-point shooting.
          </p>
        </Attribute>
      </PlayerAttribute>
    </>
  );
}

export default App;
