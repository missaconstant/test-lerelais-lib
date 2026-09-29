import { cn } from '@/lib/cn';
import { Icon } from '@/components/Icon';
import styles from './QuickActionCard.module.css';

export interface QuickActionCardProps {
  title: string;
  description: string;
  onClick?: () => void;
  className?: string;
}

export function QuickActionCard({ title, description, onClick, className }: QuickActionCardProps) {
  return (
    <button type="button" className={cn(styles.card, className)} onClick={onClick}>
      <span>
        <span className={styles.title}>{title}</span>
        <span className={styles.description}>{description}</span>
      </span>
      <Icon name="arrowRight" size={20} />
    </button>
  );
}
