import { cn } from '@/lib/cn';
import { Icon } from '@/components/Icon';
import styles from './NotificationRow.module.css';

export interface NotificationRowProps {
  title: string;
  description: string;
  time: string;
  className?: string;
}

export function NotificationRow({ title, description, time, className }: NotificationRowProps) {
  return (
    <article className={cn(styles.row, className)}>
      <span className={styles.dot} aria-hidden="true" />
      <span className={styles.icon}>
        <Icon name="package" size={20} />
      </span>
      <div>
        <p className={styles.title}>{title}</p>
        <p className={styles.description}>{description}</p>
      </div>
      <time className={styles.time}>{time}</time>
    </article>
  );
}
