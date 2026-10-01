import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { DataFiltersToolbar } from './DataFiltersToolbar';

describe('<DataFiltersToolbar>', () => {
  it('should open the filters', async () => {
    const user = userEvent.setup();
    const onFilters = vi.fn();
    render(<DataFiltersToolbar onFilters={onFilters} />);

    await user.click(screen.getByRole('button', { name: 'Filtres' }));

    expect(onFilters).toHaveBeenCalledOnce();
  });
});
