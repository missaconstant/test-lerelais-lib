import { render, screen } from '@testing-library/react';
import { StepsList } from './StepsList';

describe('<StepsList>', () => {
  it('should render the three steps', () => {
    render(<StepsList />);
    expect(screen.getAllByRole('listitem')).toHaveLength(3);
    expect(screen.getByText('Activation de votre espace gérant')).toBeInTheDocument();
  });
});
