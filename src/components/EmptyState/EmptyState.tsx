import { cn } from '@/lib/cn';
import { Icon } from '@/components/Icon';
import styles from './EmptyState.module.css';

export interface EmptyStateProps {
  title: string;
  description: string;
  actionLabel?: string;
  onAction?: () => void;
  className?: string;
}

export function EmptyState({
  title,
  description,
  actionLabel = 'Envoyer un colis',
  onAction,
  className,
}: EmptyStateProps) {
  return (
    <div className={cn(styles.empty, className)}>
      <span className={styles.icon}>
        <Icon name="package" size={32} />
      </span>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.description}>{description}</p>
      <button type="button" className={styles.action} onClick={onAction}>
        <Icon name="plus" size={16} />
        {actionLabel}
      </button>
    </div>
  );
}
