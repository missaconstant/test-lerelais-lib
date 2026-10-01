import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ResetPasswordCard } from './ResetPasswordCard';

describe('<ResetPasswordCard>', () => {
  it('should submit the email', async () => {
    const user = userEvent.setup();
    const onSubmit = vi.fn();
    render(<ResetPasswordCard onSubmit={onSubmit} />);

    await user.type(screen.getByLabelText('Adresse email'), 'ada@lerelais.fr');
    await user.click(screen.getByRole('button', { name: 'Envoyer le lien' }));

    expect(onSubmit).toHaveBeenCalledWith('ada@lerelais.fr');
  });
});
