import { cn } from '@/lib/cn';
import styles from './Tabs.module.css';

export interface TabItem {
  id: string;
  label: string;
}

export interface TabsProps {
  items: TabItem[];
  value: string;
  onChange: (id: string) => void;
  className?: string;
  /** Libellé accessible du groupe d’onglets. */
  label?: string;
}

export function Tabs({ items, value, onChange, className, label = 'Sections' }: TabsProps) {
  return (
    <div className={cn(styles.tabs, className)} role="tablist" aria-label={label}>
      {items.map((item) => {
        const selected = item.id === value;
        return (
          <button
            key={item.id}
            type="button"
            role="tab"
            aria-selected={selected}
            className={cn(styles.tab, selected && styles.active)}
            onClick={() => onChange(item.id)}
          >
            {item.label}
          </button>
        );
      })}
    </div>
  );
}
