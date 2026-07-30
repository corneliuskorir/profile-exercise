import styles from "./Attribute.module.css";

function Attribute({ title, children }) {
  return (
    <div key="attribute" className={styles.attribute}>
      <h3>{title}</h3>
      {children}
    </div>
  );
}

export default Attribute;
