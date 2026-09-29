import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { FileUpload } from './FileUpload';

describe('<FileUpload>', () => {
  it('should render the browse prompt', () => {
    render(<FileUpload aria-label="Ajouter un fichier" />);
    expect(screen.getByText(/Glissez vos fichiers/)).toBeInTheDocument();
  });

  it('should accept a selected file', async () => {
    const user = userEvent.setup();
    render(<FileUpload aria-label="Ajouter un fichier" />);
    const input = screen.getByLabelText('Ajouter un fichier');
    const file = new File(['colis'], 'bordereau.pdf', { type: 'application/pdf' });

    await user.upload(input, file);

    expect(input).toBeInstanceOf(HTMLInputElement);
    expect((input as HTMLInputElement).files?.[0]?.name).toBe('bordereau.pdf');
  });
});
