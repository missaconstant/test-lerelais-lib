import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Select } from './Select';

const options = [
  { value: 'relay', label: 'Point relais' },
  { value: 'home', label: 'Domicile' },
];

describe('<Select>', () => {
  it('should render the label and the placeholder', () => {
    render(<Select label="Mode de livraison" options={options} />);
    expect(screen.getByLabelText('Mode de livraison')).toBeInTheDocument();
  });

  it('should update the selected option', async () => {
    const user = userEvent.setup();
    render(<Select label="Mode de livraison" options={options} />);

    await user.selectOptions(screen.getByLabelText('Mode de livraison'), 'relay');

    expect(screen.getByLabelText('Mode de livraison')).toHaveValue('relay');
  });
});
