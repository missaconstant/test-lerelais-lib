import { render, screen } from '@testing-library/react';
import { ProcessBadge } from './ProcessBadge';

describe('<ProcessBadge>', () => {
  it('should render the pending label', () => {
    render(<ProcessBadge />);
    expect(screen.getByText('En cours de traitement')).toBeInTheDocument();
  });
});
