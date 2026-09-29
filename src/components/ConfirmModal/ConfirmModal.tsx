import { cn } from '@/lib/cn';
import { Icon } from '@/components/Icon';
import { Button } from '@/components/Button';
import styles from './ConfirmModal.module.css';

export interface ConfirmModalProps {
  title: string;
  description: string;
  confirmLabel?: string;
  cancelLabel?: string;
  open?: boolean;
  onConfirm?: () => void;
  onCancel?: () => void;
  className?: string;
}

export function ConfirmModal({
  title,
  description,
  confirmLabel = 'Confirmer',
  cancelLabel = 'Annuler',
  open = true,
  onConfirm,
  onCancel,
  className,
}: ConfirmModalProps) {
  if (!open) return null;

  return (
    <div className={styles.backdrop} role="presentation">
      <div className={cn(styles.modal, className)} role="dialog" aria-modal="true" aria-labelledby="confirm-title">
        <span className={styles.icon}>
          <Icon name="alertTriangle" size={24} />
        </span>
        <h2 id="confirm-title" className={styles.title}>
          {title}
        </h2>
        <p className={styles.description}>{description}</p>
        <div className={styles.actions}>
          <button type="button" className={styles.cancel} onClick={onCancel}>
            {cancelLabel}
          </button>
          <Button className={styles.confirm} onClick={onConfirm}>
            {confirmLabel}
          </Button>
        </div>
      </div>
    </div>
  );
}
