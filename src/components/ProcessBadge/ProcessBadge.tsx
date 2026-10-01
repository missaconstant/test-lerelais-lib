import { cn } from '@/lib/cn';
import styles from './ProcessBadge.module.css';

export type ProcessBadgeState = 'pending' | 'success' | 'error';

const LABELS: Record<ProcessBadgeState, string> = {
  pending: 'En cours de traitement',
  success: 'En cours de traitement',
  error: 'En cours de traitement',
};

export interface ProcessBadgeProps {
  state?: ProcessBadgeState;
  label?: string;
}

export function ProcessBadge({ state = 'pending', label }: ProcessBadgeProps) {
  return <span className={cn(styles.badge, styles[state])}>{label ?? LABELS[state]}</span>;
}
