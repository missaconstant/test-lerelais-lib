import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BottomNavItem } from './BottomNavItem';

describe('<BottomNavItem>', () => {
  it('should render the label', () => {
    render(<BottomNavItem label="Accueil" />);
    expect(screen.getByRole('button', { name: 'Accueil' })).toBeInTheDocument();
  });

  it('should call onClick when activated', async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();
    render(<BottomNavItem label="Accueil" onClick={onClick} />);

    await user.click(screen.getByRole('button', { name: 'Accueil' }));

    expect(onClick).toHaveBeenCalledOnce();
  });
});
