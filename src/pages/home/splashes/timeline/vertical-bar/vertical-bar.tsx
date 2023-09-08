import { OpenBoxIcon } from "assets";
import styles from "./vertical-bar.module.scss";

export interface VerticalBarProps {
  first: boolean;
  last: boolean;
}

export const VerticalBar = ({ first, last }: VerticalBarProps) => {
  return (
    <div className={styles.iconColumn}>
      <div className={styles.iconSpacer}>
        {first ? (
          <div className={styles.before} />
        ) : (
          <hr className={styles.before} />
        )}
        <OpenBoxIcon />
        {last ? <div /> : <hr />}
      </div>
    </div>
  );
};
