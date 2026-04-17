export interface Exercise {
  name: string;
  nameHe: string;
  category: string;
  difficulty: 1 | 2 | 3 | 4;
  description: string;
  tips: string[];
  duration: number;
}

export interface SessionExercise extends Exercise {
  assignedDuration: number;
}

export type AppPhase = 'idle' | 'running' | 'paused' | 'complete';

export interface AppState {
  phase: AppPhase;
  totalElapsed: number;
  segmentElapsed: number;
  currentSegmentIdx: number;
  sessionPlan: SessionExercise[];
  bpm: 75 | 90 | 100 | 120;
}
