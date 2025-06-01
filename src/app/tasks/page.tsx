'use client'

import TaskList from '@/components/TaskList/TaskList';
import Background from '@/components/Background/Background';
import { FindHelperModal } from '@/components/FindHelperModal/FindHelperModal';
import { useTasksStore } from '@/stores/useTasksStore';
import styles from './page.module.css'
import Link from 'next/link';


export default function Home() {
  const tasks = useTasksStore((state) => state.tasks);

  return (
    <>
      <div className={styles.buttons}>
        <FindHelperModal/>
        <Link href={'/profile'} className={styles.button}>My profile</Link>
      </div>
      <Background />
      <div style={{maxWidth: 720, margin: '0 auto' }}>
        <TaskList tasks={tasks} />
      </div>
    </>
  );
}