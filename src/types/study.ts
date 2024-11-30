export interface Subject {
  id: string;
  name: string;
  progress: number;
  memorizationProgress: number;
  repetitionCount: number;
  color: string;
}

export interface Student {
  id: string;
  name: string;
  subjects: Subject[];
}