'use client'

import { useSearchParams } from 'next/navigation'
import { useTasksStore } from '@/stores/useTasksStore'
import TaskItem from '@/components/TaskItem/TaskItem'

export default function SearchResultsPage() {
  const searchParams = useSearchParams()
  const description = searchParams.get('description') || ''
  const rawKeywords = searchParams.get('keywords') || ''
  const keywords = rawKeywords.split(',').map(k => k.trim().toLowerCase())

  const allTasks = useTasksStore((state) => state.tasks)

  const results = allTasks.filter(task => {
    const content = `${task.title} ${task.description} ${task.keywords.join(' ')}`.toLowerCase()
    return (
      content.includes(description.toLowerCase()) ||
      keywords.some(k => content.includes(k))
    )
  })

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