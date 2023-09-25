import { Footer, Header } from "components";
import styles from "./notfound.module.scss";

export const NotFound = () => {
  return (
    <main className={styles.notfound}>
      <Header />
      <article className={styles.body}>
        <div className={styles.center}>
          <section className={styles.left}>
            <h2>404</h2>
            <p>Not Found</p>
          </section>
          <section className={styles.right}>
            <a href="https://www.schoepproject.com/">Take me home</a>
          </section>
        </div>
      </article>
      <Footer />
    </main>
  );
};
