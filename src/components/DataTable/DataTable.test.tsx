import { render, screen } from '@testing-library/react';
import { DataTable } from './DataTable';

describe('<DataTable>', () => {
  it('should list the users', () => {
    render(<DataTable />);

    expect(screen.getByRole('heading', { name: 'Utilisateurs' })).toBeInTheDocument();
    expect(screen.getByRole('cell', { name: 'Awa Koné' })).toBeInTheDocument();
    expect(screen.getByRole('cell', { name: 'Suspendu' })).toBeInTheDocument();
  });
});
