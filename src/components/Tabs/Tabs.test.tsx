import { useState } from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Tabs } from './Tabs';

function Harness() {
  const [value, setValue] = useState('all');
  return (
    <Tabs
      value={value}
      onChange={setValue}
      items={[
        { id: 'all', label: 'Tous' },
        { id: 'transit', label: 'En transit' },
      ]}
    />
  );
}

describe('<Tabs>', () => {
  it('should mark the current tab as selected', () => {
    render(<Harness />);
    expect(screen.getByRole('tab', { name: 'Tous' })).toHaveAttribute('aria-selected', 'true');
  });

  it('should select another tab when activated', async () => {
    const user = userEvent.setup();
    render(<Harness />);

    await user.click(screen.getByRole('tab', { name: 'En transit' }));

    expect(screen.getByRole('tab', { name: 'En transit' })).toHaveAttribute('aria-selected', 'true');
  });
});
