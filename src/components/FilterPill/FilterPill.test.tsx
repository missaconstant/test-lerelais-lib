import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { FilterPill } from './FilterPill';

describe('<FilterPill>', () => {
  it('should call onClick when pressed', async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();
    render(
      <FilterPill active onClick={onClick}>
        Ouvert maintenant
      </FilterPill>,
    );

    await user.click(screen.getByRole('button', { name: 'Ouvert maintenant' }));

    expect(onClick).toHaveBeenCalledOnce();
  });
});
