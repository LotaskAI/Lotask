'use client'

import { useTasksStore } from '@/stores/useTasksStore'
import TaskItem from '@/components/TaskItem/TaskItem'

export default function SearchResultsPage() {
  const results = useTasksStore((state) => state.searchResults);

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Matching tasks</h1>
      {results.length === 0 ? (
        <p>No tasks found. Try changing your description or keywords.</p>
      ) : (
        <ul style={{ display: 'grid', gap: '1rem', marginTop: '1rem' }}>
          {results.map((task, index) => (
            <TaskItem key={index} task={task} />
          ))}
        </ul>
      )}
    </div>
  )
}