import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { DropdownMenu } from './DropdownMenu';

describe('<DropdownMenu>', () => {
  it('should render the menu items', () => {
    render(<DropdownMenu />);
    expect(screen.getByRole('menuitem', { name: 'Mon profil' })).toBeInTheDocument();
    expect(screen.getByRole('menuitem', { name: 'Déconnexion' })).toBeInTheDocument();
  });

  it('should call onSelect with the item id', async () => {
    const user = userEvent.setup();
    const onSelect = vi.fn();
    render(<DropdownMenu onSelect={onSelect} />);

    await user.click(screen.getByRole('menuitem', { name: 'Paramètres' }));

    expect(onSelect).toHaveBeenCalledWith('settings');
  });
});
