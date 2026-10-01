import { cn } from '@/lib/cn';
import styles from './DataTable.module.css';

export interface DataTableColumn {
  key: string;
  label: string;
}

export interface DataTableRowData {
  id: string;
  cells: Record<string, string>;
}

export interface DataTableProps {
  title?: string;
  columns?: DataTableColumn[];
  rows?: DataTableRowData[];
}

const DEFAULT_COLUMNS: DataTableColumn[] = [
  { key: 'user', label: 'Utilisateur' },
  { key: 'contact', label: 'Contact' },
  { key: 'city', label: 'Ville' },
  { key: 'parcels', label: 'Colis' },
  { key: 'status', label: 'Statut' },
];

const DEFAULT_ROWS: DataTableRowData[] = [
  { id: 'awa', cells: { user: 'Awa Koné', contact: 'awa@exemple.ci', city: 'Cocody', parcels: '18', status: 'Actif' } },
  { id: 'yann', cells: { user: 'Yann Kouassi', contact: 'yann@exemple.ci', city: 'Yopougon', parcels: '7', status: 'Actif' } },
  { id: 'marie', cells: { user: 'Marie N’Guessan', contact: 'marie@exemple.ci', city: 'Marcory', parcels: '31', status: 'Vérifié' } },
  { id: 'serge', cells: { user: 'Serge Koffi', contact: 'serge@exemple.ci', city: 'Abobo', parcels: '2', status: 'À vérifier' } },
  { id: 'nadia', cells: { user: 'Nadia Touré', contact: 'nadia@exemple.ci', city: 'Bouaké', parcels: '13', status: 'Actif' } },
  { id: 'kevin', cells: { user: 'Kevin Yao', contact: 'kevin@exemple.ci', city: 'Plateau', parcels: '0', status: 'Suspendu' } },
  { id: 'fatou', cells: { user: 'Fatou Diarra', contact: 'fatou@exemple.ci', city: 'Treichville', parcels: '22', status: 'Actif' } },
  { id: 'eric', cells: { user: 'Eric Bamba', contact: 'eric@exemple.ci', city: 'Cocody', parcels: '9', status: 'Actif' } },
];

export function DataTable({
  title = 'Utilisateurs',
  columns = DEFAULT_COLUMNS,
  rows = DEFAULT_ROWS,
}: DataTableProps) {
  return (
    <section className={styles.card} aria-label={title}>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.table} role="table">
        <div className={styles.header} role="row">
          {columns.map((column) => (
            <span key={column.key} role="columnheader">
              {column.label}
            </span>
          ))}
        </div>
        {rows.map((row, index) => (
          <div key={row.id} className={cn(styles.row, index % 2 === 1 && styles.striped)} role="row">
            {columns.map((column, columnIndex) => (
              <span key={column.key} className={columnIndex === 0 ? styles.name : undefined} role="cell">
                {row.cells[column.key]}
              </span>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
