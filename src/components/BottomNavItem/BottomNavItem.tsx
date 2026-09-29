import { cn } from '@/lib/cn';
import styles from './BottomNavItem.module.css';

export interface BottomNavItemProps {
  label: string;
  active?: boolean;
  onClick?: () => void;
  className?: string;
}

export function BottomNavItem({ label, active = false, onClick, className }: BottomNavItemProps) {
  return (
    <button
      type="button"
      className={cn(styles.item, active && styles.active, className)}
      aria-current={active ? 'page' : undefined}
      onClick={onClick}
    >
      <span aria-hidden="true">●</span>
      {label}
    </button>
  );
}
