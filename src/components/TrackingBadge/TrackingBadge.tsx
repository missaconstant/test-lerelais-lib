import styles from './TrackingBadge.module.css';

export interface TrackingBadgeProps {
  value?: string;
}

export function TrackingBadge({ value = 'LR-2026-084215' }: TrackingBadgeProps) {
  return <span className={styles.badge}>{value}</span>;
}
