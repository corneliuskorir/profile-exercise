import styles from "./Profile.module.css";

function Profile({ image, name, role }) {
  return (
    <div key="profile" className={styles.profile}>
      <img src={image} alt="player image" />

      <div key="profileTitle" className={styles.profileTitle}>
        {name.split(" ").map((n, index) => (
          <p key={index} className={styles.playerName}>
            {n}
          </p>
        ))}

        <p>{role.toUpperCase()}</p>
      </div>
    </div>
  );
}

export default Profile;
