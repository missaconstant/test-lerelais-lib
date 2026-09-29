import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { TextField } from './TextField';

describe('<TextField>', () => {
  it('should render the label and the field', () => {
    render(<TextField label="Libellé" placeholder="Saisir une valeur" />);
    expect(screen.getByLabelText('Libellé')).toBeInTheDocument();
  });

  it('should update the value when the user types', async () => {
    const user = userEvent.setup();
    render(<TextField label="Ville" />);

    await user.type(screen.getByLabelText('Ville'), 'Abidjan');

    expect(screen.getByLabelText('Ville')).toHaveValue('Abidjan');
  });

  it('should expose the error message', () => {
    render(<TextField label="Libellé" error="Ce champ est requis" />);
    expect(screen.getByRole('alert')).toHaveTextContent('Ce champ est requis');
  });
});
