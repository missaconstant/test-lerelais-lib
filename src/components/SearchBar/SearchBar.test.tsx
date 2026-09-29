import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { SearchBar } from './SearchBar';

describe('<SearchBar>', () => {
  it('should render the search field', () => {
    render(<SearchBar placeholder="Rechercher un colis, un relais…" />);
    expect(screen.getByRole('searchbox', { name: 'Recherche' })).toBeInTheDocument();
  });

  it('should update the query when the user types', async () => {
    const user = userEvent.setup();
    render(<SearchBar />);

    await user.type(screen.getByRole('searchbox'), 'Cocody');

    expect(screen.getByRole('searchbox')).toHaveValue('Cocody');
  });
});
