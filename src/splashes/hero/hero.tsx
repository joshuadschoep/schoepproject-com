import { OpenBoxIcon } from "assets";
import styles from "./hero.module.scss";
import { LINKS, SUBTITLE, TITLE } from "./const";

export const Hero = () => {
  return (
    <header className={styles.header}>
      <article>
        <hgroup className={styles.websiteLabel}>
          <OpenBoxIcon className={styles.websiteLogo} />
          <h4 className={styles.websiteTitle}>{TITLE}</h4>
        </hgroup>
        <sub>{SUBTITLE}</sub>
      </article>
      <article className={styles.rightSide}>
        <ul className={styles.links}>
          {LINKS.map((link, i) => (
            <>
              {i !== 0 ? <span className={styles.bar} /> : null}
              <li>
                <a href={link.href} className={styles.descriptor}>
                  {link.label}
                </a>
              </li>
            </>
          ))}
        </ul>
      </article>
    </header>
  );
};
