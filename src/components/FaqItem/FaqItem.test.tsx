import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { FaqItem } from './FaqItem';

describe('<FaqItem>', () => {
  it('should reveal the answer', async () => {
    const user = userEvent.setup();
    render(<FaqItem />);

    expect(screen.queryByText(/Indiquez le destinataire/)).not.toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: 'Comment envoyer un colis ?' }));
    expect(screen.getByText(/Indiquez le destinataire/)).toBeInTheDocument();
  });
});
