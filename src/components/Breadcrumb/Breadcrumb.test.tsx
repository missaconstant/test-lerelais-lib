import { render, screen } from '@testing-library/react';
import { Breadcrumb } from './Breadcrumb';

describe('<Breadcrumb>', () => {
  it('should render the current page', () => {
    render(
      <Breadcrumb
        items={[
          { label: 'Accueil', href: '/' },
          { label: 'Mes colis', href: '/colis' },
          { label: 'LR-2026-000123' },
        ]}
      />,
    );
    expect(screen.getByText('LR-2026-000123')).toHaveAttribute('aria-current', 'page');
  });

  it('should link the previous crumbs', () => {
    render(
      <Breadcrumb
        items={[
          { label: 'Accueil', href: '/' },
          { label: 'Mes colis' },
        ]}
      />,
    );
    expect(screen.getByRole('link', { name: 'Accueil' })).toHaveAttribute('href', '/');
  });
});
