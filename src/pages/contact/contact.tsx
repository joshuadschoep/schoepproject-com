import styles from "./contact.module.scss";
import { Email } from "./email";

export const Contact = () => {
  return (
    <article className={styles.contact}>
      <h2>Contact me</h2>
      <form>
        <h3>Send me a message directly</h3>
        <div className={styles.formItem}>
          <label htmlFor="returnAddress">From</label>
          <input
            type="email"
            id="returnAddress"
            name="returnAddress"
            placeholder="From"
          />
        </div>
        <div className={styles.formItem}>
          <label htmlFor="subject">Subject</label>
          <input
            aria-required
            id="subject"
            name="subject"
            placeholder="Subject"
          />
        </div>
        <div className={styles.formItem}>
          <label htmlFor="body">Content</label>
          <textarea rows={20} aria-required id="body" name="body" />
        </div>
      </form>
      <Email />
    </article>
  );
};
