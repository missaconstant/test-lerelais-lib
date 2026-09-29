import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Sidebar } from './Sidebar';

describe('<Sidebar>', () => {
  it('should render the admin navigation', () => {
    render(<Sidebar />);
    expect(screen.getByRole('button', { name: 'Vue d’ensemble' })).toHaveAttribute('aria-current', 'page');
    expect(screen.getByText('Super Admin')).toBeInTheDocument();
  });

  it('should call onSelect when a section is activated', async () => {
    const user = userEvent.setup();
    const onSelect = vi.fn();
    render(<Sidebar onSelect={onSelect} />);

    await user.click(screen.getByRole('button', { name: 'Colis' }));

    expect(onSelect).toHaveBeenCalledWith('parcels');
  });
});
