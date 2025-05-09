'use client'

import TaskList from '@/components/TaskList/TaskList';
import Background from '@/components/Background/Background';
import { FindHelperModal } from '@/components/FindHelperModal/FindHelperModal';
import { useTasksStore } from '@/stores/useTasksStore';
import Link from 'next/link';


export default function Home() {
  const tasks = useTasksStore((state) => state.tasks);

  return (
    <>
      <FindHelperModal/>
      <Link href={'/profile'}>My profile</Link>
      <Background />
      <div style={{maxWidth: 720, margin: '0 auto' }}>
        <TaskList tasks={tasks} />
      </div>
    </>
  );
}