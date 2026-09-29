import { cn } from '@/lib/cn';
import styles from './Toast.module.css';

export type ToastType = 'success' | 'error' | 'warning' | 'info';

const ICONS: Record<ToastType, string> = {
  success: '✓',
  error: '!',
  warning: '⚠',
  info: 'i',
};

export interface ToastProps {
  type?: ToastType;
  children: string;
  onClose?: () => void;
  className?: string;
}

export function Toast({ type = 'success', children, onClose, className }: ToastProps) {
  return (
    <div className={cn(styles.toast, styles[type], className)} role="status">
      <span className={styles.icon} aria-hidden="true">
        {ICONS[type]}
      </span>
      <p className={styles.message}>{children}</p>
      <button type="button" className={styles.close} onClick={onClose} aria-label="Fermer">
        ✕
      </button>
    </div>
  );
}
