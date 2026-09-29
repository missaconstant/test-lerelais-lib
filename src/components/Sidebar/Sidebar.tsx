import { cn } from '@/lib/cn';
import { Logo } from '@/components/Logo';
import styles from './Sidebar.module.css';

export type SidebarVariant = 'admin' | 'gerant';

export interface SidebarItem {
  id: string;
  label: string;
}

export interface SidebarProps {
  variant?: SidebarVariant;
  items?: SidebarItem[];
  activeId?: string;
  onSelect?: (id: string) => void;
  className?: string;
}

export const ADMIN_ITEMS: SidebarItem[] = [
  { id: 'overview', label: 'Vue d’ensemble' },
  { id: 'users', label: 'Utilisateurs' },
  { id: 'companies', label: 'Entreprises' },
  { id: 'relays', label: 'Points relais' },
  { id: 'parcels', label: 'Colis' },
  { id: 'delivery', label: 'Livraison & API' },
  { id: 'payments', label: 'Paiements' },
  { id: 'disputes', label: 'Litiges' },
  { id: 'support', label: 'Support' },
  { id: 'reports', label: 'Rapports' },
  { id: 'settings', label: 'Paramètres' },
];

export const GERANT_ITEMS: SidebarItem[] = [
  { id: 'dashboard', label: 'Tableau de bord' },
  { id: 'incoming', label: 'Colis à réceptionner' },
  { id: 'available', label: 'Colis disponibles' },
  { id: 'scan', label: 'Scan & remise' },
  { id: 'history', label: 'Historique' },
  { id: 'alerts', label: 'Alertes' },
  { id: 'reports', label: 'Rapports' },
  { id: 'commissions', label: 'Commissions' },
  { id: 'settings', label: 'Paramètres' },
];

export function Sidebar({
  variant = 'admin',
  items,
  activeId,
  onSelect,
  className,
}: SidebarProps) {
  const navigation = items ?? (variant === 'gerant' ? GERANT_ITEMS : ADMIN_ITEMS);
  const current = activeId ?? navigation[0]?.id;

  return (
    <aside className={cn(styles.sidebar, className)}>
      <Logo tone={variant === 'admin' ? 'light' : 'brand'} />
      {variant === 'admin' ? (
        <div className={styles.account}>
          <p className={styles.kicker}>ADMINISTRATION</p>
          <p className={styles.accountName}>Super Admin</p>
        </div>
      ) : (
        <div className={styles.account}>
          <p className={styles.accountName}>Point relais</p>
          <p className={styles.meta}>Carrefour City — Abidjan 12e</p>
          <p className={styles.meta}>Relais #PR-0842</p>
        </div>
      )}
      <nav className={styles.nav} aria-label="Navigation latérale">
        {navigation.map((item) => (
          <button
            key={item.id}
            type="button"
            className={cn(styles.item, item.id === current && styles.active)}
            aria-current={item.id === current ? 'page' : undefined}
            onClick={() => onSelect?.(item.id)}
          >
            {item.label}
          </button>
        ))}
      </nav>
      {variant === 'admin' ? (
        <div className={styles.status}>
          <p className={styles.kicker}>PLATEFORME</p>
          <p className={styles.ok}>● Tous les services opérationnels</p>
          <p className={styles.meta}>Dernière vérification · à l’instant</p>
          <p className={styles.meta}>Version admin 1.0</p>
        </div>
      ) : (
        <button type="button" className={styles.logout}>
          Déconnexion
        </button>
      )}
    </aside>
  );
}
