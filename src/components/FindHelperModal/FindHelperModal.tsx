'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import styles from './FindHelperModal.module.css'

export const FindHelperModal = () => {
  const [description, setDescription] = useState('')
  const [keywords, setKeywords] = useState('')
  const [budget, setBudget] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()

  const handleSubmit = () => {
    const query = new URLSearchParams({
      description,
      keywords,
      budget
    }).toString()

    setIsOpen(false)
    router.push(`/search?${query}`)
  }

  return (
    <>
      <button className={styles.openButton} onClick={() => setIsOpen(true)}>
        Find a helper
      </button>

      {isOpen && (
        <div className={styles.modalBackdrop}>
          <div className={styles.modal}>
            <h2>Describe your task</h2>

            <textarea
              placeholder="I need someone to walk my dog..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />

            <input
              type="text"
              placeholder="Keywords (e.g. dog, walk, urgent)"
              value={keywords}
              onChange={(e) => setKeywords(e.target.value)}
            />

            <input
              type="text"
              placeholder="Budget in crypto"
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
            />

            <button className={styles.submitButton} onClick={handleSubmit}>
              Search
            </button>
            <button className={styles.cancelButton} onClick={() => setIsOpen(false)}>
              Cancel
            </button>
          </div>
        </div>
      )}
    </>
  )
}