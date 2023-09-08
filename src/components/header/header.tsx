import styles from "./header.module.scss";
import { LINKS } from "./const";
import { Link } from "react-router-dom";
import { Title } from "components/title";
import { useCallback, useEffect, useRef } from "react";

export const Header = () => {
  const headerRef = useRef<HTMLElement>(null);
  const handleScroll = useCallback(() => {
    if (headerRef.current) {
      headerRef.current.style.setProperty(
        "padding",
        Math.max(1, Math.min(200 / (window.scrollY + 1), 3)).toString() + "em"
      );
      headerRef.current.style.setProperty(
        "opacity",
        (1 - Math.min(window.scrollY / 300, 0.2)).toString()
      );
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <header ref={headerRef} className={styles.header}>
      <article className={styles.titleCard}>
        <Title />
      </article>
      <article className={styles.rightSide}>
        <ul className={styles.links}>
          {LINKS.map((link, i) => (
            <li key={i}>
              {link.link ? (
                <Link to={link.href} className={styles.link}>
                  {link.label}{" "}
                </Link>
              ) : (
                <a href={link.href} className={styles.link}>
                  {link.label}
                </a>
              )}
            </li>
          ))}
        </ul>
      </article>
    </header>
  );
};
