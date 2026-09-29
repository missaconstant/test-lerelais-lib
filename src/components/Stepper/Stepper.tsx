import { cn } from '@/lib/cn';
import styles from './Stepper.module.css';

export type StepState = 'done' | 'active' | 'upcoming';

export interface Step {
  label: string;
  state: StepState;
}

export interface StepperProps {
  steps: Step[];
  className?: string;
}

export function Stepper({ steps, className }: StepperProps) {
  return (
    <ol className={cn(styles.stepper, className)}>
      {steps.map((step, index) => (
        <li key={step.label} className={styles.item}>
          {index > 0 ? (
            <span
              className={cn(styles.connector, step.state === 'upcoming' && styles.connectorMuted)}
              aria-hidden="true"
            />
          ) : null}
          <span className={styles.content}>
            <span className={cn(styles.dot, styles[step.state])} aria-hidden="true">
              {step.state === 'done' ? '✓' : index + 1}
            </span>
            <span className={cn(styles.label, step.state === 'active' && styles.labelActive)}>
              {step.label}
            </span>
          </span>
        </li>
      ))}
    </ol>
  );
}
