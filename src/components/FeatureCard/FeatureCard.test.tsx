import { render, screen } from '@testing-library/react';
import { FeatureCard } from './FeatureCard';

describe('<FeatureCard>', () => {
  it('should render the metric', () => {
    render(<FeatureCard />);
    expect(screen.getByRole('heading', { name: '+ de trafic' })).toBeInTheDocument();
    expect(screen.getByText('+30%')).toBeInTheDocument();
  });
});
