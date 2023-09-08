import styles from "./skills.module.scss";
import { LABEL, SKILLS } from "./const";

export const Skills = () => {
  return (
    <section className={styles.skills}>
      <h2>{LABEL}</h2>
      <section className={styles.columns}>
        {SKILLS.map((skill, index) => (
          <article key={index}>
            <hgroup>
              <div className={styles.iconWrapper}>{skill.HeaderIcon}</div>
              <h3>{skill.label}</h3>
            </hgroup>
            <p>{skill.description}</p>
          </article>
        ))}
      </section>
    </section>
  );
};
