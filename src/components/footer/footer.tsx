import { Link } from "react-router-dom";
import { OpenBoxIcon } from "../../assets/svg/openBox";
import { DESCRIPTORS, QUICK_LINKS } from "./const";
import styles from "./footer.module.scss";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <article>
        <h4 className={styles.footerTitle}>The Schoep Project</h4>
        <h5 className={styles.footerLabel}>Quick Links</h5>
        <ul className={styles.quickLinks}>
          {QUICK_LINKS.map((link, index) => (
            <li key={index}>
              {link.link ? (
                <Link to={link.href}>{link.label}</Link>
              ) : (
                <a
                  href={link.href}
                  target={link.newPage ? "_blank" : ""}
                  rel="noreferrer"
                >
                  {link.label}
                </a>
              )}
            </li>
          ))}
        </ul>
      </article>
      <article>
        <hgroup className={styles.footerLogo}>
          <OpenBoxIcon />
        </hgroup>
        <ul className={styles.descriptions}>
          {DESCRIPTORS.map((descriptor, index) => (
            <div key={index}>
              {index !== 0 ? <span className={styles.bar} /> : null}
              <li>
                <p className={styles.descriptor}>{descriptor}</p>
              </li>
            </div>
          ))}
        </ul>
      </article>
    </footer>
  );
};
