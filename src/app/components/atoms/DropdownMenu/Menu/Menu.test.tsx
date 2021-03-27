import { render } from '@testing-library/react';
import Menu from './Menu';

describe('<Menu/>', () => {
  test('renders Menu component', () => {
    const { getByRole } = render(<Menu isOpen />);
    expect(getByRole('menu')).toBeInTheDocument();
  });
});
