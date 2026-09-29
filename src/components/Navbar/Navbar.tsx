import { cn } from '@/lib/cn';
import { Logo } from '@/components/Logo';
import { Avatar } from '@/components/Avatar';
import styles from './Navbar.module.css';

export type NavbarVariant = 'full' | 'topbar' | 'entreprise' | 'particulier';

export interface NavbarLink {
  label: string;
  href: string;
  active?: boolean;
}

export interface NavbarProps {
  variant?: NavbarVariant;
  links?: NavbarLink[];
  title?: string;
  initials?: string;
  onLogin?: () => void;
  onPrimary?: () => void;
  className?: string;
}

const PUBLIC_LINKS: NavbarLink[] = [
  { label: 'Envoyer', href: '#envoyer' },
  { label: 'Suivre', href: '#suivre' },
  { label: 'Trouver un relais', href: '#relais' },
  { label: 'Devenir relais', href: '#devenir' },
  { label: 'Entreprises', href: '#entreprises' },
];

const PARTICULIER_LINKS: NavbarLink[] = [
  { label: 'Tableau de bord', href: '#dashboard', active: true },
  { label: 'Mes colis', href: '#colis' },
  { label: 'Profil', href: '#profil' },
];

export function Navbar({
  variant = 'full',
  links,
  title,
  initials = 'EA',
  onLogin,
  onPrimary,
  className,
}: NavbarProps) {
  const resolvedLinks = links ?? (variant === 'full' ? PUBLIC_LINKS : variant === 'particulier' ? PARTICULIER_LINKS : []);
  const heading =
    title ?? (variant === 'topbar' ? 'Envoyer un colis' : variant === 'entreprise' ? 'Espace Entreprise' : undefined);

  return (
    <header className={cn(styles.navbar, styles[variant], className)}>
      <Logo />
      {resolvedLinks.length > 0 ? (
        <nav className={styles.links} aria-label="Navigation principale">
          {resolvedLinks.map((link) => (
            <a key={link.label} href={link.href} className={cn(link.active && styles.activeLink)}>
              {link.label}
            </a>
          ))}
        </nav>
      ) : null}
      {heading ? <p className={styles.heading}>{heading}</p> : null}
      {variant === 'full' ? (
        <div className={styles.actions}>
          <button type="button" className={styles.login} onClick={onLogin}>
            Connexion
          </button>
          <button type="button" className={styles.primary} onClick={onPrimary}>
            Envoyer un colis
          </button>
        </div>
      ) : null}
      {variant === 'particulier' ? <Avatar initials={initials} size="sm" /> : null}
    </header>
  );
}
