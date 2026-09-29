import { cn } from '@/lib/cn';
import styles from './Pagination.module.css';

export interface PaginationProps {
  page: number;
  pageCount: number;
  onChange: (page: number) => void;
  className?: string;
}

export function Pagination({ page, pageCount, onChange, className }: PaginationProps) {
  const pages = Array.from({ length: pageCount }, (_, index) => index + 1);

  return (
    <nav className={cn(styles.nav, className)} aria-label="Pagination">
      <button type="button" className={styles.button} aria-label="Page précédente" disabled={page <= 1} onClick={() => onChange(page - 1)}>
        ←
      </button>
      {pages.map((number) => (
        <button
          key={number}
          type="button"
          className={cn(styles.button, number === page && styles.current)}
          aria-current={number === page ? 'page' : undefined}
          onClick={() => onChange(number)}
        >
          {number}
        </button>
      ))}
      <button
        type="button"
        className={styles.button}
        aria-label="Page suivante"
        disabled={page >= pageCount}
        onClick={() => onChange(page + 1)}
      >
        →
      </button>
    </nav>
  );
}
