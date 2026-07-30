import styles from "./Profile.module.css";

function Profile({ image, name, role }) {
  return (
    <div className={styles.profile}>
      <img src={image} alt="player image" />

      <div className={styles.profileTitle}>
        {name.split(" ").map((n) => (
          <p className={styles.playerName}>{n}</p>
        ))}

        <p>{role.toUpperCase()}</p>
      </div>
    </div>
  );
}

export default Profile;
