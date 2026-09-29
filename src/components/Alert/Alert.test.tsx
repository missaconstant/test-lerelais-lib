import { render, screen } from '@testing-library/react';
import { Alert } from './Alert';

describe('<Alert>', () => {
  it('should render the message', () => {
    render(<Alert>Information utile pour continuer.</Alert>);
    expect(screen.getByText('Information utile pour continuer.')).toBeInTheDocument();
  });

  it('should expose an error as an alert', () => {
    render(<Alert type="error">Une erreur empêche de continuer.</Alert>);
    expect(screen.getByRole('alert')).toHaveTextContent('Une erreur empêche de continuer.');
  });
});
