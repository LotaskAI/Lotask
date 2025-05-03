import styles from './TaskItem.module.css';
import { Task } from '@/types';

type Props = {
  task: Task;
};

const TaskItem: React.FC<Props> = ({ task }) => {
  return (
    <div className={styles.taskItem}>
      <h3 className={styles.taskTitle}>{task.task}</h3>
      <p className={styles.category}>Category: {task.category}</p>
      <p className={styles.reward}>Reward: {task.reward} tokens</p>
    </div>
  );
};

export default TaskItem;