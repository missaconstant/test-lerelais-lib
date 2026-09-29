import { cn } from '@/lib/cn';
import styles from './Badge.module.css';

export type ParcelStatus = 'pending' | 'transit' | 'available' | 'delivered' | 'error';

const LABELS: Record<ParcelStatus, string> = {
  pending: 'En attente',
  transit: 'En transit',
  available: 'Disponible',
  delivered: 'Livré',
  error: 'Erreur',
};

export interface BadgeProps {
  status?: ParcelStatus;
  className?: string;
}

export function Badge({ status = 'pending', className }: BadgeProps) {
  return <span className={cn(styles.badge, styles[status], className)}>{LABELS[status]}</span>;
}
