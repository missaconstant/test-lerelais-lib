import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { FavoriteRelayCard } from './FavoriteRelayCard';

describe('<FavoriteRelayCard>', () => {
  it('should render the relay', () => {
    render(
      <FavoriteRelayCard
        name="Épicerie Centrale"
        address="12 rue de Charenton, Abidjan 12e"
        distance="350m"
        hours="Lun-Sam 08:00-21:00"
        services={['Dépôt', 'Retrait']}
      />,
    );
    expect(screen.getByRole('heading', { name: 'Épicerie Centrale' })).toBeInTheDocument();
  });

  it('should call onDetail when the detail action is activated', async () => {
    const user = userEvent.setup();
    const onDetail = vi.fn();
    render(
      <FavoriteRelayCard
        name="Épicerie Centrale"
        address="Abidjan"
        distance="350m"
        hours="Lun-Sam"
        services={['Dépôt']}
        onDetail={onDetail}
      />,
    );

    await user.click(screen.getByRole('button', { name: 'Voir le détail →' }));

    expect(onDetail).toHaveBeenCalledOnce();
  });
});
