import type { InputHTMLAttributes } from 'react';
import { cn } from '@/lib/cn';
import styles from './CoreField.module.css';

export interface CoreFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export function CoreField({ label, className, id, ...props }: CoreFieldProps) {
  const fieldId = id ?? (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);

  return (
    <label className={styles.field} htmlFor={fieldId}>
      {label ? <span className={styles.label}>{label}</span> : null}
      <input id={fieldId} className={cn(styles.input, className)} {...props} />
    </label>
  );
}
