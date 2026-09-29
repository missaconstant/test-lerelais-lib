import { render, screen } from '@testing-library/react';
import { LinkButton } from './LinkButton';

describe('<LinkButton>', () => {
  it('should render a link', () => {
    render(<LinkButton href="/relais">Voir tous les relais partenaires</LinkButton>);
    expect(screen.getByRole('link', { name: /Voir tous les relais/ })).toHaveAttribute('href', '/relais');
  });
});
