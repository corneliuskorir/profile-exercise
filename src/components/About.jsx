import styles from "./About.module.css";

function About({ name, about, tag }) {
  return (
    <div className={styles.about}>
      <div>
        <h2>About {name}</h2>
        <p>{about}</p>
      </div>
      <div className={styles.tag}>
        <p>{`"${tag}"`}</p>
      </div>
    </div>
  );
}

export default About;
