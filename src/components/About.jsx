import styles from "./About.module.css";
import Contact from "./Contact";

function About({ name, about, tag }) {
  return (
    <div key="about" className={styles.about}>
      <div key="aboutsection">
        <h2>About {name}</h2>
        <p>{about}</p>
      </div>
      <Contact />
      <div key="aboutTag" className={styles.tag}>
        <p>{`"${tag}"`}</p>
      </div>
    </div>
  );
}

export default About;
