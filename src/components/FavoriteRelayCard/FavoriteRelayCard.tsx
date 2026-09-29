import { cn } from '@/lib/cn';
import { Icon } from '@/components/Icon';
import styles from './FavoriteRelayCard.module.css';

export interface FavoriteRelayCardProps {
  name: string;
  address: string;
  distance: string;
  hours: string;
  services: string[];
  detailLabel?: string;
  onDetail?: () => void;
  className?: string;
}

export function FavoriteRelayCard({
  name,
  address,
  distance,
  hours,
  services,
  detailLabel = 'Voir le détail →',
  onDetail,
  className,
}: FavoriteRelayCardProps) {
  return (
    <article className={cn(styles.card, className)}>
      <div className={styles.top}>
        <div>
          <h3>{name}</h3>
          <p className={styles.address}>
            <Icon name="mapPin" size={14} />
            {address}
          </p>
        </div>
        <Icon name="heart" size={20} />
      </div>
      <div className={styles.middle}>
        <span className={styles.distance}>{distance}</span>
        <span className={styles.hours}>
          <Icon name="clockMuted" size={14} />
          {hours}
        </span>
      </div>
      <hr className={styles.line} />
      <div className={styles.bottom}>
        <ul>
          {services.map((service) => (
            <li key={service}>{service}</li>
          ))}
        </ul>
        <button type="button" onClick={onDetail}>
          {detailLabel}
        </button>
      </div>
    </article>
  );
}
