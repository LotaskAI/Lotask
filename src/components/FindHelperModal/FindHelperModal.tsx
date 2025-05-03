'use client'

import { useState } from 'react';
import styles from './FindHelperModal.module.css';

type Props = {
  onSubmit: (task: {
    description: string;
    keywords: string[];
    budget: string;
  }) => void;
};

export const FindHelperModal = ({ onSubmit }: Props) => {
  const [description, setDescription] = useState('');
  const [keywords, setKeywords] = useState('');
  const [budget, setBudget] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = () => {
    onSubmit({
      description,
      keywords: keywords.split(',').map(k => k.trim()),
      budget,
    });
    setIsOpen(false);
  };

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
  );
};