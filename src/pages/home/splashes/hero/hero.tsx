import Styles from './hero.module.scss';
import { LINKS } from './const';
import { Title } from 'components';

export const Hero = () => {
  return (
    <header className={Styles.header}>
      <article className={Styles.titleCard}>
        <Title subtitle big />
      </article>
      <article className={Styles.rightSide}>
        <ul className={Styles.links}>
          {LINKS.map((link, i) => (
            <div key={i}>
              {i !== 0 ? <span className={Styles.bar} /> : null}
              <li>
                {link.link ? (
                  <a href={link.href} className={Styles.descriptor}>
                    {link.label}
                  </a>
                ) : (
                  <a
                    href={link.href}
                    className={Styles.descriptor}
                    rel="noreferrer"
                    // target={link.newPage ? '_blank' : ''}
                  >
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
