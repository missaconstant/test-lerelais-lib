import { render, screen } from '@testing-library/react';
import { ShipmentStatus } from './ShipmentStatus';

describe('<ShipmentStatus>', () => {
  it('should render the preparing label', () => {
    render(<ShipmentStatus />);
    expect(screen.getByText('Préparation')).toBeInTheDocument();
  });

  it('should render the anomaly label', () => {
    render(<ShipmentStatus status="anomaly" />);
    expect(screen.getByText('Anomalie')).toBeInTheDocument();
  });
});
