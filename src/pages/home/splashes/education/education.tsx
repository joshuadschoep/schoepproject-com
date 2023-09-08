import { EDUCATION_NOTES, END_DATE, START_DATE } from "./const";
import styles from "./education.module.scss";

export const Education = () => {
  return (
    <section className={styles.education}>
      <hgroup>
        <h2>Education</h2>
      </hgroup>
      <article>
        <h3>Colorado School of Mines</h3>
        <h4 className={styles.degree}>BS in Computer Science</h4>
        <small className={styles.dates}>
          {START_DATE} - {END_DATE}
        </small>
        {EDUCATION_NOTES.map((note, index) => (
          <li key={index}>{note}</li>
        ))}
      </article>
    </section>
  );
};
