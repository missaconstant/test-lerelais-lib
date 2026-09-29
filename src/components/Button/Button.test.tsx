import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from './Button';

describe('<Button>', () => {
  it('should render its label', () => {
    render(<Button>Continuer</Button>);
    expect(screen.getByRole('button', { name: 'Continuer' })).toBeInTheDocument();
  });

  it('should call onClick when activated', async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();
    render(<Button onClick={onClick}>Continuer</Button>);

    await user.click(screen.getByRole('button', { name: 'Continuer' }));

    expect(onClick).toHaveBeenCalledOnce();
  });

  it('should not call onClick when disabled', async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();
    render(
      <Button disabled onClick={onClick}>
        Continuer
      </Button>,
    );

    await user.click(screen.getByRole('button', { name: 'Continuer' }));

    expect(onClick).not.toHaveBeenCalled();
  });
});
