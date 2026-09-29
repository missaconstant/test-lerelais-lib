import { render, screen } from '@testing-library/react';
import { Badge } from './Badge';

describe('<Badge>', () => {
  it('should render the pending label', () => {
    render(<Badge />);
    expect(screen.getByText('En attente')).toBeInTheDocument();
  });

  it('should render the delivered label', () => {
    render(<Badge status="delivered" />);
    expect(screen.getByText('Livré')).toBeInTheDocument();
  });
});
