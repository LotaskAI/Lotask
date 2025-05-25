# Lotask

**Lotask** is a localized, AI-powered task marketplace built on Web3. It connects users who need help with contributors who can assist — whether it's walking a dog or writing code. Tasks are securely managed using smart contracts, while reputation and identity are tracked through decentralized IDs and Soulbound NFTs.

---


## Features

- AI-assisted task search based on user input (description, keywords, and budget)
- Task creation via user profile page
- Global state management using Zustand
- Modal interface for searching tasks
- Live task filtering on a dedicated search result page

---

## Tech Stack

- **Frontend**: Next.js 15 (App Router) with TypeScript
- **State Management**: Zustand
- **Styling**: CSS Modules and animations
- **Data Layer**: In-memory (Zustand), pluggable for future backend
- **Blockchain (planned)**: Solana smart contracts, Phantom wallet
- **AI (planned)**: OpenAI API for task classification and matching

---

## Project structure
```
/app
  /profile         → Task creation page
  /search          → AI-powered search result page
  /components      → Modal and UI elements
  /stores          → Zustand store for tasks
/types             → Shared TypeScript interfaces
```

## Getting Started

Clone the repo and start the development server:

```bash
git clone https://github.com/LotaskAI/Lotask.git
cd Lotask
npm install
npm run dev
```

## Demo

https://lotask-1.onrender.com


