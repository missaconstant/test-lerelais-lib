import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Accordion } from './Accordion';

describe('<Accordion>', () => {
  it('should render the title collapsed', () => {
    render(<Accordion title="Comment suivre mon colis LeRelais ?">Détail</Accordion>);
    expect(screen.getByRole('button', { name: /Comment suivre/ })).toHaveAttribute('aria-expanded', 'false');
    expect(screen.queryByText('Détail')).not.toBeInTheDocument();
  });

  it('should reveal the content when activated', async () => {
    const user = userEvent.setup();
    render(<Accordion title="Délais">Les délais varient de 24h à 72h.</Accordion>);

    await user.click(screen.getByRole('button', { name: 'Délais' }));

    expect(screen.getByText('Les délais varient de 24h à 72h.')).toBeInTheDocument();
  });
});
