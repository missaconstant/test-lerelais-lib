import { cn } from '@/lib/cn';
import styles from './DashboardParcelRow.module.css';

export interface DashboardParcelRowProps {
  trackingId: string;
  route: string;
  recipient: string;
  status: string;
  date: string;
  detailLabel?: string;
  onDetail?: () => void;
  className?: string;
}

export function DashboardParcelRow({
  trackingId,
  route,
  recipient,
  status,
  date,
  detailLabel = 'Voir le détail →',
  onDetail,
  className,
}: DashboardParcelRowProps) {
  return (
    <article className={cn(styles.row, className)}>
      <div>
        <p className={styles.id}>{trackingId}</p>
        <p className={styles.route}>{route}</p>
        <p className={styles.recipient}>{recipient}</p>
      </div>
      <div>
        <span className={styles.status}>{status}</span>
        <p className={styles.date}>{date}</p>
      </div>
      <button type="button" onClick={onDetail}>
        {detailLabel}
      </button>
    </article>
  );
}
