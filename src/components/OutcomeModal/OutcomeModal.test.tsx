import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { OutcomeModal } from './OutcomeModal';

describe('<OutcomeModal>', () => {
  it('should retry from the error state', async () => {
    const user = userEvent.setup();
    const onRetry = vi.fn();
    render(<OutcomeModal type="error" onRetry={onRetry} />);

    await user.click(screen.getByRole('button', { name: 'Réessayer' }));

    expect(onRetry).toHaveBeenCalledOnce();
  });
});
