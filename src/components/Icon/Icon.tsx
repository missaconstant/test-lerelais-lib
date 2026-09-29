import { icons, type IconName } from '@/assets/icons';

export interface IconProps {
  name: IconName;
  /** Taille affichée, en pixels. Laisse la taille native du fichier si absente. */
  size?: number;
  className?: string;
}

export function Icon({ name, size, className }: IconProps) {
  return (
    <img
      className={className}
      src={icons[name]}
      alt=""
      width={size}
      height={size}
    />
  );
}
