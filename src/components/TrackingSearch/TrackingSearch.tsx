import type { FormEvent } from 'react';
import search from '@/assets/icons/core-search-dark.svg';
import styles from './TrackingSearch.module.css';

export interface TrackingSearchProps {
  defaultValue?: string;
  onSearch?: (value: string) => void;
}

export function TrackingSearch({ defaultValue = 'LR-9999-000000', onSearch }: TrackingSearchProps) {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    onSearch?.(String(data.get('tracking') ?? ''));
  }

  return (
    <form className={styles.bar} onSubmit={handleSubmit}>
      <img src={search} alt="" width={18} height={18} />
      <input name="tracking" defaultValue={defaultValue} aria-label="Numéro de suivi" />
      <button type="submit">Rechercher</button>
    </form>
  );
}
