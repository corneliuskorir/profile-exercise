import styles from "./PlayerProfile.module.css";
import Profile from "./Profile";
import About from "./About";

function PlayerProfile({ player }) {
  const { name, role, about, tag, image } = player;
  return (
    <div key="playerProfile" className={styles.playerProfile}>
      <Profile image={image} name={name} role={role} />
      <About name={name.split(" ")[0]} about={about} tag={tag} />
    </div>
  );
}

export default PlayerProfile;
