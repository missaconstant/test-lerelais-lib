import { cn } from '@/lib/cn';
import styles from './Breadcrumb.module.css';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumb({ items, className }: BreadcrumbProps) {
  return (
    <nav className={cn(styles.nav, className)} aria-label="Fil d’Ariane">
      <ol className={styles.list}>
        {items.map((item, index) => {
          const current = index === items.length - 1;
          return (
            <li key={item.label} className={styles.item}>
              {index > 0 ? <span aria-hidden="true">/</span> : null}
              {current || !item.href ? (
                <span aria-current={current ? 'page' : undefined} className={current ? styles.current : undefined}>
                  {item.label}
                </span>
              ) : (
                <a href={item.href}>{item.label}</a>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
