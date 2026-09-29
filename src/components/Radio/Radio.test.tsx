import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Radio } from './Radio';

describe('<Radio>', () => {
  it('should render an unselected radio', () => {
    render(<Radio name="mode" label="Point relais" />);
    expect(screen.getByRole('radio', { name: 'Point relais' })).not.toBeChecked();
  });

  it('should select the radio when activated', async () => {
    const user = userEvent.setup();
    render(<Radio name="mode" label="Point relais" />);
    const radio = screen.getByRole('radio', { name: 'Point relais' });

    await user.click(radio);

    expect(radio).toBeChecked();
  });
});
