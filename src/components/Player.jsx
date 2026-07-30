import PlayerAttributes from "./PlayerAttributes";
import PlayerProfile from "./PlayerProfile";

import styles from "./Player.module.css";

function Player({ playerData }) {
  return (
    <div key="player" className={styles.profile}>
      <PlayerProfile player={playerData} />
      <PlayerAttributes attributes={playerData.attributes} />
    </div>
  );
}

export default Player;
