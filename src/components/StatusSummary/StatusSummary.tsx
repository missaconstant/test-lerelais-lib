import styles from './StatusSummary.module.css';

export interface StatusSummaryItem {
  label: string;
  value: string;
}

export interface StatusSummaryProps {
  items?: StatusSummaryItem[];
}

const DEFAULT_ITEMS: StatusSummaryItem[] = [
  { label: 'Estimé', value: '15 août 2026' },
  { label: 'Localisation', value: 'Bouaké 3e' },
  { label: 'Étape suivante', value: 'Disponible en point relais' },
];

export function StatusSummary({ items = DEFAULT_ITEMS }: StatusSummaryProps) {
  return (
    <div className={styles.summary}>
      {items.map((item, index) => (
        <div key={item.label} className={styles.item}>
          {index > 0 ? <span className={styles.rule} /> : null}
          <div>
            <p>{item.label}</p>
            <p>{item.value}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
