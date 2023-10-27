import { useCallback, useRef, useState } from 'react';
import styles from './email.module.scss';
import { Tooltip } from 'react-tooltip';
import { COPY_BLACK_URL, COPY_HIGHLIGHT_URL } from './const';

const ANCHOR = 'copied-anchor-element';
const TOOLTIP_TIMER = 3000;

export const Email = () => {
  const [focus, setFocus] = useState(false);
  const [tooltip, showTooltip] = useState(false);
  const focusRef = useRef<HTMLInputElement>(null);

  const onClick = useCallback(() => {
    navigator.clipboard.writeText('joshua@schoepproject.com');
    showTooltip(true);
    setTimeout(() => {
      showTooltip(false);
      focusRef?.current?.blur();
    }, TOOLTIP_TIMER);
  }, [focusRef]);

  const url = focus ? COPY_HIGHLIGHT_URL : COPY_BLACK_URL;

  return (
    <section className={styles.email}>
      <h3>Or grab my email, if you prefer</h3>
      <div className={styles.input}>
        <span className={styles.anchor} id={ANCHOR} />
        <img
          className={styles.copyButton}
          alt=""
          src={url}
          onMouseEnter={() => setFocus(true)}
          onMouseLeave={() => setFocus(false)}
          onClick={onClick}
        />
        <input
          type="email"
          name="emailto"
          readOnly
          value="joshua@schoepproject.com"
          onMouseEnter={() => setFocus(true)}
          onMouseLeave={() => setFocus(false)}
          onClick={onClick}
          ref={focusRef}
        />
      </div>
      <Tooltip
        anchorSelect={`#${ANCHOR}`}
        place="top"
        content="Copied!"
        isOpen={tooltip}
      />
    </section>
  );
};
