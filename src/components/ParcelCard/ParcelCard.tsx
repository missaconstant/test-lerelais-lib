import { cn } from '@/lib/cn';
import styles from './ParcelCard.module.css';

export interface ParcelCardProps {
  trackingId: string;
  route: string;
  recipient: string;
  status: string;
  className?: string;
}

export function ParcelCard({ trackingId, route, recipient, status, className }: ParcelCardProps) {
  return (
    <article className={cn(styles.card, className)}>
      <p className={styles.id}>{trackingId}</p>
      <p className={styles.route}>{route}</p>
      <p className={styles.recipient}>{recipient}</p>
      <p className={styles.status}>{status}</p>
    </article>
  );
}
