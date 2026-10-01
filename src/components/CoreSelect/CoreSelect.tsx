import type { SelectHTMLAttributes } from 'react';
import chevron from '@/assets/icons/core-chevron.svg';
import { cn } from '@/lib/cn';
import styles from './CoreSelect.module.css';

export interface CoreSelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  options: { value: string; label: string }[];
}

export function CoreSelect({ label, options, className, id, ...props }: CoreSelectProps) {
  const fieldId = id ?? 'core-select';

  return (
    <label className={styles.field} htmlFor={fieldId}>
      {label ? <span className={styles.label}>{label}</span> : null}
      <span className={styles.control}>
        <select id={fieldId} className={cn(styles.select, className)} {...props}>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <img src={chevron} alt="" width={16} height={16} />
      </span>
    </label>
  );
}
