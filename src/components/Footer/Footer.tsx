import { cn } from '@/lib/cn';
import styles from './Footer.module.css';

export interface FooterColumn {
  title: string;
  links: Array<{ label: string; href: string }>;
}

export interface FooterProps {
  columns?: FooterColumn[];
  className?: string;
}

const DEFAULT_COLUMNS: FooterColumn[] = [
  {
    title: 'Services',
    links: [
      { label: 'Envoyer un colis', href: '#envoyer' },
      { label: 'Suivre un colis', href: '#suivre' },
      { label: 'Trouver un relais', href: '#relais' },
    ],
  },
  {
    title: 'Partenaires',
    links: [
      { label: 'Devenir point relais', href: '#devenir' },
      { label: 'Entreprises', href: '#entreprises' },
      { label: 'Documentation API', href: '#api' },
    ],
  },
  {
    title: 'LeRelais',
    links: [
      { label: 'À propos', href: '#apropos' },
      { label: 'Aide & contact', href: '#aide' },
      { label: 'Mentions légales', href: '#mentions' },
    ],
  },
];

export function Footer({ columns = DEFAULT_COLUMNS, className }: FooterProps) {
  return (
    <footer className={cn(styles.footer, className)}>
      <div className={styles.brand}>
        <p className={styles.logo}>
          <span>R</span> LeRelais
        </p>
        <p className={styles.tagline}>Le point relais simple pour envoyer, suivre et recevoir vos colis.</p>
      </div>
      {columns.map((column) => (
        <nav key={column.title} className={styles.column} aria-label={column.title}>
          <p className={styles.title}>{column.title}</p>
          {column.links.map((link) => (
            <a key={link.label} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
      ))}
      <p className={styles.copy}>© 2026 LeRelais — Livraison de proximité.</p>
    </footer>
  );
}
