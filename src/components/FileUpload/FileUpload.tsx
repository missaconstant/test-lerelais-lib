import type { InputHTMLAttributes } from 'react';
import { cn } from '@/lib/cn';
import { Icon } from '@/components/Icon';
import styles from './FileUpload.module.css';

export interface FileUploadProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  hint?: string;
  className?: string;
}

export function FileUpload({
  hint = 'Formats acceptés: PDF, PNG, JPG (max. 10 Mo)',
  className,
  ...props
}: FileUploadProps) {
  return (
    <label className={cn(styles.zone, className)}>
      <Icon name="uploadCloud" size={32} />
      <p className={styles.prompt}>
        Glissez vos fichiers ici ou <span>parcourir</span>
      </p>
      <p className={styles.hint}>{hint}</p>
      <input className={styles.input} type="file" {...props} />
    </label>
  );
}
