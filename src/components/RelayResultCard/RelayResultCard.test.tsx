import { render, screen } from '@testing-library/react';
import { RelayResultCard } from './RelayResultCard';

describe('<RelayResultCard>', () => {
  it('should render the relay name and the open status', () => {
    render(<RelayResultCard />);
    expect(screen.getByText('Carrefour City - 350 m')).toBeInTheDocument();
    expect(screen.getByText('Ouvert')).toBeInTheDocument();
  });
});
