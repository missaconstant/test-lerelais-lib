import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Switch } from './Switch';

describe('<Switch>', () => {
  it('should render an off switch', () => {
    render(<Switch label="Notifications" />);
    expect(screen.getByRole('switch', { name: 'Notifications' })).not.toBeChecked();
  });

  it('should toggle when activated', async () => {
    const user = userEvent.setup();
    render(<Switch label="Notifications" />);
    const control = screen.getByRole('switch', { name: 'Notifications' });

    await user.click(control);

    expect(control).toBeChecked();
  });
});
