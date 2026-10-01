import type { InputHTMLAttributes } from 'react';
import { CoreButton } from '@/components/CoreButton';
import styles from './DataFiltersToolbar.module.css';

export interface DataFiltersToolbarProps extends InputHTMLAttributes<HTMLInputElement> {
  onFilters?: () => void;
}

export function DataFiltersToolbar({
  placeholder = 'Rechercher par nom, email ou téléphone…',
  onFilters,
  ...props
}: DataFiltersToolbarProps) {
  return (
    <form className={styles.toolbar} role="search">
      <input className={styles.input} type="search" placeholder={placeholder} {...props} />
      <CoreButton variant="filter" onClick={onFilters}>
        Filtres
      </CoreButton>
    </form>
  );
}
