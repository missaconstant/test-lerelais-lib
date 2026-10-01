import pin from '@/assets/icons/core-pin-info.svg';
import styles from './InfoRow.module.css';

export interface InfoRowProps {
  label?: string;
  value?: string;
}

export function InfoRow({ label = 'Adresse', value = '12 rue de Charenton, Abidjan 12e' }: InfoRowProps) {
  return (
    <div className={styles.row}>
      <span className={styles.icon}>
        <img src={pin} alt="" width={16} height={16} />
      </span>
      <div>
        <p>{label}</p>
        <p>{value}</p>
      </div>
    </div>
  );
}
