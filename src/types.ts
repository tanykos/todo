export interface Task {
  id: number;
  text: string;
  completed: boolean;
}

export const enum TaskFilter {
  All = 'all',
  Active = 'active',
  Completed = 'completed'
}
