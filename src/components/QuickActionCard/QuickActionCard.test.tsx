import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { QuickActionCard } from './QuickActionCard';

describe('<QuickActionCard>', () => {
  it('should render the action', () => {
    render(<QuickActionCard title="Envoyer un colis" description="Préparez un nouvel envoi" />);
    expect(screen.getByRole('button', { name: /Envoyer un colis/ })).toBeInTheDocument();
  });

  it('should call onClick when activated', async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();
    render(<QuickActionCard title="Envoyer un colis" description="Préparez un nouvel envoi" onClick={onClick} />);

    await user.click(screen.getByRole('button', { name: /Envoyer un colis/ }));

    expect(onClick).toHaveBeenCalledOnce();
  });
});
