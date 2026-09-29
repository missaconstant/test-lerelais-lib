import { render, screen } from '@testing-library/react';
import { ProgressBar } from './ProgressBar';

describe('<ProgressBar>', () => {
  it('should render the label and the percentage', () => {
    render(<ProgressBar label="En cours de traitement" value={65} />);
    expect(screen.getByText('En cours de traitement')).toBeInTheDocument();
    expect(screen.getByText('65%')).toBeInTheDocument();
  });

  it('should expose the current value to assistive tech', () => {
    render(<ProgressBar label="Livraison terminée" value={100} />);
    expect(screen.getByRole('progressbar', { name: 'Livraison terminée' })).toHaveAttribute(
      'aria-valuenow',
      '100',
    );
  });
});
