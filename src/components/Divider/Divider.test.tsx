import { render, screen } from '@testing-library/react';
import { Divider } from './Divider';

describe('<Divider>', () => {
  it('should render a labelled divider', () => {
    render(<Divider label="ou" caption="Avec label central" />);
    expect(screen.getByText('ou')).toBeInTheDocument();
  });
});
