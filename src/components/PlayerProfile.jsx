import styles from "./PlayerProfile.module.css";
import Profile from "./Profile";
import image from "../assets/victor.avif";
import About from "./About";

function PlayerProfile() {
  return (
    <div key="playerProfile" className={styles.playerProfile}>
      <Profile image={image} name="Ken Wachira" role="Basketball Coach" />
      <About
        name="Ken"
        about={`Meet Ken Wachira, a basketball strategist known for his quick decision-making and game-reading abilities. His coaching style emphasizes enhancing court vision and predicting opponents' moves.  Gain exclusive insights into basketball tactics and honing your 3-point game with Ken Wachira, the maestro behind the arc.`}
        tag="Read the game, own the court."
      />
    </div>
  );
}

export default PlayerProfile;
