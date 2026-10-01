import parcel from '@/assets/icons/core-package.svg';
import styles from './StepCard.module.css';

export interface StepCardProps {
  index?: string;
  title?: string;
  description?: string;
}

export function StepCard({
  index = '01',
  title = 'Préparez votre colis',
  description = 'Destinataire, poids et dimensions.',
}: StepCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.header}>
        <span className={styles.icon}>
          <img src={parcel} alt="" width={28} height={28} />
        </span>
        <span className={styles.index}>{index}</span>
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </article>
  );
}
