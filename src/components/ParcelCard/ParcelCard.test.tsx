import { render, screen } from '@testing-library/react';
import { ParcelCard } from './ParcelCard';

describe('<ParcelCard>', () => {
  it('should render the tracking details', () => {
    render(
      <ParcelCard
        trackingId="LR-2026-084215"
        route="Abidjan → Bouaké"
        recipient="Destinataire · Aminata K."
        status="En transit"
      />,
    );
    expect(screen.getByText('Abidjan → Bouaké')).toBeInTheDocument();
    expect(screen.getByText('En transit')).toBeInTheDocument();
  });
});
