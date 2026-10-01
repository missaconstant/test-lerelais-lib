import { render, screen } from '@testing-library/react';
import { LocationCard } from './LocationCard';

describe('<LocationCard>', () => {
  it('should render the destination name', () => {
    render(<LocationCard />);
    expect(screen.getByText('Épicerie des Brotteaux')).toBeInTheDocument();
  });
});
