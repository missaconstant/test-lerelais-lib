import type { InputHTMLAttributes } from 'react';
import { cn } from '@/lib/cn';
import styles from './SearchBar.module.css';

export interface SearchBarProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
}

export function SearchBar({ label = 'Recherche', className, ...props }: SearchBarProps) {
  return (
    <label className={cn(styles.bar, className)}>
      <span className={styles.icon} aria-hidden="true">
        ⌕
      </span>
      <input className={styles.input} type="search" aria-label={label} {...props} />
    </label>
  );
}
