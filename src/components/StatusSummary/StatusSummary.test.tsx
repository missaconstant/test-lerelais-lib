import { render, screen } from '@testing-library/react';
import { StatusSummary } from './StatusSummary';

describe('<StatusSummary>', () => {
  it('should render the next step', () => {
    render(<StatusSummary />);
    expect(screen.getByText('Disponible en point relais')).toBeInTheDocument();
  });
});
