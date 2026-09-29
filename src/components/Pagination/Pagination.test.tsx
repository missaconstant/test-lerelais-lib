import { useState } from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Pagination } from './Pagination';

function Harness() {
  const [page, setPage] = useState(1);
  return <Pagination page={page} pageCount={3} onChange={setPage} />;
}

describe('<Pagination>', () => {
  it('should mark the current page', () => {
    render(<Harness />);
    expect(screen.getByRole('button', { current: 'page' })).toHaveTextContent('1');
  });

  it('should move to the next page', async () => {
    const user = userEvent.setup();
    render(<Harness />);

    await user.click(screen.getByRole('button', { name: 'Page suivante' }));

    expect(screen.getByRole('button', { current: 'page' })).toHaveTextContent('2');
  });
});
