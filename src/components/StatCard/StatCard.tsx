import { cn } from '@/lib/cn';
import styles from './StatCard.module.css';

export interface StatCardProps {
  label: string;
  value: string;
  hint: string;
  className?: string;
}

export function StatCard({ label, value, hint, className }: StatCardProps) {
  return (
    <article className={cn(styles.card, className)}>
      <p className={styles.label}>{label}</p>
      <p className={styles.value}>{value}</p>
      <p className={styles.hint}>{hint}</p>
    </article>
  );
}
