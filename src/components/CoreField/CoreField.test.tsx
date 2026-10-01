import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { CoreField } from './CoreField';

describe('<CoreField>', () => {
  it('should accept typed text', async () => {
    const user = userEvent.setup();
    render(<CoreField label="Adresse email" placeholder="vous@email.fr" />);

    const field = screen.getByLabelText('Adresse email');
    await user.type(field, 'ada@lerelais.fr');

    expect(field).toHaveValue('ada@lerelais.fr');
  });
});
