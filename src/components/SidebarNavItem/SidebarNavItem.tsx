import { cn } from '@/lib/cn';
import styles from './SidebarNavItem.module.css';

export interface SidebarNavItemProps {
  label: string;
  active?: boolean;
  onClick?: () => void;
  className?: string;
}

export function SidebarNavItem({ label, active = false, onClick, className }: SidebarNavItemProps) {
  return (
    <button
      type="button"
      className={cn(styles.item, active && styles.active, className)}
      aria-current={active ? 'page' : undefined}
      onClick={onClick}
    >
      {label}
    </button>
  );
}
