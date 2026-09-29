import { cn } from '@/lib/cn';
import styles from './Skeleton.module.css';

export type SkeletonType = 'text' | 'rectangle' | 'circle';

export interface SkeletonProps {
  type?: SkeletonType;
  className?: string;
}

export function Skeleton({ type = 'text', className }: SkeletonProps) {
  return <span className={cn(styles.skeleton, styles[type], className)} aria-hidden="true" />;
}
