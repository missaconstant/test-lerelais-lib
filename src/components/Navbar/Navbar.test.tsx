import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Navbar } from './Navbar';

describe('<Navbar>', () => {
  it('should render the public links', () => {
    render(<Navbar />);
    expect(screen.getByRole('link', { name: 'Suivre' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Connexion' })).toBeInTheDocument();
  });

  it('should call onPrimary when the send action is activated', async () => {
    const user = userEvent.setup();
    const onPrimary = vi.fn();
    render(<Navbar onPrimary={onPrimary} />);

    await user.click(screen.getByRole('button', { name: 'Envoyer un colis' }));

    expect(onPrimary).toHaveBeenCalledOnce();
  });
});
