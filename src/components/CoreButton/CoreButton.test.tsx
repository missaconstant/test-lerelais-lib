import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { CoreButton } from './CoreButton';

describe('<CoreButton>', () => {
  it('should render its label', () => {
    render(<CoreButton>Se connecter</CoreButton>);
    expect(screen.getByRole('button', { name: 'Se connecter' })).toBeInTheDocument();
  });

  it('should call onClick when activated', async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();
    render(
      <CoreButton variant="icon" onClick={onClick}>
        Voir sur la carte
      </CoreButton>,
    );

    await user.click(screen.getByRole('button', { name: 'Voir sur la carte' }));

    expect(onClick).toHaveBeenCalledOnce();
  });
});
