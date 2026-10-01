import pin from '@/assets/icons/core-pin-value.svg';
import styles from './ValueCard.module.css';

export interface ValueCardProps {
  title?: string;
  description?: string;
}

export function ValueCard({
  title = 'Proximité',
  description = 'Un réseau de commerces partenaires proche des utilisateurs.',
}: ValueCardProps) {
  return (
    <article className={styles.card}>
      <span className={styles.icon}>
        <img src={pin} alt="" width={18} height={18} />
      </span>
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </article>
  );
}
