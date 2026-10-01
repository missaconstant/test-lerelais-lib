import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { TrackingSearch } from './TrackingSearch';

describe('<TrackingSearch>', () => {
  it('should submit the tracking number', async () => {
    const user = userEvent.setup();
    const onSearch = vi.fn();
    render(<TrackingSearch onSearch={onSearch} />);

    await user.click(screen.getByRole('button', { name: 'Rechercher' }));

    expect(onSearch).toHaveBeenCalledWith('LR-9999-000000');
  });
});
