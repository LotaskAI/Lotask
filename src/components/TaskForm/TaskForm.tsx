import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useTasksStore } from '@/stores/useTasksStore';
import styles from './TaskForm.module.css';
import { Task } from '@/types';

const TaskForm: React.FC = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [keywords, setKeywords] = useState('');
  const [budget, setBudget] = useState<number | ''>('');

  const addTask = useTasksStore((state) => state.addTask);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!title || !description || !category || !keywords || budget === '') return;

    const newTask: Task = {
      id: uuidv4(),
      title,
      description,
      keywords: keywords.split(',').map((k) => k.trim()),
      budget: budget.toString(),        
      date: new Date().toISOString(),    
    };

    addTask(newTask);

    setTitle('');
    setDescription('');
    setCategory('');
    setKeywords('');
    setBudget('');
  };

  return (
    <div className={styles.formContainer}>

      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          className={styles.input}
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          className={styles.input}
          placeholder="Task description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <input
          type="text"
          className={styles.input}
          placeholder="Category (e.g., dog walking)"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />

        <input
          type="text"
          className={styles.input}
          placeholder="Keywords (comma-separated)"
          value={keywords}
          onChange={(e) => setKeywords(e.target.value)}
        />

        <input
          type="number"
          className={styles.input}
          placeholder="Budget in tokens"
          value={budget}
          onChange={(e) =>
            setBudget(e.target.value === '' ? '' : Number(e.target.value))
          }
        />

        <button type="submit" className={styles.submitButton}>
          Post Task
        </button>
      </form>
    </div>
  );
};

export default TaskForm;