import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { QrScanner } from './QrScanner';

describe('<QrScanner>', () => {
  it('should render the scanner instructions', () => {
    render(<QrScanner />);
    expect(screen.getByRole('heading', { name: 'Scanner un QR code' })).toBeInTheDocument();
  });

  it('should call onManual when manual entry is activated', async () => {
    const user = userEvent.setup();
    const onManual = vi.fn();
    render(<QrScanner onManual={onManual} />);

    await user.click(screen.getByRole('button', { name: 'Saisie manuelle' }));

    expect(onManual).toHaveBeenCalledOnce();
  });
});
