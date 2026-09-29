import { render, screen } from '@testing-library/react';
import { ParcelRow } from './ParcelRow';

describe('<ParcelRow>', () => {
  it('should render the parcel cells', () => {
    render(
      <ParcelRow
        trackingId="LR-084215"
        recipient="Aminata K."
        location="Cocody"
        status="En transit"
        date="20 août 2026"
      />,
    );
    expect(screen.getByText('LR-084215')).toBeInTheDocument();
    expect(screen.getByText('Aminata K.')).toBeInTheDocument();
  });
});
