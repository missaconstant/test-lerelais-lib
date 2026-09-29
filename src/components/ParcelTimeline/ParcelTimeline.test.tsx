import { render, screen } from '@testing-library/react';
import { ParcelTimeline } from './ParcelTimeline';

describe('<ParcelTimeline>', () => {
  it('should render the tracking events', () => {
    render(
      <ParcelTimeline
        events={[
          { title: 'Colis créé', time: '18 août · 09:12', done: true },
          { title: 'Disponible au relais', time: 'À venir' },
        ]}
      />,
    );
    expect(screen.getByRole('heading', { name: 'Suivi du colis' })).toBeInTheDocument();
    expect(screen.getByText('Colis créé')).toBeInTheDocument();
  });
});
