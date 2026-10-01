import { render, screen } from '@testing-library/react';
import { BenefitsCard } from './BenefitsCard';

describe('<BenefitsCard>', () => {
  it('should list the benefits', () => {
    render(<BenefitsCard />);
    expect(screen.getByText('Suivi en temps réel de vos colis')).toBeInTheDocument();
    expect(screen.getAllByRole('listitem')).toHaveLength(3);
  });
});
