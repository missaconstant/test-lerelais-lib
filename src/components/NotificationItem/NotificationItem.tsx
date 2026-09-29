import { cn } from '@/lib/cn';
import { Icon } from '@/components/Icon';
import styles from './NotificationItem.module.css';

export interface NotificationItemProps {
  title: string;
  description: string;
  time: string;
  unread?: boolean;
  className?: string;
}

export function NotificationItem({ title, description, time, unread = false, className }: NotificationItemProps) {
  return (
    <article className={cn(styles.item, unread && styles.unread, className)}>
      <span className={cn(styles.icon, unread && styles.iconUnread)}>
        <Icon name={unread ? 'packageWhite' : 'packageRead'} size={18} />
      </span>
      <div className={styles.content}>
        <p className={cn(styles.title, unread && styles.titleUnread)}>{title}</p>
        <p className={styles.description}>{description}</p>
        <p className={styles.time}>
          <Icon name="clock" size={12} />
          {time}
        </p>
      </div>
      {unread ? <span className={styles.dot} aria-label="Non lu" /> : null}
    </article>
  );
}
