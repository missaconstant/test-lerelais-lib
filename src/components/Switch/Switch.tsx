import { useId, type InputHTMLAttributes } from 'react';
import { cn } from '@/lib/cn';
import styles from './Switch.module.css';

export interface SwitchProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
}

export function Switch({ label, id, className, ...props }: SwitchProps) {
  const generatedId = useId();
  const fieldId = id ?? generatedId;

  return (
    <label className={cn(styles.control, className)} htmlFor={fieldId}>
      <input id={fieldId} className={styles.input} type="checkbox" role="switch" {...props} />
      <span className={styles.track} aria-hidden="true">
        <span className={styles.knob} />
      </span>
      {label ? <span className={styles.label}>{label}</span> : null}
    </label>
  );
}
