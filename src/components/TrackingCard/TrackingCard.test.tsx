import { render, screen } from '@testing-library/react';
import { TrackingCard } from './TrackingCard';

describe('<TrackingCard>', () => {
  it('should render the route and the relay', () => {
    render(<TrackingCard />);
    expect(screen.getByRole('heading', { name: 'Votre colis est en transit' })).toBeInTheDocument();
    expect(screen.getByText('Épicerie des Brotteaux')).toBeInTheDocument();
  });
});
