import type { ButtonHTMLAttributes, ReactNode } from 'react';
import mapPin from '@/assets/icons/core-map-pin.svg';
import { cn } from '@/lib/cn';
import styles from './CoreButton.module.css';

export type CoreButtonVariant = 'primary' | 'secondary' | 'icon' | 'compact';

export interface CoreButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: CoreButtonVariant;
  icon?: ReactNode;
}

export function CoreButton({
  variant = 'primary',
  className,
  type = 'button',
  children,
  icon,
  ...props
}: CoreButtonProps) {
  return (
    <button type={type} className={cn(styles.button, styles[variant], className)} {...props}>
      {variant === 'icon' ? (icon ?? <img src={mapPin} alt="" width={18} height={18} />) : null}
      {children}
    </button>
  );
}
