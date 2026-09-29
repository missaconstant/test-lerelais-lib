import { cn } from '@/lib/cn';
import styles from './Divider.module.css';

export interface DividerProps {
  label?: string;
  caption?: string;
  className?: string;
}

export function Divider({ label, caption, className }: DividerProps) {
  return (
    <div className={cn(styles.wrap, className)}>
      {caption ? <p className={styles.caption}>{caption}</p> : null}
      <div className={styles.row}>
        <span className={styles.line} />
        {label ? <span className={styles.label}>{label}</span> : null}
        {label ? <span className={styles.line} /> : null}
      </div>
    </div>
  );
}
