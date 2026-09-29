import { useId, type InputHTMLAttributes } from 'react';
import { cn } from '@/lib/cn';
import styles from './TextField.module.css';

export interface TextFieldProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /** Libellé visible au-dessus du champ. */
  label: string;
  /** Message d’erreur. Passe le champ en état invalide. */
  error?: string;
}

export function TextField({ label, error, id, className, disabled, ...props }: TextFieldProps) {
  const generatedId = useId();
  const fieldId = id ?? generatedId;
  const errorId = error ? `${fieldId}-error` : undefined;

  return (
    <div className={cn(styles.field, className)}>
      <label className={cn(styles.label, error && styles.labelError)} htmlFor={fieldId}>
        {label}
      </label>
      <input
        id={fieldId}
        className={cn(styles.input, error && styles.inputError)}
        disabled={disabled}
        aria-invalid={error ? true : undefined}
        aria-describedby={errorId}
        {...props}
      />
      {error ? (
        <p id={errorId} className={styles.error} role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}
