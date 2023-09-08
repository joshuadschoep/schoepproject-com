import styles from "./skills.module.scss";
import { SKILLS } from "./const";

export const Skills = () => {
  return (
    <section className={styles.skills}>
      {SKILLS.map((skill, i1) => (
        <ul key={i1}>
          <h2>{skill.label}</h2>
          {skill.values.map((value, i2) => (
            <li key={i2}>
              <p>{value.name}</p>
              <sub>{value.sub}</sub>
            </li>
          ))}
        </ul>
      ))}
    </section>
  );
};
