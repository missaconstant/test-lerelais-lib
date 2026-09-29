import { useId, type InputHTMLAttributes } from 'react';
import { cn } from '@/lib/cn';
import styles from './Radio.module.css';

export interface RadioProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
}

export function Radio({ label, id, className, ...props }: RadioProps) {
  const generatedId = useId();
  const fieldId = id ?? generatedId;

  return (
    <label className={cn(styles.control, className)} htmlFor={fieldId}>
      <input id={fieldId} className={styles.input} type="radio" {...props} />
      <span className={styles.circle} aria-hidden="true" />
      {label ? <span className={styles.label}>{label}</span> : null}
    </label>
  );
}
