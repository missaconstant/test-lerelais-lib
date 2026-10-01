import styles from './RelayResultCard.module.css';

export interface RelayResultCardProps {
  name?: string;
  status?: string;
  badge?: string;
  address?: string;
  distance?: string;
}

export function RelayResultCard({
  name = 'Carrefour City - 350 m',
  status = 'Ouvert',
  badge = 'recommandé',
  address = "12 rue de Charenton · Ouvert jusqu'à 21h",
  distance = '350 m',
}: RelayResultCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.content}>
        <p className={styles.name}>{name}</p>
        <div className={styles.meta}>
          <span className={styles.status}>
            <span className={styles.dot} />
            {status}
          </span>
          <span className={styles.badge}>{badge}</span>
        </div>
        <p className={styles.address}>{address}</p>
      </div>
      <span className={styles.distance}>{distance}</span>
    </article>
  );
}
