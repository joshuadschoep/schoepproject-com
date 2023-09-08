import styles from "./hero.module.scss";
import { LINKS } from "./const";
import { Link } from "react-router-dom";
import { Title } from "components";

export const Hero = () => {
  return (
    <header className={styles.header}>
      <article className={styles.titleCard}>
        <Title subtitle big />
      </article>
      <article className={styles.rightSide}>
        <ul className={styles.links}>
          {LINKS.map((link, i) => (
            <div key={i}>
              {i !== 0 ? <span className={styles.bar} /> : null}
              <li>
                {link.link ? (
                  <Link to={link.href} className={styles.descriptor}>
                    {link.label}{" "}
                  </Link>
                ) : (
                  <a href={link.href} className={styles.descriptor}>
                    {link.label}
                  </a>
                )}
              </li>
            </div>
          ))}
        </ul>
      </article>
    </header>
  );
};
