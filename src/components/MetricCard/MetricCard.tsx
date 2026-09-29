import { cn } from '@/lib/cn';
import styles from './MetricCard.module.css';

export interface MetricCardProps {
  label: string;
  value: string;
  hint: string;
  className?: string;
}

export function MetricCard({ label, value, hint, className }: MetricCardProps) {
  return (
    <article className={cn(styles.card, className)}>
      <p className={styles.label}>{label}</p>
      <p className={styles.value}>{value}</p>
      <p className={styles.hint}>{hint}</p>
    </article>
  );
}
