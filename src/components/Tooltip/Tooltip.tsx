import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';
import styles from './Tooltip.module.css';

export interface TooltipProps {
  label: string;
  children: ReactNode;
  className?: string;
}

export function Tooltip({ label, children, className }: TooltipProps) {
  return (
    <span className={cn(styles.wrap, className)}>
      {children}
      <span className={styles.tip} role="tooltip">
        {label}
      </span>
    </span>
  );
}
