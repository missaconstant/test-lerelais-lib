import { useId, useState, type ReactNode } from 'react';
import { cn } from '@/lib/cn';
import { Icon } from '@/components/Icon';
import styles from './Accordion.module.css';

export interface AccordionProps {
  title: string;
  children: ReactNode;
  defaultOpen?: boolean;
  className?: string;
}

export function Accordion({ title, children, defaultOpen = false, className }: AccordionProps) {
  const [open, setOpen] = useState(defaultOpen);
  const panelId = useId();

  return (
    <div className={cn(styles.item, className)}>
      <h3 className={styles.heading}>
        <button
          type="button"
          className={styles.trigger}
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((current) => !current)}
        >
          <span>{title}</span>
          <Icon name={open ? 'chevronDown' : 'chevronRight'} size={16} />
        </button>
      </h3>
      {open ? (
        <div id={panelId} className={styles.panel}>
          {children}
        </div>
      ) : null}
    </div>
  );
}
