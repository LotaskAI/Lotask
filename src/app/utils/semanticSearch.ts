import { pipeline } from '@xenova/transformers';
import { Task } from '@/types/index';

let embedder: any = null;

export const initEmbedder = async () => {
  if (!embedder) {
    embedder = await pipeline('feature-extraction', 'Xenova/bge-small-en-v1.5');
  }
  return embedder;
};

export const computeSimilarity = (vecA: number[], vecB: number[]) => {
  const dot = vecA.reduce((sum, a, i) => sum + a * vecB[i], 0);
  const normA = Math.sqrt(vecA.reduce((sum, a) => sum + a * a, 0));
  const normB = Math.sqrt(vecB.reduce((sum, b) => sum + b * b, 0));
  return dot / (normA * normB);
};

export const findSimilarTasks = async (
  query: string,
  tasks: Task[]
): Promise<(Task & { score: number; relevanceLabel: string })[]> => {
  const embedder = await initEmbedder();
  const queryEmbedding = await embedder(query, { pooling: 'mean', normalize: true });

  const scored = await Promise.all(
    tasks.map(async (task) => {
      const taskEmbedding = await embedder(task.description, { pooling: 'mean', normalize: true });
      const score = computeSimilarity(queryEmbedding.data, taskEmbedding.data);
      const relevanceLabel = getRelevanceLabel(score);
      return { ...task, score, relevanceLabel };
    })
  );

  const MIN_SCORE = 0.55;

  return scored
    .filter(task => task.score >= MIN_SCORE)
    .sort((a, b) => b.score - a.score)
    .slice(0, 5);
};

const getRelevanceLabel = (score: number): string => {
  if (score >= 0.8) return '🔥 Очень релевантно';
  if (score >= 0.65) return '✅ Похоже';
  if (score >= 0.55) return '🤏 Немного похоже';
  return '🚫 Непохоже';
};