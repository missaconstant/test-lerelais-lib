import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { RelayCard } from './RelayCard';

describe('<RelayCard>', () => {
  it('should render the relay name', () => {
    render(<RelayCard name="Carrefour Cocody" location="Cocody · 1,2 km" hours="Ouvert · ferme à 20:00" />);
    expect(screen.getByText('Carrefour Cocody')).toBeInTheDocument();
  });

  it('should call onMapClick when the map action is activated', async () => {
    const user = userEvent.setup();
    const onMapClick = vi.fn();
    render(
      <RelayCard name="Carrefour Cocody" location="Cocody" hours="Ouvert" onMapClick={onMapClick} />,
    );

    await user.click(screen.getByRole('button', { name: 'Voir sur la carte →' }));

    expect(onMapClick).toHaveBeenCalledOnce();
  });
});
