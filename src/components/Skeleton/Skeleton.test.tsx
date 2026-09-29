import { render } from '@testing-library/react';
import { Skeleton } from './Skeleton';

describe('<Skeleton>', () => {
  it('should render a loading placeholder', () => {
    const { container } = render(<Skeleton />);
    expect(container.firstChild).toBeInTheDocument();
  });
});
