import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ConfirmModal } from './ConfirmModal';

describe('<ConfirmModal>', () => {
  it('should render the confirmation copy', () => {
    render(
      <ConfirmModal
        title="Confirmer la remise du colis ?"
        description="Cette action marque le colis comme remis au destinataire."
      />,
    );
    expect(screen.getByRole('dialog', { name: 'Confirmer la remise du colis ?' })).toBeInTheDocument();
  });

  it('should call onConfirm when the confirm button is activated', async () => {
    const user = userEvent.setup();
    const onConfirm = vi.fn();
    render(<ConfirmModal title="Confirmer ?" description="Action irréversible." onConfirm={onConfirm} />);

    await user.click(screen.getByRole('button', { name: 'Confirmer' }));

    expect(onConfirm).toHaveBeenCalledOnce();
  });
});
