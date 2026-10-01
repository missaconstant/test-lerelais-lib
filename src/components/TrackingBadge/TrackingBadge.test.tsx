import { render, screen } from '@testing-library/react';
import { TrackingBadge } from './TrackingBadge';

describe('<TrackingBadge>', () => {
  it('should render the tracking number', () => {
    render(<TrackingBadge />);
    expect(screen.getByText('LR-2026-084215')).toBeInTheDocument();
  });
});
