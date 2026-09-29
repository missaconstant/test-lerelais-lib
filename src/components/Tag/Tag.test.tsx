import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Tag } from './Tag';

describe('<Tag>', () => {
  it('should render its label', () => {
    render(<Tag>Standard</Tag>);
    expect(screen.getByText('Standard')).toBeInTheDocument();
  });

  it('should call onRemove when the remove button is activated', async () => {
    const user = userEvent.setup();
    const onRemove = vi.fn();
    render(
      <Tag type="removable" onRemove={onRemove}>
        Filtre
      </Tag>,
    );

    await user.click(screen.getByRole('button', { name: 'Retirer Filtre' }));

    expect(onRemove).toHaveBeenCalledOnce();
  });
});
