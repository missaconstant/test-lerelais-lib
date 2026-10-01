import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { PhotoUpload } from './PhotoUpload';

describe('<PhotoUpload>', () => {
  it('should report the selected file', async () => {
    const user = userEvent.setup();
    const onSelect = vi.fn();
    render(<PhotoUpload onSelect={onSelect} />);

    const file = new File(['photo'], 'colis.png', { type: 'image/png' });
    await user.upload(screen.getByLabelText(/Prendre une photo ou importer/i), file);

    expect(onSelect).toHaveBeenCalledWith(file);
  });
});
