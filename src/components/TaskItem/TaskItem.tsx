import styles from './TaskItem.module.css';
import { Task } from '@/types';
import { useState } from 'react';

type Props = {
  task: Task;
};

const TaskItem: React.FC<Props> = ({ task }) => {
  const [taken, setTaken] = useState(false);

  const handleAccept = () => {
    console.log(`Task accepted: ${task.title}`);
    setTaken(true);
  };

  return (
    <div className={styles.taskItem}>
      <h3 className={styles.taskTitle}>{task.title}</h3>
      <p className={styles.description}>{task.description}</p>
      <p className={styles.keywords}>
        Keywords: {task.keywords.join(', ')}
      </p>
      <p className={styles.budget}>Reward: {task.budget} tokens</p>
      <p className={styles.date}>
        Posted on: {new Date(task.date).toLocaleDateString()}
      </p>

      <button
        className={styles.acceptButton}
        onClick={handleAccept}
        disabled={taken}
      >
        {taken ? 'Task Accepted' : 'Accept Task'}
      </button>
    </div>
  );
};

export default TaskItem;
