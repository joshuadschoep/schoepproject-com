import { OpenBoxIcon } from "../../assets/svg/openBox";
import styles from "./footer.module.scss";

const descriptors = [
  "Joshua Schoep 2023",
  "Built with React 18",
  "Powered by AWS",
];

const quickLinks = [
  {
    href: "https://woodridgesoftware.com/",
    label: "Woodridge Website",
  },
  {
    href: "https://www.linkedin.com/in/joshua-schoep/",
    label: "LinkedIn",
  },
  {
    href: "https://assets.schoepproject.com/resume-february-2021.pdf",
    label: "Resume (PDF)",
  },
];

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <article>
        <h4 className={styles.footerTitle}>The Schoep Project</h4>
        <h5 className={styles.footerLabel}>Quick Links</h5>
        <ul className={styles.quickLinks}>
          {quickLinks.map((link) => (
            <li>
              <a href={link.href} target="_blank" rel="noreferrer">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </article>
      <article>
        <hgroup className={styles.footerLogo}>
          <OpenBoxIcon />
        </hgroup>
        <ul className={styles.descriptions}>
          {descriptors.map((descriptor, i) => (
            <>
              {i !== 0 ? <span className={styles.bar} /> : null}
              <li>
                <p className={styles.descriptor}>{descriptor}</p>
              </li>
            </>
          ))}
        </ul>
      </article>
    </footer>
  );
};
