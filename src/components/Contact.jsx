import styles from "./Contact.module.css";
function Contact() {
  function handleClick(e) {
    console.log("You have interacted with the profile");
  }
  return (
    <div className={styles.contact}>
      <button onClick={handleClick}>Contact</button>
      <button className={styles.share} onClick={handleClick}>
        Share
      </button>
    </div>
  );
}
export default Contact;
