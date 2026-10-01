import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { CoreTabs } from './CoreTabs';

describe('<CoreTabs>', () => {
  it('should select the clicked tab', async () => {
    const user = userEvent.setup();
    render(<CoreTabs />);

    const tabs = screen.getAllByRole('tab', { name: 'Se connecter' });
    expect(tabs[1]).toHaveAttribute('aria-selected', 'true');

    await user.click(tabs[0]);

    expect(tabs[0]).toHaveAttribute('aria-selected', 'true');
    expect(tabs[1]).toHaveAttribute('aria-selected', 'false');
  });
});
