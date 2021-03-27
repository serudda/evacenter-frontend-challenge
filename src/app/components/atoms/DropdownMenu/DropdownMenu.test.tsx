import { render } from '@testing-library/react';
import DropdownMenu from './DropdownMenu';

describe('<DropdownMenu/>', () => {
  test('renders DropdownMenu component', () => {
    const { getByTestId } = render(<DropdownMenu />);
    expect(getByTestId('DropdownMenu')).toBeInTheDocument();
  });
});
