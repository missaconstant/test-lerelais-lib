import { render, screen } from '@testing-library/react';
import { Footer } from './Footer';

describe('<Footer>', () => {
  it('should render the service links', () => {
    render(<Footer />);
    expect(screen.getByRole('link', { name: 'Suivre un colis' })).toBeInTheDocument();
    expect(screen.getByText(/© 2026 LeRelais/)).toBeInTheDocument();
  });
});
