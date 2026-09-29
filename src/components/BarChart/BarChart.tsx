import { cn } from '@/lib/cn';
import styles from './BarChart.module.css';

export interface BarChartItem {
  label: string;
  value: number;
  color?: string;
}

export interface BarChartProps {
  title: string;
  items: BarChartItem[];
  max?: number;
  className?: string;
}

const DEFAULT_COLORS = ['#d34860', '#e06c7e', '#b8324a', '#f5a3b1', '#d34860'];

export function BarChart({ title, items, max = 150, className }: BarChartProps) {
  return (
    <figure className={cn(styles.chart, className)}>
      <figcaption className={styles.title}>{title}</figcaption>
      <div className={styles.body}>
        <div className={styles.axis} aria-hidden="true">
          <span>{max}</span>
          <span>{Math.round(max * 0.66)}</span>
          <span>{Math.round(max * 0.33)}</span>
          <span>0</span>
        </div>
        <div className={styles.bars}>
          {items.map((item, index) => (
            <div key={item.label} className={styles.column}>
              <span
                className={styles.bar}
                style={{
                  height: `${Math.min(100, (item.value / max) * 100)}%`,
                  background: item.color ?? DEFAULT_COLORS[index % DEFAULT_COLORS.length],
                }}
              />
              <span className={styles.label}>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </figure>
  );
}
