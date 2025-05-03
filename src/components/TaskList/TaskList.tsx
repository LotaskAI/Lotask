import TaskItem from '@/components/TaskItem/TaskItem';
import styles from './TaskList.module.css';
import { Task } from '@/types';

type Props = {
  tasks: Task[];
};

const TaskList: React.FC<Props> = ({ tasks }) => {
  return (
    <div className={styles.taskList}>
      <h2>Task List</h2>
      {tasks.map((task, index) => (
        <TaskItem key={index} task={task} />
      ))}
    </div>
  );
};

export default TaskList;