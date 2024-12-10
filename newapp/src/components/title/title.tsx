import { OpenBoxIcon } from 'assets';
import { SUBTITLE, TITLE } from './const';
import styles from './title.module.scss';
import classNames from 'classnames';

export interface TitleProps {
  big?: boolean;
  subtitle?: boolean;
}

export const Title = (props: TitleProps) => {
  return (
    <hgroup className={classNames(styles.title, props.big && styles.big)}>
      <div className={styles.titleRow}>
        <OpenBoxIcon className={styles.icon} />
        <h1>{TITLE}</h1>
      </div>
      {props.subtitle && <sub>{SUBTITLE}</sub>}
    </hgroup>
  );
};
