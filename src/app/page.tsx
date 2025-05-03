'use client'

import TaskList from '@/components/TaskList/TaskList';
import Background from '@/components/Background/Background';
import { Task } from '../types';
import { FindHelperModal } from '@/components/FindHelperModal/FindHelperModal';

const mockTasks: Task[] = [
  {
    task: 'Walk my Shiba Inu in downtown Warsaw',
    category: 'Dog walking',
    reward: '15',
  },
  {
    task: 'Translate a blog post from English to French',
    category: 'Translation',
    reward: '25',
  },
  {
    task: 'Create a landing page for NFT collection',
    category: 'Web Design',
    reward: '100',
  },
];

export default function Home() {

  const handleTaskSubmit = (task: {
    description: string;
    keywords: string[];
    budget: string;
  }) => {
    console.log('User is looking for a helper:', task);
  };

  return (
    <>
      <FindHelperModal onSubmit={handleTaskSubmit} />
      <Background />
      <div style={{maxWidth: 720, margin: '0 auto' }}>
        <TaskList tasks={mockTasks} />
      </div>
    </>
  );
}