import { cn } from '@/lib/cn';
import styles from './Alert.module.css';

export type AlertType = 'info' | 'success' | 'warning' | 'error';

const TITLES: Record<AlertType, string> = {
  info: 'Info',
  success: 'Success',
  warning: 'Warning',
  error: 'Error',
};

export interface AlertProps {
  type?: AlertType;
  title?: string;
  children: string;
  className?: string;
}

export function Alert({ type = 'info', title, children, className }: AlertProps) {
  return (
    <div className={cn(styles.alert, styles[type], className)} role={type === 'error' ? 'alert' : 'status'}>
      <p className={styles.title}>{title ?? TITLES[type]}</p>
      <p className={styles.message}>{children}</p>
    </div>
  );
}
