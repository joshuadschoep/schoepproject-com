import { Project } from "./types";
import styles from "./project-item.module.scss";

export type ProjectItemProps = Project;

export const ProjectItem = ({
  title,
  link,
  description,
  skills,
}: ProjectItemProps) => {
  return (
    <article className={styles.body}>
      <h3 className={styles.header}>{title}</h3>
      {link && (
        <a href={link?.href} className={styles.link}>
          {link.name}
        </a>
      )}
      {description ? <p className={styles.description}>{description}</p> : null}
      {skills ? (
        <ul className={styles.skills}>
          <h5>Skills</h5>
          {skills.map((skill, index) => (
            <li key={index} className={styles.skill}>
              {skill}
            </li>
          ))}
        </ul>
      ) : null}
    </article>
  );
};
