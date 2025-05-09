import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Task } from '@/types';

type TaskStore = {
  tasks: Task[];
  addTask: (task: Task) => void;
};

export const useTasksStore = create<TaskStore>()(
  persist(
    (set) => ({
      tasks: [],
      addTask: (task) =>
        set((state) => ({
          tasks: [...state.tasks, task],
        })),
    }),
    {
      name: 'lotask-storage',
    }
  )
);