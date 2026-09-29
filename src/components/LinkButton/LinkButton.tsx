import type { AnchorHTMLAttributes } from 'react';
import { cn } from '@/lib/cn';
import { Icon } from '@/components/Icon';
import styles from './LinkButton.module.css';

export interface LinkButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: string;
}

export function LinkButton({ children, className, ...props }: LinkButtonProps) {
  return (
    <a className={cn(styles.link, className)} {...props}>
      {children}
      <Icon name="arrowRight" size={16} />
    </a>
  );
}
