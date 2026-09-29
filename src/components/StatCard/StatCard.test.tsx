import { render, screen } from '@testing-library/react';
import { StatCard } from './StatCard';

describe('<StatCard>', () => {
  it('should render the statistic', () => {
    render(<StatCard label="Colis en cours" value="0" hint="En transit ou en préparation" />);
    expect(screen.getByText('0')).toBeInTheDocument();
  });
});
