import { useState } from 'react';
import lockIcon from '@/assets/icons/core-lock.svg';
import plusIcon from '@/assets/icons/core-plus.svg';
import { cn } from '@/lib/cn';
import styles from './CoreTabs.module.css';

const ICONS = {
  lock: lockIcon,
  plus: plusIcon,
} as const;

export interface CoreTabItem {
  id: string;
  label: string;
  icon?: keyof typeof ICONS;
}

export interface CoreTabsProps {
  items?: CoreTabItem[];
  value?: string;
  defaultValue?: string;
  onChange?: (id: string) => void;
}

const DEFAULT_ITEMS: CoreTabItem[] = [
  { id: 'login', label: 'Se connecter', icon: 'lock' },
  { id: 'create', label: 'Se connecter', icon: 'plus' },
];

export function CoreTabs({
  items = DEFAULT_ITEMS,
  value,
  defaultValue,
  onChange,
}: CoreTabsProps) {
  const [internal, setInternal] = useState(defaultValue ?? items[1]?.id ?? items[0]?.id);
  const current = value ?? internal;

  function select(id: string) {
    if (value === undefined) setInternal(id);
    onChange?.(id);
  }

  return (
    <div className={styles.tabs} role="tablist">
      {items.map((item) => {
        const selected = item.id === current;
        return (
          <button
            key={item.id}
            type="button"
            role="tab"
            aria-selected={selected}
            className={cn(styles.tab, selected && styles.active)}
            onClick={() => select(item.id)}
          >
            <span className={styles.label}>
              {item.icon ? <img src={ICONS[item.icon]} alt="" width={18} height={18} /> : null}
              {item.label}
            </span>
            <span className={styles.bar} />
          </button>
        );
      })}
    </div>
  );
}
