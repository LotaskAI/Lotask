'use client'

import TaskForm from '@/components/TaskForm/TaskForm';
import Link from 'next/link';

const ProfilePage: React.FC = () => {

  return (
    <div style={{ padding: '32px 16px', maxWidth: 600, margin: '0 auto' }}>
      <h1 style={{ fontSize: 28, marginBottom: 20 }}>Create Your Task</h1>
      <TaskForm />
      <Link href={'/'}>To main page</Link>

    </div>
  );
};

export default ProfilePage;