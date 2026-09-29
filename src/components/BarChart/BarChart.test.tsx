import { render, screen } from '@testing-library/react';
import { BarChart } from './BarChart';

describe('<BarChart>', () => {
  it('should render the chart title and labels', () => {
    render(
      <BarChart
        title="Colis par jour"
        items={[
          { label: 'Lun', value: 60 },
          { label: 'Mar', value: 110 },
        ]}
      />,
    );
    expect(screen.getByText('Colis par jour')).toBeInTheDocument();
    expect(screen.getByText('Lun')).toBeInTheDocument();
  });
});
