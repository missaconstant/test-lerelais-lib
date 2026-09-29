import { cn } from '@/lib/cn';
import styles from './ShipmentStatus.module.css';

export type ShipmentStatusValue =
  | 'preparing'
  | 'dropped'
  | 'picked'
  | 'transit'
  | 'available'
  | 'collected'
  | 'delivered'
  | 'anomaly'
  | 'expired';

const LABELS: Record<ShipmentStatusValue, string> = {
  preparing: 'Préparation',
  dropped: 'Déposé',
  picked: 'Pris en charge',
  transit: 'En transit',
  available: 'Disponible',
  collected: 'Retiré',
  delivered: 'Livré',
  anomaly: 'Anomalie',
  expired: 'Expiré',
};

const TONE: Record<ShipmentStatusValue, string> = {
  preparing: 'neutral',
  dropped: 'info',
  picked: 'info',
  transit: 'warning',
  available: 'success',
  collected: 'success',
  delivered: 'success',
  anomaly: 'error',
  expired: 'error',
};

export interface ShipmentStatusProps {
  status?: ShipmentStatusValue;
  className?: string;
}

export function ShipmentStatus({ status = 'preparing', className }: ShipmentStatusProps) {
  const tone = TONE[status];
  return (
    <span className={cn(styles.status, styles[tone], className)}>
      <span className={styles.dot} aria-hidden="true" />
      {LABELS[status]}
    </span>
  );
}
