import { useState } from 'react';
import styles from './TaskForm.module.css';
import { Task } from '@/types';

type Props = {
  onCreateTask: (task: Task) => void;
};

const TaskForm: React.FC<Props> = ({ onCreateTask }) => {
  const [task, setTask] = useState('');
  const [category, setCategory] = useState('');
  const [reward, setReward] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (task && category && reward) {
      onCreateTask({ task, category, reward });
      setTask('');
      setCategory('');
      setReward('');
    }
  };

  return (
    <div className={styles.formContainer}>
      <h2>Create a Task</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          className={styles.input}
          placeholder="Task description"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <input
          type="text"
          className={styles.input}
          placeholder="Category (e.g., dog walking)"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <input
          type="number"
          className={styles.input}
          placeholder="Reward in tokens"
          value={reward}
          onChange={(e) => setReward(e.target.value)}
        />
        <button type="submit" className={styles.submitButton}>
          Post Task
        </button>
      </form>
    </div>
  );
};

export default TaskForm;