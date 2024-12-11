
import { TimelineItem } from './timeline-item';
import styles from './timeline.module.scss';
import { LABEL, TIMELINE_ITEMS } from './const';
import { VerticalBar } from './vertical-bar';

export const Timeline = () => {
  return (
    <section className={styles.timeline}>
      <h2>{LABEL}</h2>
      {TIMELINE_ITEMS.map((item, index, arr) => (
        <section className={styles.row} key={index}>
          <VerticalBar first={index === 0} last={index + 1 === arr.length} />
          <TimelineItem {...item} />
        </section>
      ))}
    </section>
  );
};
