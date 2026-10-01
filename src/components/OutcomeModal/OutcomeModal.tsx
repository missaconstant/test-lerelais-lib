import check from '@/assets/icons/core-check-white.svg';
import close from '@/assets/icons/core-x.svg';
import styles from './OutcomeModal.module.css';

export interface OutcomeModalProps {
  type?: 'success' | 'error';
  title?: string;
  description?: string;
  onClose?: () => void;
  onRetry?: () => void;
}

export function OutcomeModal({
  type = 'success',
  title = 'Candidature envoyée avec succès !',
  description = 'Votre candidature a bien été transmise à notre équipe. Nous reviendrons vers vous par email sous 48 heures.',
  onClose,
  onRetry,
}: OutcomeModalProps) {
  const isError = type === 'error';

  return (
    <div className={styles.modal} role="dialog" aria-labelledby="outcome-title">
      <span className={isError ? styles.errorOuter : styles.successOuter}>
        <span className={isError ? styles.errorInner : styles.successInner}>
          <img src={isError ? close : check} alt="" width={isError ? 16 : 20} height={isError ? 16 : 20} />
        </span>
      </span>
      <div className={styles.copy}>
        <h3 id="outcome-title">{title}</h3>
        <p>{description}</p>
      </div>
      <div className={styles.actions}>
        <button type="button" className={isError ? styles.cancel : styles.close} onClick={onClose}>
          Fermer
        </button>
        {isError ? (
          <button type="button" className={styles.retry} onClick={onRetry}>
            Réessayer
          </button>
        ) : null}
      </div>
    </div>
  );
}
