import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { SidebarNavItem } from './SidebarNavItem';

describe('<SidebarNavItem>', () => {
  it('should render the label', () => {
    render(<SidebarNavItem label="Tableau de bord" active />);
    expect(screen.getByRole('button', { name: 'Tableau de bord' })).toHaveAttribute('aria-current', 'page');
  });

  it('should call onClick when activated', async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();
    render(<SidebarNavItem label="Colis" onClick={onClick} />);

    await user.click(screen.getByRole('button', { name: 'Colis' }));

    expect(onClick).toHaveBeenCalledOnce();
  });
});
