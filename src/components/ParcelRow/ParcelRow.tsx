import { cn } from '@/lib/cn';
import styles from './ParcelRow.module.css';

export interface ParcelRowProps {
  trackingId: string;
  recipient: string;
  location: string;
  status: string;
  date: string;
  className?: string;
}

export function ParcelRow({ trackingId, recipient, location, status, date, className }: ParcelRowProps) {
  return (
    <div className={cn(styles.row, className)} role="row">
      <span className={styles.id} role="cell">
        {trackingId}
      </span>
      <span role="cell">{recipient}</span>
      <span className={styles.muted} role="cell">
        {location}
      </span>
      <span className={styles.status} role="cell">
        {status}
      </span>
      <span className={styles.muted} role="cell">
        {date}
      </span>
    </div>
  );
}
