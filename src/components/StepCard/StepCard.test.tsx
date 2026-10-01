import { render, screen } from '@testing-library/react';
import { StepCard } from './StepCard';

describe('<StepCard>', () => {
  it('should render the step title', () => {
    render(<StepCard />);
    expect(screen.getByRole('heading', { name: 'Préparez votre colis' })).toBeInTheDocument();
  });
});
