import { useId, type SelectHTMLAttributes } from 'react';
import { cn } from '@/lib/cn';
import styles from './Select.module.css';

export interface SelectOption {
  value: string;
  label: string;
}

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  /** Libellé visible au-dessus du champ. */
  label: string;
  options: SelectOption[];
  /** Texte affiché tant qu’aucune valeur n’est choisie. */
  placeholder?: string;
  error?: string;
}

export function Select({
  label,
  options,
  placeholder = 'Sélectionner…',
  error,
  id,
  className,
  ...props
}: SelectProps) {
  const generatedId = useId();
  const fieldId = id ?? generatedId;
  const errorId = error ? `${fieldId}-error` : undefined;

  return (
    <div className={cn(styles.field, className)}>
      <label className={styles.label} htmlFor={fieldId}>
        {label}
      </label>
      <div className={cn(styles.box, error && styles.boxError)}>
        <select
          id={fieldId}
          className={styles.select}
          aria-invalid={error ? true : undefined}
          aria-describedby={errorId}
          {...props}
        >
          <option value="">{placeholder}</option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      {error ? (
        <p id={errorId} className={styles.error} role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}
