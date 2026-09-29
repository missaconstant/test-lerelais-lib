import { cn } from '@/lib/cn';
import styles from './QrScanner.module.css';

export interface QrScannerProps {
  onTorch?: () => void;
  onManual?: () => void;
  className?: string;
}

export function QrScanner({ onTorch, onManual, className }: QrScannerProps) {
  return (
    <section className={cn(styles.scanner, className)}>
      <h2>Scanner un QR code</h2>
      <p className={styles.hint}>Placez le code du colis dans le cadre.</p>
      <div className={styles.viewfinder} aria-hidden="true" />
      <div className={styles.actions}>
        <button type="button" onClick={onTorch}>
          Lampe
        </button>
        <span aria-hidden="true">•</span>
        <button type="button" onClick={onManual}>
          Saisie manuelle
        </button>
      </div>
    </section>
  );
}
