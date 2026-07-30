import PlayerAttributes from "./PlayerAttributes";
import PlayerProfile from "./PlayerProfile";

import styles from "./Player.module.css";

function Player() {
  return (
    <div key="player" className={styles.profile}>
      <PlayerProfile />
      <PlayerAttributes />
    </div>
  );
}

export default Player;
