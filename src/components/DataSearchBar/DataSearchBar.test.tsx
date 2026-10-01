import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { DataSearchBar } from './DataSearchBar';

describe('<DataSearchBar>', () => {
  it('should accept a search query', async () => {
    const user = userEvent.setup();
    render(<DataSearchBar aria-label="Recherche utilisateurs" />);

    const field = screen.getByRole('searchbox', { name: 'Recherche utilisateurs' });
    await user.type(field, 'Awa');

    expect(field).toHaveValue('Awa');
  });
});
