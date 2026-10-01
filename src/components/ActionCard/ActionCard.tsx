import check from '@/assets/icons/core-check.svg';
import styles from './ActionCard.module.css';

export interface ActionCardProps {
  primaryLabel?: string;
  secondaryLabel?: string;
  trust?: string;
  onPrimary?: () => void;
  onSecondary?: () => void;
}

export function ActionCard({
  primaryLabel = 'Choisir ce point relais',
  secondaryLabel = 'Voir les relais à proximité',
  trust = 'Plus de 120 colis traités ce mois',
  onPrimary,
  onSecondary,
}: ActionCardProps) {
  return (
    <article className={styles.card}>
      <button type="button" className={styles.primary} onClick={onPrimary}>
        {primaryLabel}
      </button>
      <button type="button" className={styles.secondary} onClick={onSecondary}>
        {secondaryLabel}
      </button>
      <p className={styles.trust}>
        <img src={check} alt="" width={16} height={16} />
        {trust}
      </p>
    </article>
  );
}
