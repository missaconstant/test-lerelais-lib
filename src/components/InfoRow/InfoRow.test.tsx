import { render, screen } from '@testing-library/react';
import { InfoRow } from './InfoRow';

describe('<InfoRow>', () => {
  it('should render the address', () => {
    render(<InfoRow />);
    expect(screen.getByText('12 rue de Charenton, Abidjan 12e')).toBeInTheDocument();
  });
});
