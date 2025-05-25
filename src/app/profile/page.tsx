'use client'

import TaskForm from '@/components/TaskForm/TaskForm';
import Link from 'next/link';
import styles from './page.module.css'

const ProfilePage: React.FC = () => {

  return (
    <div className={styles.wrapper} style={{ padding: '32px 16px', maxWidth: 600, margin: '0 auto' }}>
      <div className={styles.header}>
        <h1 className={styles.title} style={{ fontSize: 28, marginBottom: 20 }}>Create Your Task</h1>
        <Link href={'/'} className={styles.button}>To main page</Link>
      </div>
      <TaskForm />

    </div>
  );
};

export default ProfilePage;