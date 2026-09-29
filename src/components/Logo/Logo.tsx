import { cn } from '@/lib/cn';
import styles from './Logo.module.css';

export interface LogoProps {
  tone?: 'brand' | 'light';
  className?: string;
}

export function Logo({ tone = 'brand', className }: LogoProps) {
  return (
    <span className={cn(styles.logo, styles[tone], className)}>
      <span className={styles.mark} aria-hidden="true">
        LR
      </span>
      <span className={styles.word}>LeRelais</span>
    </span>
  );
}
