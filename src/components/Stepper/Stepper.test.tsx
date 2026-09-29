import { render, screen } from '@testing-library/react';
import { Stepper } from './Stepper';

describe('<Stepper>', () => {
  it('should render each step label', () => {
    render(
      <Stepper
        steps={[
          { label: 'Je prépare mon colis', state: 'done' },
          { label: 'Récapitulatif', state: 'active' },
          { label: 'Paiement', state: 'upcoming' },
        ]}
      />,
    );

    expect(screen.getByText('Je prépare mon colis')).toBeInTheDocument();
    expect(screen.getByText('Récapitulatif')).toBeInTheDocument();
    expect(screen.getByText('Paiement')).toBeInTheDocument();
  });
});
