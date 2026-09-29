import { render, screen } from '@testing-library/react';
import { Tooltip } from './Tooltip';

describe('<Tooltip>', () => {
  it('should render the trigger', () => {
    render(
      <Tooltip label="Tooltip text">
        <button type="button">Info</button>
      </Tooltip>,
    );
    expect(screen.getByRole('button', { name: 'Info' })).toBeInTheDocument();
  });

  it('should show the tooltip label', () => {
    render(
      <Tooltip label="Tooltip text">
        <button type="button">Info</button>
      </Tooltip>,
    );
    expect(screen.getByRole('tooltip')).toHaveTextContent('Tooltip text');
  });
});
