import type { FormEvent, InputHTMLAttributes } from 'react';
import searchIcon from '@/assets/icons/core-search.svg';
import styles from './QuestionSearch.module.css';

export interface QuestionSearchProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onSubmit'> {
  onSubmit?: (value: string) => void;
}

export function QuestionSearch({
  placeholder = 'Rechercher une question',
  onSubmit,
  ...props
}: QuestionSearchProps) {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    onSubmit?.(String(data.get('query') ?? ''));
  }

  return (
    <form className={styles.bar} onSubmit={handleSubmit}>
      <img src={searchIcon} alt="" width={18} height={18} />
      <input name="query" className={styles.input} placeholder={placeholder} {...props} />
    </form>
  );
}
