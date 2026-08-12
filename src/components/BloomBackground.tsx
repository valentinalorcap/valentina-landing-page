import styles from './BloomBackground.module.css';

/** Decorative "Corner Fill Wide" gradient. Purely presentational — hidden from assistive tech. */
export function BloomBackground() {
  return <div className={styles.wrapper} aria-hidden="true" />;
}
