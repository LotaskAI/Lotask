import styles from './page.module.css';
import Link from 'next/link';
import Background from '@/components/Background/Background';

export default function HomePage() {
  return (
    <main className={styles.wrapper}>
      <Background />

      <section className={styles.hero}>
        <h1 className={styles.title}>Lotask</h1>
        <p className={styles.subtitle}>
          Decentralized task marketplace powered by AI and Solana.
        </p>

        <div className={styles.buttons}>
          <Link href="/tasks" className={styles.button}>View Tasks</Link>
          <Link href="/create" className={styles.button}>Add Task</Link>
        </div>
      </section>

      <section className={styles.stepsSection}>
        <h2 className={styles.stepsTitle}>How it works</h2>
        <ol className={styles.steps}>
          <li><strong>1.</strong> Post a task you want done or browse existing ones.</li>
          <li><strong>2.</strong> Our AI suggests the best matches for you.</li>
        </ol>
      </section>

    </main>
  );
}

