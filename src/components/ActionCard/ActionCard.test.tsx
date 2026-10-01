import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ActionCard } from './ActionCard';

describe('<ActionCard>', () => {
  it('should call the primary action', async () => {
    const user = userEvent.setup();
    const onPrimary = vi.fn();
    render(<ActionCard onPrimary={onPrimary} />);

    await user.click(screen.getByRole('button', { name: 'Choisir ce point relais' }));

    expect(onPrimary).toHaveBeenCalledOnce();
  });
});
