import styles from './TrackingCard.module.css';

export interface TrackingStep {
  mark: string;
  state: 'done' | 'current' | 'upcoming';
}

export interface TrackingCardProps {
  title?: string;
  trackingNumber?: string;
  route?: string;
  relayLabel?: string;
  relayName?: string;
  steps?: TrackingStep[];
}

const DEFAULT_STEPS: TrackingStep[] = [
  { mark: '✓', state: 'done' },
  { mark: '✓', state: 'done' },
  { mark: '●', state: 'current' },
  { mark: '○', state: 'upcoming' },
];

export function TrackingCard({
  title = 'Votre colis est en transit',
  trackingNumber = 'LR-2026-084215',
  route = 'Abidjan 12e → Bouaké 3e',
  relayLabel = "Point relais d'arrivée",
  relayName = 'Épicerie des Brotteaux',
  steps = DEFAULT_STEPS,
}: TrackingCardProps) {
  return (
    <article className={styles.card}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.number}>{trackingNumber}</p>
      <ol className={styles.progress}>
        {steps.map((step, index) => (
          <li key={`${step.mark}-${index}`} className={styles.stepItem}>
            <span className={styles[step.state]}>{step.mark}</span>
            {index < steps.length - 1 ? (
              <span className={step.state === 'done' ? styles.line : styles.lineMuted} />
            ) : null}
          </li>
        ))}
      </ol>
      <p className={styles.route}>{route}</p>
      <div className={styles.relay}>
        <span className={styles.relayIcon} aria-hidden="true">
          ⌂
        </span>
        <div>
          <p className={styles.relayLabel}>{relayLabel}</p>
          <p className={styles.relayName}>{relayName}</p>
        </div>
      </div>
    </article>
  );
}
