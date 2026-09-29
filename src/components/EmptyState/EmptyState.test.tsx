import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { EmptyState } from './EmptyState';

describe('<EmptyState>', () => {
  it('should render the empty message', () => {
    render(<EmptyState title="Aucun colis" description="Les nouveaux colis apparaîtront ici." />);
    expect(screen.getByRole('heading', { name: 'Aucun colis' })).toBeInTheDocument();
  });

  it('should call onAction when the call to action is activated', async () => {
    const user = userEvent.setup();
    const onAction = vi.fn();
    render(<EmptyState title="Aucun colis" description="Commencez." onAction={onAction} />);

    await user.click(screen.getByRole('button', { name: 'Envoyer un colis' }));

    expect(onAction).toHaveBeenCalledOnce();
  });
});
