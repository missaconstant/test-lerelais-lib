import { cn } from '@/lib/cn';
import styles from './RelayCard.module.css';

export interface RelayCardProps {
  name: string;
  location: string;
  hours: string;
  mapLabel?: string;
  onMapClick?: () => void;
  className?: string;
}

export function RelayCard({
  name,
  location,
  hours,
  mapLabel = 'Voir sur la carte →',
  onMapClick,
  className,
}: RelayCardProps) {
  return (
    <article className={cn(styles.card, className)}>
      <p className={styles.name}>{name}</p>
      <p className={styles.location}>{location}</p>
      <p className={styles.hours}>{hours}</p>
      <button type="button" className={styles.map} onClick={onMapClick}>
        {mapLabel}
      </button>
    </article>
  );
}
