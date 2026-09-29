import { cn } from '@/lib/cn';
import styles from './ProgressBar.module.css';

export interface ProgressBarProps {
  /** Valeur entre 0 et 100. */
  value: number;
  label: string;
  className?: string;
}

export function ProgressBar({ value, label, className }: ProgressBarProps) {
  const percent = Math.min(100, Math.max(0, value));
  const tone = percent === 100 ? 'done' : percent === 0 ? 'idle' : 'active';

  return (
    <div className={cn(styles.progress, className)}>
      <div className={styles.row}>
        <span className={styles.label}>{label}</span>
        <span className={cn(styles.value, styles[tone])}>{percent}%</span>
      </div>
      <div
        className={styles.track}
        role="progressbar"
        aria-valuenow={percent}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={label}
      >
        <span className={cn(styles.fill, styles[tone])} style={{ width: `${percent}%` }} />
      </div>
    </div>
  );
}
