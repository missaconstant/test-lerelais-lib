import { cn } from '@/lib/cn';
import styles from './Avatar.module.css';

export type AvatarSize = 'sm' | 'md' | 'lg' | 'xl';

export interface AvatarProps {
  initials: string;
  size?: AvatarSize;
  className?: string;
}

export function Avatar({ initials, size = 'md', className }: AvatarProps) {
  return (
    <span className={cn(styles.avatar, styles[size], className)} aria-hidden="true">
      {initials}
    </span>
  );
}
