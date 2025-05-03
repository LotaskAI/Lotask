import styles from './Background.module.css';

const Background = () => {
  return (
    <div className={styles.background}>
      <div className={`${styles.bubble} ${styles.bubble1}`} />
      <div className={`${styles.bubble} ${styles.bubble2}`} />
      <div className={`${styles.bubble} ${styles.bubble3}`} />
    </div>
  );
};

export default Background;