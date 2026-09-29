import { render, screen } from '@testing-library/react';
import { NotificationItem } from './NotificationItem';

describe('<NotificationItem>', () => {
  it('should render the notification copy', () => {
    render(
      <NotificationItem
        unread
        title="Colis LR-2026-000123 disponible"
        description="Votre colis est prêt à être retiré au relais Tabac du Centre."
        time="Il y a 2 heures"
      />,
    );
    expect(screen.getByText('Colis LR-2026-000123 disponible')).toBeInTheDocument();
    expect(screen.getByLabelText('Non lu')).toBeInTheDocument();
  });

  it('should hide the unread marker when the item is read', () => {
    render(<NotificationItem title="Titre" description="Détail" time="Il y a 2 heures" />);
    expect(screen.queryByLabelText('Non lu')).not.toBeInTheDocument();
  });
});
