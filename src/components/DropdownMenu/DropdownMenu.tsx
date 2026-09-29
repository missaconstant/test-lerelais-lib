import { cn } from '@/lib/cn';
import { Icon, type IconProps } from '@/components/Icon';
import styles from './DropdownMenu.module.css';

export interface DropdownItem {
  id: string;
  label: string;
  icon: IconProps['name'];
  danger?: boolean;
  separated?: boolean;
}

export interface DropdownMenuProps {
  items?: DropdownItem[];
  onSelect?: (id: string) => void;
  className?: string;
}

const DEFAULT_ITEMS: DropdownItem[] = [
  { id: 'profile', label: 'Mon profil', icon: 'user' },
  { id: 'settings', label: 'Paramètres', icon: 'settings' },
  { id: 'notifications', label: 'Notifications', icon: 'bell' },
  { id: 'logout', label: 'Déconnexion', icon: 'logout', danger: true, separated: true },
];

export function DropdownMenu({ items = DEFAULT_ITEMS, onSelect, className }: DropdownMenuProps) {
  return (
    <div className={cn(styles.menu, className)} role="menu">
      {items.map((item) => (
        <span key={item.id} className={styles.slot}>
          {item.separated ? <span className={styles.separator} /> : null}
          <button
            type="button"
            role="menuitem"
            className={cn(styles.item, item.danger && styles.danger)}
            onClick={() => onSelect?.(item.id)}
          >
            <Icon name={item.icon} size={16} />
            {item.label}
          </button>
        </span>
      ))}
    </div>
  );
}
