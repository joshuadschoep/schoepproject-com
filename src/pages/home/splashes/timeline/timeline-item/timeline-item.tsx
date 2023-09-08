import { TimelineEvent } from "../types";
import styles from "./timeline-item.module.scss";

export type TimelineItemProps = TimelineEvent;

export const TimelineItem = ({
  group,
  description,
  location,
  tasks,
  endDate,
  startDate,
  title,
}: TimelineItemProps) => {
  return (
    <article className={styles.body}>
      <h4 className={styles.header}>
        {title} - {group}
      </h4>
      <small className={styles.dates}>
        {startDate} - {endDate}; {location}
      </small>
      {description ? <p className={styles.description}>{description}</p> : null}
      {tasks ? (
        <ul className={styles.tasks}>
          {tasks.map((task, index) => (
            <li key={index} className={styles.task}>
              {task}
            </li>
          ))}
        </ul>
      ) : null}
    </article>
  );
};
