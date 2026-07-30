import styles from "./PlayerAttributes.module.css";
import PlayerAttribute from "./PlayerAttribute";
import Attribute from "./Attribute";

function PlayerAttributes() {
  return (
    <div key="playerAttributes" className={styles.playerAttributes}>
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

      <PlayerAttribute title="visionary insights">
        <Attribute title="Coaching Focus">
          <p>Improving court vision, anticipating opponent moves</p>
        </Attribute>
        <Attribute title="Main Focus">
          <ul>
            <li>
              <p>Tactical insights</p>
            </li>
            <li>
              <p>Rapid decision-making drills</p>
            </li>
          </ul>
        </Attribute>
      </PlayerAttribute>

      <PlayerAttribute title="training positions">
        <Attribute title="Main Focus">
          <ul>
            <li>
              <p>Point guards</p>
            </li>
            <li>
              <p>Small forwards</p>
            </li>
            <li>
              <p>Team strategists</p>
            </li>
          </ul>
        </Attribute>
        <Attribute title="Also">
          <ul>
            <li>
              <p>Tactical insights</p>
            </li>
          </ul>
        </Attribute>
      </PlayerAttribute>
      <PlayerAttribute title="accolades">
        <Attribute title="">
          <p>
            {" "}
            <strong>MVP 2022</strong>, renowned for exceptional 3-point shooting
            skills.{" "}
          </p>
        </Attribute>
      </PlayerAttribute>
    </div>
  );
}

export default PlayerAttributes;
