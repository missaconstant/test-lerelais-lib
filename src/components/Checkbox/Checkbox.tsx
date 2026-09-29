import { useId, type InputHTMLAttributes } from 'react';
import { cn } from '@/lib/cn';
import styles from './Checkbox.module.css';

export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
}

export function Checkbox({ label, id, className, ...props }: CheckboxProps) {
  const generatedId = useId();
  const fieldId = id ?? generatedId;

  return (
    <label className={cn(styles.control, className)} htmlFor={fieldId}>
      <input id={fieldId} className={styles.input} type="checkbox" {...props} />
      <span className={styles.box} aria-hidden="true" />
      {label ? <span className={styles.label}>{label}</span> : null}
    </label>
  );
}
