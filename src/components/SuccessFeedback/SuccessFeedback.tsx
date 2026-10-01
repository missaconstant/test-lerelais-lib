import styles from './SuccessFeedback.module.css';

export interface SuccessFeedbackProps {
  title?: string;
  description?: string;
}

export function SuccessFeedback({
  title = 'Votre envoi est créé !',
  description = 'Votre colis porte le numéro LR-2026-084215.',
}: SuccessFeedbackProps) {
  return (
    <div className={styles.feedback}>
      <span className={styles.mark} aria-hidden="true">
        ✓
      </span>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
