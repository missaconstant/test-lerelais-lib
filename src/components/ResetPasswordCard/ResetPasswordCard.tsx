import type { FormEvent } from 'react';
import lock from '@/assets/icons/core-lock-form.svg';
import styles from './ResetPasswordCard.module.css';

export interface ResetPasswordCardProps {
  title?: string;
  description?: string;
  onSubmit?: (email: string) => void;
  onBack?: () => void;
}

export function ResetPasswordCard({
  title = 'Mot de passe oublié',
  description = 'Indiquez votre adresse email pour recevoir un lien de réinitialisation.',
  onSubmit,
  onBack,
}: ResetPasswordCardProps) {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    onSubmit?.(String(data.get('email') ?? ''));
  }

  return (
    <form className={styles.card} onSubmit={handleSubmit}>
      <span className={styles.icon}>
        <img src={lock} alt="" width={24} height={24} />
      </span>
      <div className={styles.copy}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <label className={styles.field}>
        Adresse email
        <input name="email" type="email" placeholder="vous@email.fr" />
      </label>
      <button type="submit" className={styles.submit}>
        Envoyer le lien
      </button>
      <button type="button" className={styles.back} onClick={onBack}>
        Retour à la connexion
      </button>
    </form>
  );
}
