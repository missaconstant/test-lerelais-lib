import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { DashboardParcelRow } from './DashboardParcelRow';

describe('<DashboardParcelRow>', () => {
  it('should render the parcel summary', () => {
    render(
      <DashboardParcelRow
        trackingId="LR-2026-084215"
        route="Abidjan → Bouaké"
        recipient="À l'attention de Marie Konan"
        status="En transit"
        date="13 août 2026 · 08:42"
      />,
    );
    expect(screen.getByText('Abidjan → Bouaké')).toBeInTheDocument();
  });

  it('should call onDetail when the detail action is activated', async () => {
    const user = userEvent.setup();
    const onDetail = vi.fn();
    render(
      <DashboardParcelRow
        trackingId="LR-1"
        route="Abidjan"
        recipient="Marie"
        status="En transit"
        date="13 août"
        onDetail={onDetail}
      />,
    );

    await user.click(screen.getByRole('button', { name: 'Voir le détail →' }));

    expect(onDetail).toHaveBeenCalledOnce();
  });
});
