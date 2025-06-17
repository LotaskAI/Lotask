'use client';

import { useState } from 'react';
import TaskList from '@/components/TaskList/TaskList';
import Background from '@/components/Background/Background';
import { FindHelperModal } from '@/components/FindHelperModal/FindHelperModal';
import { useTasksStore } from '@/stores/useTasksStore';
import styles from './page.module.css';
import Link from 'next/link';

const TASKS_PER_PAGE = 4;

export default function Home() {
  const tasks = useTasksStore((state) => state.tasks);
  const [page, setPage] = useState(1);

  const totalPages = Math.ceil(tasks.length / TASKS_PER_PAGE);
  const startIndex = (page - 1) * TASKS_PER_PAGE;
  const currentTasks = tasks.slice(startIndex, startIndex + TASKS_PER_PAGE);

  const handlePrev = () => setPage((prev) => Math.max(prev - 1, 1));
  const handleNext = () => setPage((prev) => Math.min(prev + 1, totalPages));

  return (
    <>
      <div className={styles.buttons}>
        <FindHelperModal />
        <Link href="/profile" className={styles.button}>
          My profile
        </Link>
      </div>

      <Background />

      <div style={{ maxWidth: 720, margin: '0 auto' }}>
        <TaskList tasks={currentTasks} />

        {totalPages > 1 && (
          <div className={styles.pagination}>
            <button
              onClick={handlePrev}
              disabled={page === 1}
              className={styles.pageButton}
            >
              Previous
            </button>
            <span className={styles.pageInfo}>
              Page {page} of {totalPages}
            </span>
            <button
              onClick={handleNext}
              disabled={page === totalPages}
              className={styles.pageButton}
            >
              Next
            </button>
          </div>
        )}
      </div>
    </>
  );
}
