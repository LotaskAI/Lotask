import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Task } from '@/types';

type TaskStore = {
  tasks: Task[];
  searchResults: Task[];
  addTask: (task: Task) => void;
  setSearchResults: (tasks: Task[]) => void;
};

export const useTasksStore = create<TaskStore>()(
  persist(
    (set) => ({
      tasks: [],
      searchResults: [],
      addTask: (task) =>
        set((state) => ({
          tasks: [...state.tasks, task],
        })),
      setSearchResults: (tasks) => set(() => ({ searchResults: tasks })),
    }),
    {
      name: 'lotask-storage',
    }
  )
);