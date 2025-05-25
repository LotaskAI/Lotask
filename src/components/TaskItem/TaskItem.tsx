import styles from './TaskItem.module.css';
import { Task } from '@/types';

type Props = {
  task: Task;
};

const TaskItem: React.FC<Props> = ({ task }) => {
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
    </div>
  );
};

export default TaskItem;