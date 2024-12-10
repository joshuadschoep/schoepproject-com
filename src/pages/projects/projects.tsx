import styles from './project.module.scss';
import { PROJECTS } from './const';
import { ProjectItem } from './project-item';

export const Projects = () => {
  return (
    <section className={styles.projects}>
      {PROJECTS.map((group, index) => (
        <article key={index}>
          <h2>{group.group}</h2>
          <hr />
          <div className={styles.projectSet}>
            {group.projects.map((project, index) => (
              <ProjectItem {...project} key={index} />
            ))}
          </div>
        </article>
      ))}
    </section>
  );
};
