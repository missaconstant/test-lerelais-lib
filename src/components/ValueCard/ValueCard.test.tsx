import { render, screen } from '@testing-library/react';
import { ValueCard } from './ValueCard';

describe('<ValueCard>', () => {
  it('should render the value title', () => {
    render(<ValueCard />);
    expect(screen.getByRole('heading', { name: 'Proximité' })).toBeInTheDocument();
  });
});
