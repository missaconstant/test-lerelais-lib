import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { CoreSelect } from './CoreSelect';

describe('<CoreSelect>', () => {
  it('should change the selected option', async () => {
    const user = userEvent.setup();
    render(
      <CoreSelect
        label="Ville"
        options={[
          { value: 'abidjan', label: 'Abidjan' },
          { value: 'bouake', label: 'Bouaké' },
        ]}
      />,
    );

    await user.selectOptions(screen.getByLabelText('Ville'), 'bouake');

    expect(screen.getByLabelText('Ville')).toHaveValue('bouake');
  });
});
