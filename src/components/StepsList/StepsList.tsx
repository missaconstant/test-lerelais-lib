import styles from './StepsList.module.css';

export interface StepsListProps {
  steps?: string[];
}

const DEFAULT_STEPS = [
  'Vérification des informations',
  'Validation administrative',
  'Activation de votre espace gérant',
];

export function StepsList({ steps = DEFAULT_STEPS }: StepsListProps) {
  return (
    <ol className={styles.list}>
      {steps.map((step, index) => (
        <li key={step}>
          <span>{index + 1}</span>
          {step}
        </li>
      ))}
    </ol>
  );
}
