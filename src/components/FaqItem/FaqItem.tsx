import { useState } from 'react';
import chevron from '@/assets/icons/core-chevron.svg';
import { cn } from '@/lib/cn';
import styles from './FaqItem.module.css';

export interface FaqItemProps {
  question?: string;
  answer?: string;
}

export function FaqItem({
  question = 'Comment envoyer un colis ?',
  answer = 'Indiquez le destinataire, le poids et le point relais, puis confirmez l’envoi.',
}: FaqItemProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.item}>
      <button type="button" className={styles.trigger} aria-expanded={open} onClick={() => setOpen((value) => !value)}>
        {question}
        <span className={cn(styles.icon, open && styles.open)}>
          <img src={chevron} alt="" width={16} height={16} />
        </span>
      </button>
      {open ? <p className={styles.answer}>{answer}</p> : null}
    </div>
  );
}
