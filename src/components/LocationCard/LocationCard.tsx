import pin from '@/assets/icons/core-pin-white.svg';
import styles from './LocationCard.module.css';

export interface LocationCardProps {
  label?: string;
  name?: string;
  area?: string;
}

export function LocationCard({
  label = 'Destination',
  name = 'Épicerie des Brotteaux',
  area = 'Bouaké 3e',
}: LocationCardProps) {
  return (
    <article className={styles.card}>
      <p className={styles.label}>{label}</p>
      <p className={styles.name}>{name}</p>
      <p className={styles.area}>{area}</p>
      <div className={styles.map}>
        <span className={styles.marker}>
          <img src={pin} alt="" width={18} height={18} />
        </span>
      </div>
    </article>
  );
}
