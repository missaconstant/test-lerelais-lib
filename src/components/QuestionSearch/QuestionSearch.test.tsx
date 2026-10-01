import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { QuestionSearch } from './QuestionSearch';

describe('<QuestionSearch>', () => {
  it('should submit the typed query', async () => {
    const user = userEvent.setup();
    const onSubmit = vi.fn();
    render(<QuestionSearch onSubmit={onSubmit} />);

    await user.type(screen.getByPlaceholderText('Rechercher une question'), 'livraison{enter}');

    expect(onSubmit).toHaveBeenCalledWith('livraison');
  });
});
