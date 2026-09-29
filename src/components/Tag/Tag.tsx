import { cn } from '@/lib/cn';
import { Icon } from '@/components/Icon';
import styles from './Tag.module.css';

export type TagType = 'default' | 'active' | 'removable' | 'success' | 'warning' | 'error';

export interface TagProps {
  type?: TagType;
  children: string;
  onRemove?: () => void;
  className?: string;
}

export function Tag({ type = 'default', children, onRemove, className }: TagProps) {
  return (
    <span className={cn(styles.tag, styles[type], className)}>
      {children}
      {type === 'removable' ? (
        <button type="button" className={styles.remove} onClick={onRemove} aria-label={`Retirer ${children}`}>
          <Icon name="close" size={12} />
        </button>
      ) : null}
    </span>
  );
}
