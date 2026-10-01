import check from '@/assets/icons/core-check-sm.svg';
import parcel from '@/assets/icons/core-package-lg.svg';
import styles from './BenefitsCard.module.css';

export interface BenefitsCardProps {
  items?: string[];
}

const DEFAULT_ITEMS = [
  'Suivi en temps réel de vos colis',
  'Historique de tous vos envois',
  'Notifications automatiques',
];

export function BenefitsCard({ items = DEFAULT_ITEMS }: BenefitsCardProps) {
  return (
    <div className={styles.card}>
      <span className={styles.illustration}>
        <img src={parcel} alt="" width={56} height={56} />
      </span>
      <ul className={styles.list}>
        {items.map((item) => (
          <li key={item}>
            <span>
              <img src={check} alt="" width={14} height={14} />
            </span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
