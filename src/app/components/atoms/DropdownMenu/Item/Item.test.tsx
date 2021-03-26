import { render } from '@testing-library/react';
import Item from './Item';

describe('<Item/>', () => {
  test('renders Item component', () => {
    const { getByRole } = render(<Item />);
    expect(getByRole('menuitem')).toBeInTheDocument();
  });
});
