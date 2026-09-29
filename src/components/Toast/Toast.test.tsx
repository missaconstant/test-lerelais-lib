import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Toast } from './Toast';

describe('<Toast>', () => {
  it('should render the message', () => {
    render(<Toast>Colis envoyé avec succès.</Toast>);
    expect(screen.getByText('Colis envoyé avec succès.')).toBeInTheDocument();
  });

  it('should call onClose when the close button is activated', async () => {
    const user = userEvent.setup();
    const onClose = vi.fn();
    render(<Toast onClose={onClose}>Colis envoyé avec succès.</Toast>);

    await user.click(screen.getByRole('button', { name: 'Fermer' }));

    expect(onClose).toHaveBeenCalledOnce();
  });
});
