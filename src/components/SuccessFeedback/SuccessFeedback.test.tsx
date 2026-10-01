import { render, screen } from '@testing-library/react';
import { SuccessFeedback } from './SuccessFeedback';

describe('<SuccessFeedback>', () => {
  it('should render the tracking confirmation', () => {
    render(<SuccessFeedback />);
    expect(screen.getByRole('heading', { name: 'Votre envoi est créé !' })).toBeInTheDocument();
  });
});
