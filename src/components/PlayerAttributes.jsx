import styles from "./PlayerAttributes.module.css";
import PlayerAttribute from "./PlayerAttribute";
import Attribute from "./Attribute";

function PlayerAttributes({ attributes }) {
  return (
    <div key="playerAttributes" className={styles.playerAttributes}>
      {attributes.map((attribute, index) => (
        <PlayerAttribute key={index} title={attribute.title}>
          {attribute.stats.map((stat, index) => (
            <Attribute title={stat.title}>
              {!(stat.stat.length > 1) ? (
                <p>{stat.stat[0]}</p>
              ) : (
                <ul>
                  {stat.stat.map((s, index) => (
                    <li key={index}> {s} </li>
                  ))}
                </ul>
              )}
            </Attribute>
          ))}
        </PlayerAttribute>
      ))}
    </div>
  );
}

export default PlayerAttributes;
