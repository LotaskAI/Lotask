'use client'

import { useState } from 'react';
import TaskForm from '@/components/TaskForm/TaskForm';
import { Task } from '@/types';

const ProfilePage: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const handleCreateTask = (task: Task) => {
    setTasks((prev) => [...prev, task]);
  };

  return (
    <div style={{ padding: '32px 16px', maxWidth: 600, margin: '0 auto' }}>
      <h1 style={{ fontSize: 28, marginBottom: 20 }}>Create Your Task</h1>
      <TaskForm onCreateTask={handleCreateTask} />
      <p style={{ marginTop: 20, fontSize: 14, color: '#666' }}>
        Your tasks are only visible locally in this MVP.
      </p>
    </div>
  );
};

export default ProfilePage;