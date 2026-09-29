import { cn } from '@/lib/cn';
import styles from './ParcelTimeline.module.css';

export interface TimelineEvent {
  title: string;
  time: string;
  done?: boolean;
}

export interface ParcelTimelineProps {
  title?: string;
  events: TimelineEvent[];
  className?: string;
}

export function ParcelTimeline({ title = 'Suivi du colis', events, className }: ParcelTimelineProps) {
  return (
    <section className={cn(styles.card, className)}>
      <h2 className={styles.title}>{title}</h2>
      <ol className={styles.list}>
        {events.map((event) => (
          <li key={event.title} className={styles.event}>
            <span className={cn(styles.dot, event.done && styles.done)} aria-hidden="true" />
            <span>
              <span className={cn(styles.eventTitle, !event.done && styles.upcoming)}>{event.title}</span>
              <span className={styles.time}>{event.time}</span>
            </span>
          </li>
        ))}
      </ol>
    </section>
  );
}
