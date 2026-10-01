import store from '@/assets/icons/core-store.svg';
import styles from './FeatureCard.module.css';

export interface FeatureCardProps {
  title?: string;
  description?: string;
  metric?: string;
  caption?: string;
}

export function FeatureCard({
  title = '+ de trafic',
  description = 'Attirez de nouveaux clients dans votre commerce grâce aux dépôts et retraits de colis quotidiens.',
  metric = '+30%',
  caption = 'de passage en plus',
}: FeatureCardProps) {
  return (
    <article className={styles.card}>
      <span className={styles.icon}>
        <img src={store} alt="" width={24} height={24} />
      </span>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <div className={styles.metric}>
        <span>{metric}</span>
        <span>{caption}</span>
      </div>
    </article>
  );
}
