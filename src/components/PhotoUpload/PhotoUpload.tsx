import type { ChangeEvent } from 'react';
import camera from '@/assets/icons/core-camera.svg';
import styles from './PhotoUpload.module.css';

export interface PhotoUploadProps {
  title?: string;
  hint?: string;
  onSelect?: (file: File) => void;
}

export function PhotoUpload({
  title = 'Prendre une photo ou importer',
  hint = 'Une photo du colis peut aider à vérifier le contenu et la préparation.',
  onSelect,
}: PhotoUploadProps) {
  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (file) onSelect?.(file);
  }

  return (
    <label className={styles.zone}>
      <input className={styles.input} type="file" accept="image/*" onChange={handleChange} />
      <img src={camera} alt="" width={24} height={24} />
      <span className={styles.title}>{title}</span>
      <span className={styles.hint}>{hint}</span>
    </label>
  );
}
