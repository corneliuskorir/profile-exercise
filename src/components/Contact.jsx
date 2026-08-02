import styles from "./Contact.module.css";
function Contact() {
  return (
    <div className={styles.contact}>
      <button>Contact</button>
      <button className={styles.share}>Share</button>
    </div>
  );
}
export default Contact;
