import type { ButtonHTMLAttributes } from 'react';
import { cn } from '@/lib/cn';
import styles from './FilterPill.module.css';

export interface FilterPillProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean;
}

export function FilterPill({ active = false, className, type = 'button', children, ...props }: FilterPillProps) {
  return (
    <button
      type={type}
      aria-pressed={active}
      className={cn(styles.pill, active && styles.active, className)}
      {...props}
    >
      {children}
    </button>
  );
}
