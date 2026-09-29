import { render, screen } from '@testing-library/react';
import { Avatar } from './Avatar';

describe('<Avatar>', () => {
  it('should render the initials', () => {
    render(<Avatar initials="JD" />);
    expect(screen.getByText('JD')).toBeInTheDocument();
  });
});
