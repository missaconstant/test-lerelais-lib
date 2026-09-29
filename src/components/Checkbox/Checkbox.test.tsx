import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Checkbox } from './Checkbox';

describe('<Checkbox>', () => {
  it('should render an unchecked checkbox', () => {
    render(<Checkbox label="Accepter" />);
    expect(screen.getByRole('checkbox', { name: 'Accepter' })).not.toBeChecked();
  });

  it('should toggle when activated', async () => {
    const user = userEvent.setup();
    render(<Checkbox label="Accepter" />);
    const checkbox = screen.getByRole('checkbox', { name: 'Accepter' });

    await user.click(checkbox);

    expect(checkbox).toBeChecked();
  });
});
