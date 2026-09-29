import { render, screen } from '@testing-library/react';
import { MetricCard } from './MetricCard';

describe('<MetricCard>', () => {
  it('should render the metric', () => {
    render(<MetricCard label="Colis en cours" value="128" hint="+8 cette semaine" />);
    expect(screen.getByText('128')).toBeInTheDocument();
    expect(screen.getByText('Colis en cours')).toBeInTheDocument();
  });
});
