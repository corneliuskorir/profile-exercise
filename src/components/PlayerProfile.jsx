import styles from "./PlayerProfile.module.css";
import Profile from "./Profile";
import image from "../assets/victor.avif";

function PlayerProfile() {
  return (
    <div className={styles.playerProfile}>
      <Profile image={image} name="Ken Wachira" role="Basketball Coach" />
    </div>
  );
}

export default PlayerProfile;
