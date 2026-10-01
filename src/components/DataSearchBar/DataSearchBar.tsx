import type { InputHTMLAttributes } from 'react';
import styles from './DataSearchBar.module.css';

export interface DataSearchBarProps extends InputHTMLAttributes<HTMLInputElement> {}

export function DataSearchBar({
  placeholder = 'Rechercher par nom, email ou téléphone…',
  ...props
}: DataSearchBarProps) {
  return (
    <form className={styles.bar} role="search">
      <input className={styles.input} type="search" placeholder={placeholder} {...props} />
    </form>
  );
}
