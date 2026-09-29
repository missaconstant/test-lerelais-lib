import { render, screen } from '@testing-library/react';
import { NotificationRow } from './NotificationRow';

describe('<NotificationRow>', () => {
  it('should render the notification', () => {
    render(
      <NotificationRow
        title="Colis disponible en point relais"
        description="Votre colis LR-2026-084215 est arrivé au relais Cocody Centre."
        time="Il y a 2h"
      />,
    );
    expect(screen.getByText('Il y a 2h')).toBeInTheDocument();
  });
});
